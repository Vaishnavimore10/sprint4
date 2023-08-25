import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import Company from "@/models/companyModel";
import Campaign from "@/models/campaignModel";
import Workspace from "@/models/workspaceModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { company_id, challenge_id } = await request.json();

    // Log employeeId and challengeId for debugging
    console.log("company_id:", company_id);
    console.log("challenge_id:", challenge_id);

    const company = await Company.findById(company_id);
    const challenge = await Challenge.findById(challenge_id);

    if (!company || !challenge) {
      return NextResponse.json({
        success: false,
        message: "Employee or challenge not found",
      });
    }

    // Log employee and challenge for debugging
    console.log("Company:", company);
    console.log("Challenge:", challenge);

    if (!challenge.teamMembers) {
      challenge.teamMembers = [];
    }

    if (!Array.isArray(company.selectedChallenges)) {
      company.selectedChallenges = [];
    }

    if (challenge.teamMembers.length >= challenge.maxTeamMembers) {
      return NextResponse.json({
        success: false,
        message: "This challenge has reached max no. of team members.",
      });
    }

    company.selectedChallenges.push(challenge_id);
    await company.save();

    // Log updated employee for debugging
    console.log("Updated Company:", company);

    const newCampaign = new Campaign({ company_id:company._id, challenge_id:challenge_id });
    newCampaign.save();
    console.log("new campaign", newCampaign);

    const workspace = await Workspace.findOne({name: company.name});
    console.log("new workspace", workspace);
    workspace.campaigns.push(challenge_id);
    await workspace.save();


    return NextResponse.json({
      success: true,
      message: "Successfully joined the challenge.",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error joining the challenge.",
    });
  }
}
