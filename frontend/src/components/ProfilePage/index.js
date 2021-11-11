import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink , useParams} from 'react-router-dom';
import ListingEditModal from "../ListingEditModal"
import ListingDeleteModal from '../ListingDeleteModal';
import {restoreUser} from "../../store/session"
import {reviewer} from "../../store/review"
import {unbook} from "../../store/booking"
import './ProfilePage.css';
import { Redirect, useHistory } from 'react-router-dom';

function ProfilePage(){
    const dispatch = useDispatch();
    const history = useHistory();
    const booking = useSelector(state => state.booking.switch)
    const listing = useSelector(state=>state.listing)
    const sessionUser = useSelector(state=>state.session.user)
    const listings = sessionUser?.Bookings.map(booking=> booking.listingId)
    const listingNames = listings?.map(list =>listing[list])

    if(!sessionUser){
        history.push("/")
    }
    useEffect(()=>{
        dispatch(restoreUser())
    },[booking])

    const handleBookingDelete = (id) => {
        console.log(id,"XXXXXXXXXXXXXX")
        dispatch(unbook(id))
    }

    const namesOfBookings = listingNames?.map((li,idx) =>{
       return(
        <div key={idx} className="bookings-card">
            <div className="bookings-title">{li?.name}</div>
            <div className="bookings-wrapper">

                <div className="bookings-text" >Start Date: {sessionUser.Bookings[idx].startTime.split("T")[0]}</div>
                <div>Start Time: {sessionUser.Bookings[idx].startTime.split("T")[1]}</div>
                <div>End Date: {sessionUser.Bookings[idx].endTime.split("T")[0]}</div>
                <div>End Time: {sessionUser.Bookings[idx].endTime.split("T")[1]}</div>
                <button onClick={()=>handleBookingDelete(sessionUser.Bookings[idx].id)} >cancel</button>
                </div>
            </div>
        )}

    )

    return(
        <div className ="listings-wrapper">
            <h2>{sessionUser?.username}</h2>
            <div className="bookings-shelf">
                {namesOfBookings}
            </div>
            {/* {sessionUser.Bookings.map(booking=> booking.listingId)} */}
        </div>
    )
}

export default ProfilePage;
