import Link from "next/link"

export default function Project_Form() {
    return (
        <>
            <div className="py-6 md:p-10 md:mx-20 md:px-20 flex flex-col justify-center items-center">
                <h1 className="mb-8 font-extrabold text-4xl" data-aos="fade-up">Apply for Project</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <section data-aos="fade-rght">
                        <section className="md:mx-20 mx-6 text-center md:mt-6">
                            <div className="mb-5">
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                            </div>
                            <div className="mb-5">
                                <input placeholder="E-mail Id" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <input placeholder="Phone Number" type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <input placeholder="Project Name" type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <textarea placeholder="Project Details" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <input placeholder="Project Link / GitHub Repo Link" type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <input placeholder="Your GitHub username" type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="relative inline-flex w-full md:w-auto group mt-4">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                </div>
                                <Link href="https://discord.gg/CXHWBCHs" target='_blank' title="Get quote now"
                                    className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-3 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button">Apply Now
                                </Link>
                            </div>
                        </section>
                    </section>
                    <aside className="" data-aos="fade-left">
                        <div className="px-2 md:px-2 rounded">
                            <h2 className="font-bold text-2xl">Instructions</h2>
                            <ul className="list-disc mt-4 list-inside text-gray-300 md:pl-4 px-2 text-sm md:text-lg">
                                <li>Ensure that your project aligns with the themes or categories specified for CodeExpo.</li>
                                <li>Complete the online application form available on our website.</li>
                                <li>Provide accurate and detailed information about your project, including its purpose, technology stack, and any unique features.</li>
                                <li>Our review committee will evaluate all applications based on creativity, innovation, technical merit, and potential for contribution.</li>
                                <li>Shortlisted project will be notified via email.</li>
                                <li>Successful applicants will be allocated space for their project display at CodeExpo.</li>
                                <li>Be prepared to engage with event attendees interested in your project.</li>
                                <li>Take advantage of networking opportunities with other exhibitors and event participants.</li>
                            </ul>
                            <p className="px-2 md:pl-2 pt-4 text-gray-500">Thank you for considering Code Expo as a platform to showcase your project. We look forward to reviewing your application and having you as a valuable participant in our exhibition.</p>
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">For any inquiries, please contact &ldquo;team.codeexpo@gmail.com&ldquo;.</p>
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">Best of luck with your application!</p>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
