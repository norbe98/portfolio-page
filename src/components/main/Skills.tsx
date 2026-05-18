import { SKILLS } from "../../utilts/utils";

export default function Skills() {
    return (
        <>
        <h3 className="text-white font-bold uppercase tracking-widest mb-8">Technologies I use</h3>
        <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
            <span 
            className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border
                ${skill.type === 'core' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' 
                    : 'bg-slate-800/50 border-slate-700 text-slate-400'}
                    hover:border-indigo-400 hover:text-white transition-all duration-300`}
                    key={skill.name}>
            {skill.name}
            </span>
        ))}
        </div>
        </>
    )
}