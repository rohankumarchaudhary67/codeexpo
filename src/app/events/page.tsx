export default function events() {
    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20 border-t border-gray-800">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
                            <h1 className="h2 mb-4 bg-clip-text text-transparent text-white flex justify-center items-center"><img src="./logo/logo-text.png" className="h-12" alt="" /></h1>
                            <p className="text-xl text-gray-400"><span className='font-bold text-[#67ced4]'>Our Events:</span> Projects Expo, Tech Talks & Mentorships...</p>
                        </div>

                        {/* Items */}
                        <div className="grid gap-20">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/images/features-03-image-01.png"} width={440} height={365} alt="Features 01" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div className="font-architects-daughter text-xl text-[#2f9fa6] mb-2 flex">Code Expo presents</div>
                                        <h3 className="h3 mb-3">Projects Exhibition for Beginners</h3>
                                        <p className="md:text-xl text-gray-400 mb-4">Code Expo showcase real-time projects in various tech stacks, including Web Dev, Android Dev, AI/ML, and more.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>50+ Projects in different Tech Stacks</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>500+ Contributor involved in projects</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>1500+ Viewer of the projects</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/images/features-03-image-02.png"} width={540} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <div className="font-architects-daughter text-xl text-[#2f9fa6] mb-2">Code Expo presents</div>
                                        <h3 className="h3 mb-3">Tech Talks for Beginners</h3>
                                        <p className="md:text-xl text-gray-400 mb-4">Some of the tech experts give some tech talks for beginners which help to decide that which fields or tech stack is better to start something new.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>2+ Tech Talks with Experts</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>4+ hours talk in different fields</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>Every Day tech talk through out event</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={"/images/features-03-image-03.png"} width={540} height={405} alt="Features 03" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <div className="font-architects-daughter text-xl text-[#2f9fa6] mb-2">Code Expo presents</div>
                                        <h3 className="h3 mb-3">Mentorship Programs</h3>
                                        <p className="md:text-xl text-gray-400 mb-4">CodeExpo provide some mentorships program for the some developers who took participate in Code Expo event.</p>
                                        <ul className="text-lg text-gray-400 -mb-2">
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>1-1 Mentors Interaction</span>
                                            </li>
                                            <li className="flex items-center mb-2">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>Guidance to choose field</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <span>Personal Meet with Mentors</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}