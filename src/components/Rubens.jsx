import { ArrowDown } from 'lucide-react';
import fotoPerfil from '/foto_perfil.jpg';
import fotoAnimated from '/foto_animated.gif'

export function Rubens () {

	function imgChange() {
		const img = document.getElementById('foto_perfil').classList;
		const imgAnim = document.getElementById('foto_animated').classList;

		if (!(imgAnim.contains('fade-in-img') && img.contains('fade-out-img'))) {
			imgAnim.add('fade-out-img');
			img.add('fade-in-img');
			
			setTimeout(() => {
				imgAnim.toggle('fade-in-img');
				imgAnim.toggle('fade-out-img');
				img.toggle('fade-in-img');
				img.toggle('fade-out-img');
			}, 2000)
		}

		setInterval(() => {
				imgAnim.toggle('fade-in-img');
				imgAnim.toggle('fade-out-img');
				img.toggle('fade-in-img');
				img.toggle('fade-out-img');
		}, 3900)
	}

	return (
		<section 
			className="relative min-h-screen flex flex-col items-center justify-center px-4"
		>

			<div className="container max-w-6xl mx-auto text-center z-10 px-4">
				<div ref={imgChange} id="foto" className="opacity-0 animate-fade-in flex flex-col p-2 items-center md:object-top relative">
					<img id="foto_perfil" src={fotoPerfil} className="rounded-full py-1 size-auto absolute"></img>
					<img id="foto_animated" src={fotoAnimated} className="rounded-full py-1 size-auto"></img>
				</div>

				<div className="space-y-6 p-2">
					<div className="opacity-0 animate-fade-in-delay-1 flex flex-col justify-center space-y-6">
					 	<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
					 		<span>
					 			Meu nome é
					 			{" "} 
					 		</span>
					 		<span className="text-primary ml-2">
					 			Rubens Mreis Neto
					 			{" "}
					 		</span>
						</h1>

						<p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto">
							Analista Desenvolvedor de Sistemas e Analista de Segurança da Informação.
						</p>

						<div className="pt-4 opacity-0 animate-fade-in-delay-4">
							<a href="#sobre" className="button">
								Saiba mais
							</a>
						</div>
					</div>
				</div>
			</div>

			<div id="arrowScroll" className="opacity-0 animate-fade-in absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
				<ArrowDown className="h-5 w-5 text-primary w-8 h-8"/>
			</div>
		</section>
	)
}