import { connect } from "@/dbConfig/dbConfig";
import Company from "@/models/companyModel";
import Workspace from "@/models/workspaceModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      name,
      email_domain,
      password,
      white_listed_email_addresses,
      logo,
      addresses,
      capacity,
      tagline,
      mission_vision,
      sector,
      selected_challenges,
    } = reqBody;

    const company = await Company.findOne({ email_domain });

    if (company) {
      return NextResponse.json({
        success: false,
        message: "Account already exists",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newCompany = new Company({
      name,
      email_domain,
      password: hashedPassword,
      white_listed_email_addresses,
      logo,
      addresses,
      capacity,
      tagline,
      mission_vision,
      sector,
      selected_challenges,
    });

    const savedCompany = await newCompany.save();

    const newWorkspace = new Workspace({ name: name, });
    newWorkspace.save();
    console.log(savedCompany);
    return NextResponse.json({
      success: true,
      message: "Registration is successful.",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Registration failed",
    });
  }
}
