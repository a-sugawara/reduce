import React, { useState, useEffect} from 'react';
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
            <div className="search-bar">
                <form className="search-form">
                <img className="search-icon"
                 src="https://cdn.discordapp.com/attachments/898413474080772116/899517327291351060/search.png"/>
                    <input type="search" className="search-input">
                    </input>
                </form>
            </div>
            <div className="sentence">
                <p>Find your&nbsp;<span className="orange">{words[wordidx]}</span>&nbsp;studio</p>
            </div>
        </div>
    )
}

export default SearchBar
