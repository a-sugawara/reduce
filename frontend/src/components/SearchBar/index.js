import React, { useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import CatagoryButton from "../CatagoryButton"
import"./SearchBar.css"

const words = ["art", "music", "film"]

const SearchBar = () =>{
    let [wordidx, setWordidx] = useState(0)

    useEffect(() => {

        const time = setInterval(() => {
            if(wordidx < words.length -1){
                setWordidx(prev => prev+1)
                wordidx++

            }
            else{
                setWordidx(0)

                wordidx=0
            }
        }, 2000)
        return ()=>{clearInterval(time)}
    },[])



    return (
        <div className="imagebar set">
            <div className="sentence">
                <p>Find your&nbsp;<span className="orange">{words[wordidx]}</span>&nbsp;studio</p>
            </div>
            {/* <div className="search-bar">
                <form className="search-form">
                <img className="search-icon"
                 src="https://cdn.discordapp.com/attachments/898413474080772116/899517327291351060/search.png"/>
                    <input type="search" className="search-input">
                    </input>
                </form>
            </div> */}

            <div className="btn-holder">
                  <div className="btn-group">
                    <NavLink to="/catagory/2">
                      <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907148713351348264/PhotoIcon.png"}/>
                    </NavLink>
                    <div className="btn-text">
                      <p>Photo</p>

                    </div>
                  </div>
                  <div className="btn-group">
                    <NavLink to="/catagory/1">
                      <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/906600089638817802/AirTimeMusic.png"}/>
                    </NavLink>
                    <div className="btn-text">
                      <p>Music</p>

                    </div>
                  </div>
                  <div className="btn-group">
                    <NavLink to="/catagory/3">
                      <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907151909612294164/FilmIcon.png"}/>
                    </NavLink>
                    <div className="btn-text">
                      <p>Film</p>
                    </div>
                  </div>
                  <div className="btn-group">
                    <NavLink to="/catagory/4">
                      <CatagoryButton url={"https://cdn.discordapp.com/attachments/906471684683493386/907155200572264518/artIcon.png"}/>
                    </NavLink>
                    <div className="btn-text">
                      <p>Art</p>

                    </div>
                  </div>
                    <div className="btn-group">
                    <NavLink to="/listings">
                        <CatagoryButton/>
                    </NavLink>
                    <div className="btn-text">
                        <p>View All Listings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
