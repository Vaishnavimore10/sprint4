import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  id:{
    type: String,
    //required: true,
  },
  name: {
    type: String,
    //required: [true, "Please provide the company name"],
    unique: true,
  },
  email_domain: {
    type: String,
    //required: [true, "Please provide an Email domain!"],
    unique: true,
  },
  password: {
    type: String,
    //required: true,
  },
  white_listed_email_addresses: {
    type: String,
  },
  logo: {
    type: String, // Using String to store the path or URL of the image
  },
  addresses: {
    type: String,
  },
  capacity: {
    type: Number,
    required: true,
  },
  tagline: {
    type: String,
  },
  mission_vision: {
    type: String,
  },
  sector: {
    type: String,
  },
  selectedChallenges: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const Company =
  mongoose.models.companies || mongoose.model("companies", companySchema);

export default Company;
