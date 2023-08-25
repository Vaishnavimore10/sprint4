import { connect } from "@/dbConfig/dbConfig";
import Company from "@/models/companyModel";
import Employee from "@/models/employeeModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const employee = await Employee.findOne({ email });

    if (!employee) {
      return NextResponse.json({
        success: false,
        message: "Account doesn't exist",
      });
    }

    const validPassword = await bcryptjs.compare(password, employee.password);

    if (!validPassword) {
      return NextResponse.json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const tokendata = {
      id: employee._id,
      fullname: employee.fullname,
      email: employee.email,
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
