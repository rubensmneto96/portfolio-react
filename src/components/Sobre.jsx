import { CodeXml, MessageSquareCode, NotebookIcon } from "lucide-react";
import GithubLogo from "/github.svg";


export function Sobre() {
    return (
        <section id="sobre" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Desenvolvedor aficionado tanto pelo <span className="text-primary">Back-end</span> quanto pelo <span className="text-primary">Front-end</span>  </h3>

                        <p className="text-muted-foreground">
                            Com experiência em criar e implementar soluções para serviços e aplicações Web,
                            acredito que além da importância do bom funcionamento e segurança de um sistema, é essencial
                            termos uma interface limpa, responsiva e de fácil utilização para o usuário.
                        </p>

                        <p className="text-muted-foreground">
                            Gosto muito de aprender novas tecnologias, soluções e métodos para facilitar e melhorar meu trabalho, 
                            além de me manter atualizado sobre o mercado e suas exigências.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <div className="button flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contato">Entre em contato</a>
                            </div>
                            
                            <div className="button bg-zinc-700 flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="https://github.com/rubensmneto96" >Meu Github</a>
                                <img width="32" height="32" src={GithubLogo} alt="Meu Github" />
                            </div>

                            {/* <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Veja meu CV</a> */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeXml className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Desenvolvimento Web Fullstack</h4>
                                    <p className="text-muted-foreground">
                                        Criação de sistemas e banco de dados com a utilização de frameworks,
                                        implementação e correção de funcionalidades.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MessageSquareCode className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Suporte ao usuário</h4>
                                    <p className="text-muted-foreground">
                                        Auxílio ao usuário para entendimento de sistemas e novas funcionalidades, assim como a resolução de problemas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <NotebookIcon className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Gerenciamento de projetos</h4>
                                    <p className="text-muted-foreground">
                                        Trabalho de projetos com metodologias Agile, como SCRUM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}