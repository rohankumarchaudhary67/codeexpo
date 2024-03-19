'use client'

import Registration_Form from "@/components/registration/registration-form";
import Registration_Ticket from "@/components/registration/registration-ticket";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

export default function Registration() {

    const [progress, setProgress] = useState(0);

    const [registrationData, setRegistrationData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        collegeName: "",
        collegeYear: "",
        branchName: "",
    })

    const [error, setError] = useState('');

    const [registrationComplete, setRegistrationComplete] = useState(false);

    return (
        <>
            <LoadingBar
                color='#3fc1c9'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {registrationComplete ? <div className="md:mb-16 pt-20">
                <h2 className="relative text-center text-3xl md:text-4xl font-bold mt-10 flex md:flex-row flex-col justify-center items-center">Thanks for joining</h2>
                <Registration_Ticket registrationData={registrationData} />
            </div> : <div className="md:mb-16 pt-20">
                <h2 className="relative text-center text-3xl md:text-4xl font-bold mt-10 flex md:flex-row flex-col justify-center items-center">Register Yourself for <img src="/logo/logo-text.png" className="md:h-14 h-12 pl-2" alt="" /></h2>
                <Registration_Form registrationData={registrationData} setRegistrationData={setRegistrationData} error={error} setError={setError} setProgress={setProgress} setRegistrationComplete={setRegistrationComplete} />
            </div>}
        </>
    )
}