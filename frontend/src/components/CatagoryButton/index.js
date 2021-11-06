import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Buttons.css"

function CatagoryButton({to, catagory}) {


  return (
    <div className="cat-btn">
      <img
        className="icon"
        src="https://cdn.discordapp.com/attachments/898413474080772116/899172789800562738/Untitled-1.png"/>
    </div>

  );
}

export default CatagoryButton;
