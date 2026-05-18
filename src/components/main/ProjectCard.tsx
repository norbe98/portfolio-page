import { SiGithub } from "react-icons/si";

export default function ProjectCard() {
    
    return (
        <>
        <a href="https://inventio-finance-dashboard.netlify.app/" target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 transition-all hover:bg-slate-800/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-32 h-20 bg-slate-800 rounded border border-slate-700 overflow-hidden">
                <img src={"/inventio.png"} />
                <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 italic">Preview image</div>
            </div>
            <div className="flex-1">
                <h4 className="text-white font-semibold flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                Inventory & Sales Tracker 
                <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </h4>
                <p className="text-sm mt-2 text-slate-400">
                Inventio is a frontend inventory management dashboard where you can 
                track products, record buy/sell transactions, and monitor your business 
                performance through real-time KPI calculations and interactive charts.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                {['React 18', 'TypeScript', 'Tailwind', 'Recharts', 'Sonner', 'date-fns'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            <a href="https://github.com/norbe98/smart-finance-dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1"><SiGithub title="GitHub" /></a>
            </div>
        </a>

        <a href="https://movie-appx.netlify.app/" target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 transition-all hover:bg-slate-800/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-32 h-20 bg-slate-800 rounded border border-slate-700 overflow-hidden">
                <img src={"/cineview.png"} />
                <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 italic">Preview image</div>
            </div>
            <div className="flex-1">
                <h4 className="text-white font-semibold flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                Movie App 
                <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </h4>
                <p className="text-sm mt-2 text-slate-400">
                CineView is a premium movie discovery platform featuring smooth Framer Motion animations. 
                The app showcases popular titles and provides category-based random recommendations, 
                while allowing users to build a personalized watchlist saved directly to local storage.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                {['React 18', 'TypeScript', 'Tailwind', 'Framer Motion'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            <a href="https://github.com/norbe98/movie-app-react" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1"><SiGithub title="GitHub" /></a>
            </div>
        </a>

        <a href="https://unique-pudding-8d4ca0.netlify.app/" target="_blank" rel="noopener noreferrer" className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 transition-all hover:bg-slate-800/50 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-32 h-20 bg-slate-800 rounded border border-slate-700 overflow-hidden">
                <img src={"/quizzly.png"} />
                <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 italic">Preview image</div>
            </div>
            <div className="flex-1">
                <h4 className="text-white font-semibold flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                Quiz App 
                <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </h4>
                <p className="text-sm mt-2 text-slate-400">
                Quizzly is a dynamic trivia application that fetches real-time challenges from an external API. 
                It features difficulty-based question filtering, an instant scoring system, 
                and a persistent result tracking feature to monitor progress over time.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                {['React 18', 'TypeScript', 'Tailwind'].map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
            <a href="https://github.com/norbe98/react-ts-quiz-pro" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1"><SiGithub title="GitHub" /></a>
            </div>
        </a>
        </>
    )
}