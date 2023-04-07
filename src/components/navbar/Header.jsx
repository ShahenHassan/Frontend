import React from "react";
import Img from "../image/headerpic.jpg"


const Header = () => {
  return (
    <div className="w-full">
      <img src={Img} alt="food" className="w-full h-[300px] object-cover" />
    </div>
  );
};

export default Header;
