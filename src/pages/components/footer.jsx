import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-[100px] gap-3">
      <div className="border border-2-white  w-[240px] text-[12px] text-center">
        BREAKFAST & LUNCH & DINNER | COCKTAILS | BEER | COFFEE
      </div>
      <div className="flex flex-col items-center">
        <p className="flex items-center gap-2">
          <FaPhoneVolume size={12} /> +976 77770074
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <IoLocation size={13} /> Ulaanbaatar, Mongolia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
