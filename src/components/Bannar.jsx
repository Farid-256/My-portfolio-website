import Image from "next/image";
import Link from "next/link";

const Bannar = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-10 lg:py-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-16 bg-gray-50">

            {/* left side */}
            <div className="space-y-6 text-center lg:text-left">

                <h3 className="text-2xl md:text-3xl text-green-500">
                    Hello I am
                </h3>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-500 leading-tight">
                    MERN Stack Developer
                </h2>

                <div className="space-y-3">

                    <p className="text-green-500 text-base md:text-lg">
                        Building fantastic web experience with clean code and modern design
                    </p>

                    <p className="text-green-500 text-base md:text-lg">
                        Creating modern, responsive and user friendly application
                    </p>
                </div>

                {/* buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5">

                    <Link href='/skills'>
                        <button className="px-6 py-3 bg-blue-800 text-white rounded-xl cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                            View Skills
                        </button>
                    </Link>

                    <Link href='/contact'>
                        <button className="px-6 py-3 bg-blue-800 text-white rounded-xl cursor-pointer hover:bg-blue-600 transition-all duration-300 hover:scale-105">
                            Contact Me
                        </button>
                    </Link>

                </div>
            </div>

            {/* right side image */}
            <div className="border-4 border-amber-400 bg-green-50 rounded-full shadow-2xl">

                <Image className="p-3 md:p-5 rounded-full w-72 md:w-80 lg:w-lg h-auto"
                    src='/assets/me2.jpeg' height={500} width={500} alt="img"
                />

            </div>
        </section>
    );
};

export default Bannar;