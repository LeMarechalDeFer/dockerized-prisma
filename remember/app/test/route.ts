import { NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

export async function GET() {
  const prisma = new PrismaClient();
  const userCount = await prisma.user.count();
  return NextResponse.json(
    userCount === 0
      ? "Aucun utilisateur n'a encore été ajouté."
      : "Des utilisateurs ont été ajoutés à la base de données."
  );
}