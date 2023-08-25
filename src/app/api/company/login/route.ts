import { connect } from "@/dbConfig/dbConfig";
import Company from "@/models/companyModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email_domain, password } = reqBody;
    console.log(reqBody);

    const company = await Company.findOne({ email_domain });

    if (!company) {
      return NextResponse.json({
        success: false,
        message: "Account doesn't exist",
      });
    }

    const validPassword = await bcryptjs.compare(password, company.password);

    if (!validPassword) {
      return NextResponse.json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const tokendata = {
      id: company._id,
      name: company.name,
      email: company.email,
    };

    const token = await jwt.sign(tokendata, process.env.SECRET_KEY!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, message: "Login failed." });
  }
}
