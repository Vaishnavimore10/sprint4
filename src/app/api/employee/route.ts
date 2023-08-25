import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Employee from "@/models/employeeModel";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return NextResponse.json({
        success: false,
        message: "Employee not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Employee deleted successfully",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error deleting employee",
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedEmployee) {
      return NextResponse.json({
        success: false,
        message: "Employee not found",
      });
    }

    return NextResponse.json({ success: true, updatedEmployee });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error updating employee",
    });
  }
}
