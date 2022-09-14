import React from "react";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <div className=" p-3 mx-auto max-w-5xl  flex justify-between">
        <img
          className="w-16  object-contain "
          src="https://gumlet.assettype.com/afaqs%2F2022-08%2F69acc390-3578-4527-8355-9f443f4749e3%2FEkar.jpg?rect=0%2C0%2C1600%2C900&w=700&dpr=1.5"
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
