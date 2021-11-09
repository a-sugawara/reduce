import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink , useParams} from 'react-router-dom';
import ListingEditModal from "../ListingEditModal"
import ListingDeleteModal from '../ListingDeleteModal';
import './SingleListing.css';

function SingleListing(){
    const {id} = useParams()
    const listing = useSelector(state=>state.listing[id])
    const sessionUser = useSelector(state=>state.session.user)
    if(!listing){
        return <Redirect to="/" />
    }
    let photo1
    let photo2
    let photo3
    let photo4
    if(listing.Images[0]){
        photo1 = listing.Images[0].url
    }else{
        photo1 = "https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"
    }
    if(listing.Images[1]){
        photo2 = listing.Images[1].url
    }else{
        photo2 = "https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"
    }
    if(listing.Images[2]){
        photo3 = listing.Images[2].url
    }else{
        photo3 = "https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"
    }
    if(listing.Images[3]){
        photo4 = listing.Images[3].url
    }else{
        photo4 = "https://cdn.discordapp.com/attachments/906471684683493386/906471724965593119/AirTimeLogo.png"
    }



    let buttons = null
    if(sessionUser){
        if(sessionUser.id === listing.userId){
            buttons =
                <div>
                    <ListingEditModal listing={listing}/>
                    <ListingDeleteModal listing={listing}/>
                </div>
        }else{
            buttons =
                <div>
                    <button>book</button>
                    <button>Leave a review</button>

                </div>
        }
    }

    return(
        <div className ="listings-wrapper">
            <div className ="sidebar2"></div>
            <div className ="mainbar2">
                <h2>{listing.name}</h2>
                <div className ="photosbox">
                    <img alt="photo1" className="photo1" src={photo1}/>
                    <div className="three-photo-box">
                        <div className="two-photo-box">
                            <img alt="photo2" className="photo2" src={photo2}/>
                            <img alt="photo3" className="photo3" src={photo3}/>
                        </div>
                        <div>
                            <img alt="photo4" className="photo4" src={photo4}/>
                        </div>
                    </div>
                </div>
                <div>{listing.description}</div>
                {buttons}
            </div>
            <div className ="sidebar2"></div>
        </div>
    )
}

export default SingleListing;
