'use client'
import React from "react";
import Link from "next/link";
// components

import person1 from "assets/img/team-1-800x800.jpeg";
import person2 from "assets/img/team-2-800x800.jpg";
import person3 from "assets/img/team-3-800x800.jpg";
import person4 from "assets/img/team-4-800x800.png";
import lapptop from "assets/img/laptop.jpg"
import backg from "assets/img/.png"
import Rajohari from "assets/img/Rajoharan.jpg"
import {FaChalkboardTeacher,FaMobileAlt,FaCloudsmith,FaGitAlt,FaUsb,FaAward,FaAngleDoubleUp,FaUserFriends } from "react-icons/fa";

export default function Landing() {
  return (
      <main className="layout__main-contents">
        <div className="relative pt-16 pb-32 flex content-center  items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn.dribbble.com/users/992274/screenshots/13875723/media/ef1ef2ba7197586690ab66851ba8c36b.png')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Say Goodbye to Paperwork, Hello to QuickCheck Tech.
                  </h1>
                  <p className="mt-4 text-lg text-gray-100">
                    Trusted by 1700+ Schools for
                    Attendance management, Leave management,
                    & day-to-day services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"><FaGitAlt className="w-36"></FaGitAlt></i>
                    </div>
                    <h6 className="text-xl  text-blueGray-500 font-semibold">World Class Company</h6>
                    <p className="mt-2 mb-4 text-center text-blueGray-500">
                      We have made a great product that meets the highest standards of quality and excellence.
                       Being innovative and adaptable helps in delivering quality products that meet customer needs</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4  text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 bg-gray-400 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full">
                      <i className="fas fa-retweet "><FaCloudsmith className="w-32 "></FaCloudsmith></i>
                    </div>
                    <h6 className="text-xl font-semibold">Less Resources</h6>
                    <p className="mt-2 mb-4 text-center text-blueGray-500">
                      Usage of our machine will have great results in saving papers.
                      A lot of manual work has been reduced and its easy and fast to use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"><FaUsb className="w-36"></FaUsb></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Product</h6>
                    <p className="mt-2 mb-4 text-center text-blueGray-500">
                      Our Product has been through various security checking and accuracy testing and we have an outperformed results.
                      help in reducing risks of fraud and costs incurred from incorrect information provided by customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl "><FaChalkboardTeacher className="w-36" ></FaChalkboardTeacher></i>
                </div>
                <h3 className="dark:text-white text-3xl mb-2 font-semibold leading-normal">
                  Punctuality benchmarks
                </h3>
                <p className="text-lg dark:text-white  font-light leading-relaxed mt-4 mb-4 text-blueGray-600">


                  A stitch in time, (almost) always saves nine. Therefore, we want to help you maintain punctuality at work.
                   We make it possible for you to do it via grace hours or grace late-counts.
                  You can not only monitor but also penalize repeat late-comers.
                </p>
                <p className="text-lg dark:text-white font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                A punctuality benchmark is a standard or goal that an individual or organization 
                sets for themselves to ensure that they are prompt and attend appointments on time
                </p>
                <Link href="/" className="font-bold dark:text-white text-blueGray-700 mt-8 dark:text-white">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src={lapptop.src}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl  font-bold text-black">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2  text-black">
                     We do not only have a good product but we also provide an excellent 12 month gurantee and servicing with
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Rajohari.src}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-rocket text-xl"><FaMobileAlt className="w-36 dark:"> </FaMobileAlt>   </i>
                  </div>
                  <h3 className="text-3xl dark:text-white  font-semibold">Regularization workflow</h3>
                  <p className="mt-4 text-lg dark:text-white  leading-relaxed text-blueGray-500">
                  Every now and then, we all forget some of the most basic tasks, no? Avoid the burden of correcting attendance yourself, and instead,
                   empower employees to request for changes for single or multiple days, through simple regularization workflows.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="dark:text-white text-blueGray-500">
                           Skilled Employees
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="dark:text-white text-blueGray-500">
                      Great User Experience
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="dark:text-white text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl dark:text-white font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 dark:text-white text-blueGray-500">
                  It is because of them that we are able to manufacture and design this great product.
                  They are the torch-bearers of this company 
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={person1.src}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl dark:text-zinc-300 font-bold">Sagar Agicha</h5>
                    <p className="mt-1 text-sm dark:text-zinc-300 text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 dark:text-white  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      > <i className="fab dark:text-white fa-twitter"></i></button>
                        {/* <i className="fab dark:text-white fa-twitter"><FaCloudsmith className="w-36"></FaCloudsmith></i> */}
                     
                      <button
                        className="bg-lightBlue-600 dark:text-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 dark:text-white  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={person2.src}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl dark:text-zinc-300 font-bold">Vaibhav Gawad</h5>
                    <p className="mt-1 text-sm dark:text-zinc-300 text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={person3.src}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl dark:text-zinc-300 font-bold">Jenil Shah</h5>
                    <p className="mt-1 text-sm dark:text-zinc-300 text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 dark:text-white  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 dark:text-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 dark:text-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={person4.src}
                    className="shadow-lg rounded-full mx-auto w-800-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl dark:text-zinc-300 font-bold">Ritesh Mestry</h5>
                    <p className="mt-1 text-sm dark:text-zinc-300 text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 dark:text-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 dark:text-white  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 dark:text-white  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700  dark:text-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4 bg-transparent">
                <h2 className="text-4xl dark:text-white font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg dark:text-white leading-relaxed mt-4 mb-4 text-blueGray-400" >
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center space-x-10">
              <div className="w-full lg:w-3/12 px-4 text-center   border-white  radius-2 border rounded-md	 p-2">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-medal text-xl"><FaAward className="w-32"></FaAward></i>
                </div>
                <h6 className="text-xl dark:text-white  mt-5 font-semibold dark:text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 dark:text-white text-left mb-4 dark:text-white text-blueGray-400">
                We offer competitive prices, high-quality work, and timely delivery.
                 Whether you need web design, graphic design,
                  content writing, or marketing, we have the skills 
                  and experience to meet your needs
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center  border-white shadow-lg radius-2 border rounded-md	 p-2 mb-16 overflow-y-clip">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-poll text-xl"><FaAngleDoubleUp className="w-2"></FaAngleDoubleUp></i>
                </div>
                <h5 className="text-xl dark:text-white  mt-5 font-semibold text-black">
                  Market Growth 
                </h5>
                <p className="mt-2 dark:text-white text-left mb-4 text-blueGray-400">
                We have a proven track record of delivering high-quality products and services to our customers
                Our growth rate is impressive and consistent, averaging 25% annually for the last five years
                We have a clear vision and strategy for expanding our market share and increasing our profitability
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center  border-white radius-2 border rounded-md	 p-2">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-lightbulb text-xl"><FaUserFriends className="w-36"></FaUserFriends></i>
                </div>
                <h5 className="text-xl dark:text-white  mt-5 font-semibold text-black">
                  Easy to Use 
                </h5>
                <p className="mt-2 dark:text-white mb-4 text-left text-blueGray-400">
                  It revolutionize the way you work and play!. You can easily power up your productivity with our tech!.
                  Streamline your day-to-day harsh activities with our intuitive products!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl dark:text-white  font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed dark:text-white mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase dark:text-white  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 dark:text-white  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 dark:text-white  text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 dark:text-white  px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase dark:text-white  text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows= "4"
                        cols= "80"
                        className="border-0 px-3 py-3 dark:text-white  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 dark:text-white  text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}