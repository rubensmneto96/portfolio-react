import { NavbarEn } from "../en/components/NavbarEn";
import { RubensEn } from "../en/components/RubensEn";
import { About } from "../en/components/About";
import { Skills } from "../en/components/Skills";
import { Contact } from "../en/components/Contact";
import { FooterEn } from "../en/components/FooterEn";

export function HomeEn() {
    return (
        <div className="min-h-dvh bg-gradient-to-r from-indigo-900 to-gray-900 text-foreground overflow-x-hidden">
        
                    <div id="homeDiv" className="opacity-0 animate-fade-in">
                        {/*Navbar*/}
                        <NavbarEn />
        
                        {/*Rubens*/}
                        <RubensEn />
        
                        {/* Sobre */}
                        <About />
        
                        {/* Habilidades */}
                        <Skills />
                        
                        {/* Contato */}
                        <Contact />
        
                        {/* Footer */}
                        <FooterEn />
                    </div>
                </div>
    );
};