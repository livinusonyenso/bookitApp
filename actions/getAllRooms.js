"use server";
import { CreateAdminClient } from "../config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    const { database } = await CreateAdminClient();

    //fetch rooms
    const { document: rooms } = await database.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS
    );
    //revalidatepath for this cache
    revalidatePath("/", "layout");
    return rooms;
  } catch (error) {
    console.log("failed to get rooms", error);
    redirect("/error");
  }
}
export default getAllRooms;
