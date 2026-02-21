import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Habilidades() {
    
    const habilidades = [
        
        //Backend
        {hab: "Python", level: "Proficiente", categoria: "backend"},
        {hab: "PostgresQL", level: "Avançado", categoria: "backend"},
        
        //Frontend
        {hab: "HTML/CSS", level: "Proficiente", categoria: "frontend"},
        {hab: "JavaScript", level: "Avançado", categoria: "frontend"},
        
        //Frameworks
        {hab: "Zope", level: "Proficiente", categoria: "frameworks"},
        {hab: "Flask", level: "Proficiente", categoria: "frameworks"},
        {hab: "ReactJS", level: "Avançado", categoria: "frameworks"},
        {hab: "TailwindCSS", level: "Avançado", categoria: "frameworks"},

        //Ferramentas, versionamento
        {hab: "Git/Github", level: "Proficiente", categoria: "ferramentas"},
        {hab: "Docker", level: "Proficiente", categoria: "ferramentas"},
        {hab: "Figma", level: "Avançado", categoria: "ferramentas"},

        //Linguas
        {hab: "Inglês", level: "Bilingue", categoria: "linguas"},
    ]

    const categorias = ["todas", "backend", "frontend", "frameworks", "ferramentas", "linguas"];

    const [activeCateg, setActiveCateg] = useState("todas");

    const filterHab = habilidades.filter(
        (habilidade) => activeCateg === "todas" || habilidade.categoria === activeCateg
    );

    return (
        <section id="habilidades" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Minhas <span className="text-primary">Habilidades</span>
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
                                    habili.level === "Proficiente" ? "text-sky-600" : "text-green-400",
                                    habili.level === "Avançado" ? "text-red-400" : "",
                                    habili.level === "Bilingue" ? "text-amber-500" : "")}>{habili.level}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}