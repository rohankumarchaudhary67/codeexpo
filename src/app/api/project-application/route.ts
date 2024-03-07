import { connect } from "@/dbConfig/dbConfig"
import ProjectApplication from "@/models/projectApplicationModel"
import { NextRequest, NextResponse } from "next/server"

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {fullName, email, phoneNumber, alternatePhoneNumber, projectName, projectDetails, problemItSolve, challengesWeRanIntoIt, projectLink, githubUsername} = reqBody;

        const newProjectApplication = new ProjectApplication({
            fullName:fullName,
            email:email,
            phoneNumber:phoneNumber,
            alternatePhoneNumber:alternatePhoneNumber,
            projectName:projectName,
            projectDetails:projectDetails,
            problemItSolve:problemItSolve,
            challengesWeRanIntoIt:challengesWeRanIntoIt,
            projectLink:projectLink,
            githubUsername:githubUsername
        });

        const savedProjectApplication = await newProjectApplication.save();

        return NextResponse.json({message:"New Project Application Submit", success:true});
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}