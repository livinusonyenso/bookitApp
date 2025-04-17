"use server";
import { CreateAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createRoom(previousState, formData) {
  //Get data base instance

  const { database } = await CreateAdminClient();

  //get user
  try {
    const auth = await checkAuth();
    console.log('>>>>>>>>>>>>>>>>>>>>user',auth)
    if (!auth.isAuthenticated) {
      return {
        error: "you must be logged in  to create a room",
      };
    }

    // const newRoom = await database.createDocument(
    //   process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
    //   process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
    //   ID.unique(),
    //   {
    //     user_id: auth.id,
    //     name: formData.get("name"),
    //     description: formData.get("description"),
    //     sqft: formData.get("sqft"),
    //     capacity: formData.get("capacity"),
    //     location: formData.get("location"),
    //     address: formData.get("address"),
    //     avialablility: formData.get("avialablility"),
    //     price_per_hour: formData.get("price_per_hour"),
    //     amenities: formData.get("amenities"),
    //   }
    // );


    const newRoom = await database.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
        ID.unique(),
        {
          user_id: auth.id,
          name: formData.get("name"),
          description: formData.get("description"),
          sqft: formData.get("sqft"),
          capacity: formData.get("capacity"),
          location: formData.get("location"),
          address: formData.get("address"),
          avialablility: formData.get("avialablility"),
          price_per_hour: formData.get("price_per_hour"),
          amenities: formData.get("amenities"),
        }
      );
      

    revalidatePath("/", "layout");

    return {
      success: true,
    };

  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.message || error?.message || "an unexpected error has occured";
    return {
      error: errorMessage,
    };
  }
}
export default createRoom;
