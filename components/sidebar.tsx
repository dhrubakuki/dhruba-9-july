import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { jobs } from "@/lib/dummy-data";

export function Sidebar() {
  return (
    <aside className="space-y-5 sticky top-24">
      {/* Join Community Widget */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-center">Join Community</h3>
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group hover:bg-blue-600 dark:hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.282-.346-.094L7.33 13.91 4.544 13.06c-.613-.195-.625-.615.127-.91l10.94-4.22c.504-.183.948.113.805.901z"/></svg>
            </div>
            <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 group-hover:text-white">Telegram</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-1.5 p-3 bg-green-50 dark:bg-green-900/20 rounded-2xl group hover:bg-green-500 transition-all">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 group-hover:text-white">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Latest Jobs Widget */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-800">
        <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-center">Latest Updates</h3>
        <div className="space-y-4">
          {jobs.slice(0, 5).map((job) => (
            <div key={job.id} className="group flex gap-3 pb-3 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
              <div className="flex-1">
                <Link href="#" className="font-bold text-xs text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 leading-tight">
                  {job.title}
                </Link>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{job.category}</span>
                  {job.isNew && <span className="text-[8px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-center">NEW</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
          View All Updates
        </button>
      </div>

      {/* AdSense Placeholder */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl h-[250px] flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700">
        <span className="text-slate-400 font-medium text-xs font-bold uppercase tracking-widest">Ad Space</span>
      </div>
    </aside>
  );
}
