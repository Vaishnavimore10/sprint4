import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  maxTeamMembers: {
    type: Number,
  },
  place: {
    type: String,
    required: true,
  },
  images: {
    type: String, // Using String to store the path or URL of the image
  },
  duration: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  challenge_type: {
    type: String,
  },
});

const Challenge =
  mongoose.models.challenges || mongoose.model("challenges", challengeSchema);

export default Challenge;
