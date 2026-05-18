export default function Education() {
    
    return (
        <>
        <h3 className="text-white font-bold uppercase tracking-widest mb-8">Education & Training</h3> 
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                2025.09 — 2026.03
            </header>
            
            <div className="z-10 sm:col-span-6">
                <h4 className="font-medium leading-snug text-slate-200">
                Frontend Web Development · Codecool
                </h4>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                A practice-oriented program where I mastered the fundamentals of modern web development, 
                collaborative teamwork, and creative problem-solving. 
                This is where I built a solid foundation in React and TypeScript.
                </p>
            </div>
        </div>
        </>
    )
}