import React from "react";
import { BiDownArrow } from "react-icons/bi";

function DropDown({ setDropDown, isDropDown, Items, title }) {
  return (
    <div className="flex flex-col  justify-center relative h-full ">
      <div className="flex items-center h-full relative ">
        <div
          className=" bg-black h-full z-20 flex items-center duration-200 hover:text-thViolet cursor-pointer "
          onClick={() => setDropDown(!isDropDown)}
        >
          <li className="p-3 uppercase ">{title}</li>
          <BiDownArrow />
        </div>
        <div
          className={`absolute z-10 bg-black
                       w-full flex justify-center duration-500  ${
                         isDropDown ? "top-24" : "top-[-500%] "
                       }`}
        >
          <ul className="p-1">
            {Items.map(({ id, link }) => {
              return (
                <li key={id} className="py-3 hover:text-thViolet">
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
