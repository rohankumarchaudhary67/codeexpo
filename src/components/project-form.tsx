import Link from "next/link"

export default function Project_Form() {
    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-black md:mt-6">
                <form>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="username">Full Name</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">Phone Number</label>
                            <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Alternate Phone Number</label>
                            <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Project Name</label>
                            <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Project Details</label>
                            <textarea id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">The Problem it solves</label>
                            <textarea id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Challenges we ran into it</label>
                            <textarea id="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Project Link / GitHub Repo Link</label>
                            <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Your GitHub username</label>
                            <input id="passwordConfirmation" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-10 md:mt-6">
                        <div className="relative inline-flex w-full md:w-auto group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Link href={"/apply-for-project"} title="Get quote now"
                                className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-3 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">Submit Project
                            </Link>
                        </div>
                    </div>
                </form>
                <section>
                <div>
                <div className="pt-14 md:px-2 rounded">
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

                </div>
            </section>
            </section>
        </>
    )
}
