import React from "react";
import CardCategory from "./CardCategory";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

export default function CategoryContainer() {
  return (
    <div className="flex relative top-28 rounded-xl mx-10 h-[200px] bg-lime-200">
      <ul className="flex flex-row gap-10 h-[80%] my-auto ml-10">
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
        <li className="">
          <CardCategory />
        </li>
      </ul>
    </div>
  );
}
