"use server";
import { CreateAdminClient } from "../config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getSinglRoom(id) {
  try {
    const { database } = await CreateAdminClient();

   

    // Fetch all room documents
    const room = await database.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
      id
    );

    // Log the response
    // console.log("Fetched rooms:", rooms);

    // Revalidate path
    // revalidatePath("/", "layout");

    return room;
  } catch (error) {
    console.error("Failed to get room:", error);
    redirect("/error");
  }
}

export default getSinglRoom;
