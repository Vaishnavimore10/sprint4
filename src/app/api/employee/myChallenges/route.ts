import { connect } from "@/dbConfig/dbConfig";

import Employee from "@/models/employeeModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    console.log(reqBody);

   
    const result = await Employee.findOne({ email: email});
 
    if (result) {
      console.log(result);
      return NextResponse.json({selectedChallenges: result.selectedChallenges});
    } else {
      return NextResponse.json({ error: 'No company found for the given email' });
    }
}catch (error) {
  console.log(error);
  return NextResponse.json({
    success: false,
    message: "Error ",
  });
}
}