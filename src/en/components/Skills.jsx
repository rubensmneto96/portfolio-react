import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Skills() {
    
    const habilidades = [
        
        //Backend
        {hab: "Python", level: "Proficient", categoria: "backend"},
        {hab: "PostgresQL", level: "Advanced", categoria: "backend"},
        
        //Frontend
        {hab: "HTML/CSS", level: "Proficient", categoria: "frontend"},
        {hab: "JavaScript", level: "Advanced", categoria: "frontend"},
        
        //Frameworks
        {hab: "Zope", level: "Proficient", categoria: "frameworks"},
        {hab: "Flask", level: "Proficient", categoria: "frameworks"},
        {hab: "ReactJS", level: "Advanced", categoria: "frameworks"},
        {hab: "TailwindCSS", level: "Advanced", categoria: "frameworks"},

        //Ferramentas, versionamento
        {hab: "Git/Github", level: "Proficient", categoria: "tools"},
        {hab: "Docker", level: "Proficient", categoria: "tools"},
        {hab: "Figma", level: "Advanced", categoria: "tools"},

        //Linguas
        {hab: "English", level: "Bilingual", categoria: "languages"},
    ]

    const categorias = ["all", "backend", "frontend", "frameworks", "tools", "languages"];

    const [activeCateg, setActiveCateg] = useState("all");

    const filterHab = habilidades.filter(
        (habilidade) => activeCateg === "all" || habilidade.categoria === activeCateg
    );

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categorias.map((categoria, key) => (
                        <button key={key}
                                onClick={() => setActiveCateg(categoria)}
                                className={cn(
                                    "px-5 py-1 rounded-full transition-colors duration-300 capitalize",
                                    activeCateg === categoria ? "bg-primary text-muted-foreground" : "bg-slate-600/70 text-foreground hover:bg-slate-100"
                                    )}
                                >
                            {categoria}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {filterHab.map((habili, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-center mb-4">
                                <h3 className="font-bold text-lg">{habili.hab}</h3>
                            </div>
                            <div className="w-full border-1 border-t-slate-400"></div>
                            <div className="text-center mt-4">
                                <h3 className={cn(
                                    "font-semibold text-md",
                                    habili.level === "Proficient" ? "text-sky-600" : "text-green-400",
                                    habili.level === "Advanced" ? "text-red-400" : "",
                                    habili.level === "Bilingual" ? "text-amber-500" : "")}>{habili.level}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}