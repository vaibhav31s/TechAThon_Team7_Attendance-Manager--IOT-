"use client";
import React, { useEffect, useState } from "react";
import "flowbite";



import Loading from "./loading";
type Props = {};

interface students {
  id: string;
  email: string;
  name: string;
  rollno: string;
  avatar: string;
}
const MyBlogs = (props: Props) => {
  const [students, setStudents] = useState([]);
  const [userName, setuserName] = useState("");
  const [endDate, setendDate] = useState(new Date());
  const [search, setsearch] = useState("");
  const [subject, setsubject] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch("/api/teacher/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, []);

  const submitHandler = () => {
    console.log("submit");
    fetch("/api/teacher/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: startDate,
        endDate: endDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  //bulk attendance
  

  if (students.length == 0) {
    return <Loading />;
  }
  // console.log(students);

  return (
    <div>
      <h1>Students</h1>

      <div>
          <h1>Search</h1>
          <input type="text" />
          <div className="flex flex-col ">
            <h1>Start Date</h1>
            {/* <DatePicker
              selected={startDate}
              onChange={(date: React.SetStateAction<Date>) =>
                setStartDate(date)
              }
            />
            <h1>End Date</h1>
            <DatePicker
              selected={endDate}
              onChange={(date: React.SetStateAction<Date>) => setendDate(date)}
            /> */}
          </div>
            <button onClick={()=>submitHandler()}>Get Data</button>
        </div>
        
      <div className="flex flex-col">
       
        {students.map((student: students) => (
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img
                src={student.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1>{student.name}</h1>
              <h1>{student.email}</h1>
              <h1>{student.rollno}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
