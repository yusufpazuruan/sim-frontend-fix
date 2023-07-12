import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Avatar from "react-avatar";
import { FaRegEye } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

import { useQuery } from "react-query";

// const URL = `http://localhost:3000`;
const URL = `https://node-api-vercel-six-theta.vercel.app`;

function Navbar() {
  // const headerStyle = {
  //   ".header-links li span": {
  //     position: "relative",
  //     zIndex: 0,
  //   },
  //   ".header-links li span::before": {
  //     content: "",
  //     position: "absolute",
  //     zIndex: -1,
  //     bottom: "2px",
  //     left: "-4px",
  //     right: "-4px",
  //     display: "block",
  //     height: "6px",
  //   },
  //   ".header-links li.active span::before": {
  //     backgroundColor: "#fcae04",
  //   },
  //   ".header-links li:not(.active):hover span::before": {
  //     backgroundColor: "#ccc",
  //   },
  // };

  return (
    // <>
    //   <header className="bg-white shadow-lg h-24 hidden md:flex">
    //     <a
    //       href=""
    //       className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
    //     >
    //       <img
    //         className=""
    //         src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
    //         alt=""
    //       />
    //     </a>
    //     <nav className="header-links contents font-semibold text-base lg:text-lg">
    //       <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
    //         <li className="p-3 xl:p-6 active">
    //           <a href="">
    //             <span>Home</span>
    //           </a>
    //         </li>
    //         <li className="p-3 xl:p-6">
    //           <a href="">
    //             <span>Services</span>
    //           </a>
    //         </li>
    //         <li className="p-3 xl:p-6">
    //           <a href="">
    //             <span>About</span>
    //           </a>
    //         </li>
    //         <li className="p-3 xl:p-6">
    //           <a href="">
    //             <span>Projects</span>
    //           </a>
    //         </li>
    //         <li className="p-3 xl:p-6">
    //           <a href="">
    //             <span>Skills</span>
    //           </a>
    //         </li>
    //         <li className="p-3 xl:p-6">
    //           <a href="">
    //             <span>Contacts</span>
    //           </a>
    //         </li>
    //         <li class="p-3 xl:p-6">
    //           <a href="" class="flex items-center">
    //             <span>Pages</span>
    //             <IoIosArrowDown />
    //             {/* <svg class="h-3 opacity-30 ml-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-chevron-down fa-w-14 fa-7x"><path fill="currentColor" d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path></svg> */}
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <nav className="hidden xl:contents">
    //       <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
    //         <li className="p-1">
    //           <a
    //             href="#"
    //             className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    //           >
    //             {/* <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-twitter fa-w-16 fa-9x"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>*/}
    //           </a>
    //         </li>
    //         <li className="p-1">
    //           <a
    //             href="#"
    //             className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    //           >
    //             {/*<svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10 fa-7x"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>*/}
    //           </a>
    //         </li>
    //         <li className="p-1">
    //           <a
    //             href="#"
    //             className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    //           >
    //             {/* <svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-linkedin-in fa-w-14 fa-9x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>*/}
    //           </a>
    //         </li>
    //         <li className="p-1">
    //           <a
    //             href="#"
    //             className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
    //           >
    //             {/*<svg className="h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-instagram fa-w-14 fa-9x"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> */}
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="border flex items-center px-4 lg:px-6 xl:px-8">
    //       <a href="#" className="mr-4 lg:mr-6 xl:mr-8">
    //         {/* <svg className="h-6 xl:h-8" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-3x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg> */}
    //       </a>
    //       <button className="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
    //         Contact Me
    //       </button>
    //     </div>
    //   </header>
    // </>

    <nav className="flex justify-center space-x-4 mt-5 text-green-600 mb-3">
      {/* <Link
        to="/"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Home{" "}
      </Link> */}

      <Link
        to="/allsantri"
        className="font-medium text-red-600 bg-red-100 capitalize hover:shadow-lg shadow-md px-3 py-2 rounded-md "
      >
        <div className="flex justify-center gap-2 items-center">
          <TiGroup />
          Santries
        </div>
      </Link>
      <Link
        to="/add"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Add Santri
      </Link>
      <Link
        to="/addmassal"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Add Massal
      </Link>
      <Link
        to="/itahfidz"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Input Tahfidz
      </Link>

      <Link
        to="/isasi"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Absensi Izin - Sakit
      </Link>
      <Link
        to="/absensi"
        className="font-medium capitalize hover:shadow-lg shadow-sm px-3 py-2 rounded-md"
      >
        Absesni Santri
      </Link>
    </nav>
  );
}

