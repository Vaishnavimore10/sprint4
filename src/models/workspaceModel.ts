import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: Number,
   // required: true,
  },
  users: [
    {type: String}],
  
  campaigns: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  ]
  
});

const Workspace =
  mongoose.models.Workspace || mongoose.model("workspace", workspaceSchema);

export default Workspace;