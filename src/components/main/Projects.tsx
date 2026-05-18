import ProjectCard from "./ProjectCard";

export default function Projects() {

    return (
        <>
        <h3 className="text-white font-bold uppercase tracking-widest mb-8">Projects</h3>   
        <div className="flex flex-col gap-6">
            <ProjectCard />
        </div>
        </>
    )
}