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
    const reviews = sessionUser?.Reviews?.map(review=> review)
    const reviewNames = reviews?.map(review => listing[review.listingId])


    // useEffect(()=>{
    //     dispatch(restoreUser())
    // },[booking])

    if(!sessionUser){
        return <Redirect to="/" />
    }
    const handleBookingDelete = (id) => {

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
    const reviewCards = reviewNames?.map((rev,idx)=>{
      return  <div key={idx} className="review-card">
            <div className="bookings-title" >{rev?.name}</div>
           <div className="review-wrapper">

            <div>{sessionUser.Reviews[idx].review}</div>
            <div>{sessionUser.Reviews[idx].rating} Stars</div>
            </div>
        </div>
    })

    const lister = sessionUser.Listings?.map((listing,idx) => {
        return  <div key={idx} className="lister-card">
            <div className="bookings-title" >{listing.name}</div>
           <div className="listings-wrapper">

            <div>${listing.price}{"/Hour"}</div>
            {/* <div>{sessionUser.Reviews[idx].rating} Stars</div> */}
            </div>
        </div>
    })
    console.log("rerender profileXXXXXXXXXXXXXXXXXXXX")


    return(
        <div className ="listings-wrapper">
            <h1>{sessionUser?.username}</h1>
            <h2>Bookings</h2>
            <div className="bookings-shelf">

                {namesOfBookings}
            </div>
            <h2>Reviews</h2>
            <div className="bookings-shelf">

                {reviewCards}
            </div>
                <h2>Listings</h2>
            <div className="bookings-shelf">
                {lister}
            </div>
            {/* {sessionUser.Bookings.map(booking=> booking.listingId)} */}
        </div>
    )
}

export default ProfilePage;
