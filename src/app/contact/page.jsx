import Link from "next/link";
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="px-5 md:px-10 lg:px-20 py-16 bg-gray-50">

            {/* heading */}
            <div className="text-center mb-16">

                <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                    Contact Me
                </h2>

                <div className="w-32 md:w-40 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

                <p className="text-gray-600 mt-6 text-base md:text-lg">
                    Feel free to contact me for collaboration or freelance work.
                </p>

            </div>

            {/* content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* left side */}
                <div className="space-y-8">

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-cyan-900 mb-4">
                            Get In Touch
                        </h3>

                        <p className="text-gray-700 leading-7 md:leading-8">
                            I am available for freelance projects, remote jobs
                            and collaboration opportunities.
                        </p>
                    </div>

                    <div className="space-y-3">

                        <p className="text-base md:text-lg text-gray-700">
                            Email: faridiqubal34fx@gmail.com
                        </p>

                        <p className="text-base md:text-lg text-gray-700">
                            Location: Bogura, Bangladesh
                        </p>

                    </div>

                    {/* social */}
                    <div className="flex flex-wrap gap-4">

                        <Link href="https://www.facebook.com/" target="_blank"
                            className="bg-cyan-900 text-white px-5 py-3 rounded-xl hover:bg-cyan-950 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaFacebookSquare /> Facebook
                        </Link>

                        <Link href="https://github.com/" target="_blank"
                            className="bg-cyan-900 text-white px-5 py-3 rounded-xl hover:bg-cyan-950 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaGithub /> GitHub
                        </Link>

                        <Link href="https://www.linkedin.com/feed/" target="_blank"
                            className="bg-cyan-900 text-white px-5 py-3 rounded-xl hover:bg-cyan-950 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaLinkedinIn /> LinkedIn
                        </Link>

                    </div>
                </div>

                {/* right side form */}
                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl">

                    <form className="space-y-6">

                        <div>
                            <label className="block mb-2 text-base md:text-lg font-medium text-gray-700">
                                Your Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-cyan-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-base md:text-lg font-medium text-gray-700">
                                Your Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-cyan-600"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-base md:text-lg font-medium text-gray-700">
                                Message
                            </label>

                            <textarea
                                rows={5}
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-xl px-4 md:px-5 py-3 md:py-4 outline-none focus:border-cyan-600"
                            />
                        </div>

                        <button
                            className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl cursor-pointer w-full md:w-auto"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;