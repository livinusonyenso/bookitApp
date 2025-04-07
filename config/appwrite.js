import { Client, Databases, Account, Storage } from "node-appwrite";

// Admin Client
const CreateAdminClient = async () => {
  try {
    console.log("Creating Admin Client...");

    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
      .setKey(process.env.NEXT_APPWRITE_KEY);

    console.log("Admin Client created successfully.");

    return {
      get account() {
        return new Account(client);
      },
      get database() {
        return new Databases(client);
      },
      get storage() {
        return new Storage(client);
      },
    };
  } catch (error) {
    console.error("Error creating Admin Client:", error);
    throw error;  // Re-throw to be handled by the caller
  }
};

// Session Client
const CreateSessionClient = async (session) => {
  try {
    console.log("Creating Session Client...");

    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

    // If session exists, set it
    if (session) {
      console.log("Setting session for client...");
      client.setSession(session);
    }

    console.log("Session Client created successfully.");

    return {
      get account() {
        return new Account(client);
      },
      get database() {
        return new Databases(client);
      },
    };
  } catch (error) {
    console.error("Error creating Session Client:", error);
    throw error;  // Re-throw to be handled by the caller
  }
};

export { CreateAdminClient, CreateSessionClient };
