import { connect } from "@/dbConfig/dbConfig";
import Company from "@/models/companyModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    console.log(reqBody);

    const emailParts = email.split('@');
    const domain = emailParts[1];
  console.log(domain);
    const result = await Company.findOne({ email_domain: domain });
 
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