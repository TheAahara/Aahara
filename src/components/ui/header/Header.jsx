import React from "react";
import Logo from "/logo/logo.png";
import {
  Utensils,
  CalendarRange,
  PartyPopper,
} from "lucide-react";
import DesktopNavigation from "./navigation/DesktopNavigation.jsx";
import Button from "./Button.jsx";

const Header = () => {
  return (
    <header className="w-full h-24 bg-green-100 px-6 flex items-center justify-between ">

      {/* Logo */}
      <div className="text-xl font-medium text-green-700 first-letter:text-5xl first-letter:font-bold first-letter:font-serif first-letter:text-shadow-2xs first-letter:text-shadow-green-800">
        Aahara
      </div>

      {/* Navigation */}
      <DesktopNavigation /> {/* for Desktop screen sizes */}

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <Button label={"Party orders"} Icon={PartyPopper} />
        <Button label={"Subscription"} Icon={CalendarRange} />
        <Button label={"Order Now !"} Icon={Utensils} />
      </div>
      
    </header>
  );
};

export default Header;
