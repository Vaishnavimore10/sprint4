import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/companyModel";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return NextResponse.json({
        success: false,
        message: "Company not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error deleting company",
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    const updatedCompany = await Company.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedCompany) {
      return NextResponse.json({
        success: false,
        message: "Company not found",
      });
    }

    return NextResponse.json({ success: true, updatedCompany });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Error updating company",
    });
  }
}
