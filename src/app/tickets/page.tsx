import Link from "next/link"

export default function Tickets() {
    return (
        <>
            <div className="md:px-24 md:py-16 md:pt-36 pt-12">
                <section className="text-white body-font md:px-24 pt-12 md:pt-0">
                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="md:h-96 h-" alt="hero" src="/images/ticket-img.png" />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-6 flex flex-col md:items-end md:text-left items-center text-center">
                            <h1 className="title-font w-full sm:text-4xl text-3xl mb-4 font-medium text-center md:text-start text-white">Get Your Ticket Now</h1>
                            <p className="mb-8 leading-relaxed text-gray-200">Get your ticket for CodeExpo now! Join the innovation celebration or download your digital pass for this extraordinary event.</p>
                            <div className="flex w-full md:flex-row flex-col justify-start items-center">
                                <div className="w-full">
                                    <input id="password" type="text" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Enter your email" />
                                    <p className="text-sm mt-2 text-gray-400 w-full">Not Registered? <Link href={"/registration"} className="text-blue-400 underline">Register Now</Link></p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="relative inline-flex w-full md:w-auto group md:ml-2 mt-4">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <button className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-3 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Get Ticket
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}