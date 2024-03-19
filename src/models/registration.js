import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
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
        required: [true, "Please provide a phone number"],
        unique: true
    },
    collegeName: {
        type: String
    },
    collegeYear: {
        type: String
    },
    branchName: {
        type: String
    },
}, { timestamps: true })

const Registration = mongoose.models.Registrations || mongoose.model("Registrations", registrationSchema);

export default Registration;