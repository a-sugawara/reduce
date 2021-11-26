import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './Listing.css';


function Listings() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(true);
    // if(!sessionUser){
    //     <Redirect to="/" />
    // }

    // useEffect(() => {
    //     dispatch(listingActions.listed()).then(() => setIsLoaded(true))
    // }, [dispatch]);
    useEffect(() => {
        dispatch(listingActions.listed())
    }, [dispatch]);
    let lister = useSelector(state => state.listing)
    let listings = Object.values(lister)


    // .filter(listing => listing.catagoryId=== 2)


    return isLoaded &&(
        <div className="listingss-wrapper">
            <div className="listing-sidebar"></div>
                <div className="listings">
                    {listings.map((listing, idx) =>{
                        if(listing){
                            if(listing.Images){
                                if(listing.Images[0]){
                                    return (
                                        <NavLink to={`/listings/${listing.id}`} key={idx}>
                                            <div className="listing-card">
                                                <div>
                                                    <img className="listing-card-img" src={listing.Images[0].url}/>
                                                </div>
                                                    <div className="listing-card-name" >
                                                        {listing.name}
                                                    </div>
                                                <div className="listing-card-info">
                                                    <div className="listing-card-price" >
                                                        {"Price: $"}{listing.price}{"/Hour"}
                                                    </div>
                                                    <div className="listing-card-city" >
                                                        {"Location: "}{listing.city}{", "}
                                                        {listing.state}
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )
                                }else{
                                    return(
                                        <NavLink to={`/listings/${listing.id}`}key={idx}>
                                            <div className="listing-card-d">
                                                <div>
                                                    <img className="listing-card-dimg" src={"https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"}/>
                                                </div>
                                                    <div className="listing-card-name" >
                                                        {listing.name}
                                                    </div>
                                                <div className="listing-card-info">
                                                    <div className="listing-card-price" >
                                                        {"Price: $"}{listing.price}{"/Hour"}
                                                    </div>
                                                    <div className="listing-card-city" >
                                                        {"Location: "}{listing.city}{", "}
                                                        {listing.state}
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )
                                }
                            }else{return null}
                        }else{return null}
                    }
                    )}
                </div>
            <div className="listing-sidebar"></div>
        </div>
    )
  }

  export default Listings;
