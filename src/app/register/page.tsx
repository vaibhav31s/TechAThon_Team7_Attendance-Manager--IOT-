"use client";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCloudUpload } from "react-icons/bs";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
type Props = {};
// Initialize once (at the start of your app).

const uploader = Uploader({ apiKey: "public_W142iHLGRmGuEFJE2G6E7nYXh9TC" });
const options = {
  multi: false,

  styles: {
    colors: {
      primary: "#377dff",
    },
    
  },
};
const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("https://api.multiavatar.com/vaibhav");
  const [role, setRole] = useState("user");
  const [rollno, setRollno] = useState("");
  const images: string[] = [];

  const submitHandlerRegister = () => {
    try {
      const signup = fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          avatar,
          role,
          rollno,
        }),
      }).then((res) => {
        if (res.status === 200) {
          toast.success(
            "Thank you for registering with us! You can sign it using your creadentials or Google auth!!",
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
        } else {
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
        }
      });

      console.log(signup);
      // toast.success('Thank you for registering with us! You can sign it using your creadentials or Google auth!!', {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e: any) => {
    const [files, setFiles] = useState([]);

    const n = name.split(" ");
    setAvatar("https://api.multiavatar.com/" + n[0]);
    try {
      const { data } = await axios.post("/api/user/signup", {
        name,
        email,
        password,
        avatar,
        role,
      });
    } catch (error) {}
  };

  const { data, status } = useSession();
  const router = useRouter();

  async function handleGoogleSignIn() {
    signIn(
      "google",
      {
        callbackUrl: "http://localhost:3000/",
      },
      { role: role }
    );
  }

  if (status === "authenticated") {
    if (data?.user?.role === "admin") {
      router.push("/teacher");
    }
    if (data?.user?.role === "user") {
      router.push("/student");
    }
    router.push("/");
  }

  return (
    <section className="">
      <div className="px-0 mx-auto py-1 max-w-7xl sm:px-4">
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
        <h1 className="text-4xl antialiased font-bold dark:text-white text-center">
              Welcome to QuickCheck Tech
            </h1>
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Registration Page of QuickCheck Tech 
          </h1>
          <div className="mb-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Name
              </span>
              <input
                className="form-input"
                type="text"
                placeholder="Ex. FirstName LastName"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Rollno
              </span>
              <input
                className="form-input "
                type="text"
                placeholder="Ex. 1 2 3 4 5 6 7 8 9"
                required
                onChange={(e) => {
                  setRollno(e.target.value);
                }}
              />
            </label>
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

            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Confirm Password
              </span>
              <input
                className="form-input "
                type="password2"
                placeholder="••••••••"
                required
              />
            </label>
            <label className="block justify-center items-center flex mg-4  antialiased hover:bg-blue-500 border-r-2 p-2 rounded-md bg-transparent border">
              <BsCloudUpload />
              <UploadButton
                uploader={uploader}
                options={options}
                onComplete={(files: React.SetStateAction<string>[]) =>
                  files.map((x: React.SetStateAction<string>) => {
                    setAvatar(x.fileUrl);
                    console.log(x.fileUrl);
                  })
                }
              >
                {({ onClick }) => (
                  <button onClick={onClick}>
                     Upload Your Profile picture...
                  </button>
                )}
              </UploadButton>
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Role
              </span>
              <select
                className="form-select"
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="user">Student</option>
                <option value="admin">Teacher</option>
              </select>
            </label>

            <input
              type="submit"
              className="bg-blue-200 w-full py-3 mt-1 justify-center btn btn-primary"
              value="Register"
              onClick={() => submitHandlerRegister()}
            />
          </div>
          <div className="space-y-8">
            <div className="text-center border-b border-gray-200">
              <span className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white ">
                Or
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleSignIn}
                className="py-3 btn btn-icon btn-google "
              >
                <FaGoogle className="mr-1 text-2xl" />
                <span className="sr-only">Continue with</span> Google
              </button>
              <a href="#" className="py-3 btn btn-icon btn-dark">
                <FaGithub className="mr-1 text-2xl" />
                <span className="sr-only">Continue with</span> Github
              </a>
            </div>
          </div>
        </div>
        <p className="mb-4  text-xs text-center text-black dark:text-purpl">
          <Link
            href="/login"
            className=" underline hover:text-blue-700"
          >
            Have An Account ? Login
          </Link>
          · ·
          <a href="#" className=" underline hover:text-blue-700">
            Privacy & Terms
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
