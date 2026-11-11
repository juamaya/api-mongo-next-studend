import connectDB from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { StudentModel } from "@/app/models/Student";

// MOSTRAR UN DOCUMENTO
export const GET = async (request, { params }) => {
  await connectDB();
  const { id } = await params;
  try {
    const result = await StudentModel.findById(id);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

// ELIMINAR UN DOCUMENTO
export const DELETE = async (request, { params }) => {
  await connectDB();
  const { id } = await params;
  try {
    const result = await StudentModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID ${id} not found` },
        { status: 404 },
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

// ACTUALIZAR UN DOCUMENTO

export const PUT = async (request, { params }) => {
  await connectDB();
  const { id } = await params;
  
  try {
      
      const body = await request.json()

    const result = await StudentModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { returnDocument: "after" },
    );
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID ${id} not found` }, { status: 404 },
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};