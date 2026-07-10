import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 md:gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link>
          <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Disclaimer</Link>
        </div>
        <p className="text-[11px] text-slate-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} <span className="font-bold">AllJobAssam Pro</span>. Designed by Premium Devs.
        </p>
      </div>
    </footer>
  );
}
