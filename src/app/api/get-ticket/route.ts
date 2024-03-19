import { connect } from "@/dbConfig/dbConfig";
import Registration from "@/models/registration";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
    try {
        // Extract data from frontend body
        const reqBody = await request.json();
        const {email}=reqBody;

        // Check is email exists or not
        const registeredEmail = await Registration.findOne({email});
        if(registeredEmail){
            return NextResponse.json({
                message: "User Found",
                emailData: registeredEmail,
                success:true
            })
        }

        return NextResponse.json({
            message:"No email found",
            reason:"noEmailExists",
            success:false,
            status:400
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500});
    }
}