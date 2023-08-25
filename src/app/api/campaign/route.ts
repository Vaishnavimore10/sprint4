import { connect } from "@/dbConfig/dbConfig";
import Campaign from "@/models/campaignModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { team_id, company_id, challenge_id ,start_time, end_time, current_progress } = reqBody;

        const newCampaign = new Campaign ({
            team_id,
            company_id,
            challenge_id,
            start_time, 
            end_time, 
            current_progress
        })

        await newCampaign.save();
        return NextResponse.json({success: true, message: "Campaign added successfully."})
    } catch (error:any) {
        console.log({success: false, message: "Error occured."})
    }
}

//Get all method
export async function GET() {
    
    await connect();
    const campaign = await Campaign.find(); 
    return NextResponse.json({ campaign });
 
}

// Update Record (Using ID)

export async function PUT(request: NextRequest) {
    try {
      const { id, ...updateData } = await request.json();
  
      const updateCampaign = await Campaign.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updateCampaign) {
        return NextResponse.json({ success: false, message: "Campaign not found" });
      }
  
      return NextResponse.json({ success: true, updateCampaign });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error updating campaign" });
    }
  }

// Delete Campaign Record (Using ID)

export async function DELETE(request: NextRequest) {
    try {
      const { id } = await request.json();
  
      const deleteCampaign = await Campaign.findByIdAndDelete(id);
  
      if (!deleteCampaign) {
        return NextResponse.json({ success: false, message: "Campaign not found" });
      }
  
      return NextResponse.json({ success: true, message: "Campaign deleted successfully" });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error deleting campaign" });
    }
  }
  