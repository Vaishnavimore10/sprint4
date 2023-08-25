import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Employee from "@/models/employeeModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const urlSearchParams = new URLSearchParams(request.url);
    const employeeId = urlSearchParams.get("employeeId");

    if (!employeeId) {
      return NextResponse.json({
        success: false,
        message: "Employee ID is missing",
      });
    }

    const employee = await Employee.findById(employeeId as string);

    if (!employee) {
      return NextResponse.json({
        success: false,
        message: "Employee not found",
      });
    }

    return NextResponse.json({ success: true, employee });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error fetching employee",
    });
  }
}
