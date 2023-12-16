import { connectDB } from '@/libs/mongodb';
import FamilyModel, { IFamily } from '@/models/FamilyModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  const families = await FamilyModel.find();

  return NextResponse.json(families);
}

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const data: IFamily = await request.json();
    const family = await FamilyModel.create(data);

    return NextResponse.json(family);
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.error();
  }
}