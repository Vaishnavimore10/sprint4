import { NextResponse } from "next/server";

export function GET() {
  try {
    const response = NextResponse.json({
      success: true,
      message: "Logged out sucessfully.",
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
}
