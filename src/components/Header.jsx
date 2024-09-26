import React from "react";

const Header = () => {
  let name = "{A}";
  return (
    <div className="text-white p-6 flex flex-row item-center justify-between border-[#332F2F] ml-[6%] mr-[10%]">
      <h1 className="text-3xl font-bold ">{name}</h1>
      <nav>
        {/* <ul className="flex flex-row  item-center">
          <li className="px-3 py-1 font-[600] hover:bg-[#332F2F] hover:rounded-md">
            <a href="/">Home</a>
          </li>
          <li className="px-3 py-1 font-[600] hover:bg-[#332F2F] hover:rounded-md">
            <a href="/">About</a>
          </li>
          <li className="px-3 py-1 font-[600] hover:bg-[#332F2F] hover:rounded-md">
            <a href="/">Projects</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Header;