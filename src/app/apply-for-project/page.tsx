'use client'

import Project_Form from "@/components/project-application/project-form";
import Project_Ticket from "@/components/project-application/project-ticket"
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";

export default function Apply_for_project() {

    const [progress, setProgress] = useState(0);

    const [projectApplicationData, setProjectApplicationData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        alternatePhoneNumber: "",
        projectName: "",
        projectDetails: "",
        problemItSolve: "",
        challengesWeRanIntoIt: "",
        projectLink: "",
        githubUsername: ""
    })

    const [error, setError] = useState('');

    const [projectSubmission, setProjectSubmission] = useState(false);

    return (
        <>
            <LoadingBar
                color='#3fc1c9'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {projectSubmission ? <div className="md:mb-16 pt-20">
                <h2 className="relative text-center text-3xl md:text-4xl font-bold mt-10 flex md:flex-row flex-col justify-center items-center">Thanks for submit your project</h2>
                <Project_Ticket projectApplicationData={projectApplicationData} />
            </div> : <div className="md:mb-8 pt-20">
                <h2 className="relative text-center text-4xl font-bold mt-10">Apply for Project</h2>
                <Project_Form projectApplicationData={projectApplicationData} setProjectApplicationData={setProjectApplicationData} error={error} setError={setError} setProjectSubmission={setProjectSubmission} setProgress={setProgress} />
            </div>}
        </>
    )
}
