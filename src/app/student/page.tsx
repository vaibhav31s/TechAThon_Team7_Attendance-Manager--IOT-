"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { MdEmail, MdVerified } from "react-icons/md";

import Image from "next/image";
type Props = {};
interface User {
  name ?: string;
  email ?: string;
  image?: string;
  role ?: string;
  rollno?: string;
}


const StudentHome = (props: Props) => {
  const { data: session, status } = useSession();
  const datas :User | undefined = session?.user;
  if(datas === undefined){
    return <div>Loading</div>
  }
  if (session?.user?.role === "admin") {
    return <div>Fof</div>;
  }
  const roll = session?.user?.rollno;
  const [data, setdata] = React.useState([]);
  const submitHandler = () => {
    console.log(rollno);
    fetch("/api/student/rollno", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno: rollno }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      }
      );

  };
  return <div>
  <div className="flex flex-col items-center ">
      <Image
          src={"https://api.multiavatar.com/demo" + session?.user?.name + ".svg"}
          className="w-40 border-4 border-white rounded-full"
          width={40}
          height={100}
          alt={`Product `}
      />
      <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl dark:text-white">{datas.name}</p>
          <span
              className="bg-blue-500 rounded-full p-1"
              title="Verified"
          >
              <MdVerified />
          </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
          <span className="text-gray-400 dark:text-gray-50 ">
              Joined:
          </span>{" "}
         
      </p>

      {/* <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
<div className="flex items-center space-x-4 mt-2">
  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
    <BsWhatsapp/>
    <span>Connect</span>
  </button>
  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
    <MdEmail/>
    <span>Email</span>
  </button>
</div>
</div> */}
  </div>

  <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4 ">
      <div className="w-full flex flex-col 2xl:w-1/3 ">
          <div className="flex-1 bg-white dark:bg-black rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 dark:text-white font-bold">
                  Personal Info
              </h4>
              <ul className="mt-2 text-gray-700">
                  <li className="flex border-b justify-between py-2">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Name:
                      </span>
                      <span className="text-gray-400  ">
                          user.name
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b justify-between py-2">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Age:
                      </span>
                      <span className="text-gray-400 ">
                           Years
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b py-2 justify-between">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Total Spent Till Now:
                      </span>
                      <span className="text-gray-400">
                          Total of Rs. 121 Spent
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b py-2 justify-between">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Customer Since:
                      </span>
                      {/* <span className="text-gray-400">
                          {getDateFromDays(
                              nanosecondsToDays(user.Customer_For)
                          )}{" "}
                          ( {nanosecondsToDays(user.Customer_For)}{" "}
                          Days from today)
                      </span> */}
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b py-2 justify-between">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Cluster No:
                      </span>
                      <span className="text-gray-400 ">
                          Belongs to Cluster No :
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b py-2 justify-between">
                      <span className="font-bold w-24 dark:text-gray-300 ">
                          Number of Deals Made:
                      </span>
                      <span className="text-gray-400">
                          Deals Made in Total
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
                  <li className="flex border-b py-2 justify-between">
                      <span className="font-bold w-24 dark:text-gray-300">
                          Number Web Visites per Month:
                      </span>
                      <span className="text-gray-400">
                           No of times visits
                          per months
                      </span>
                      <span className="text-gray-400 "></span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div>
};

export default StudentHome;
