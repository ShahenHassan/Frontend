import React from "react";
import { FaInstagram,FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <p className="mr-4">Follow us on:</p>
          <a
            href="https://www.instagram.com/shahen_programming/"
            className="mr-2"
          >
            <FaInstagram size={20} />
          </a>
          <a href="https://t.me/Ss2020_21" className="mr-2">
            <FaTelegram size={20} />
          </a>
        </div>
        <p className="text-white-500 text-sm">
          Adress:sulaymaniyah-baxtyarie-07707436308
        </p>
         
      </div>
    </footer>
  );
};

export default Footer;
