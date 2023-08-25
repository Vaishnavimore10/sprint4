import { connect } from "@/dbConfig/dbConfig";
import Workspace from "@/models/workspaceModel";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, id, users, campaigns} = reqBody;

        const newWorkspace = new Workspace ({
            name,
            id,
            users,
            campaigns
        })

        await newWorkspace.save();
        return NextResponse.json({success: true, message: "Workspace added successfully."})
    } catch (error:any) {
        console.log({success: false, message: "Error occured."})
    }
}

//Get all method
export async function GET() {
    
    await connect();
    const workspace = await Workspace.find(); 
    return NextResponse.json({ workspace });
 
}

// Update Record (Using ID)

export async function PUT(request: NextRequest) {
    try {
      const { id, ...updateData } = await request.json();
  
      const updateWorkspace = await Workspace.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updateWorkspace) {
        return NextResponse.json({ success: false, message: "Workspace not found" });
      }
  
      return NextResponse.json({ success: true, updateWorkspace });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error updating Workspace" });
    }
  }

// Delete Active Challenge Record (Using ID)

export async function DELETE(request: NextRequest) {
    try {
      const { id } = await request.json();
  
      const deleteWorkspace = await Workspace.findByIdAndDelete(id);
  
      if (!deleteWorkspace) {
        return NextResponse.json({ success: false, message: "Workspace not found" });
      }
  
      return NextResponse.json({ success: true, message: "Workspace deleted successfully" });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error deleting Workspace" });
    }
  }
  