function DetailSantri() {
  return (
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style="
            // background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          "
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style="transform: translateZ(0px)"
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="##pablo" className="font-normal text-pink-500">
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a
                      href="https://www.creative-tim.com/product/notus-js"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a
                      href="https://www.creative-tim.com"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

const fetchData = async () => {
  try {
    const response = await axios.get(`${URL}/santris`);
    // setSantri(response.data);
    // console.log(response.data);
    const dataSantris = response.data;
    // console.log(`santris di fetch data : ${dataSantris}`)
    return dataSantris;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

function UserList() {
  // const [santri, setSantri] = useState([]);
  const [kelas, setKelas] = useState("");

  const getWaliKelas = (kelas) => {
    switch (kelas) {
      case "X MIPA 1":
        return "Ustadz Jeri Setiadi S.Pd";
      case "X MIPA 2":
        return "Ustadz Ivan Arief Rachman S.Pd";
      case "X MIPA 3":
        return "Ustadz Mahmud S.Pd";
      case "X MIPA 4":
        return "Ustadz Ainul Huda S.Pd";
      case "X MIPA 5":
        return "Ustadzah Muhibbatul Laili M.Pd";
      case "X MIPA 6":
        return "Ustadzah Ade Nur'aeni S.Ag";
      case "X MIPA 7":
        return "Ustadzah Nina Nur'anah S.Pd";
      case "X MIPA 8":
        return "Ustadzah Eli Sumiati S.Pd";
      case "XI MIPA 1":
        return "Ustadz Ahmad Sholahuddin S.Pd";
      case "XI MIPA 2":
        return "Ustadz Raju Aprijaludin S.Pd";
      case "XI SOSIAL 3":
        return "Ustadz Fahri Masyariqul Anwar S.Hum";
      case "XI SYARI'AH 4":
        return "Ustadz Ibnu Ubaidillah S.Sos";
      case "XI MIPA 5":
        return "Ustadzah Misa Fitriani S.Pd";
      case "XI MIPA 6":
        return "Ustadzah Yulina S.Kom";
      case "XI SOSIAL 7":
        return "Ustadzah Risma Amelia S.Sos";
      case "XII MIPA 1":
        return "Ustadz Nasrudin Abdul Matin S.Sos";
      case "XII MIPA 2":
        return "Ustadz Rijub Wibowo S.Pd";
      case "XII MIPA 3":
        return "Ustadzah Rizkiyah Maulani Sahab S.Pd";
      case "XII MIPA 4":
        return "Ustadzah Dina Meliliana S.Pd";
      case "XII MIPA 5":
        return "Ustadzah Zahrotul Jannah S.Sos";
      default:
        return "";
    }
  };
  const waliKelas = getWaliKelas(kelas);

  const handleKelasChange = (event) => {
    setKelas(event.target.value);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/santris`);
      // setSantri(response.data);
      // console.log(response.data);
      const dataSantris = response.data;
      // console.log(`santris di fetch data : ${dataSantris}`)
      return dataSantris;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
    }
  };

  // const {
  //   data: dataSantri,
  //   isError,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["Santris"],
  //   queryFn: fetchData,
  //   staleTime: 60000,
  // });

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>Gagal Mengambil Data Santri-Santri</p>;
  // }

  const {
    isLoading,
    isError,
    data: dataSantri,
    error,
  } = useQuery("santris", fetchData,{staleTime: 60000});

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // console.log(`datsantri: ${dataSantri}`);

  return (
    <>
      <div className="overflow-x-auto">
        <Navbar />
        <div className="min-w-screen  flex mt-3 justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white rounded my-6">
              <div className="flex mb-5 justify-center items-center">
                <div className="text-green-600 mr-3 font-bold bg-green-200 px-3 py-2 rounded-s-full shadow-sm ">
                  Wali Kelas
                </div>
                <select
                  className="duration-100  hover:scale-105 border border-gray-300 rounded-full text-gray-600 h-10 px-5  bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  name="kelas"
                  id="kelas"
                  value={kelas}
                  onChange={handleKelasChange}
                >
                  <option className="text-center">Choose a class</option>
                  <option className="text-center" value="X MIPA 1">
                    X MIPA 1
                  </option>
                  <option className="text-center" value="X MIPA 2">
                    X MIPA 2
                  </option>
                  <option className="text-center" value="X MIPA 3">
                    X MIPA 3
                  </option>
                  <option className="text-center" value="X MIPA 4">
                    X MIPA 4
                  </option>
                  <option className="text-center" value="X MIPA 5">
                    X MIPA 5
                  </option>
                  <option className="text-center" value="X MIPA 6">
                    X MIPA 6
                  </option>
                  <option className="text-center" value="X MIPA 7">
                    X MIPA 7
                  </option>
                  <option className="text-center" value="X MIPA 8">
                    X MIPA 8
                  </option>
                  <option className="text-center" value="XI MIPA 1">
                    XI MIPA 1
                  </option>
                  <option className="text-center" value="XI MIPA 2">
                    XI MIPA 2
                  </option>
                  <option className="text-center" value="XI SOSIAL 3">
                    XI SOSIAL 3
                  </option>
                  <option className="text-center" value="XI SYARI'AH 4">
                    XI SYARI'AH 4
                  </option>
                  <option className="text-center" value="XI MIPA 5">
                    XI MIPA 5
                  </option>
                  <option className="text-center" value="XI MIPA 6">
                    XI MIPA 6
                  </option>
                  <option className="text-center" value="XI SOSIAL 7">
                    XI SOSIAL 7
                  </option>
                  <option className="text-center" value="XII MIPA 1">
                    XII MIPA 1
                  </option>
                  <option className="text-center" value="XII MIPA 2">
                    XII MIPA 2
                  </option>
                  <option className="text-center" value="XII MIPA 3">
                    XII MIPA 3
                  </option>
                  <option className="text-center" value="XII MIPA 4">
                    XII MIPA 4
                  </option>
                  <option className="text-center" value="XII MIPA 5">
                    XII MIPA 5
                  </option>
                </select>
                {kelas && (
                  <span className="text-center">
                    <span className="text-red-600 ml-3 font-bold bg-red-200 px-3 py-2 rounded-e-full shadow-sm">
                      {waliKelas}
                    </span>
                  </span>
                )}
              </div>

              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal shadow-sm">
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Nama</th>
                    {/* <th className="py-3 px-6 text-center">Kelas</th>
                    <th className="py-3 px-6 text-center">Wali Kelas</th> */}
                    <th className="py-3 px-6 text-center">Total Hafalan</th>
                    <th className="py-3 px-6 text-center">Absensi</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light leading-normal">
                  {dataSantri &&
                    dataSantri.map((s, index) => (
                      <tr
                        key={index}
                        className={`hover:shadow-lg border-b  border-gray-200 ${
                          index % 2 !== 0 && "bg-slate-100"
                        }`}
                      >
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center ">
                            <div className="font-bold ">{index + 1}</div>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center justify-between">
                            <div className="mr-2">
                              <Avatar
                                maxInitials={2}
                                name={s.nama}
                                size={30}
                                round="20px"
                              />
                              <span className="font-medium mr-7 capitalize">
                                {"  "}
                                {s.nama.length > 35
                                  ? s.nama.substring(0, 35) + "..."
                                  : s.nama}
                              </span>
                            </div>
                            <div className="w-4 transform hover:text-purple-500 hover:scale-110 border border-green-300 rounded-full">
                              <Link to={`/santris/${s.id}`}>
                                <FaRegEye />
                              </Link>
                            </div>
                          </div>
                        </td>
                        {/* <td className="py-3 px-6 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <span className="font-normal capitalize">
                            {s.kelas}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-9 text-center whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Avatar
                              maxInitials={3}
                              name={s.wali_kelas}
                              size={30}
                              round="20px"
                            />
                          </div>
                          <span className="font-normal capitalize">
                            {s.wali_kelas.length > 15
                              ? s.wali_kelas.substring(0, 15) + "..."
                              : s.wali_kelas}
                          </span>
                        </div>
                      </td> */}
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center justify-center font-bold">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                              {s.total}
                            </span>
                            <span className="px-2 py-1 font-semibold leading-tight bg-yellow-200 text-yellow-600 rounded-sm capitalize">
                              {s.surat}
                            </span>
                            <span className="px-2 py-1 font-semibold leading-tight bg-purple-200 text-purple-600 rounded-sm">
                              {s.halaman}
                            </span>
                            <span className="px-2 py-1 font-semibold leading-tight bg-red-200 text-red-600 rounded-sm">
                              {s.ayat}
                            </span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center justify-center font-bold">
                            <div className="gap-3">
                              <span className="bg-green-200 text-green-600 p-2 px-3 rounded-full text-xs mr-2 w-6 h-6 ">
                                {s.jumlah_hadir}
                              </span>
                              <span className="bg-red-200 text-red-600 p-2 px-3 rounded-full text-xs mr-2 w-6 h-6">
                                {s.jumlah_sakit}
                              </span>
                              <span className="bg-purple-200 text-purple-600 p-2 px-3  rounded-full text-xs mr-2 w-6 h-6">
                                {s.jumlah_izin}
                              </span>
                              <span className="bg-yellow-200 text-yellow-600 p-2 px-3 rounded-full text-xs mr-2 w-6 h-6">
                                {s.jumlah_ghoib}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddSantriForm() {
  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [kelas, setKelas] = useState("");
  const [waliKelas, setWaliKelas] = useState("");
  const navigate = useNavigate();

  const saveSantri = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/santri`, {
        nama,
        nis,
        kelas,
        wali_kelas: waliKelas,
        active: true,
        createdAt: new Date().toISOString(),
      });
      navigate("/");
    } catch (error) {
      console.error("Error fetching santri data:", error);
    }
  };

  const handleKelasChange = (e) => {
    const selectedKelas = e.target.value;
    const waliKelas = getWaliKelas(selectedKelas);
    setKelas(selectedKelas);
    setWaliKelas(waliKelas);
  };

  const getWaliKelas = (kelas) => {
    switch (kelas) {
      case "X MIPA 1":
        return "Ustadz Jeri Setiadi S.Pd";
      case "X MIPA 2":
        return "Ustadz Ivan Arief Rachman S.Pd";
      case "X MIPA 3":
        return "Ustadz Mahmud S.Pd";
      case "X MIPA 4":
        return "Ustadz Ainul Huda S.Pd";
      case "X MIPA 5":
        return "Ustadzah Muhibbatul Laili M.Pd";
      case "X MIPA 6":
        return "Ustadzah Ade Nur'aeni S.Ag";
      case "X MIPA 7":
        return "Ustadzah Nina Nur'anah S.Pd";
      case "X MIPA 8":
        return "Ustadzah Eli Sumiati S.Pd";
      case "XI MIPA 1":
        return "Ustadz Ahmad Sholahuddin S.Pd";
      case "XI MIPA 2":
        return "Ustadz Raju Aprijaludin S.Pd";
      case "XI SOSIAL 3":
        return "Ustadz Fahri Masyariqul Anwar S.Hum";
      case "XI SYARI'AH 4":
        return "Ustadz Ibnu Ubaidillah S.Sos";
      case "XI MIPA 5":
        return "Ustadzah Misa Fitriani S.Pd";
      case "XI MIPA 6":
        return "Ustadzah Yulina S.Kom";
      case "XI SOSIAL 7":
        return "Ustadzah Risma Amelia S.Sos";
      case "XII MIPA 1":
        return "Ustadz Nasrudin Abdul Matin S.Sos";
      case "XII MIPA 2":
        return "Ustadz Rijub Wibowo S.Pd";
      case "XII MIPA 3":
        return "Ustadzah Rizkiyah Maulani Sahab S.Pd";
      case "XII MIPA 4":
        return "Ustadzah Dina Meliliana S.Pd";
      case "XII MIPA 5":
        return "Ustadzah Zahrotul Jannah S.Sos";
      default:
        return "";
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <h3 className="text-lg font-semibold">Add New Santri</h3>
      <form onSubmit={saveSantri} className="mt-4 space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="nama"
          >
            Nama Santri:
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="nis" className="block">
            NIS:
          </label>
          <input
            type="text"
            name="nis"
            id="nis"
            value={nis}
            onChange={(e) => setNis(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="kelas" className="block">
            Kelas:
          </label>
          <select
            name="kelas"
            id="kelas"
            value={kelas}
            onChange={handleKelasChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Pilih Kelas</option>
            <option value="" disabled className="bg-black text-white">
              Kelas X
            </option>
            <option value="X MIPA 1">X MIPA 1</option>
            <option value="X MIPA 2">X MIPA 2</option>
            <option value="X MIPA 3">X MIPA 3</option>
            <option value="X MIPA 4">X MIPA 4</option>
            <option value="X MIPA 5">X MIPA 5</option>
            <option value="X MIPA 6">X MIPA 6</option>
            <option value="X MIPA 7">X MIPA 7</option>
            <option value="X MIPA 8">X MIPA 8</option>
            <option value="" disabled className="bg-black text-white">
              Kelas XI
            </option>
            <option value="XI MIPA 1">XI MIPA 1</option>
            <option value="XI MIPA 2">XI MIPA 2</option>
            <option value="XI SOSIAL 3">XI SOSIAL 3</option>
            <option value="XI SYARI'AH 4">XI SYARI'AH 4</option>
            <option value="XI MIPA 5">XI MIPA 5</option>
            <option value="XI MIPA 6">XI MIPA 6</option>
            <option value="XI SOSIAL 7">XI SOSIAL 7</option>
            <option value="" disabled className="bg-black text-white">
              Kelas XII
            </option>
            <option value="XII MIPA 1">XII MIPA 1</option>
            <option value="XII MIPA 2">XII MIPA 2</option>
            <option value="XII MIPA 3">XII MIPA 3</option>
            <option value="XII MIPA 4">XII MIPA 4</option>
            <option value="XII MIPA 5">XII MIPA 5</option>
          </select>
        </div>

        <div>
          <label htmlFor="wali_kelas" className="block">
            Wali Kelas:
          </label>
          <input
            type="text"
            name="wali_kelas"
            id="wali_kelas"
            value={waliKelas}
            readOnly
            className="border border-gray-300 rounded px-2 py-1 bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Add Santri
        </button>
      </form>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
    </>
  );
}

function AddMassal() {
  const [namaList, setNamaList] = useState("");
  const [kelas, setKelas] = useState("");
  const [waliKelas, setWaliKelas] = useState("");
  const navigate = useNavigate();

  const saveSantri = async (e) => {
    e.preventDefault();
    const names = namaList
      .split("\n")
      .map((name) => name.trim())
      .filter(Boolean);
    if (names.length === 0) {
      return;
    }

    try {
      await Promise.all(
        names.map(async (nama) => {
          await axios.post(`${URL}/santri`, {
            nama,

            kelas,
            wali_kelas: waliKelas,
            active: true,
            createdAt: new Date().toISOString(),
          });
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Error fetching santri data:", error);
    }
  };

  const handleKelasChange = (e) => {
    const selectedKelas = e.target.value;
    const waliKelas = getWaliKelas(selectedKelas);
    setKelas(selectedKelas);
    setWaliKelas(waliKelas);
  };

  const getWaliKelas = (kelas) => {
    switch (kelas) {
      case "X MIPA 1":
        return "Ustadz Jeri Setiadi S.Pd";
      case "X MIPA 2":
        return "Ustadz Ivan Arief Rachman S.Pd";
      case "X MIPA 3":
        return "Ustadz Mahmud S.Pd";
      case "X MIPA 4":
        return "Ustadz Ainul Huda S.Pd";
      case "X MIPA 5":
        return "Ustadzah Muhibbatul Laili M.Pd";
      case "X MIPA 6":
        return "Ustadzah Ade Nur'aeni S.Ag";
      case "X MIPA 7":
        return "Ustadzah Nina Nur'anah S.Pd";
      case "X MIPA 8":
        return "Ustadzah Eli Sumiati S.Pd";
      case "XI MIPA 1":
        return "Ustadz Ahmad Sholahuddin S.Pd";
      case "XI MIPA 2":
        return "Ustadz Raju Aprijaludin S.Pd";
      case "XI SOSIAL 3":
        return "Ustadz Fahri Masyariqul Anwar S.Hum";
      case "XI SYARI'AH 4":
        return "Ustadz Ibnu Ubaidillah S.Sos";
      case "XI MIPA 5":
        return "Ustadzah Misa Fitriani S.Pd";
      case "XI MIPA 6":
        return "Ustadzah Yulina S.Kom";
      case "XI SOSIAL 7":
        return "Ustadzah Risma Amelia S.Sos";
      case "XII MIPA 1":
        return "Ustadz Nasrudin Abdul Matin S.Sos";
      case "XII MIPA 2":
        return "Ustadz Rijub Wibowo S.Pd";
      case "XII MIPA 3":
        return "Ustadzah Rizkiyah Maulani Sahab S.Pd";
      case "XII MIPA 4":
        return "Ustadzah Dina Meliliana S.Pd";
      case "XII MIPA 5":
        return "Ustadzah Zahrotul Jannah S.Sos";
      default:
        return "";
    }
  };

  return (
    <div className="p-4">
      <Navbar />
      <h3 className="text-lg font-semibold">Add New Santri</h3>
      <form onSubmit={saveSantri} className="mt-4 space-y-4">
        <div>
          <label htmlFor="nama" className="block">
            Nama Santri:
          </label>
          <textarea
            name="nama"
            id="nama"
            value={namaList}
            onChange={(e) => setNamaList(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
            rows={5}
          ></textarea>
        </div>

        <div>
          <label htmlFor="kelas" className="block">
            Kelas:
          </label>
          <select
            name="kelas"
            id="kelas"
            value={kelas}
            onChange={handleKelasChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Pilih Kelas</option>
            <option value="X MIPA 1">X MIPA 1</option>
            <option value="X MIPA 2">X MIPA 2</option>
            <option value="X MIPA 3">X MIPA 3</option>
            <option value="X MIPA 4">X MIPA 4</option>
            <option value="X MIPA 5">X MIPA 5</option>
            <option value="X MIPA 6">X MIPA 6</option>
            <option value="X MIPA 7">X MIPA 7</option>
            <option value="X MIPA 8">X MIPA 8</option>
            <option value="XI MIPA 1">XI MIPA 1</option>
            <option value="XI MIPA 2">XI MIPA 2</option>
            <option value="XI SOSIAL 3">XI SOSIAL 3</option>
            <option value="XI SYARI'AH 4">XI SYARI'AH 4</option>
            <option value="XI MIPA 5">XI MIPA 5</option>
            <option value="XI MIPA 6">XI MIPA 6</option>
            <option value="XI SOSIAL 7">XI SOSIAL 7</option>
            <option value="XII MIPA 1">XII MIPA 1</option>
            <option value="XII MIPA 2">XII MIPA 2</option>
            <option value="XII MIPA 3">XII MIPA 3</option>
            <option value="XII MIPA 4">XII MIPA 4</option>
            <option value="XII MIPA 5">XII MIPA 5</option>
          </select>
        </div>

        <div>
          <label htmlFor="wali_kelas" className="block">
            Wali Kelas:
          </label>
          <input
            type="text"
            name="wali_kelas"
            id="wali_kelas"
            value={waliKelas}
            readOnly
            className="border border-gray-300 rounded px-2 py-1 bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Add AddMassal
        </button>
      </form>
    </div>
  );
}

function HafalanForm() {
  const [kelas, setKelas] = useState("");
  const [searchNama, setSearchNama] = useState("");
  const [selectedSantri, setSelectedSantri] = useState(null);
  const [total, setTotal] = useState("");
  const [surah, setSurah] = useState("");
  const [halaman, setHalaman] = useState("");
  const [ayat, setAyat] = useState("");
  const [santriOptions, setSantriOptions] = useState([]);
  const [hafalan, setHafalan] = useState([]);
  const [tahsin, setTahsin] = useState([]);
  const [surahTahsin, setSurahTahsin] = useState("");
  const [halamanTahsin, setHalamanTahsin] = useState("");
  const [ayatTahsin, setAyatTahsin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (kelas) {
      fetchSantriOptions();
    }
  }, [kelas]);

  const fetchSantriOptions = async () => {
    try {
      const response = await axios.get(`${URL}/santri`);
      const filteredSantri = response.data.filter(
        (santri) => santri.kelas === kelas
      );
      setSantriOptions(filteredSantri);
    } catch (error) {
      console.error("Error fetching santri options:", error);
    }
  };

  useEffect(() => {
    if (selectedSantri) {
      fetchHafalan(selectedSantri.id);
    }
  }, [selectedSantri]);

  const fetchHafalan = async (santriId) => {
    try {
      const responseHafalan = await axios.get(
        `${URL}/santri/${santriId}/hafalan`
      );
      // console.log("API response:", responseHafalan.data); // Check the data received from the API

      const hafalanData = responseHafalan.data.map((item) => ({
        id: item.id,
        total: item.total,
        surat: item.surat,
        halaman: item.halaman,
        ayat: item.ayat,
      }));

      setHafalan(hafalanData);

      const responseTahsin = await axios.get(
        `${URL}/santri/${santriId}/tahsin`
      );
      // console.log("API response:", responseHafalan.data); // Check the data received from the API

      const tahsinData = responseTahsin.data.map((item) => ({
        id: item.id,
        surat: item.surat,
        halaman: item.halaman,
        ayat: item.ayat,
      }));

      setTahsin(tahsinData);
    } catch (error) {
      console.error("Error fetching hafalan data:", error);
    }
  };

  const handleKelasChange = (e) => {
    const selectedKelas = e.target.value;
    setKelas(selectedKelas);
    setSelectedSantri(null);
    setSearchNama("");
    setSantriOptions([]);
  };

  const handleSearchNamaChange = (e) => {
    const selectedSantriId = Number(e.target.value);
    const selectedSantri = santriOptions.find(
      (option) => option.id === selectedSantriId
    );
    setSelectedSantri(selectedSantri || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${URL}/santri/${selectedSantri.id}/hafalan`, {
        total: total,
        surat: surah,
        halaman: halaman,
        ayat: ayat,
      });

      await axios.post(`${URL}/santri/${selectedSantri.id}/tahsin`, {
        surat: surahTahsin,
        halaman: halamanTahsin,
        ayat: ayatTahsin,
      });

      navigate("/showall");
    } catch (error) {
      console.error("Error submitting hafalan data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-12 h-screen">
        <div className="w-full max-w-3xl">
          {/* Judul */}
          <div className="flex items-center mb-4 shadow-md py-7 rounded-md">
            <img
              src="https://picsum.photos/500/500"
              alt="Gambar"
              className="w-16 h-16 mr-4 ml-7"
            />
            <div>
              <h1 className="text-2xl font-bold">Input Pencapaian</h1>
              <h2 className="text-lg text-gray-600">
                Hafalan Al-Qur'an & Tahsin
              </h2>
            </div>
          </div>
          {/* Baris 2  */}
          {/* select class */}

          <div className="flex mb-4">
            <div className=" sm:w-1/2 mr-2">
              <label
                htmlFor="kelas"
                className="block text-sm font-medium text-gray-700"
              >
                Kelas:
              </label>
              <select
                name="kelas"
                id="kelas"
                value={kelas}
                onChange={handleKelasChange}
                className="mt-1 block w-full p-3 bg-green-200 text-green-600 font-semibold border-transparent focus:border-gray-300 rounded-md focus:bg-white focus:ring-0"
              >
                <option value="">Pilih Kelas</option>
                <option value="" disabled className="bg-slate-100">
                  Kelas X
                </option>
                <option value="X MIPA 1">X MIPA 1</option>
                <option value="X MIPA 2">X MIPA 2</option>
                <option value="X MIPA 3">X MIPA 3</option>
                <option value="X MIPA 4">X MIPA 4</option>
                <option value="X MIPA 5">X MIPA 5</option>
                <option value="X MIPA 6">X MIPA 6</option>
                <option value="X MIPA 7">X MIPA 7</option>
                <option value="X MIPA 8">X MIPA 8</option>
                <option value="" disabled className="bg-slate-100">
                  Kelas XI
                </option>
                <option value="XI MIPA 1">XI MIPA 1</option>
                <option value="XI MIPA 2">XI MIPA 2</option>
                <option value="XI SOSIAL 3">XI SOSIAL 3</option>
                <option value="XI SYARI'AH 4">XI SYARI'AH 4</option>
                <option value="XI MIPA 5">XI MIPA 5</option>
                <option value="XI MIPA 6">XI MIPA 6</option>
                <option value="XI SOSIAL 7">XI SOSIAL 7</option>
                <option value="" disabled className="bg-slate-100">
                  Kelas XII
                </option>
                <option value="XII MIPA 1">XII MIPA 1</option>
                <option value="XII MIPA 2">XII MIPA 2</option>
                <option value="XII MIPA 3">XII MIPA 3</option>
                <option value="XII MIPA 4">XII MIPA 4</option>
                <option value="XII MIPA 5">XII MIPA 5</option>
              </select>
            </div>

            {kelas && (
              <div className=" sm:w-1/2">
                <label
                  htmlFor="searchNama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pilih Nama:
                </label>
                <div className="relative">
                  <select
                    id="searchNama"
                    value={selectedSantri ? selectedSantri.id : ""}
                    onChange={handleSearchNamaChange}
                    className="mt-1 block w-full p-3 bg-purple-200 text-purple-600 font-semibold border-transparent rounded-md focus:border-gray-300 focus:bg-white focus:ring-0"
                  >
                    <option value="">Pilih Nama Santri</option>
                    {santriOptions.map((option, index) => (
                      <option key={option.id} value={option.id}>
                        {index + 1}. {option.nama}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {selectedSantri && (
            <form onSubmit={handleSubmit}>
              {/* Judul */}
              <div className="leading-tight mt-7 mb-4 bg-blue-500 text-white p-2 w-1/5 shadow-sm">
                Hafalan Al-Quran
              </div>

              {/* Baris  3*/}
              <div className="flex mb-4">
                <div className="w-full sm:w-1/5">
                  <label
                    htmlFor="total"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Total Juz:
                  </label>
                  <input
                    className="mt-1 block w-full p-2 text-green-700 bg-green-100 border-transparent font-semibold focus:ring-0  focus:shadow-md hover:shadow-md"
                    type="number"
                    id="total"
                    value={
                      total ||
                      (hafalan.length > 0
                        ? hafalan[hafalan.length - 1].total
                        : "")
                    }
                    onChange={(e) => setTotal(e.target.value)}
                  />
                </div>

                <div className="w-full sm:w-2/5 ml-2">
                  <label
                    htmlFor="surah"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surah:
                  </label>
                  <select
                    className="mt-1 block w-full p-2 bg-yellow-200 text-yellow-600 border-transparent font-semibold focus:ring-0  focus:shadow-md hover:shadow-md"
                    id="surah"
                    value={
                      surah ||
                      (hafalan.length > 0
                        ? hafalan[hafalan.length - 1].surat
                        : "")
                    }
                    onChange={(e) => setSurah(e.target.value)}
                  >
                    <option value="">Pilih Surah</option>
                    <option value="Al-Fatihah">1. Al-Fatihah</option>
                    <option value="Al-Baqarah">2. Al-Baqarah</option>
                    <option value="Ali ‘Imran">3. Ali ‘Imran</option>
                    <option value="An-Nisa’">4. An-Nisa’</option>
                    <option value="Al-Ma’idah">5. Al-Ma’idah</option>
                    <option value="Al-An’am">6. Al-An’am</option>
                    <option value="Al-A’raf">7. Al-A’raf</option>
                    <option value="Al-Anfal">8. Al-Anfal</option>
                    <option value="At-Taubah">9. At-Taubah</option>
                    <option value="Yunus">10. Yunus</option>
                    <option value="Hud ">11. Hud </option>
                    <option value="Yusuf">12. Yusuf</option>
                    <option value="Ar-Ra’d">13. Ar-Ra’d</option>
                    <option value="Ibrahim">14. Ibrahim</option>
                    <option value="Al-Hijr">15. Al-Hijr</option>
                    <option value="An-Nahl">16. An-Nahl</option>
                    <option value="Al-Isra’">17. Al-Isra’</option>
                    <option value="Al-Kahf">18. Al-Kahf</option>
                    <option value="Maryam">19. Maryam</option>
                    <option value="Taha">20. Taha</option>
                    <option value="Al-Anbiya’">21. Al-Anbiya’</option>
                    <option value="Al-Hajj">22. Al-Hajj</option>
                    <option value="Al-Mu’minun">23. Al-Mu’minun</option>
                    <option value="An-Nur">24. An-Nur</option>
                    <option value="Al-Furqan">25. Al-Furqan</option>
                    <option value="Asy-Syu’ara’">26. Asy-Syu’ara’</option>
                    <option value="An-Naml">27. An-Naml</option>
                    <option value="Al-Qasas">28. Al-Qasas</option>
                    <option value="Al-‘Ankabut">29. Al-‘Ankabut</option>
                    <option value="Ar-Rum">30. Ar-Rum</option>
                    <option value="Luqman">31. Luqman</option>
                    <option value="As-Sajdah">32. As-Sajdah</option>
                    <option value="Al-Ahzab">33. Al-Ahzab</option>
                    <option value="Saba’">34. Saba’</option>
                    <option value="Fatir">35. Fatir</option>
                    <option value="Yasin">36. Yasin</option>
                    <option value="As-Saffat">37. As-Saffat</option>
                    <option value="Sad">38. Sad</option>
                    <option value="Az-Zumar">39. Az-Zumar</option>
                    <option value="Gafir">40. Gafir</option>
                    <option value="Fussilat">41. Fussilat</option>
                    <option value="Asy-Syura">42. Asy-Syura</option>
                    <option value="Az-Zukhruf">43. Az-Zukhruf</option>
                    <option value="Ad-Dukhan">44. Ad-Dukhan</option>
                    <option value="Al-Jasiyah">45. Al-Jasiyah</option>
                    <option value="Al-Ahqaf">46. Al-Ahqaf</option>
                    <option value="Muhammad">47. Muhammad</option>
                    <option value="Al-Fath">48. Al-Fath</option>
                    <option value="Al-Hujurat">49. Al-Hujurat</option>
                    <option value="Qaf">50. Qaf</option>
                    <option value="Az-Zariyat">51. Az-Zariyat</option>
                    <option value="At-Tur">52. At-Tur</option>
                    <option value="An-Najm">53. An-Najm</option>
                    <option value="Al-Qamar">54. Al-Qamar</option>
                    <option value="Ar-Rahman">55. Ar-Rahman</option>
                    <option value="Al-Waqi’ah">56. Al-Waqi’ah</option>
                    <option value="Al-Hadid">57. Al-Hadid</option>
                    <option value="Al-Mujadalah">58. Al-Mujadalah</option>
                    <option value="Al-Hasyr">59. Al-Hasyr</option>
                    <option value="Al-Mumtahanah">60. Al-Mumtahanah</option>
                    <option value="As-Saff">61. As-Saff</option>
                    <option value="Al-Jumu’ah">62. Al-Jumu’ah</option>
                    <option value="Al-Munafiqun">63. Al-Munafiqun</option>
                    <option value="At-Tagabun">64. At-Tagabun</option>
                    <option value="At-Talaq">65. At-Talaq</option>
                    <option value="At-Tahrim">66. At-Tahrim</option>
                    <option value="Al-Mulk">67. Al-Mulk</option>
                    <option value="Al-Qalam">68. Al-Qalam</option>
                    <option value="Al-Haqqah">69. Al-Haqqah</option>
                    <option value="Al-Ma’arij">70. Al-Ma’arij</option>
                    <option value="Nuh">71. Nuh</option>
                    <option value="Al-Jinn">72. Al-Jinn</option>
                    <option value="Al-Muzzammil">73. Al-Muzzammil</option>
                    <option value="Al-Muddassir">74. Al-Muddassir</option>
                    <option value="Al-Qiyamah">75. Al-Qiyamah</option>
                    <option value="Al-Insan">76. Al-Insan</option>
                    <option value="Al-Mursalat">77. Al-Mursalat</option>
                    <option value="An-Naba’">78. An-Naba’</option>
                    <option value="An-Nazi’at">79. An-Nazi’at</option>
                    <option value="‘Abasa">80. ‘Abasa</option>
                    <option value="At-Takwir">81. At-Takwir</option>
                    <option value="Al-Infitar">82. Al-Infitar</option>
                    <option value="Al-Mutaffifin">83. Al-Mutaffifin</option>
                    <option value="Al-Insyiqaq">84. Al-Insyiqaq</option>
                    <option value="Al-Buruj">85. Al-Buruj</option>
                    <option value="At-Tariq">86. At-Tariq</option>
                    <option value="Al-A’la">87. Al-A’la</option>
                    <option value="Al-Gasyiyah">88. Al-Gasyiyah</option>
                    <option value="Al-Fajr">89. Al-Fajr</option>
                    <option value="Al-Balad">90. Al-Balad</option>
                    <option value="Asy-Syams">91. Asy-Syams</option>
                    <option value="Al-Lail">92. Al-Lail</option>
                    <option value="Ad-Duha">93. Ad-Duha</option>
                    <option value="Asy-Syarh">94. Asy-Syarh</option>
                    <option value="At-Tin">95. At-Tin</option>
                    <option value="Al-‘Alaq">96. Al-‘Alaq</option>
                    <option value="Al-Qadr">97. Al-Qadr</option>
                    <option value="Al-Bayyinah">98. Al-Bayyinah</option>
                    <option value="Az-Zalzalah">99. Az-Zalzalah</option>
                    <option value="Al-‘Adiyat">100. Al-‘Adiyat</option>
                    <option value="Al-Qari’ah">101. Al-Qari’ah</option>
                    <option value="At-Takasur">102. At-Takasur</option>
                    <option value="Al-‘Asr">103. Al-‘Asr</option>
                    <option value="Al-Humazah">104. Al-Humazah</option>
                    <option value="Al-Fil">105. Al-Fil</option>
                    <option value="Quraisy">106. Quraisy</option>
                    <option value="Al-Ma’un">107. Al-Ma’un</option>
                    <option value="Al-Kausar">108. Al-Kausar</option>
                    <option value="Al-Kafirun">109. Al-Kafirun</option>
                    <option value="An-Nasr">110. An-Nasr</option>
                    <option value="Al-Lahab">111. Al-Lahab</option>
                    <option value="Al-Ikhlas">112. Al-Ikhlas</option>
                    <option value="Al-Falaq">113. Al-Falaq</option>
                    <option value="An-Nas">114. An-Nas</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/5 ml-2">
                  <label
                    htmlFor="halaman"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Halaman:
                  </label>
                  <input
                    className="mt-1 block w-full p-2 font-semibold border-transparent bg-purple-200 text-purple-600  focus:ring-0  focus:shadow-md hover:shadow-md"
                    type="number"
                    id="halaman"
                    value={
                      halaman ||
                      (hafalan.length > 0
                        ? hafalan[hafalan.length - 1].halaman
                        : "")
                    }
                    onChange={(e) => setHalaman(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/5 ml-2">
                  <label
                    htmlFor="halaman"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ayat:
                  </label>
                  <input
                    className="mt-1 block w-full p-2 font-semibold border-transparent  focus:shadow-md hover:shadow-md bg-red-200 text-red-600  focus:ring-0 "
                    type="number"
                    id="ayat"
                    value={
                      ayat ||
                      (hafalan.length > 0
                        ? hafalan[hafalan.length - 1].ayat
                        : "")
                    }
                    onChange={(e) => setAyat(e.target.value)}
                  />
                </div>
              </div>

              <div className="leading-tight mt-7 mb-4 bg-blue-500 text-white p-2 w-1/5 shadow-sm">
                Tahsin Al-Quran
              </div>
              {/* Baris 4 */}
              <div className="flex mb-4">
                <div className="w-full sm:w-1/3 mr-2">
                  <label
                    htmlFor="surah"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surah:
                  </label>
                  <select
                    className="mt-1 block w-full p-2 bg-yellow-200 text-yellow-600 border-transparent font-semibold focus:ring-0  focus:shadow-md hover:shadow-md"
                    id="surah"
                    value={
                      surahTahsin ||
                      (hafalan.length > 0
                        ? hafalan[hafalan.length - 1].surat
                        : "")
                    }
                    onChange={(e) => setSurah(e.target.value)}
                  >
                    <option value="">Pilih Surah</option>
                    <option value="Al-Fatihah">1. Al-Fatihah</option>
                    <option value="Al-Baqarah">2. Al-Baqarah</option>
                    <option value="Ali ‘Imran">3. Ali ‘Imran</option>
                    <option value="An-Nisa’">4. An-Nisa’</option>
                    <option value="Al-Ma’idah">5. Al-Ma’idah</option>
                    <option value="Al-An’am">6. Al-An’am</option>
                    <option value="Al-A’raf">7. Al-A’raf</option>
                    <option value="Al-Anfal">8. Al-Anfal</option>
                    <option value="At-Taubah">9. At-Taubah</option>
                    <option value="Yunus">10. Yunus</option>
                    <option value="Hud ">11. Hud </option>
                    <option value="Yusuf">12. Yusuf</option>
                    <option value="Ar-Ra’d">13. Ar-Ra’d</option>
                    <option value="Ibrahim">14. Ibrahim</option>
                    <option value="Al-Hijr">15. Al-Hijr</option>
                    <option value="An-Nahl">16. An-Nahl</option>
                    <option value="Al-Isra’">17. Al-Isra’</option>
                    <option value="Al-Kahf">18. Al-Kahf</option>
                    <option value="Maryam">19. Maryam</option>
                    <option value="Taha">20. Taha</option>
                    <option value="Al-Anbiya’">21. Al-Anbiya’</option>
                    <option value="Al-Hajj">22. Al-Hajj</option>
                    <option value="Al-Mu’minun">23. Al-Mu’minun</option>
                    <option value="An-Nur">24. An-Nur</option>
                    <option value="Al-Furqan">25. Al-Furqan</option>
                    <option value="Asy-Syu’ara’">26. Asy-Syu’ara’</option>
                    <option value="An-Naml">27. An-Naml</option>
                    <option value="Al-Qasas">28. Al-Qasas</option>
                    <option value="Al-‘Ankabut">29. Al-‘Ankabut</option>
                    <option value="Ar-Rum">30. Ar-Rum</option>
                    <option value="Luqman">31. Luqman</option>
                    <option value="As-Sajdah">32. As-Sajdah</option>
                    <option value="Al-Ahzab">33. Al-Ahzab</option>
                    <option value="Saba’">34. Saba’</option>
                    <option value="Fatir">35. Fatir</option>
                    <option value="Yasin">36. Yasin</option>
                    <option value="As-Saffat">37. As-Saffat</option>
                    <option value="Sad">38. Sad</option>
                    <option value="Az-Zumar">39. Az-Zumar</option>
                    <option value="Gafir">40. Gafir</option>
                    <option value="Fussilat">41. Fussilat</option>
                    <option value="Asy-Syura">42. Asy-Syura</option>
                    <option value="Az-Zukhruf">43. Az-Zukhruf</option>
                    <option value="Ad-Dukhan">44. Ad-Dukhan</option>
                    <option value="Al-Jasiyah">45. Al-Jasiyah</option>
                    <option value="Al-Ahqaf">46. Al-Ahqaf</option>
                    <option value="Muhammad">47. Muhammad</option>
                    <option value="Al-Fath">48. Al-Fath</option>
                    <option value="Al-Hujurat">49. Al-Hujurat</option>
                    <option value="Qaf">50. Qaf</option>
                    <option value="Az-Zariyat">51. Az-Zariyat</option>
                    <option value="At-Tur">52. At-Tur</option>
                    <option value="An-Najm">53. An-Najm</option>
                    <option value="Al-Qamar">54. Al-Qamar</option>
                    <option value="Ar-Rahman">55. Ar-Rahman</option>
                    <option value="Al-Waqi’ah">56. Al-Waqi’ah</option>
                    <option value="Al-Hadid">57. Al-Hadid</option>
                    <option value="Al-Mujadalah">58. Al-Mujadalah</option>
                    <option value="Al-Hasyr">59. Al-Hasyr</option>
                    <option value="Al-Mumtahanah">60. Al-Mumtahanah</option>
                    <option value="As-Saff">61. As-Saff</option>
                    <option value="Al-Jumu’ah">62. Al-Jumu’ah</option>
                    <option value="Al-Munafiqun">63. Al-Munafiqun</option>
                    <option value="At-Tagabun">64. At-Tagabun</option>
                    <option value="At-Talaq">65. At-Talaq</option>
                    <option value="At-Tahrim">66. At-Tahrim</option>
                    <option value="Al-Mulk">67. Al-Mulk</option>
                    <option value="Al-Qalam">68. Al-Qalam</option>
                    <option value="Al-Haqqah">69. Al-Haqqah</option>
                    <option value="Al-Ma’arij">70. Al-Ma’arij</option>
                    <option value="Nuh">71. Nuh</option>
                    <option value="Al-Jinn">72. Al-Jinn</option>
                    <option value="Al-Muzzammil">73. Al-Muzzammil</option>
                    <option value="Al-Muddassir">74. Al-Muddassir</option>
                    <option value="Al-Qiyamah">75. Al-Qiyamah</option>
                    <option value="Al-Insan">76. Al-Insan</option>
                    <option value="Al-Mursalat">77. Al-Mursalat</option>
                    <option value="An-Naba’">78. An-Naba’</option>
                    <option value="An-Nazi’at">79. An-Nazi’at</option>
                    <option value="‘Abasa">80. ‘Abasa</option>
                    <option value="At-Takwir">81. At-Takwir</option>
                    <option value="Al-Infitar">82. Al-Infitar</option>
                    <option value="Al-Mutaffifin">83. Al-Mutaffifin</option>
                    <option value="Al-Insyiqaq">84. Al-Insyiqaq</option>
                    <option value="Al-Buruj">85. Al-Buruj</option>
                    <option value="At-Tariq">86. At-Tariq</option>
                    <option value="Al-A’la">87. Al-A’la</option>
                    <option value="Al-Gasyiyah">88. Al-Gasyiyah</option>
                    <option value="Al-Fajr">89. Al-Fajr</option>
                    <option value="Al-Balad">90. Al-Balad</option>
                    <option value="Asy-Syams">91. Asy-Syams</option>
                    <option value="Al-Lail">92. Al-Lail</option>
                    <option value="Ad-Duha">93. Ad-Duha</option>
                    <option value="Asy-Syarh">94. Asy-Syarh</option>
                    <option value="At-Tin">95. At-Tin</option>
                    <option value="Al-‘Alaq">96. Al-‘Alaq</option>
                    <option value="Al-Qadr">97. Al-Qadr</option>
                    <option value="Al-Bayyinah">98. Al-Bayyinah</option>
                    <option value="Az-Zalzalah">99. Az-Zalzalah</option>
                    <option value="Al-‘Adiyat">100. Al-‘Adiyat</option>
                    <option value="Al-Qari’ah">101. Al-Qari’ah</option>
                    <option value="At-Takasur">102. At-Takasur</option>
                    <option value="Al-‘Asr">103. Al-‘Asr</option>
                    <option value="Al-Humazah">104. Al-Humazah</option>
                    <option value="Al-Fil">105. Al-Fil</option>
                    <option value="Quraisy">106. Quraisy</option>
                    <option value="Al-Ma’un">107. Al-Ma’un</option>
                    <option value="Al-Kausar">108. Al-Kausar</option>
                    <option value="Al-Kafirun">109. Al-Kafirun</option>
                    <option value="An-Nasr">110. An-Nasr</option>
                    <option value="Al-Lahab">111. Al-Lahab</option>
                    <option value="Al-Ikhlas">112. Al-Ikhlas</option>
                    <option value="Al-Falaq">113. Al-Falaq</option>
                    <option value="An-Nas">114. An-Nas</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/3 mr-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="halaman"
                  >
                    Halaman:
                  </label>
                  <input
                    className="mt-1 block w-full p-2 font-semibold  focus:shadow-md hover:shadow-md bg-purple-200 text-purple-600 "
                    type="number"
                    id="halaman"
                    value={
                      halamanTahsin ||
                      (tahsin.length > 0
                        ? tahsin[tahsin.length - 1].halaman
                        : "")
                    }
                    onChange={(e) => setHalamanTahsin(e.target.value)}
                  />
                </div>
                <div className="w-full sm:w-1/3 mr-2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="ayat"
                  >
                    Ayat:
                  </label>
                  <input
                    className="mt-1 block w-full p-2 font-semibold  focus:shadow-md hover:shadow-md bg-red-200 text-red-600"
                    type="number"
                    id="ayat"
                    value={
                      ayatTahsin ||
                      (tahsin.length > 0 ? tahsin[tahsin.length - 1].ayat : "")
                    }
                    onChange={(e) => setAyatTahsin(e.target.value)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

const IzinSakit = () => {
  const [kelas, setKelas] = useState("");
  const [santriOptions, setSantriOptions] = useState([]);
  const [selectedSantri, setSelectedSantri] = useState(null);
  const [searchNama, setSearchNama] = useState("");
  const [santri, setSantri] = useState("");
  const [sakitIzin, setSakitIzin] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [sampaiTanggalJam, setSampaiTanggalJam] = useState("");
  const [pilihGuruMurokib, setPilihGuruMurokib] = useState("");
  const [namaGuruMurokib, setNamaGuruMurokib] = useState("");

  const today = new Date().toISOString().slice(0, 16);
  const navigate = useNavigate();

  useEffect(() => {
    if (kelas) {
      fetchSantriOptions();
    }
  }, [kelas]);

  const fetchSantriOptions = async () => {
    try {
      const response = await axios.get(`${URL}/santri`);
      const filteredSantri = response.data.filter(
        (santri) => santri.kelas === kelas
      );
      setSantriOptions(filteredSantri);
    } catch (error) {
      console.error("Error fetching santri options:", error);
    }
  };

  const handleKelasChange = (e) => {
    const selectedKelas = e.target.value;
    setKelas(selectedKelas);
    setSelectedSantri(null);
    setSearchNama("");
    setSantriOptions([]);
  };

  const handleSearchNamaChange = (e) => {
    const selectedSantriId = Number(e.target.value);
    const selectedSantri = santriOptions.find(
      (option) => option.id === selectedSantriId
    );
    setSelectedSantri(selectedSantri || null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${URL}/santri/${selectedSantri.id}/isasi`, {
        status: sakitIzin,
        keterangan,
        sampai_tgl: sampaiTanggalJam,
        pejuang: pilihGuruMurokib,
        ttd: namaGuruMurokib,
      });

      navigate("/showall");
    } catch (error) {
      console.error("Error submitting hafalan data:", error);
    }

    // Lakukan pengolahan data sesuai kebutuhan Anda
    // Di sini, Anda dapat melakukan manipulasi data atau mengirim data ke server

    // Contoh tampilan data di console log
    // console.log("Data Absensi:");
    // console.log("Kelas:", kelas);
    // console.log("Santri:", santri);
    // console.log("Sakit/Izin:", sakitIzin);
    // console.log("Keterangan:", keterangan);
    // console.log("Sampai Tanggal/Jam:", sampaiTanggalJam);
    // console.log("Pilih Guru/Murokib:", pilihGuruMurokib);
    // console.log("Nama Guru/Murokib:", namaGuruMurokib);

    // // Reset nilai form setelah submit
    setKelas("");
    setSantri("");
    setSakitIzin("");
    setKeterangan("");
    setSelectedSantri("");
    setNamaGuruMurokib("");
    setPilihGuruMurokib("");
    setSampaiTanggalJam("");
  };

  // // Mock data santri, kelas, guru, dan murokib
  // const dataSantriX = [
  //   { id: 1, nama: "Santri 1X", status: "Hadir" },
  //   { id: 2, nama: "Santri 2X", status: "Hadir" }
  // ];

  // const dataSantriXI = [
  //   { id: 1, nama: "Santri 1XI", status: "Hadir" },
  //   { id: 2, nama: "Santri 2XI", status: "Hadir" }
  // ];

  // const dataKelas = [
  //   { id: 1, kelas: "X" },
  //   { id: 2, kelas: "XI" }
  // ];

  const dataGuru = [
    { id: 1, nama: "ustadz yusuf pazuruan" },
    { id: 2, nama: "ustadz rijub widodo" },
  ];

  const dataMurokib = [
    { id: 1, nama: "yoyok sugiwaksono" },
    { id: 2, nama: "aprijaluddin salman" },
  ];

  // const handleKelasChange = (e) => {
  //   setKelas(e.target.value);
  //   setSantri("");
  //   setSakitIzin("");
  //   setKeterangan("");
  //   setSampaiTanggalJam("");
  //   setPilihGuruMurokib("");
  //   setNamaGuruMurokib("");
  // };

  // const handleSantriChange = (e) => {
  //   setSantri(e.target.value);
  //   setSakitIzin("");
  //   setKeterangan("");
  //   setSampaiTanggalJam("");
  //   setPilihGuruMurokib("");
  //   setNamaGuruMurokib("");
  // };

  const handleSakitIzinChange = (e) => {
    setSakitIzin(e.target.value);
  };

  const handlePilihGuruMurokibChange = (e) => {
    setPilihGuruMurokib(e.target.value);
    setNamaGuruMurokib("");
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">
        Aplikasi Absensi Santri Izin / Sakit
      </h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="kelas">
            Pilih Kelas:
          </label>
          <select
            id="kelas"
            className="p-2 border border-gray-300 rounded w-full"
            value={kelas}
            onChange={handleKelasChange}
            required
          >
            <option value="">Pilih Kelas</option>
            <option value="" disabled className="bg-slate-100">
              Kelas X
            </option>
            <option value="X MIPA 1">X MIPA 1</option>
            <option value="X MIPA 2">X MIPA 2</option>
            <option value="X MIPA 3">X MIPA 3</option>
            <option value="X MIPA 4">X MIPA 4</option>
            <option value="X MIPA 5">X MIPA 5</option>
            <option value="X MIPA 6">X MIPA 6</option>
            <option value="X MIPA 7">X MIPA 7</option>
            <option value="X MIPA 8">X MIPA 8</option>
            <option value="" disabled className="bg-slate-100">
              Kelas XI
            </option>
            <option value="XI MIPA 1">XI MIPA 1</option>
            <option value="XI MIPA 2">XI MIPA 2</option>
            <option value="XI SOSIAL 3">XI SOSIAL 3</option>
            <option value="XI SYARI'AH 4">XI SYARI'AH 4</option>
            <option value="XI MIPA 5">XI MIPA 5</option>
            <option value="XI MIPA 6">XI MIPA 6</option>
            <option value="XI SOSIAL 7">XI SOSIAL 7</option>
            <option value="" disabled className="bg-slate-100">
              Kelas XII
            </option>
            <option value="XII MIPA 1">XII MIPA 1</option>
            <option value="XII MIPA 2">XII MIPA 2</option>
            <option value="XII MIPA 3">XII MIPA 3</option>
            <option value="XII MIPA 4">XII MIPA 4</option>
            <option value="XII MIPA 5">XII MIPA 5</option>
          </select>
        </div>
        {kelas && (
          <div className=" sm:w-1/2 mb-4">
            <label
              htmlFor="searchNama"
              className="block text-sm font-medium text-gray-700"
            >
              Pilih Nama:
            </label>
            <div className="relative">
              <select
                id="searchNama"
                value={selectedSantri ? selectedSantri.id : ""}
                onChange={handleSearchNamaChange}
                className="mt-1 block w-full p-3 bg-purple-200 text-purple-600 font-semibold border-transparent rounded-md focus:border-gray-300 focus:bg-white focus:ring-0"
              >
                <option value="">Pilih Nama Santri</option>
                {santriOptions.map((option, index) => (
                  <option key={option.id} value={option.id}>
                    {index + 1}. {option.nama}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {selectedSantri && (
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="sakitIzin">
              Sakit/Izin:
            </label>
            <select
              id="sakitIzin"
              className="p-2 border border-gray-300 rounded w-full"
              value={sakitIzin}
              onChange={handleSakitIzinChange}
              required
            >
              <option value="">Pilih Sakit/Izin</option>
              <option value="sakit">Sakit</option>
              <option value="izin">Izin</option>
            </select>
          </div>
        )}
        {selectedSantri && sakitIzin && (
          <div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="keterangan">
                Keterangan:
              </label>
              <textarea
                id="keterangan"
                className="p-2 border border-gray-300 rounded w-full"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2"
                htmlFor="sampaiTanggalJam"
              >
                Sampai Tanggal/Jam:
              </label>
              <input
                type="datetime-local"
                id="sampaiTanggalJam"
                className="p-2 border border-gray-300 rounded w-full"
                value={sampaiTanggalJam}
                onChange={(e) => setSampaiTanggalJam(e.target.value)}
                min={today}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-bold mb-2"
                htmlFor="pilihGuruMurokib"
              >
                Pilih Guru/Murokib:
              </label>
              <select
                id="pilihGuruMurokib"
                className="p-2 border border-gray-300 rounded w-full"
                value={pilihGuruMurokib}
                onChange={handlePilihGuruMurokibChange}
                required
              >
                <option value="">Pilih Guru/Murokib</option>
                <option value="guru">Guru</option>
                <option value="murokib">Murokib</option>
              </select>
            </div>
            {pilihGuruMurokib && (
              <div className="mb-4">
                <label
                  className="block font-bold mb-2"
                  htmlFor="namaGuruMurokib"
                >
                  {pilihGuruMurokib === "guru"
                    ? "Pilih Nama Guru:"
                    : "Pilih Nama Murokib:"}
                </label>
                <select
                  id="namaGuruMurokib"
                  className="p-2 border border-gray-300 rounded w-full"
                  value={namaGuruMurokib}
                  onChange={(e) => setNamaGuruMurokib(e.target.value)}
                  required
                >
                  <option value="">Pilih Nama</option>
                  {pilihGuruMurokib === "guru"
                    ? {dataGuru&&  dataGuru.map((item) => (
                        <option key={item.id} value={item.nama}>
                          {item.nama}
                        </option>
                      ))}
                    : dataMurokib.map((item) => (
                        <option key={item.id} value={item.nama}>
                          {item.nama}
                        </option>
                      ))}
                </select>
              </div>
            )}
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={!namaGuruMurokib}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const AbsensiSantri = () => {
  const [mapel, setMapel] = useState("");
  const [kelas, setKelas] = useState("");
  // const [santriList, setSantriList] = useState([]);
  const [guru, setGuru] = useState("");
  const [berhalangan, setBerhalangan] = useState("hadir");

  const [santriOptions, setSantriOptions] = useState([]);
  const [machingsSantri, setMachingsSantri] = useState([]);

  useEffect(() => {
    if (kelas) {
      fetchSantriOptions();
    }
  }, [kelas]);

  const fetchSantriOptions = async () => {
    try {
      const response = await axios.get(`${URL}/santri`);
      const filteredSantri = response.data.filter(
        (santri) => santri.kelas === kelas
      );
      const updatedSantriList = filteredSantri.map((santri) => {
        return {
          ...santri,
          status: "hadir",
        };
      });
      setSantriOptions(updatedSantriList);
    } catch (error) {
      console.error("Error fetching santri options:", error);
    }
  };

  useEffect(() => {
    if (santriOptions) {
      fetchSantriSakitIzin();
    }
  }, [santriOptions]);

  const fetchSantriSakitIzin = async () => {
    try {
      const id = santriOptions.map((s) => s.id);
      const response = await axios.get(`${URL}/santri/${Number(id)}/isasi`);

      // setSantriSakitIzin(response.data);

      const SSI = response.data;
      const result = santriOptions.map((santri) => {
        const matchingIsasi = SSI.find((si) => si.santri_id === santri.id);
        if (matchingIsasi) {
          return {
            id: santri.id,
            status: matchingIsasi.status,
            keterangan: matchingIsasi.keterangan,
            sampai_tgl: matchingIsasi.sampai_tgl,
            ttd: matchingIsasi.ttd,
          };
        }
        // return {
        //   id: santri.id,
        //   status: santri.status,
        //   keterangan: "",
        //   sampai_tgl: "",
        //   ttd: ""
        // };
      });

      const resultMachingsSantri = result.filter(
        (ms) => ms && ms.id !== undefined
      );

      setMachingsSantri(resultMachingsSantri);
      // console.log(resultMachingsSantri);
    } catch (error) {
      console.error("Error fetching santri options:", error);
    }
  };

  // Cek data apakah ada yang sakit
  // const { id, status,keterangan, sampai_tgl, ttd } = data

  // const result = santriOptions.map((santri) => {
  //   const matchingIsasi = santriSakitIzin.find((si) => si.santri_id === santri.id);
  //   if (matchingIsasi) {
  //     return {
  //       id: santri.id,
  //       status: matchingIsasi.status,
  //       keterangan: matchingIsasi.keterangan,
  //       sampai_tgl: matchingIsasi.sampai_tgl,
  //       ttd: matchingIsasi.ttd
  //     };
  //   }
  //   return {
  //     id: santri.id,
  //     status: santri.status,
  //     keterangan: "",
  //     sampai_tgl: "",
  //     ttd: ""
  //   };
  // });

  // setMachingsSantri(result)

  // console.log(santriOptions);

  const handleKelasChange = (e) => {
    const selectedKelas = e.target.value;
    setKelas(selectedKelas);
    // setSelectedSantri(null);
    // setSearchNama("");
    setSantriOptions([]);
  };

  // const dataKelas = [
  //   { id: 1, kelas: 'x' },
  //   { id: 2, kelas: 'xl' }
  // ];

  // const dataSantri = {
  //   x: [
  //     { id: 1, nama: "Santri 1X", status: "hadir" },
  //     { id: 2, nama: "Santri 2X", status: "hadir" }
  //   ],
  //   xl: [
  //     { id: 1, nama: "Santri 1XI", status: "hadir" },
  //     { id: 2, nama: "Santri 2XI", status: "hadir" }
  //   ]
  // };

  const daftarMataPelajaran = [
    { id: 1, mapel: "Matematika", namaGuru: "Ustadz Rijub Widodo" },
    { id: 2, mapel: "Bahasa Indonesia", namaGuru: "Ustadz Yusuf Pazuruan" },
    { id: 3, mapel: "Fisika", namaGuru: "Ustadz Ahmad Syarif" },
    { id: 4, mapel: "Kimia", namaGuru: "Ustadz Hafidz Ramadhan" },
    { id: 5, mapel: "Biologi", namaGuru: "Ustadzah Laila Nur" },
    { id: 6, mapel: "Sejarah", namaGuru: "Ustadz Zainal Abidin" },
    { id: 7, mapel: "Geografi", namaGuru: "Ustadzah Aisyah Fitri" },
    { id: 8, mapel: "Ekonomi", namaGuru: "Ustadz Ahmad Farhan" },
    { id: 9, mapel: "Sosiologi", namaGuru: "Ustadzah Nisa Hidayati" },
    { id: 10, mapel: "Bahasa Inggris", namaGuru: "Ustadzah Siti Aminah" },
    { id: 11, mapel: "Seni Budaya", namaGuru: "Ustadz Haris Purnama" },
    { id: 12, mapel: "Pendidikan Jasmani", namaGuru: "Ustadzah Maya Putri" },
    { id: 13, mapel: "Agama Islam", namaGuru: "Ustadz Abdul Rahman" },
    { id: 14, mapel: "Pemrograman", namaGuru: "Ustadz Adi Prasetyo" },
    { id: 15, mapel: "Desain Grafis", namaGuru: "Ustadzah Annisa Rahmawati" },
    { id: 16, mapel: "Kewarganegaraan", namaGuru: "Ustadz M. Faisal" },
    { id: 17, mapel: "Psikologi", namaGuru: "Ustadzah Siti Mariam" },
    { id: 18, mapel: "Akuntansi", namaGuru: "Ustadz Ahmad Suhendro" },
    { id: 19, mapel: "Antropologi", namaGuru: "Ustadzah Nabilah Fitriani" },
    {
      id: 20,
      mapel: "Pendidikan Pancasila",
      namaGuru: "Ustadz Kurnia Ramadhan",
    },
  ];

  const handleMapelChange = (e) => {
    const selectedMapel = e.target.value;
    setMapel(selectedMapel);
    const selectedGuru = daftarMataPelajaran.find(
      (item) => item.mapel === selectedMapel
    );
    if (selectedGuru) {
      setGuru(selectedGuru.namaGuru);
    } else {
      setGuru("");
    }
  };

  // const handleKelasChange = (e) => {
  //   const selectedKelas = e.target.value;
  //   setKelas(selectedKelas);
  //   renderSantriOptions(selectedKelas);
  // };

  const handleSantriStatusChange = (e, santriId) => {
    const selectedStatus = e.target.value;
    setSantriOptions((prevSantriList) => {
      const updatedSantriList = prevSantriList.map((santri) => {
        if (santri.id === santriId) {
          if (machingsSantri && machingsSantri.status === "sakit") {
            return {
              ...santri,
              status: "sakit",
              status_pengajar: berhalangan,
            };
          } else {
            return {
              ...santri,
              status: selectedStatus,
              status_pengajar: berhalangan,
            };
          }
        }
        return santri;
      });
      return updatedSantriList;
    });
  };

  // const renderSantriOptions = (selectedKelas) => {
  //   const selectedSantriList = dataSantri[selectedKelas] || [];
  //   setSantriList(selectedSantriList);
  // };

  const handleBerhalanganChange = () => {
    setBerhalangan((prevBerhalangan) => {
      return prevBerhalangan === "berhalangan" ? "hadir" : "berhalangan";
    });
  };

  // const handleSubmit = () => {
  //   console.log("santriOptions sebelum update:", santriOptions);

  //   setSantriOptions((prevSantriList) => {
  //     const updatedSantriList = prevSantriList.map((santri) => {
  //       const matchingIsasi = machingsSantri.find((ms) => ms.id === santri.id);
  //       if (matchingIsasi) {
  //         return {
  //           ...santri,
  //           status: matchingIsasi.status,
  //           status_pengajar: berhalangan
  //         };
  //       }
  //       return santri;
  //     });

  //     console.log("updatedSantriList:", updatedSantriList);
  //     return updatedSantriList;
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedSantriList = santriOptions.map((santri) => {
        const matchingIsasi = machingsSantri.find((ms) => ms.id === santri.id);
        if (matchingIsasi) {
          return {
            id: santri.id,
            status: matchingIsasi.status,
            status_pengajar: berhalangan,
            pengajar: guru,
            mapel: mapel,
          };
        }
        return {
          id: santri.id,
          status_pengajar: berhalangan,
          pengajar: guru,
          mapel: mapel,
        };
      });

      console.log("updatedSantriList:", updatedSantriList);

      await axios.post(`${URL}/santri/absensi`, {
        santriOptions: updatedSantriList,
      });

      // navigate("/showall");
    } catch (error) {
      console.error("Error submitting absensi:", error);
    }
  };

  // const ids = santriOptions.map((so)=>so.id)
  // console.log(ids.map((id)=>id.id))

  // const handleSubmit = () => {
  //   try {
  //   } catch (error) {}
  //   console.log("santriOptions sebelum update:", santriOptions);

  //   setSantriOptions((prevSantriList) => {
  //     const updatedSantriList = prevSantriList.map((santri) => {
  //       const matchingIsasi = machingsSantri.find((ms) => ms.id === santri.id);
  //       if (matchingIsasi) {
  //         return {
  //           ...santri,
  //           status: matchingIsasi.status,
  //           status_pengajar: berhalangan,
  //           pengajar: guru,
  //           mapel
  //         };
  //       }
  //       return {
  //         ...santri,
  //         status_pengajar: berhalangan,
  //         pengajar: guru,
  //         mapel
  //       };
  //     });

  //     console.log("updatedSantriList:", updatedSantriList);
  //     return updatedSantriList;
  //   });
  // };

  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Aplikasi Absensi Santri</h1>
      <div className="mb-4">
        <label className="mr-2">Pilih Mapel:</label>
        <select
          value={mapel}
          onChange={handleMapelChange}
          className="border p-2"
        >
          <option value="">Pilih Mapel</option>
          {daftarMataPelajaran.map((item) => (
            <option key={item.id} value={item.mapel}>
              {item.mapel}
            </option>
          ))}
        </select>
        {mapel && (
          <div className="mt-2">
            <label className="mr-2">Pilih Kelas:</label>
            <select
              value={kelas}
              onChange={handleKelasChange}
              className="border p-2"
            >
              <option value="">Pilih Kelas</option>
              <option value="" disabled className="bg-slate-100">
                Kelas X
              </option>
              <option value="X MIPA 1">X MIPA 1</option>
              <option value="X MIPA 2">X MIPA 2</option>
              <option value="X MIPA 3">X MIPA 3</option>
              <option value="X MIPA 4">X MIPA 4</option>
              <option value="X MIPA 5">X MIPA 5</option>
              <option value="X MIPA 6">X MIPA 6</option>
              <option value="X MIPA 7">X MIPA 7</option>
              <option value="X MIPA 8">X MIPA 8</option>
              <option value="" disabled className="bg-slate-100">
                Kelas XI
              </option>
              <option value="XI MIPA 1">XI MIPA 1</option>
              <option value="XI MIPA 2">XI MIPA 2</option>
              <option value="XI SOSIAL 3">XI SOSIAL 3</option>
              <option value="XI SYARI'AH 4">XI SYARI'AH 4</option>
              <option value="XI MIPA 5">XI MIPA 5</option>
              <option value="XI MIPA 6">XI MIPA 6</option>
              <option value="XI SOSIAL 7">XI SOSIAL 7</option>
              <option value="" disabled className="bg-slate-100">
                Kelas XII
              </option>
              <option value="XII MIPA 1">XII MIPA 1</option>
              <option value="XII MIPA 2">XII MIPA 2</option>
              <option value="XII MIPA 3">XII MIPA 3</option>
              <option value="XII MIPA 4">XII MIPA 4</option>
              <option value="XII MIPA 5">XII MIPA 5</option>
            </select>
          </div>
        )}
      </div>
      {kelas && (
        <div>
          <h2 className="text-xl font-bold mb-2">Daftar Santri:</h2>
          <table className="border-collapse">
            <thead>
              <tr className="font-bold uppercase bg-blue-600 hover:opacityt-5 text-white py-2 border-none">
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Nama</th>
                <th className="border px-4 py-2">Absensi</th>
              </tr>
            </thead>
            <tbody>
              {santriOptions.map((santri, index) => (
                <tr
                  key={index}
                  className={`mb-2 ${
                    index % 2 !== 0 && `bg-slate-50 `
                  } shadow-sm hover:shadow-md`}
                >
                  <td className="border px-3 rounded-sm py-2">{index + 1}</td>
                  <td className="border px-3 font-medium rounded-sm py-2">
                    {santri.nama}
                  </td>
                  <td className="border px-3 rounded-sm py-2 flex space-x-2">
                    {machingsSantri &&
                      machingsSantri.map((ms, index) => (
                        <div key={index}>
                          {ms && ms.id === santri.id ? (
                            <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                              <span className="font-bold bg-red-200 text-red-600 rounded-s-full px-3 uppercase text-center">
                                {ms.status[0]}
                              </span>
                              <span className="font-medium bg-purple-200 text-purple-600 rounded-sm px-2 text-center capitalize">
                                {ms.keterangan}
                              </span>
                              <span className="font-medium bg-green-200 text-center text-green-600 rounded-sm px-2 capitalize">
                                {Math.floor(
                                  (new Date(ms.sampai_tgl) - new Date()) /
                                    (1000 * 60 * 60)
                                )}{" "}
                                jam
                              </span>
                              <span className="font-medium bg-yellow-200 text-center text-yellow-600 rounded-sm px-2 capitalize rounded-e-full pe-2">
                                {ms.ttd}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <label className="items-center">
                                <input
                                  type="radio"
                                  name={`santri-status-${santri.id}`}
                                  value="hadir"
                                  checked={santri.status === "hadir"}
                                  onChange={(e) =>
                                    handleSantriStatusChange(e, santri.id)
                                  }
                                  className="mr-1"
                                />
                                <span>Hadir</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="radio"
                                  name={`santri-status-${santri.id}`}
                                  value="ghoib"
                                  checked={santri.status === "ghoib"}
                                  onChange={(e) =>
                                    handleSantriStatusChange(e, santri.id)
                                  }
                                  className="mr-1"
                                />
                                <span>Ghoib</span>
                              </label>
                            </div>
                          )}
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col sm:flex-row items-center justify-evenly mt-4 font-bold w-full sm:w-4/12 bg-green-200 text-green-800 rounded-md p-2 hover:shadow-md space-y-2 sm:space-y-0 sm:space-x-2">
            <div>Pengajar: {guru}</div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="berhalangan"
                checked={berhalangan === "berhalangan"}
                onChange={handleBerhalanganChange}
                className="mr-1"
              />
              Berhalangan
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddSantriForm />} />
          <Route path="/addmassal" element={<AddMassal />} />
          <Route path="/itahfidz" element={<HafalanForm />} />
          <Route path="/allsantri" element={<UserList />} />
          <Route path="/isasi" element={<IzinSakit />} />
          <Route path="/absensi" element={<AbsensiSantri />} />
          <Route path="/allsantri/:id" element={<DetailSantri />} />
          {/* <Route path="/showalls" element={<SantriList />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
