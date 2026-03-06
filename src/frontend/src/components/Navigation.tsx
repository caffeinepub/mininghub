import { miningHubPlan } from "@/content/mininghubPlan";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Calculator,
  FileText,
  Home,
  Languages,
  LogIn,
  Menu,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";

const LOGIN_URL = "https://referral-invest-net.emergent.host";

export function Navigation() {
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: t.home, icon: Home },
    { path: "/ranks", label: t.rankSystem, icon: Trophy },
    { path: "/pdf", label: t.pdfGenerator, icon: FileText },
    { path: "/calculator", label: t.calculator, icon: Calculator },
    { path: "/education", label: t.education, icon: BookOpen },
  ];

  const handleLogin = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <header className="border-b border-blue-500/60 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90 backdrop-blur-md sticky top-0 z-50 shadow-md shadow-blue-900/40">
      {/* Pulse glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-blue" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <TrendingUp className="h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-base font-bold text-rainbow">
              {miningHubPlan.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-ocid="nav.link"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/40 border border-blue-400/60"
                      : "hover:bg-blue-800/40 text-blue-200/70 hover:text-blue-200"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  <span
                    className={`text-sm font-medium whitespace-nowrap ${isActive ? "text-white" : ""}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              data-ocid="nav.toggle"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg ml-1 border border-blue-400/60 hover:border-blue-400 transition-all duration-300 hover:bg-blue-800/40"
              title={language === "hi" ? "Switch to English" : "हिंदी में बदलें"}
            >
              <Languages className="h-3.5 w-3.5 text-blue-400" />
              <span
                className={`text-xs font-bold ${language === "hi" ? "text-blue-400" : "text-blue-200/50"}`}
              >
                HI
              </span>
              <span className="text-xs text-blue-200/50">/</span>
              <span
                className={`text-xs font-bold ${language === "en" ? "text-blue-400" : "text-blue-200/50"}`}
              >
                EN
              </span>
            </button>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              data-ocid="nav.primary_button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg ml-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md shadow-blue-500/40 hover:scale-105 hover:shadow-blue-400/60 transition-all duration-300"
            >
              <LogIn className="h-3.5 w-3.5" />
              <span className="text-sm font-semibold">{t.login}</span>
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-1.5">
            {/* Mobile Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              data-ocid="nav.toggle"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-blue-400/60 hover:border-blue-400 transition-all duration-300 hover:bg-blue-800/40"
              title={language === "hi" ? "Switch to English" : "हिंदी में बदलें"}
            >
              <Languages className="h-3.5 w-3.5 text-blue-400" />
              <span
                className={`text-xs font-bold ${language === "hi" ? "text-blue-400" : "text-blue-200/50"}`}
              >
                HI
              </span>
              <span className="text-xs text-blue-200/50">/</span>
              <span
                className={`text-xs font-bold ${language === "en" ? "text-blue-400" : "text-blue-200/50"}`}
              >
                EN
              </span>
            </button>

            {/* Hamburger/Close Toggle */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-1.5 hover:bg-blue-800/40 rounded-lg transition-colors text-blue-200"
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation — collapsible */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 pt-1 space-y-1 border-t border-blue-700/40 mt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  data-ocid="nav.link"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/40 border border-blue-400/60"
                      : "hover:bg-blue-800/40 text-blue-200/70 hover:text-blue-200"
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <span
                    className={`text-sm font-medium ${isActive ? "text-white" : ""}`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Mobile Login Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogin();
              }}
              data-ocid="nav.primary_button"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              <LogIn className="h-4 w-4" />
              <span className="text-sm font-medium">{t.login}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
