import React from "react";
// import {ReactComponent as MenuIcon} from '../assets/svg/menu.svg'
import { Menu } from "@styled-icons/boxicons-regular";
export default function Navbar() {
  return (
    <div className={`flex bg-white h-[3.125rem] w-full items-center`}>
      <Menu className={`w-[1.875rem] h-[1.875rem] ml-auto mr-[1.125rem]`} />
    </div>
  );
}
