import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-20 bg-white">

            {/* heading */}
            <div className="text-center mb-16">

                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    My Projects
                </h2>

                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            </div>

            <div className="flex flex-col gap-12">

                {/* PROJECT CARD */}
                {[
                    {
                        title: "Qurbani Hat",
                        desc: "An online Qurbani marketplace where users can browse animals, authenticate securely and manage bookings.",
                        img: "/assets/project1.jpeg",
                        live: "https://batch-13-assignment-eight.vercel.app/",
                        github: "https://github.com/Farid-256/Batch-13-Assignment-eight"
                    },
                    {
                        title: "Digi-Tools-Platform",
                        desc: "A modern e-commerce web application with responsive design.",
                        img: "/assets/project2.jpeg",
                        live: "https://wonderful-bienenstitch-f87c74.netlify.app/",
                        github: "https://github.com/Farid-256/Digi-Tools-Platform"
                    },
                    {
                        title: "KeenKeeper",
                        desc: "A modern platform for organizing and maintaining valuable personal relationships.",
                        img: "/assets/project3.jpeg",
                        live: "https://warm-dieffenbachia-c078a2.netlify.app/",
                        github: "https://github.com/Farid-256/Batch-13-Assignment-seven"
                    }
                ].map((project, index) => (

                    <div key={index} className="flex flex-col lg:flex-row items-center gap-8 bg-cyan-950 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300 p-2">

                        {/* image */}
                        <Image src={project.img} height={300} width={600} alt="project" className="w-full lg:w-xl h-auto object-cover rounded-2xl"/>

                        {/* content */}
                        <div className="p-8 space-y-5">

                            <h3 className="text-3xl text-white font-bold">
                                {project.title}
                            </h3>

                            <p className="text-gray-300">
                                {project.desc}
                            </p>

                            {/* stack */}
                            <div className="flex flex-wrap gap-3">

                                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                                    React / Next.js
                                </span>

                                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                                    Tailwind CSS
                                </span>

                                <span className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                                    Backend
                                </span>

                            </div>

                            {/* buttons */}
                            <div className="flex flex-wrap gap-4">

                                <Link href={project.live} target="_blank" className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-xl">
                                    Live Demo
                                </Link>

                                <Link href={project.github} target="_blank"
                                    className="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-3 rounded-xl">
                                    GitHub
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </section>
    );
};

export default Projects;