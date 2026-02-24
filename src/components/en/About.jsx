import { CodeXml, MessageSquareCode, NotebookIcon } from "lucide-react";
import GithubLogo from "/github.svg";


export function About() {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">A developer who is an aficionado for both <span className="text-primary">Back-end</span> and <span className="text-primary">Front-end</span>  </h3>

                        <p className="text-muted-foreground">
                            Experienced on creating and implementing solutions for Web services and applications, I strongly believe that 
                            good systems have good functionality, stability, security, as well as clean interface, responsive design and ease of utilization for users.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate to learn about new technologies, solutions and methods to better my work and my skills, and also to
                            keep myself updated on the market and its demands.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <div className="button flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact">Get in touch</a>
                            </div>
                            
                            <div className="button bg-zinc-700 flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="https://github.com/rubensmneto96" >My Github</a>
                                <img width="32" height="32" src={GithubLogo} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeXml className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Fullstack Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Systems and database creation using frameworks, implementation and correction of funcionalities.
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
                                    <h4 className="font-semibold text-lg">User support</h4>
                                    <p className="text-muted-foreground">
                                        User support for better understanding of systems and new functionalitites, as well as problems resolutions.
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
                                    <h4 className="font-semibold text-lg">Project management</h4>
                                    <p className="text-muted-foreground">
                                        Work on projects using Agile methodos, like SCRUM.
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