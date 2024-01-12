import React from "react";
import { Link } from "react-router-dom";

export default function CardCategory() {
  return (
    <Link to="/" className="flex flex-col ">
      <img
        src="assets/placeholderimg.jpg"
        alt=""
        className="rounded-full h-40 w-40 -mt-1"
      />
      <p className="mx-auto -mt-6  px-8 rounded-md text-slate-50 bg-lime-400 shadow-sm shadow-slate-600">
        Kategori
      </p>
    </Link>
  );
}
