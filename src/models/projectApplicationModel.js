import mongoose from 'mongoose';

const projectApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide a full name"]
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    phoneNumber: {
        type: String,
        required: [true, "Please proivde a phone number"],
        unique: true
    },
    alternatePhoneNumber: {
        type: String
    },
    projectName: {
        type: String,
        required: [true, "Please provide a project name"]
    },
    projectDetails: {
        type: String,
        required: [true, "Please provide some project details"]
    },
    problemItSolve: {
        type: String
    },
    challengesWeRanIntoIt: {
        type: String
    },
    projectLink: {
        type: String
    },
    githubUsername: {
        type: String
    }
}, { timestamps: true })

const ProjectApplication = mongoose.models.projectApplications || mongoose.model("ProjectApplications", projectApplicationSchema);

export default ProjectApplication;