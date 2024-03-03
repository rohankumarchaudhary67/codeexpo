import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Top area: Blocks */}
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        {/* 1st block */}
                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">
                                {/* Logo */}
                                <div className='flex'>
                                    <Link href="/" className="flex justify-center items-center text-3xl font-semibold" aria-label="Cruip">
                                        <img src="./logo/logo-favicon.png" className="h-12" alt="" />
                                        <img src="./logo/logo-text.png" className="h-12 pl-2" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="text-gray-400">Code Expo is an India's First Code Expo for beginners to unlock new opportunities in the tech world.</div>
                        </div>

                        {/* 2nd, 3rd and 4th blocks */}
                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                            {/* 2nd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Teams</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Technical</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Management</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Social Media</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sponsorship</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 3rd block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Documentations</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Terms of Services</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Refund Policy</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQs</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* 4th block */}
                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">About Us</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Overview</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Events</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Teams</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Sponsors</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* Bottom area */}
                    <div className="md:flex md:items-center md:justify-between">

                        {/* Social links */}
                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <Link href="https://twitter.com/code_expo" target='_blank' className="flex justify-center items-center text-[#3fc1c9] bg-gray-800 hover:text-black hover:bg-[#04abcb] rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.instagram.com/codeexpo/" target='_blank' className="flex justify-center items-center text-[#3fc1c9] bg-gray-800 hover:text-black hover:bg-[#04abcb] rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20.145" cy="11.892" r="1" />
                                        <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                                        <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                                    </svg>
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="https://www.linkedin.com/company/code-expo/" target='_blank' className="flex justify-center items-center text-[#3fc1c9] bg-gray-800 hover:text-black hover:bg-[#04abcb] rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>

                        {/* Copyrights note */}
                        <div className="text-gray-400 text-sm mr-4">&copy;codeexpo.in. All rights reserved.</div>

                    </div>

                </div>
            </div>
        </footer>
    )
}