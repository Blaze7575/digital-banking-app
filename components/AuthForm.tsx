"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { login, signUp } from "@/lib/actions/user.actions";
import { getLoggedInUser } from "@/lib/getLoggedInUser";

function AuthForm({ type }: { type: string }) {
  // Refs and States
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const formSchema = authFormSchema(type);

  // Hooks
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dob: "",
      SSN: "",
    },
  });

  // Backend Calls

  // Emits

  // Functions

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    // setisLoading(true);

    try {
      // create a new user with appwrite and create a plaid token
      if (type === "signUp") {
        const newUser = await signUp(values);
        setUser(newUser);
      } else if (type === "login") {
        const res = await login({
          email: values.email,
          password: values.password,
        });
        if (res) router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <section className="w-full p-16 flex flex-col gap-8">
      {user ? (
        <div className="w-full flex flex-col flex-center gap-4">
          <div className="text-5xl text-black-1">Plaid token</div>
          <span className="text-xl text-gray-500">
            ldmaslkdlaksmd8978394&87923*&^%*88896lkadsoPOIjoijd8908jdoPOI908dsiji*
          </span>
        </div>
      ) : (
        <div className="w-[800px]">
          <header className="w-fit">
            <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
              <Image
                src={"/icons/logo.svg"}
                width={34}
                height={34}
                className="max-xl:size-14"
                alt="Horizon"
              />
              <h1 className="sidebar-logo">Horizon</h1>
            </Link>
          </header>

          <div>
            <h1 className="text-36 font-bold text-black-1 mb-1">
              {type === "login" ? "Login" : "Sign up"}
            </h1>
            <p className="text-14 text-gray-500">Please enter your details.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              {type === "signUp" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Please enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Please enter your last name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Please enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="Please enter the name of your city"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="Please enter your state"
                    />
                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="example: 44000"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      name="dob"
                      label="Date of Birth"
                      placeholder="DD-MM-YYYY"
                    />
                    <CustomInput
                      control={form.control}
                      name="SSN"
                      label="SSN"
                      placeholder="example: 123-45-6789"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Please enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                type="password"
                placeholder="Please enter your password"
              />

              <Button
                type="submit"
                className="w-full form-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>

              <div className="flex justify-center">
                <div className="flex gap-1">
                  <p className=" text-gray-500">
                    {type === "login"
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </p>
                  <Link href={type === "login" ? "/SignUp" : "/Login"}>
                    <span className="text-blue-600 font-semibold hover:underline">
                      {type === "login" ? "Sign Up" : "Login"}
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
    </section>
  );
}

export default AuthForm;
