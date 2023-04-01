"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};

const Manually = (props: Props) => {
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 16));
  const [subject, setSubject] = React.useState("DMBI");
  const [rollno, setRollNo] = React.useState("");
  const [status, setStatus] = React.useState("present");

  const onSubmitHandler = () => {
    // console.log(date, subject, rollno, status)
    fetch("/api/teacher/manual", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        subject,
        rollno,
        status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === "done") {
          toast.success("Successfully Marked Student as Present !! ", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.info(data, {
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
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center dark:bg-white">Manual Attendance Portal Where Teacher can take manual Attendace in case of failure in device</h1>
        
      <div className="max-w-md mx-auto mt-8 dark:text-white p-8 rounded-lg shadow-md">
      <h1 className="font-bold text-center dark:text-white">Manual Attendance Taker</h1>
        
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
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            type="datetime-local"
            id="date"
            name="date"
            value={date}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Subject:
        </label>
        <select
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          id="status"
          name="status"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="DMBI">DMBI</option>
          <option value="AIDS">AIDS</option>
          <option value="WEBX">WEBX</option>
          <option value="WT">WT</option>
        </select>

        <div className="mb-4">
          <label
            htmlFor="studentId"
            className="block text-gray-700 font-bold mb-2"
          >
            Roll no : (To have multiple attendance Done Quickly Just add commas after each roll no. Eg. 1,2,3,4,6)
          </label>
          <input
            type="text"
            id="studentId"
            name="rollno"
            value={rollno}
            onChange={(e) => {
              setRollNo(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 font-bold mb-2"
          >
            Status:
          </label>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={() => onSubmitHandler()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manually;
