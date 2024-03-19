import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
    return (
        <header className="absolute w-full z-30 header-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link href="/" className="flex justify-center items-center text-2xl md:text-3xl font-semibold" aria-label="Cruip">
                            <img src="./logo/logo-favicon.png" className="h-8 md:h-12" alt="" />
                            <img src="./logo/logo-text.png" className="h-8 md:h-12 pl-2" alt="" />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <Link
                                    href="/events"
                                    className="font-medium text-white hover:text-[#2f9fa6] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tickets"
                                    className="font-medium text-white hover:text-[#2f9fa6] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Tickets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="font-medium text-white hover:text-[#2f9fa6] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <div className="relative inline-flex group">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt ml-3">
                                    </div>
                                    <Link href={"/registration"} title="Get quote now"
                                        className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ml-3"
                                        role="button">Register
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu />

                </div>
            </div>
        </header>
    )
}