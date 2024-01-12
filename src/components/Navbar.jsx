import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import kebutuhantani from "../kebutuhantani.svg";
import hasiltaniicon from "../hasiltaniicon.svg";
import { HiUserGroup } from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav className="fixed flex rounded-full mx-10 mb-2 justify-center h-[10%] bottom-0 left-0 right-0 bg-lime-400">
      <ul className="flex flex-row w-[100%] items-center">
        <li className="basis-1/2 justify-center flex  ml-20 ">
          <Link to="fitur1" className="flex flex-col justify-center">
            <div className="mx-auto">
              <PiStudentBold size={25} />
            </div>
            <p className="">EduTani</p>
          </Link>
        </li>
        <li className="basis-1/2 justify-center flex  mx-10 ">
          <Link to="fitur2" className="flex flex-col justify-center">
            <div className="mx-auto z-0">
              <img src={kebutuhantani} alt="" className="h-[25px]" />
            </div>
            <p className="">Kebutuhan Tani</p>
          </Link>
        </li>
        <li className=" justify-center mx-10 flex ">
          <Link className="" to="/">
            <IoHome size={25} />
          </Link>
        </li>
        <li className="basis-1/2 justify-center flex  mx-10 ">
          <Link to="fitur3" className="flex flex-col justify-center">
            <div className="mx-auto">
              <img src={hasiltaniicon} alt="" className="h-[25px]" />
            </div>
            <p className="">Hasil Tani</p>
            {/* <NavButton text="Hasil Tani" /> */}
          </Link>
        </li>
        <li className="basis-1/2 justify-center flex  mr-20 ">
          <Link to="fitur4" className="flex flex-col justify-center">
            <div className="mx-auto">
              <HiUserGroup size={25} />
            </div>
            <p className="">Forum Diskusi</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
