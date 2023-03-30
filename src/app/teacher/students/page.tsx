"use client";
import React, { useEffect, useState } from "react";
import "flowbite";
import Table from 'Components/Table';
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

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
    <div className="mx-auto  m-8 flex flex-col justify-center items-center">
        <Table />
    </div>
  );
};

export default MyBlogs;
