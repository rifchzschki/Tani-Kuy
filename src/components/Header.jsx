import React from "react";
import SearchBar from "./SearchBar";
import { FaCartShopping } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default function Header(Nama) {
  const { nama = "Nama User" } = Nama;
  return (
    <header className="gap-10 top-0 fixed flex items-center w-[100%] bg-white h-20 z-10">
      <Link className="ml-5" to="/">
        <img src={logo} alt="logo" className="object-cover ml-5 w-20 h-20" />
      </Link>
      <Link to="profile">
        <div className="flex relative items-center shadow-md  bg-lime-50 group hover:bg-lime-500 border border-lime-500 rounded-full w-[200px] h-10">
          <img
            src="assets/profileimgplaceholder.jpg"
            alt="profileimg"
            className="h-[75%] rounded-full ml-3"
          />
          <p className="mx-auto group-hover:text-white">{nama}</p>
        </div>
      </Link>
      <div className="flex right-10 absolute gap-5 mt-0 mr-4">
        <button
          type="button"
          className="bg-white w-9 h-9  items-center justify-center flex rounded-full"
        >
          <FaCartShopping size={20} />
        </button>
        <button
          type="button"
          className="bg-white w-9 h-9 right-2 items-center justify-center flex rounded-full"
        >
          <IoChatbubblesOutline size={20} />
        </button>
      </div>
      <SearchBar prop="Cari Alat & Bahan Tani" />
    </header>
  );
}
