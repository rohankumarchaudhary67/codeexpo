import { connect } from "@/dbConfig/dbConfig";
import Registration from "@/models/registration";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { fullName, email, phoneNumber, collegeName, collegeYear, branchName } = reqBody;

        const registrationWithEmail = await Registration.findOne({email});
        if(registrationWithEmail){
            return NextResponse.json({
                error:"Email already exists",
                reason:"emailExists",
                success:false,
                status:400
            })
        }

        const registrationWithPhone = await Registration.findOne({phoneNumber});
        if(registrationWithPhone){
            return NextResponse.json({
                error:"phone number already exists",
                reason:"phoneExists",
                success:false,
                status:400
            })
        }

        const newRegistration = new Registration({
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            collegeName: collegeName,
            collegeYear: collegeYear,
            branchName: branchName
        });

        const savedRegistration = await newRegistration.save();

        return NextResponse.json({ message: "New Registration submit", success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}