import { Skeleton } from "@/components/ui/skeleton";
import { ImageOff } from "lucide-react";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  fallbackColor?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackSrc,
  fallbackColor = "bg-gradient-to-br from-primary/20 to-accent/20",
}: ImageWithFallbackProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (!hasError && fallbackSrc) {
      setHasError(true);
    } else {
      setHasError(true);
      setFallbackError(true);
    }
  };

  if (hasError && fallbackError) {
    return (
      <div
        className={`${className} ${fallbackColor} flex items-center justify-center`}
      >
        <div className="text-center p-8">
          <ImageOff className="h-12 w-12 mx-auto mb-2 text-muted-foreground/50" />
          <p className="text-sm text-muted-foreground">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Skeleton className={className} />}
      <img
        src={hasError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${isLoading ? "hidden" : ""}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </>
  );
}
