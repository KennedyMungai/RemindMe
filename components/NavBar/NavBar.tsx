import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="flex w-full items-center justify-between p-4 px-8 h-[10vh]">
      <Logo />
      <div className="flex gap-5 items-center justify-around">
        <UserButton afterSignOutUrl="/ " />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
