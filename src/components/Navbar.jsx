'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

    const nameFirst = '<M. Farid'
    const nameLast = 'Iqbal/>'

    const pathName = usePathname()

    return (
        <nav className="px-5 md:px-10 lg:px-20 py-5 md:py-8 bg-amber-50">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                {/* logo */}
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 text-center lg:text-left">

                        {nameFirst}

                        <span className="text-orange-500">
                            {nameLast}
                        </span>

                    </h2>
                </div>

                {/* nav links */}
                <div className="flex flex-wrap justify-center gap-5 md:gap-10">

                    <Link
                        className={
                            pathName === '/'
                                ? 'text-lg md:text-xl text-cyan-500 border-b-4 border-blue-500 pb-1'
                                : 'text-lg md:text-xl text-cyan-500'
                        }
                        href='/'
                    >
                        Home
                    </Link>

                    <Link
                        className={
                            pathName === '/aboutMe'
                                ? 'text-lg md:text-xl text-cyan-500 border-b-4 border-blue-500 pb-1'
                                : 'text-lg md:text-xl text-cyan-500'
                        }
                        href='/aboutMe'
                    >
                        About
                    </Link>

                    <Link
                        className={
                            pathName === '/skills'
                                ? 'text-lg md:text-xl text-cyan-500 border-b-4 border-blue-500 pb-1'
                                : 'text-lg md:text-xl text-cyan-500'
                        }
                        href='/skills'
                    >
                        Skills
                    </Link>

                    <Link
                        className={
                            pathName === '/projects'
                                ? 'text-lg md:text-xl text-cyan-500 border-b-4 border-blue-500 pb-1'
                                : 'text-lg md:text-xl text-cyan-500'
                        }
                        href='/projects'
                    >
                        Projects
                    </Link>

                    <Link
                        className={
                            pathName === '/contact'
                                ? 'text-lg md:text-xl text-cyan-500 border-b-4 border-blue-500 pb-1'
                                : 'text-lg md:text-xl text-cyan-500'
                        }
                        href='/contact'
                    >
                        Contact
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar