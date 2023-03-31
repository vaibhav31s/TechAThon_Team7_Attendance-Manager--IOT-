"use client";
// import '../node_modules/react-linechart/dist/styles.css';
import LineGraph from "react-line-graph";
import { MdPeopleAlt } from "react-icons/md";
import { FcReadingEbook } from "react-icons/fc";
type Props = {};

const TeacherDashboard = (props: Props) => {

  const data = [1, 2, 12, 33, 44, 55, 66, 77, 34, 22, 12, -2.5, 1];
  const propss = {
    data,
    xLable: "Xasdfasdf",
    yLable: "Yasdfasdf",

    smoothing: 0.3,
    accent: "palevioletred",
    fillBelow: "rgba(200,67,23,0.1)",
    hover: true,
    LabelX: "X",
    LabelY: "Y",
    hoverLabelXColor: "palevioletred",
  };
  return (
    <div>
      <div className="flex flex-col  2xl:w-2/3">
        <div className="flex-1  rounded-lg shadow-xl mt-4 px-2 pt-2">
          <h4 className="text-xl text-gray-900 dark:text-white font-bold ">
            Statistics
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-indigo-600">
                  Total Students
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  from 1st Days of the College
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <MdPeopleAlt className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-indigo-600 border border-green-600"
                   />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">
                      10 Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-green-600">
                  Average Attendance
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                   from 1st Days of the College
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <FcReadingEbook   className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"/>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">50 % </span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-green-600">
                  Total Teachers / Subject
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                   from 1st Days of the College
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <FcReadingEbook   className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"/>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-2xl 2xl:text-3xl font-bold">4 Subject Teacher</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xl">Students Activity</span>
              <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  from 1st Days of the College
              </span>
            </div>

            <LineGraph {...propss} />

            <div className="flex items-center justify-between mt-6">
              <div>
                Day 0
                </div>
                <div>
                Current Day
                </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;