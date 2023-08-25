import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  company_id: {
    type: String,
    required: true,
    
  },
  challenge_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  ],
  user_ids: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  ],
  progress:{
    type:String,
  }
});

const Team =
  mongoose.models.Team || mongoose.model("teams", teamSchema);

export default Team;
