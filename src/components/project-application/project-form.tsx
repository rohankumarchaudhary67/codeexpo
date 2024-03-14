import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ProjectFormProps {
    projectApplicationData: {
        fullName: string,
        email: string,
        phoneNumber: string,
        alternatePhoneNumber: string,
        projectName: string,
        projectDetails: string,
        problemItSolve: string,
        challengesWeRanIntoIt: string,
        projectLink: string,
        githubUsername: string
    };
    setProjectApplicationData: React.Dispatch<React.SetStateAction<{
        fullName: string,
        email: string,
        phoneNumber: string,
        alternatePhoneNumber: string,
        projectName: string,
        projectDetails: string,
        problemItSolve: string,
        challengesWeRanIntoIt: string,
        projectLink: string,
        githubUsername: string
    }>>;
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    setProjectSubmission: React.Dispatch<React.SetStateAction<boolean>>;
}

const Project_Form: React.FC<ProjectFormProps> = ({ projectApplicationData, setProjectApplicationData, error, setError, setProgress, setProjectSubmission }) => {

    const applyNowBtn = async () => {
        if (projectApplicationData.fullName === "") {
            setError('emptyName');
            return;
        }

        if (projectApplicationData.email === "") {
            setError('emptyEmail')
            return;
        }

        if (projectApplicationData.phoneNumber === "") {
            setError("emptyPhoneNumber")
            return;
        }

        if (projectApplicationData.projectName === "") {
            setError("emptyProjectName")
            return;
        }

        if (projectApplicationData.projectDetails === "") {
            setError("emptyProjectDetails")
            return;
        }

        try {
            setProgress(30);
            const response = await axios.post("/api/project-application", projectApplicationData);
            setProgress(90);
            if (response.data.reason === "emailExists") {
                setError("emailExists")
            } else if (response.data.reason === "phoneExists") {
                setError("phoneExists")
            }
            if (response.data.success) {
                setProjectSubmission(true);
            }
            setProgress(100);
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    return (
        <>

            <ToastContainer />
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-black md:mt-6">
                <div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="fullName">Full Name</label>
                            <input id="fullName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.fullName} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, fullName: e.target.value })}  />
                            {error=="emptyName" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Please enter your name</p> : <p></p>}
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.email} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, email: e.target.value })}  />
                            {error=="emptyEmail" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Please enter your email</p> : <p></p>}
                            {error=="emailExists" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Already registered with this email</p> : <p></p>}
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="phoneNumber">Phone Number</label>
                            <input id="phoneNumber" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.phoneNumber} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, phoneNumber: e.target.value })} />
                            {error=="emptyPhoneNumber" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Please enter your phone number</p> : <p></p>}
                            {error=="phoneExists" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Already registered with this phone number</p> : <p></p>}
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="alternatePhoneNumber">Alternate Phone Number</label>
                            <input id="alternatePhoneNumber" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.alternatePhoneNumber} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, alternatePhoneNumber: e.target.value })} />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="projectName">Project Name</label>
                            <input id="projectName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.projectName} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, projectName: e.target.value })} />
                            {error=="emptyProjectName" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Please enter your project name</p> : <p></p>}
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="projectDetails">Project Details</label>
                            <textarea id="projectDetails" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.projectDetails} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, projectDetails: e.target.value })}></textarea>
                            {error=="emptyProjectDetails" ? <p className='text-red-600 text-sm pl-1 pt-1'>*Please enter your project details</p> : <p></p>}
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="problemItSolve">The Problem it solves</label>
                            <textarea id="problemItSolve" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.problemItSolve} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, problemItSolve: e.target.value })}></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="challengesWeRanIntoIt">Challenges we ran into it</label>
                            <textarea id="challengesWeRanIntoIt" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.challengesWeRanIntoIt} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, challengesWeRanIntoIt: e.target.value })}></textarea>
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="projectLink">Project Link / GitHub Repo Link</label>
                            <input id="projectLink" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.projectLink} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, projectLink: e.target.value })} />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="githubUsername">Your GitHub username</label>
                            <input id="githubUsername" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" value={projectApplicationData.githubUsername} onChange={(e) => setProjectApplicationData({ ...projectApplicationData, githubUsername: e.target.value })} />
                        </div>
                    </div>

                    <div className="flex justify-end mt-10 md:mt-6">
                        <div className="relative inline-flex w-full md:w-auto group">
                            <div
                                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#3fc1c9] via-[#67ced4] to-[#2f9fa6] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <button title="Get quote now"
                                className="w-full md:w-auto relative inline-flex items-center justify-center px-8 py-3 text-lg text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button"
                                onClick={applyNowBtn}>Submit Project
                            </button>
                        </div>
                    </div>
                </div>
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
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">For any inquiries, please contact &ldquo;team@codeexpo.in&ldquo;.</p>
                            <p className="px-2 md:pl-2 pt-2 text-gray-500">Best of luck with your application!</p>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}

export default Project_Form;
