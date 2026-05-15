import { FaLaptop } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { FaLink } from "react-icons/fa6";




const Services = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-20 bg-gray-50">

            {/* heading */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-blue-600">
                    My Services
                </h2>

                <div className="w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

         
                <div className="bg-cyan-900 p-8 rounded-2xl text-center space-y-5 hover:scale-105 transition-all duration-300 shadow-xl">

                    <div className="text-6xl flex items-center justify-center text-white">
                        <FaLaptop />

                    </div>

                    <h3 className="text-2xl text-white font-bold">
                        Frontend Development
                    </h3>

                    <p className="text-gray-300">
                        Building modern, responsive and interactive user interfaces using React and Next.js.
                    </p>
                </div>

         
                <div className="bg-cyan-900 p-8 rounded-2xl text-center space-y-5 hover:scale-105 transition-all duration-300 shadow-xl">

                    <div className="text-6xl text-white flex items-center justify-center">
                       <FaMobile />
                    </div>

                    <h3 className="text-2xl text-white font-bold">
                        Responsive Design
                    </h3>

                    <p className="text-gray-300">
                        Creating mobile-friendly and fully responsive websites for all devices.
                    </p>
                </div>


                <div className="bg-cyan-900 p-8 rounded-2xl text-center space-y-5 hover:scale-105 transition-all duration-300 shadow-xl">

                    <div className="text-6xl flex items-center justify-center text-white">
                       <FaLink />
                    </div>

                    <h3 className="text-2xl text-white font-bold">
                        API Integration
                    </h3>

                    <p className="text-gray-300">
                        Connecting frontend applications with APIs and handling dynamic data efficiently.
                    </p>
                </div>

      
                <div className="bg-cyan-900 p-8 rounded-2xl text-center space-y-5 hover:scale-105 transition-all duration-300 shadow-xl">

                    <div className="text-6xl flex items-center justify-center text-white">
                        <IoIosRocket />

                    </div>

                    <h3 className="text-2xl text-white font-bold">
                        MERN Stack Development
                    </h3>

                    <p className="text-gray-300">
                        Developing complete web applications using MERN stack technologies.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Services