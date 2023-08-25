import { connect } from "@/dbConfig/dbConfig";
import CityEvents from "@/models/cityEvents";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, points, created_date } = reqBody;

        const newEvent = new CityEvents ({
            name,
            points,
            created_date
        })

        await newEvent.save();
        return NextResponse.json({success: true, message: "Event added successfully."})
    } catch (error:any) {
        console.log({success: false, message: "Error occured."})
    }
}

//Get all method
export async function GET() {
    
    await connect();
    const events = await CityEvents.find(); 
    return NextResponse.json({ events });
 
}

// Update Record (Using ID)

export async function PUT(request: NextRequest) {
    try {
      const { id, ...updateData } = await request.json();
  
      const updateCityEvent = await CityEvents.findByIdAndUpdate(id, updateData, {
        new: true,
      });
  
      if (!updateCityEvent) {
        return NextResponse.json({ success: false, message: "Event not found" });
      }
  
      return NextResponse.json({ success: true, updateCityEvent });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error updating event" });
    }
  }

// Delete Active Event Record (Using ID)

export async function DELETE(request: NextRequest) {
    try {
      const { id } = await request.json();
  
      const deleteCityEvent = await CityEvents.findByIdAndDelete(id);
  
      if (!deleteCityEvent) {
        return NextResponse.json({ success: false, message: "Event not found" });
      }
  
      return NextResponse.json({ success: true, message: "Event deleted successfully" });
    } catch (error: any) {
      console.log(error);
      return NextResponse.json({ success: false, message: "Error deleting event" });
    }
  }
  