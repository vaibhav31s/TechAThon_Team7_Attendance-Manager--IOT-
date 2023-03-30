"use client";
import React, { useEffect, useState } from "react";
import "flowbite";

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
  const data = [
    {
      id: 1,
      name: "Neeraj",
      email: "neeraj@gmail.com",
      phone: 9876543210,
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Raj",
      email: "raj@gmail.com",
      phone: 9812345678,
      city: "Chennai",
    },
    {
      id: 3,
      name: "David",
      email: "david342@gmail.com",
      phone: 7896536289,
      city: "Jaipur",
    },
    {
      id: 4,
      name: "Vikas",
      email: "vikas75@gmail.com",
      phone: 9087654321,
      city: "Hyderabad",
    },
  ];
  const [students, setStudents] = useState([]);
  const [userName, setuserName] = useState("");
  const [endDate, setendDate] = useState(new Date());
  const [search, setsearch] = useState("");
  const [subject, setsubject] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const columnss = [
    [
      {
        id: 1,
        name: "Neeraj",
        email: "neeraj@gmail.com",
        phone: 9876543210,
        city: "Bangalore",
      },
      {
        id: 2,
        name: "Raj",
        email: "raj@gmail.com",
        phone: 9812345678,
        city: "Chennai",
      },
      {
        id: 3,
        name: "David",
        email: "david342@gmail.com",
        phone: 7896536289,
        city: "Jaipur",
      },
      {
        id: 4,
        name: "Vikas",
        email: "vikas75@gmail.com",
        phone: 9087654321,
        city: "Hyderabad",
      },
    ],
  ];

  const defaultMaterialTheme =    createTheme({ 
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },

      background: {
        default: "#f4f5fd",
      },
    },
  });

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
        <button onClick={() => submitHandler()}>Get Data</button>
      </div>

      <div style={{ width: '100%', height: '100%' }}>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            title="Employee Data"
            data={[
              {
                name: "Max",
                surname: "Mustermann",
                birthYear: 1987,
                birthCity: 1,
              },
              {
                name: "Cindy",
                surname: "Musterfrau",
                birthYear: 1995,
                birthCity: 2,
              },
            ]}
            columns={[
              { title: "Name", field: "name" },
              { title: "Surname", field: "surname" },
              { title: "Birth Year", field: "birthYear", type: "numeric" },
              {
                title: "Birth City",
                field: "birthCity",
                lookup: { 1: "Linz", 2: "Vöcklabruck", 3: "Salzburg" },
              },
            ]}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default MyBlogs;
