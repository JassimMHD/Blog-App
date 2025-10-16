import React from "react";
import Image from "next/image";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold  pt-1 pb-1 pr-2 pl-2 rounded hover:bg-black hover:text-white cursor-pointer">
          Blogger
        </h1>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black">
          Get started
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
          commodi modi inventore est. Laborum, quis!
        </p>
      </div>
    </div>
  );
};

export default Header;
