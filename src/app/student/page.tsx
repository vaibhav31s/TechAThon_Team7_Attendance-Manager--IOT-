"use client";
import React,{useEffect,useState} from "react";
import { useSession, signOut } from "next-auth/react";
import { MdEmail, MdVerified } from "react-icons/md";

import Image from "next/image";
type Props = {};
interface User {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
  rollno?: string;
  avatar?: string;
}

interface uinterface {
  length: number;
  name: string;
  rollno: string;
  email: string;
  avatar: string;
  attendance: []
};

interface allAttendace{
  allpercent:string,
  firstpercent:string,
  secondpercent:string,
  thirdpercent:string,
  forthpercent:string,
  allLecures:string,
  mytotalLecture:string,
  firstTotalLecture:string,
  secondTotalLecture:string,
  thirdTotalLecture:string,
  forthTotalLecture:string,
  firstTotalPresent:string,
  secondTotalPresent:string,
  thirdTotalPresent:string,
  forthTotalPresent:string,
  firstLecuresAll:string,
  secondLecuresAll:string,
  thirdLecuresAll:string,
  forthLecuresAll:string,


}


const StudentHome = (props: Props) => {
  const { data: session, status } = useSession();
  const datas: User | undefined = session?.user;
  if (datas === undefined) {
    return <div>Loading</div>;
  }
  if (session?.user?.role === "admin") {
    return <div>Fof</div>;
  }
  const [dataid, setdata] =  useState<uinterface> ({} as uinterface);
  const [meriattendace, setMeriAttendance] = useState<allAttendace>();
  const submitHandler = () => {
    fetch("/api/student/id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: session?.user?.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  };
  const rollnoSeAttenance = () => {
    fetch("/api/student/attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rollno:  dataid.rollno }),
    })
      .then((res) => res.json())  
      .then((data) => {
        console.log(data);
        setMeriAttendance(data);
        // setattendance(data);
      });
    };

    const [attendance, setattendance] = useState<any>();
    useEffect(() => {
    submitHandler();



  }, []);

  useEffect(() => {
     if(dataid.rollno !== undefined){
      rollnoSeAttenance();
      }
  }, [dataid]);


  if(dataid.length===0){
    return <div>Loading</div>
  }

  return (
    <div className="justify-center items-center ">
      <div className="flex flex-col items-center ">
        <img
          src={
            datas.avatar
          }
          className="w-40 border-4 border-white rounded-full"
          width={40}
          height={40}
          alt={`Product`}
        />
        <div  className="flex items-center space-x-2 mt-2">
          <p className="text-2xl dark:text-white">{dataid.name}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <MdVerified />
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="text-gray-400 dark:text-gray-50 ">Rollno : </span>{dataid.rollno}
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

      <div className="flex justify-center items-center p-8">
        <div className="w-screen flex flex-col ">
          <div className="flex-1 bg-white dark:bg-black rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 dark:text-white font-bold">
              Personal Info
            </h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24 dark:text-gray-300">Name:</span>
                <span className="text-gray-400  ">{dataid.name}</span>
                <span className="text-gray-400 "></span>
              </li>
              <li className="flex border-b justify-between py-2">
                <span className="font-bold w-24 dark:text-gray-300">Email:</span>
                <span className="text-gray-400 ">{dataid.email}</span>
                <span className="text-gray-400 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                  Roll No
                </span>
                <span className="text-gray-400">{dataid.rollno}</span>
                <span className="text-gray-400 "></span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                  Overall Attendace:
                </span>
                {/* <span className="text-gray-400">
                          {getDateFromDays(
                              nanosecondsToDays(user.Customer_For)
                          )}{" "}
                          ( {nanosecondsToDays(user.Customer_For)}{" "}
                          Days from today)
                      </span> */}
                <span className="text-gray-400 ">  {meriattendace?.allpercent}% </span>
                <span className="text-gray-400 "> {meriattendace?.mytotalLecture} / {meriattendace?.allLecures}</span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                AIDS Total Attendance:
                </span>
                <span className="text-gray-400 ">{meriattendace?.firstpercent}%</span>
                <span className="text-gray-400 ">{meriattendace?.firstTotalPresent} / {meriattendace?.firstLecuresAll}</span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                WT Total Attendance:
                </span>
                <span className="text-gray-400 ">{meriattendace?.secondpercent}% </span>
                <span className="text-gray-400 "> {meriattendace?.secondTotalPresent} / {meriattendace?.secondTotalLecture} </span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                DMBI Total Attendance:
                </span>
                <span className="text-gray-400 ">{meriattendace?.thirdpercent}% </span>
                <span className="text-gray-400 "> {meriattendace?.thirdTotalPresent} / {meriattendace?.thirdTotalLecture} </span>
              </li>
              <li className="flex border-b py-2 justify-between">
                <span className="font-bold w-24 dark:text-gray-300">
                WEBX Total Attendance:
                </span>
                <span className="text-gray-400 ">{meriattendace?.forthpercent}% </span>
                <span className="text-gray-400 "> {meriattendace?.forthTotalPresent} / {meriattendace?.forthTotalLecture} </span>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
