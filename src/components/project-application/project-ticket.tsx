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
            <div className="flex flex-col items-center justify-center">
                <div className="bg-black opacity-80 inset-0 z-0"></div>
                <div className="flex flex-col">
                    <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                        <div className="flex-none sm:flex">
                            <div className="flex-auto justify-evenly md:w-96">
                                <div className="flex items-center justify-center">
                                    <h1 className="text-black font-bold text-2xl">Project Pass</h1>
                                </div>
                                <div className="border-dashed border-black border-b-2 my-5">
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2"></div>
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2"></div>
                                </div>
                                <div className="flex flex-col text-black">
                                    <div className="pr-16 md:pr-24">
                                        <h1 className="text-sm pl-2">Project Host</h1>
                                        <h1 className="font-bold text-3xl pl-2">{projectApplicationData.fullName}</h1>
                                        <h1 className="text-lg pl-2">({projectApplicationData.email})</h1>
                                    </div>
                                    <div className="flex px-4 py-2 items-center justify-between text-black">
                                        <div>
                                            <h1>Project Name:</h1>
                                            <h1>Project Details:</h1>
                                        </div>
                                        <div className="flex flex-col justify-end items-end">
                                            <h1>{projectApplicationData.projectName}</h1>
                                            <h1>{projectApplicationData.projectDetails}</h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-end">
                                        <h1 className="text-xl font-bold">#031719</h1>
                                    </div>
                                </div>
                                <div className="border-black border-dashed border-b-2 my-2 pt-2">
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -left-2"></div>
                                    <div className="absolute rounded-full w-5 h-5 bg-black -mt-2 -right-2"></div>
                                </div>
                                <div className="flex items-center justify-between text-black">
                                    <div>
                                        <h1>Date:</h1>
                                        <h1>Time:</h1>
                                        <h1>Venue:</h1>
                                    </div>
                                    <div className="flex flex-col justify-end items-end">
                                        <h1>19th-21th April, 2024</h1>
                                        <h1>10:00 a.m.</h1>
                                        <h1>Online Mode</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_Ticket;