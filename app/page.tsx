"use client";

import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { jobs, trending } from "@/lib/dummy-data";
import { Search, MapPin, Briefcase, Calendar, ChevronRight, Clock, Star, Flame, Trophy, CheckCircle, TrendingUp, BookOpen, GraduationCap, Building } from "lucide-react";

const JobCard = ({ job, colorClass = "bg-slate-50 dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 border-slate-100 dark:border-slate-700" }: { job: any, colorClass?: string }) => (
  <div className={`p-4 rounded-2xl border transition-all duration-300 group flex flex-col justify-between ${colorClass}`}>
    <div>
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold px-2 py-0.5 rounded-full uppercase">{job.category}</span>
        {(job.isNew || job.isHot) && (
          <div className="flex gap-1 ml-2 flex-shrink-0">
            {job.isNew && <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-100 text-green-700 uppercase animate-pulse">NEW</span>}
            {job.isHot && <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-100 text-red-700 uppercase flex items-center gap-1"><Flame className="w-2.5 h-2.5"/> HOT</span>}
          </div>
        )}
      </div>
      <h3 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 line-clamp-2 leading-tight mb-3">
        {job.title}
      </h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="block text-[9px] text-slate-500 uppercase font-semibold mb-0.5">Vacancies</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs flex items-center gap-1"><Briefcase className="w-3 h-3 text-blue-500"/> {job.vacancies}</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-100 dark:border-slate-800">
          <span className="block text-[9px] text-slate-500 uppercase font-semibold mb-0.5">Qualification</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs flex items-center gap-1 line-clamp-1"><GraduationCap className="w-3 h-3 text-blue-500"/> {job.qualification}</span>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between mt-1 text-[11px] font-medium text-slate-500 dark:text-slate-400">
      <span className="flex items-center gap-1.5">Last Date: <span className="text-red-500 dark:text-red-400 font-bold">{job.lastDate}</span></span>
      <button className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-lg font-bold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
        Apply
      </button>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1: Hero Banner */}
      <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 lg:py-16 overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="white" fill="transparent" strokeWidth="2"/></svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Find Your Dream Career in Assam
          </h2>
          <p className="text-blue-100 text-sm md:text-base mb-8">
            Search 25,480+ Active Vacancies, Results, and Admit Cards
          </p>

          {/* Search Box */}
          <div className="flex flex-col md:flex-row gap-2 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mx-auto max-w-2xl">
            <input 
              type="text" 
              placeholder="Job Title, Department..." 
              className="flex-1 bg-transparent border-none text-white placeholder-blue-200 px-4 py-3 focus:ring-0 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg whitespace-nowrap">
              Search Now
            </button>
          </div>

          {/* Trending Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
            <span className="opacity-70 flex items-center mr-2">Trending:</span>
            {["Grade III", "Assam Police", "APSC CCE", "Grade IV"].map((tag, i) => (
              <a key={i} href="#" className="bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition-colors text-white">
                {tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* SECTION 2: Today's Important Jobs */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="text-blue-600 italic font-black">★</span> Today&apos;s Important Jobs
                </h3>
                <button className="text-blue-600 dark:text-blue-400 text-xs font-bold">View All →</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} colorClass="bg-slate-50 dark:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-700 border-slate-100 dark:border-slate-700" />
                ))}
              </div>
            </section>

            {/* SECTION 3: Closing Today (Red Zone) */}
            <section className="bg-red-50 dark:bg-red-950/20 rounded-3xl p-5 shadow-sm border border-red-100 dark:border-red-900/50 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <h3 className="font-bold text-red-700 dark:text-red-400">Closing Today</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[jobs[1], jobs[2]].map((job, idx) => (
                  <JobCard key={idx} job={job} colorClass="bg-white dark:bg-slate-900 border-red-200 dark:border-red-800 shadow-sm" />
                ))}
              </div>
            </section>

            {/* SECTION 6: Latest Government Jobs */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="text-green-600 italic font-black">★</span> Latest Government Jobs
                </h3>
              </div>
              <div className="overflow-hidden">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {jobs.map((job, i) => (
                    <div key={i} className="py-3 group flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                      <div className="flex-1">
                        <Link href="#" className="font-bold text-sm text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </Link>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-[11px] text-slate-500 font-medium">
                          <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">{job.organization}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3 text-blue-500" /> {job.vacancies} Posts</span>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2">
                        <span className="text-[11px] font-bold text-red-500">Last Date: {job.lastDate}</span>
                        <button className="bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 px-3 py-1 rounded-lg text-xs font-bold transition-colors shrink-0">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 mt-2 text-center border-t border-slate-100 dark:border-slate-800">
                  <Link href="#" className="text-blue-600 dark:text-blue-400 font-bold hover:underline text-xs">
                    Load More Govt Jobs...
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 18: Trending Jobs */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                  <span className="text-amber-500 italic font-black">★</span> Trending Now
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {trending.map((trend, i) => (
                  <div key={trend.id} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-3 rounded-2xl flex items-center gap-3 hover:border-blue-300 transition-all group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 font-black text-sm flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-slate-800 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">{trend.title}</h4>
                      <div className="flex items-center gap-1 mt-0.5 text-[10px] font-semibold text-slate-500">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {trend.views} Searches
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10 & 11: Admit Cards & Results Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Admit Cards */}
              <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-slate-800 dark:text-white">Admit Cards</h3>
                  <span className="bg-orange-100 text-orange-600 text-[10px] px-2 py-0.5 rounded font-bold">NEW</span>
                </div>
                <ul className="space-y-3">
                  {[1,2,3,4].map((_, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center shrink-0">
                        <span className="text-[8px] font-bold text-slate-400 uppercase">Oct</span>
                        <span className="text-xs font-black dark:text-white">28</span>
                      </div>
                      <div>
                        <Link href="#" className="text-[11px] font-bold leading-tight mb-0.5 block hover:text-blue-600 dark:text-white dark:hover:text-blue-400">DHS Assam Admit Card (Grade III)</Link>
                        <p className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">Download Link Active</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-5 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">Browse All Admit Cards</button>
              </section>

              {/* Results */}
              <section className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                <h3 className="font-bold text-slate-800 dark:text-white mb-4">Latest Results</h3>
                <div className="space-y-3">
                  {[1,2,3,4].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-8 h-8 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">✓</div>
                      <div>
                        <Link href="#" className="text-[11px] font-bold group-hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors block">Assam TET Result 2026</Link>
                        <p className="text-[10px] text-slate-400">Published on 24 Oct</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Sidebar />
          </div>

        </div>
      </div>
    </div>
  );
}
