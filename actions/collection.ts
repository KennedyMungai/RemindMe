"use server";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/wait";
import { CreateCollectionSchemaType } from "@/schema/createCollection";
import { currentUser } from "@clerk/nextjs";

export const createCollection = async (form: CreateCollectionSchemaType) => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  return await prisma.collection.create({
    data: {
      userId: user.id,
      color: form.color,
      name: form.name,
    },
  });
};

export const deleteCollection = async (id: number) => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  // await wait(5000);

  return await prisma.collection.delete({
    where: {
      userId: user.id,
      id: id,
    },
  });
};
