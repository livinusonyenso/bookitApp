import { Client, Database, Account, Storage } from "node-appwrite";

//adminclient
const CreateAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);
  return {
    get account() {
      return new Account(client);
    },

    get database() {
      return new Database(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const CreateSessionClient = async (session) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  if (session) {
    client.setSession(session);
  }
  return {
    get account() {
      return new Account(client);
    },

    get database() {
      return new Database(client);
    }
  };
};

export { CreateAdminClient, CreateSessionClient };
