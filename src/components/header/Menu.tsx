import { scrollToSection } from "../../utilts/utils";

export default function Menu() {

    return (
        <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white italic">SN.</h1>
            <div className="mt-8">
            <h2 className="text-4xl font-bold text-slate-100">Szőke Norbert</h2>
            <p className="text-indigo-400 font-medium text-lg mt-2 uppercase tracking-widest">Junior Frontend Developer</p>
            </div>
            
            <nav className="mt-20 hidden lg:block">
            <div className="flex flex-col gap-6">
                {['about-me', 'skills', 'education', 'projects'].map(id => (
                <button className="w-fit text-sm font-bold uppercase tracking-[0.2em] hover:text-indigo-400 transition-all duration-300"
                    key={id}
                    onClick={() => scrollToSection(id)}>
                    {id.replace('-', ' ')}
                </button>
                ))}
            </div>
            </nav>

        </div>
    )
}