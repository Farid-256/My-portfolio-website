import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-cyan-950 px-5 md:px-10 lg:px-20 py-16 mt-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                <div className="space-y-5">

                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        M. Farid <span className="text-orange-500">Iqbal</span>
                    </h2>

                    <p className="text-gray-300 leading-7 md:leading-8">
                        Passionate MERN Stack Developer focused on building
                        modern, responsive and user-friendly web applications.
                    </p>

                </div>


                <div className="space-y-5">

                    <h3 className="text-xl md:text-2xl font-bold text-white">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-gray-300">

                        <Link className="hover:text-orange-400 transition" href='/'>
                            Home
                        </Link>

                        <Link className="hover:text-orange-400 transition" href='/aboutMe'>
                            About
                        </Link>

                        <Link className="hover:text-orange-400 transition" href='/skills'>
                            Skills
                        </Link>

                        <Link className="hover:text-orange-400 transition" href='/projects'>
                            Projects
                        </Link>

                        <Link className="hover:text-orange-400 transition" href='/contact'>
                            Contact
                        </Link>

                    </div>

                </div>


                <div className="space-y-5">

                    <h3 className="text-xl md:text-2xl font-bold text-white">
                        Contact
                    </h3>

                    <div className="space-y-3 text-gray-300">

                        <p>Email: faridiqubal34fx@gmail.com</p>

                        <p>WhatsApp: +88 01992-811801</p>

                        <p>Location: Bogura, Bangladesh</p>

                    </div>

                </div>

            </div>


            <div className="border-t border-gray-700 mt-12 pt-8 text-center">

                <span className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
                    <FaRegCopyright /> 2026 M. Farid Iqbal. All Rights Reserved.
                </span>

            </div>

        </footer>
    );
};

export default Footer;