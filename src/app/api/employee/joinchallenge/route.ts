import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import Employee from "@/models/employeeModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const { employeeId, challengeId } = await request.json();

    // Log employeeId and challengeId for debugging
    console.log("employeeId:", employeeId);
    console.log("challengeId:", challengeId);

    const employee = await Employee.findById(employeeId);
    const challenge = await Challenge.findById(challengeId);

    if (!employee || !challenge) {
      return NextResponse.json({
        success: false,
        message: "Employee or challenge not found",
      });
    }

    // Log employee and challenge for debugging
    console.log("Employee:", employee);
    console.log("Challenge:", challenge);

    if (!challenge.teamMembers) {
      challenge.teamMembers = [];
    }

    if (!Array.isArray(employee.selectedChallenges)) {
      employee.selectedChallenges = [];
    }

    if (challenge.teamMembers.length >= challenge.maxTeamMembers) {
      return NextResponse.json({
        success: false,
        message: "This challenge has reached max no. of team members.",
      });
    }

    employee.selectedChallenges.push(challengeId);
    await employee.save();

    // Log updated employee for debugging
    console.log("Updated Employee:", employee);

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
