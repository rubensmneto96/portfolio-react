import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js'; // Library que da efeito de digitacao
import { Menu, X } from "lucide-react";

const itensNav = [
	{name: "Home", href:"/en"},
	{name: "About Me", href:"#about"},
	{name: "Skills", href:"#skills"},
	{name: "Contact", href:"#contact"},
];


export function NavbarEn() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const logo = useRef(null);

	useEffect(() => {
		const scrollHandle = () => {
			setScrolled(window.screenY > 10);
		}

		window.addEventListener("scroll", scrollHandle);
		return () => window.removeEventListener("scroll", scrollHandle);
	}, []);

	useEffect(() => {
	    var typedLogo = new Typed(logo.current, {
	      strings: [">RMN"],
	      typeSpeed: 70,
	      showCursor: false,
	    });

	    return () => {
	      typedLogo.destroy();
	    };
	  }, []);

	return (
		<nav className={cn(
			"fixed w-full z-40 transition-all duration-300",
			scrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
			)}
		>
			<div className="container flex items-center justify-between">
				<a className="text-xl font-bold text-primary flex items-center" href="#about">
					<span className="relative z-10">
						<span ref={logo} className="logo text-glow"></span>
					</span>
				</a>

				{/*Desktop Navbar*/}
				<div className="hidden flex md:flex space-x-8">
					{itensNav.map((item, key) => (
						<a key={key} href={item.href} className="text-foreground/80 hover:text-primary-href transition-colors duration-300">
							{item.name}
						</a>
					))}
					<div id="language" className="px-10">
						<span className="font-semibold text-lg cursor-pointer px-4">
							<a href="/">PT-BR</a>
						</span>
						<span className="font-semibold text-lg text-primary cursor-pointer"><a href="/en">EN</a></span>
					</div>
				</div>

				{/*Mobile Navbar*/}

				<button
		          onClick={() => setMenuOpen((prev) => !prev)}
		          className="md:hidden p-2 text-foreground z-50"
		          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
		        >
		          {menuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
		        </button>

		        <div
		          className={cn(
		            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
		            "transition-all duration-300 md:hidden",
		            menuOpen
		              ? "opacity-100 pointer-events-auto"
		              : "opacity-0 pointer-events-none"
		          )}
		        >
					<div id="language" className="px-10 py-8">
						<span className="text-xl cursor-pointer px-4"> 
							<a href="/">PT-BR</a>
						</span>
						<span className="text-xl cursor-pointer text-primary"><a href="en"></a>EN</span>
					</div>

					<div className="flex flex-col space-y-8 text-xl">
						{itensNav.map((item, key) => (
							<a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}
