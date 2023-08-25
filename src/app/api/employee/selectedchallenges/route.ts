// pages/api/selected-challenges/[employeeId].js

import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Employee from "@/models/employeeModel";
import Challenge from "@/models/challengeModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { employeeId } = reqBody;

    const employee =
      await Employee.findById(employeeId).populate("selectedChallenges");
    console.log();

    if (!employee) {
      return NextResponse.json({
        success: false,
        message: "Employee not found",
      });
    }

    const selectedChallenges = employee.selectedChallenges;

    return NextResponse.json({ success: true, selectedChallenges });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error fetching selected challenges",
    });
  }
}
