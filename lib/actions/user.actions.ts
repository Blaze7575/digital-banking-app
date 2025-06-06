"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { loginProps, SignUpParams } from "@/types";
import { parseStringify } from "../utils";

export async function signUp(userData: SignUpParams) {
  const { email, password, firstName, lastName } = userData;
  // console.log(email, password, firstName, lastName);

  `rewatch the part where he implements the sign up server action`;
  try {
    // create a new user using appwrite
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    const session = await account.createEmailPasswordSession(email, password);

    `Just so you dont forget You enclosed await cookies to get the value from cookies.`;
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error(error);
  }
}

export async function login({ email, password }: loginProps) {
  try {
    // Validate the user and create a stateless session for the user.
    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = { firstname: "blaze" };

    return parseStringify(user);
  } catch (error) {
    console.error(error);
  }
}
