import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      title,
      description,
      id,
      maxTeamMembers,
      place,
      images,
      duration,
      category,
      challenge_type,
    } = reqBody;

    const newChallenge = new Challenge({
      title,
      description,
      id,
      maxTeamMembers,
      place,
      images,
      duration,
      category,
      challenge_type,
    });

    await newChallenge.save();
    console.log(newChallenge);
    return NextResponse.json({
      success: true,
      message: "Challenge added successfully.",
    });
  } catch (error: any) {
    console.log({ success: false, message: "Error occured." });
  }
}

//Get all method
export async function GET() {
  await connect();
  const challenges = await Challenge.find();
  return NextResponse.json({ challenges });
}
