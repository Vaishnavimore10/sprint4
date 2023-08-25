import { connect } from "@/dbConfig/dbConfig";
import Challenge from "@/models/challengeModel";
import { NextRequest, NextResponse } from "next/server";

//Get one method
export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const challenge = await Challenge.findById(id);
  return NextResponse.json({ challenge }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { _id } = params;
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
  } = await request.json();
  await connect();
  await Challenge.findByIdAndUpdate(_id, {
    title,
    description,
    id,
    maxTeamMembers,
  });
  return NextResponse.json(
    { success: true, message: "updated successfully" },
    { status: 200 },
  );
}
