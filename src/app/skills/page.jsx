import Image from "next/image";

const skills = [
    { name: "HTML", icon: "/assets/Html.jpg" },
    { name: "CSS", icon: "/assets/css3.jpg" },
    { name: "Tailwind", icon: "/assets/Tailwind.jpg" },
    { name: "JavaScript", icon: "/assets/JavaScript.jpg" },
    { name: "TypeScript", icon: "/assets/type.jpg" },
    { name: "React", icon: "/assets/React logo.jpg" },
    { name: "Next.js", icon: "/assets/Next.jpg" },
    { name: "Node.js", icon: "/assets/Node.jpg" },
    { name: "Express", icon: "/assets/ExpressJS.jpg" },
    { name: "MongoDB", icon: "/assets/MongoDb.jpg" },
    { name: "Git", icon: "/assets/Git.jpg" },
    { name: "GitHub", icon: "/assets/GitHub.jpg" },
    { name: "Figma", icon: "/assets/Figma.jpg" },
];

const SkillsPage = () => {
    return (
        <section className="py-16 px-5 md:px-10 lg:px-20">

            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    Skills
                </h2>
                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center gap-3 group"
                    >
                        {/* Circular Badge */}
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={60}
                                height={60}
                                className="object-contain w-10 h-10 md:w-12 md:h-12"
                            />
                        </div>

                        {/* Label */}
                        <h3 className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-medium">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default SkillsPage;