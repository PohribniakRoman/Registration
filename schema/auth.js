import mongoose,{ Schema } from "mongoose";

const candidateSchema = new Schema({
    login: String,
    password: String
})

const Candidate = mongoose.model("Candidate", candidateSchema)

module.exports = Candidate;