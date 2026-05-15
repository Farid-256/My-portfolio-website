import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-16 bg-white">

            {/* heading */}
            <div className="text-center mb-16">

                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    About Me
                </h2>

                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            </div>

            {/* content */}
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* image */}
                <div className="flex justify-center">

                    <Image
                        src='/assets/aboutMe.png'
                        height={600}
                        width={500}
                        alt="about"
                        className="w-[280px] md:w-[400px] lg:w-[500px] h-auto"
                    />

                </div>

                {/* text */}
                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-8 text-center lg:text-left">

                    <p>
                        Hello! I am <span className="font-bold text-cyan-600">M. Farid Iqbal</span>,
                        a passionate MERN Stack Developer who loves building modern,
                        responsive and user-friendly web applications.
                    </p>

                    <p>
                        Currently, I am learning advanced web development with React.js,
                        Next.js, Express.js, MongoDB and TypeScript. I enjoy creating
                        clean UI designs and solving real-world problems through code.
                    </p>

                    <p>
                        I love building projects like e-commerce platforms, dashboard systems
                        and modern web interfaces that provide smooth user experiences.
                    </p>

                    <p>
                        My future goal is to become a professional full stack developer
                        and build impactful digital products for people around the world.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default AboutMe;