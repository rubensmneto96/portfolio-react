import { NavbarEn } from "../components/en/NavbarEn";
import { RubensEn } from "../components/en/RubensEn";
import { About } from "../components/en/About";
import { Skills } from "../components/en/Skills";
import { Contact } from "../components/en/Contact";
import { FooterEn } from "../components/en/FooterEn";

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