import React from "react";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <div className=" p-3 mx-auto max-w-5xl  flex justify-between">
        <img
          className="w-16  object-contain "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
        <Link to={"/kart"} >
          <div className="flex flex-col items-center  relative p-1 ">
            <i className="bx bx-cart text-2xl "></i>
            <p className=" absolute top-0 right-0 text-[9px] text-white aspect-square p-0.5  bg-red-500 rounded-full widt " > {productCount}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
