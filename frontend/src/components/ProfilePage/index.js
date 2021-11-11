import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink , useParams} from 'react-router-dom';
import ListingEditModal from "../ListingEditModal"
import ListingDeleteModal from '../ListingDeleteModal';
import {book} from "../../store/booking"
import {reviewer} from "../../store/review"
import './ProfilePage.css';
import { Redirect, useHistory } from 'react-router-dom';

function ProfilePage(){
    const dispatch = useDispatch();
    const history = useHistory();
    const listing = useSelector(state=>state.listing)
    const sessionUser = useSelector(state=>state.session.user)
    const listings = sessionUser?.Bookings.map(booking=> booking.listingId)
    const listingNames = listings?.map(list =>listing[list])

    if(!sessionUser){
        history.push("/")
    }

    const namesOfBookings = listingNames?.map((li,idx) =>{
       return(
        <div key={idx} className="bookings-card">
            <div className="bookings-title">{li?.name}</div>
            <div className="bookings-wrapper">

                <div>Start Date: {sessionUser.Bookings[idx].startTime.split("T")[0]}</div>
                <div>Start Time: {sessionUser.Bookings[idx].startTime.split("T")[1]}</div>
                <div>End Date: {sessionUser.Bookings[idx].endTime.split("T")[0]}</div>
                <div>End Time: {sessionUser.Bookings[idx].endTime.split("T")[1]}</div>
                <button>cancel</button>
                </div>
            </div>
        )}

    )

    return(
        <div className ="listings-wrapper">
            <h2>{sessionUser?.username}</h2>

            {namesOfBookings}
            {/* {sessionUser.Bookings.map(booking=> booking.listingId)} */}
        </div>
    )
}

export default ProfilePage;
