import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Bubbles.css"

function BubbleDivs({color1, color2, color3, side, info, size}) {


  return (
    <div className={`${color1}-box ${side} ${size}` }>
        <div>{info}</div>
        <div className={`corner1 ${color2}-corner`}></div>
        <div className={`corner2 ${color3}-corner`}></div>
    </div>

  );
}

export default BubbleDivs;
