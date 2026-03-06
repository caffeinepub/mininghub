import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";
import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full space-y-6 animate-fade-in">
            <Alert variant="destructive" className="border-2">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="text-xl font-bold">
                Something went wrong / कुछ गड़बड़ हो गई
              </AlertTitle>
              <AlertDescription className="mt-4 space-y-4">
                <p className="text-base">
                  ऐप में एक त्रुटि आई है। कृपया पेज को रिफ्रेश करें या होम पेज पर वापस जाएं।
                </p>
                <p className="text-sm opacity-90">
                  The application encountered an error. Please refresh the page
                  or return to the home page.
                </p>

                {this.state.error && (
                  <details className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <summary className="cursor-pointer font-semibold text-sm mb-2">
                      Technical Details (for debugging)
                    </summary>
                    <pre className="text-xs overflow-auto max-h-40 mt-2 p-2 bg-background/50 rounded">
                      {this.state.error.toString()}
                      {this.state.errorInfo && (
                        <>
                          {"\n\n"}
                          {this.state.errorInfo.componentStack}
                        </>
                      )}
                    </pre>
                  </details>
                )}

                <div className="flex gap-3 pt-4">
                  <Button onClick={this.handleReset} className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Go to Home / होम पर जाएं
                  </Button>
                  <Button
                    onClick={() => window.location.reload()}
                    variant="outline"
                    className="gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Reload Page / रिफ्रेश करें
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
