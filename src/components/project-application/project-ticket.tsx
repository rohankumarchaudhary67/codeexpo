interface ProjectTicketProps {
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
    }
}

const Project_Ticket: React.FC<ProjectTicketProps> = ({ projectApplicationData }) => {
    return (
        <>
            <div className="bg-black py-4 sm:py-6 lg:py-10">
                <div className="mx-auto max-w-screen-md px-4 md:px-8">
                    <h2 className="text-center text-xl font-semibold text-white sm:text-2xl">{projectApplicationData.fullName}</h2>
                    <h2 className="mb-2 text-center text-md text-gray-200 sm:text-xl md:mb-4">({projectApplicationData.email})</h2>

                    <h1 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl md:mb-6">Project: {projectApplicationData.projectName}</h1>

                    <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">{projectApplicationData.projectDetails}</blockquote>

                    <h2 className="mb-1 text-xl font-semibold text-white sm:text-2xl md:mb-2">Problem It Solve</h2>

                    <p className="text-gray-500 sm:text-lg md:mb-4">{projectApplicationData.problemItSolve}</p>

                    <h2 className="mb-1 text-xl font-semibold text-white sm:text-2xl md:mb-2">Challenges We Ran Into It</h2>

                    <p className="text-gray-500 sm:text-lg">{projectApplicationData.challengesWeRanIntoIt}</p>
                </div>
            </div>
        </>
    )
}

export default Project_Ticket;