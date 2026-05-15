import Image from "next/image";

const SkillsPage = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-16 bg-white">


            <div className="text-center mb-16">

                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    My Skills
                </h2>

                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            </div>

  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/Html.jpg' height={80} width={80} alt="html" />
                    <h3 className="text-gray-300 text-xl mt-3">HTML5</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/css3.jpg' height={80} width={80} alt="css" />
                    <h3 className="text-gray-300 text-xl mt-3">CSS3</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/Tailwind.jpg' height={80} width={80} alt="tailwind" />
                    <h3 className="text-gray-300 text-xl mt-3">Tailwind CSS</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/JavaScript.jpg' height={80} width={80} alt="js" />
                    <h3 className="text-gray-300 text-xl mt-3">JavaScript</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/React logo.jpg' height={80} width={80} alt="react" />
                    <h3 className="text-gray-300 text-xl mt-3">React</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/Next.jpg' height={80} width={80} alt="next" />
                    <h3 className="text-gray-300 text-xl mt-3">Next.js</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/ExpressJS.jpg' height={80} width={80} alt="express" />
                    <h3 className="text-gray-300 text-xl mt-3">Express.js</h3>

                </div>

                <div className="flex flex-col items-center justify-center bg-cyan-900 rounded-2xl p-6 hover:bg-cyan-950 transition-all duration-300 hover:scale-105">

                    <Image src='/assets/type.jpg' height={80} width={80} alt="ts" />
                    <h3 className="text-gray-300 text-xl mt-3">TypeScript</h3>

                </div>

            </div>
        </section>
    );
};

export default SkillsPage;