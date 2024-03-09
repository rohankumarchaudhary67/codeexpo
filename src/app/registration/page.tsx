'use client'

import Registration_Form from "@/components/registration-form";
import { useState } from "react";

export default function Registration() {

    const [registrationData, setRegistrationData] = useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        collegeName:"",
        collegeYear:"",
        branchName:""
    })

    return (
        <>
            <div className="md:mb-16 pt-20">
                <h2 className="relative text-center text-3xl md:text-4xl font-bold mt-10 flex md:flex-row flex-col justify-center items-center">Register Yourself for <img src="/logo/logo-text.png" className="md:h-14 h-12 pl-2" alt="" /></h2>
                    <Registration_Form registrationData={registrationData} setRegistrationData={setRegistrationData} />
            </div>
        </>
    )
}