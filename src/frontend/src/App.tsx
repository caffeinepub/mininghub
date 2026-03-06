import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Navigation } from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { MiningCalculatorPage } from "@/pages/MiningCalculatorPage";
import { MiningEducationPage } from "@/pages/MiningEducationPage";
import { MiningHubPdfGeneratorPage } from "@/pages/MiningHubPdfGeneratorPage";
import { RankSystemPage } from "@/pages/RankSystemPage";
import { WelcomePortalPage } from "@/pages/WelcomePortalPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

function Layout() {
  return (
    <div
      className="min-h-screen text-foreground relative overflow-hidden"
      style={{ background: "#050a18" }}
    >
      {/* Blue pulse orbs - deep cosmic atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Orb 1 - top-left */}
        <div
          className="animate-blue-pulse-orb absolute rounded-full"
          style={{
            top: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, #1e40af 0%, #1d4ed8 30%, transparent 70%)",
            filter: "blur(60px)",
            animationDelay: "0s",
          }}
        />
        {/* Orb 2 - center-right */}
        <div
          className="animate-blue-pulse-orb absolute rounded-full"
          style={{
            top: "30%",
            right: "-8%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, #3b82f6 0%, #1e40af 35%, transparent 70%)",
            filter: "blur(80px)",
            animationDelay: "1.5s",
          }}
        />
        {/* Orb 3 - bottom-center */}
        <div
          className="animate-blue-pulse-orb absolute rounded-full"
          style={{
            bottom: "-15%",
            left: "35%",
            width: "550px",
            height: "550px",
            background:
              "radial-gradient(circle, #60a5fa 0%, #3b82f6 25%, #1d4ed8 50%, transparent 70%)",
            filter: "blur(70px)",
            animationDelay: "3s",
          }}
        />
        {/* Orb 4 - top-right accent */}
        <div
          className="animate-blue-pulse-orb absolute rounded-full"
          style={{
            top: "5%",
            right: "20%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, #93c5fd 0%, #60a5fa 30%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "0.8s",
          }}
        />
        {/* Orb 5 - bottom-left subtle */}
        <div
          className="animate-blue-pulse-orb absolute rounded-full"
          style={{
            bottom: "10%",
            left: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, #1e3a8a 0%, #1d4ed8 40%, transparent 70%)",
            filter: "blur(65px)",
            animationDelay: "2.2s",
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <ErrorBoundary>
      <WelcomePortalPage />
    </ErrorBoundary>
  ),
});

const pdfRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pdf",
  component: () => (
    <ErrorBoundary>
      <MiningHubPdfGeneratorPage />
    </ErrorBoundary>
  ),
});

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calculator",
  component: () => (
    <ErrorBoundary>
      <MiningCalculatorPage />
    </ErrorBoundary>
  ),
});

const educationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/education",
  component: () => (
    <ErrorBoundary>
      <MiningEducationPage />
    </ErrorBoundary>
  ),
});

const ranksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ranks",
  component: () => (
    <ErrorBoundary>
      <RankSystemPage />
    </ErrorBoundary>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  pdfRoute,
  calculatorRoute,
  educationRoute,
  ranksRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
