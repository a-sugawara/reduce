import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Buttons.css"

function CatagoryButton({url, to, catagory}) {


  return (
    <div className="cat-btn">
      <img
        className="icon"
        src={ url || "https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"}/>
    </div>

  );
}

export default CatagoryButton;
