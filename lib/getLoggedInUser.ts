// ... your initilization functions

import { createSessionClient } from "./appwrite";
import { parseStringify } from "./utils";

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    console.error("Failed to fetch logged-in user:", error);
    return null;
  }
}
