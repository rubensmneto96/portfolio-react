import { AtSign, Phone } from "lucide-react";

export function Contato(){
    return (
        <section id="contato" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Meus <span className="text-primary">Contatos</span>
                </h2>

                <div className="bg-neutral-300 p-6 rounded-lg card-hover">
                    <div className="flex flex-wrap justify-center text-center">
                        <div className="container flex flex-wrap justify-center">
                            <AtSign className="h-8 w-8 text-stone-800 font-bold"/>
                            <a href="mailto:rubensmn96@gmail.com" className="text-lg md:text-lg text-stone-800 font-bold px-2">
                                rubensmn96@gmail.com
                            </a>
                        </div>
                        <div className="w-lg border-1 border-t-slate-800 mt-2 mb-4"></div>
                        <div className="container flex flex-wrap justify-center">
                            <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/whatsapp.svg" />
                            <span className="text-xl font-bold text-stone-800 px-1"> / </span>
                            <Phone className="h-8 w-8 text-stone-800 font-bold"/>
                            <a href="https://api.whatsapp.com/send?phone=5519996748131" className="text-lg md:text-lg text-stone-800 font-bold px-2">
                                +55 (19) 9 9674-8131
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}