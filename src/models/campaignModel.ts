
// ID Obj_id -> Campaign 
// 			- TEAM ID required
// 			- COMPANY ID required
// 			- CHALLENGE ID required
// 			- START TIME required
// 			- END TIME required
// 			- ACTIVE TASK required
// 			- LIST OF USERS REGISTERED required
// 			- CURRENT PROGRESS (Number required false)
// 			- STATISTICS ABOUT USER ENGAGEMENT
		
import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  team_id: {
    type: String,
    //required: true,
    //unique: true,
  },
  company_id: {
    type: String,
    required: false,
  },
  challenge_id: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    //required: true,
  },
  end_time: {
    type: String,
   // required: true,
  },
  current_progress: {
    type: Number,
   // required: false,
  },
  active_tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ActiveChallenges' }],
  users_registered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Members' }],
});

const Campaign = mongoose.models.campaign || mongoose.model("campaign", campaignSchema);

export default Campaign;


