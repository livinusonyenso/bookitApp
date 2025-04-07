"use server";
import { CreateAdminClient } from "../config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    const { database } = await CreateAdminClient();

    // Log to confirm correct values
    console.log("Appwrite Client initialized");
    console.log("Database ID:", process.env.NEXT_PUBLIC_APPWRITE_DATABASE);
    console.log("Collection ID:", process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS);

    // Fetch all room documents
    const { documents: rooms } = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );

    // Log the response
    // console.log("Fetched rooms:", rooms);

    // Revalidate path
    // revalidatePath("/", "layout");

    return rooms;
  } catch (error) {
    console.error("Failed to get rooms:", error);
    redirect("/error");
  }
}

export default getAllRooms;
