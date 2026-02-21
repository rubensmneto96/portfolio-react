import { Navbar } from "../components/Navbar";
import { Rubens } from "../components/Rubens";
import { Sobre } from "../components/Sobre";
import { Habilidades } from "../components/Habilidades";
import { Contato } from "../components/Contato";
import { Footer } from "../components/Footer";

export function Home() {

	return (

		<div className="min-h-dvh bg-gradient-to-r from-indigo-900 to-gray-900 text-foreground overflow-x-hidden">

			<div id="homeDiv" className="opacity-0 animate-fade-in">
				{/*Navbar*/}
				<Navbar />

				{/*Rubens*/}
				<Rubens />

				{/* Sobre */}
				<Sobre />

				{/* Habilidades */}
				<Habilidades />
				
				{/* Contato */}
				<Contato />

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};
