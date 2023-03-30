"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
type Props = {};
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  async function handleGoogleSignIn() {
    signIn("google", {
      callbackUrl: "/",
      role: role,
    });
  }
  async function handleEmailPasswordSignIn() {
    signIn("email", {
      callbackUrl: "/",
    });
  }

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        callbackUrl: "http://localhost:3000/",
        email,
        password,
        redirect: false,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [count, setCount] = React.useState(0);
  return (
    <section className="bg-purple-900 dark:bg-black ">
      <div className="px-0 py-1 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Log in to your account
          </h1>
          <form className="mb-8 space-y-4" onSubmit={submitHandler}>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input"
                type="email"
                placeholder="Ex. james@bond.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Password
              </span>
              <input
                className="form-input "
                type="password"
                placeholder="••••••••"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <input
              type="submit"
              className="bg-blue-200 w-full py-3 mt-1 justify-center btn btn-primary"
              value="Login"
            />
          </form>
          <div className="space-y-8">
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white ">
                Or
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleSignIn}
                className="py-3 btn dark:btn-dark btn-google "
              >
                <FaGoogle className="mr-1 text-2xl" />
                <span className="sr-only">Continue with</span> Google
              </button>
              <a href="#" className="py-3 btn dark:btn-dark  btn-google">
                <FaGithub className="mr-1 text-2xl" />
                <span className="sr-only">Continue with</span> Github
              </a>
            </div>
          </div>
        </div>
        <p className="mb-4  text-xs text-center text-gray-400">
          <Link
            href="/register"
            className="text-purple-200 underline hover:text-white"
          >
            Create an account
          </Link>
          · ·
          <a href="#" className="text-purple-200 underline hover:text-white">
            Privacy & Terms
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;