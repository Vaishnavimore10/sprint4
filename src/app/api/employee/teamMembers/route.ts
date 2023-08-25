import { connect } from "@/dbConfig/dbConfig";
import Company from "@/models/companyModel";
import Employee from "@/models/employeeModel";
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
    const company_id= result.company_id;
    
    const members = await Employee.find({ company_id: company_id });
    if (members) {
        console.log(members);
        return NextResponse.json({members});
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