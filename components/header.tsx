"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Search, Bell, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import LinkComponent from "next/link"; // correct import

export function Header() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-[#1E3A8A] text-white py-1.5 px-6 flex justify-between items-center text-xs font-medium">
        <div className="flex items-center gap-4">
          <span className="bg-red-500 px-2 py-0.5 rounded animate-pulse">Breaking</span>
          <span className="truncate hidden sm:inline">Assam Direct Recruitment 2026 Grade III & IV Notification Out for 12,500 Posts!</span>
          <span className="truncate sm:hidden">ADRE 2026 Notification Out!</span>
        </div>
        <div className="hidden md:flex gap-4">
          <span className="text-red-200">Closing Today: APSC CCE (432 Posts)</span>
          <span className="text-orange-200">Tomorrow: Assam Police SI</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <LinkComponent href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AJ
              </div>
              <h1 className="text-2xl font-black text-[#1E3A8A] dark:text-white tracking-tight italic">
                AllJobAssam<span className="text-orange-500 font-bold not-italic">.Pro</span>
              </h1>
            </LinkComponent>
          </div>

          {/* Mega Menu / Navigation (Desktop) */}
          <nav className="hidden md:flex gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300 ml-8">
            <LinkComponent href="#" className="text-[#1E3A8A] dark:text-blue-400">Govt Jobs</LinkComponent>
            <LinkComponent href="#" className="hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors">Result</LinkComponent>
            <LinkComponent href="#" className="hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors">Admit Card</LinkComponent>
            <LinkComponent href="#" className="hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors">Admission</LinkComponent>
            <LinkComponent href="#" className="hover:text-[#1E3A8A] dark:hover:text-blue-400 transition-colors">Schemes</LinkComponent>
          </nav>

          <div className="flex-1"></div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                placeholder="Search Jobs..." 
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 px-4 text-sm w-48 focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
              />
            </div>
            
            <button className="hidden sm:flex bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold items-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-100 dark:shadow-none">
              Join WhatsApp
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Govt Jobs", "Result", "Admit Card", "Admission", "Schemes"].map((item, i) => (
              <LinkComponent key={i} href="#" className="bg-slate-50 dark:bg-slate-800 p-2 rounded text-sm font-medium text-slate-700 dark:text-slate-300 text-center border border-slate-100 dark:border-slate-700">
                {item}
              </LinkComponent>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
