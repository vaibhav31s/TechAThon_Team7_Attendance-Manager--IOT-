"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
type Props = {};
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Vaibhav from "public/attendaceLogo.png";

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
      }).then((res) => {
        toast.error("Three is issue between your Password Or Email!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    } catch (error) {
      toast.error("Three is issue between your Password Or Email!", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [count, setCount] = React.useState(0);
  return (
    <section className=" min-h-screen   flex items-center justify-between w-full">
        <div className=" flex rounded-2xl pt-10 w-full px-8 md:px-20 items-center">
      
          <div className="md:w-2/3 px-2 md:px-2 sm:w-screen">
          <h1 className="text-4xl antialiased font-bold dark:text-white pb-2">
              Welcome to QuickCheckTech
            </h1> <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
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
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
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
      </div>
        
          <div className="md:inline-block hidden w-2/3 mr-5 h-full  rounded-lg  ">
            <img
              className="rounded-2xl dark:invert h-auto w-full "
              src={Vaibhav.src}
            />
          </div>
          
    </section>
  );
};

export default Login;
