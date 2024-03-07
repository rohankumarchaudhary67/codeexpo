import Link from "next/link"

export default function Registration_Form() {
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
                            <label className="text-white dark:text-gray-200" htmlFor="password">College Name</label>
                            <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">College Year</label>
                            <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">Branch Name</label>
                            <input id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I read all the <a href="/" className="underline font-semibold">Terms & Conditions</a> and <a href="/" className="underline font-semibold">Privacy Policy</a>.</label>
                        </div>
                    </div>

                    <div className="flex justify-end mt-10 md:mt-6">
                        <div className="relative inline-flex w-full md:w-auto group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <Link href={"/apply-for-project"} title="Get quote now"
                                className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-3 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">Register Now
                            </Link>
                        </div>
                    </div>
                </form>

                <section>
                    <div>
                        <div className="pt-14 md:px-2 rounded">
                            <h2 className="font-bold text-2xl">Instructions</h2>
                            <ul className="list-disc mt-4 list-inside text-gray-300 md:pl-4 px-2 text-sm md:text-lg">
                                <li>CodeExpo is open to developers and contributors of all skill levels and backgrounds.</li>
                                <li>Developers and contributors are welcome to explore and contribute to any showcased projects during CodeExpo.</li>
                                <li>Participants may contribute individually or as part of a team, as specified by the participating companies.</li>
                                <li>Treat fellow developers, contributors, and representatives of participating companies with respect and professionalism.</li>
                                <li>Discrimination, harassment, or any form of inappropriate behavior will not be tolerated.</li>
                                <li>Respect the intellectual property rights of participating companies. Any contributions made during CodeExpo should comply with the project's specified terms.</li>
                                <li>Abide by a high standard of ethical conduct, including honesty and integrity in all interactions.</li>
                                <li>Refrain from engaging in any activities that may compromise the security or integrity of CodeExpo or its participants.</li>
                            </ul>
                            <p className="px-2 md:pl-2 pt-4 text-gray-500">By participating in CodeExpo, developers and contributors agree to adhere to these rules and regulations. Failure to comply may result in expulsion from the event.</p>
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">For any inquiries, please contact &ldquo;team@codeexpo.in&ldquo;.</p>
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">Best of luck with your application!</p>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}