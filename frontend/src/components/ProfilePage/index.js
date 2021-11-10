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
    const {id} = useParams()
    const listing = useSelector(state=>state.listing[id])
    const sessionUser = useSelector(state=>state.session.user)
    const [startTime, setSTime] = useState('');
    const [endTime, setETime] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(3);

    const handleBooking= () =>{
        console.log(startTime)
        console.log(endTime,"TIMMMEE")
        dispatch(book({
            userId: sessionUser.id,
            listingId:id,
            startTime,
            endTime
        }))
        history.push("/submission")
    }
    const handleReview= () =>{
        dispatch(reviewer({
            userId: sessionUser.id,
            listingId:id,
            review,
            rating
        }))
        history.push("/submission")
    }

    let reviews

    if(!listing){
        return <Redirect to="/" />
    }else{
        if (listing.Reviews){
            reviews = listing.Reviews.map((review,idx)=>{
                if(sessionUser.id === review.userId){
                return  <div>
                            <p key={idx}>{review.review}</p>
                            <button>delete</button>
                        </div>
                }else{
                    return  <div>
                                <p key={idx}>{review.review}</p>
                            </div>
                }
            })
        }


    }

    let h2s = [<h2>1</h2>,<h2>1</h2>,<h2>1</h2>,<h2>1</h2>,]
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
                    <form onSubmit={handleBooking}>
                        <input
                            type="datetime-local"
                            // type="date"
                            value={startTime}
                            onChange={e=> setSTime(e.target.value)}
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required
                        />
                        <input
                            type="datetime-local"
                            // type="date"
                            value={endTime}
                            onChange={e=> setETime(e.target.value)}
                            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required
                        />
                        {/* <div>
                        <label for="party">Choose your preferred party date and time (required, June 1st 8.30am to June 30th 4.30pm):</label>
                        <input id="party" type="datetime-local" name="partydate"
                            min="2017-06-01T08:30" max="2017-06-30T16:30"
                             pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required/>
                        <span class="validity"></span>
                        </div> */}

                        <button>Book now</button>

                    </form>
                    <form onSubmit={handleReview}>
                        <input
                            type="text"
                            value={review}
                            onChange={e=> setReview(e.target.value)}
                        />
                        <input
                            type="number"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={e=> setRating(e.target.value)}
                        />

                        <button>Leave a review</button>
                    </form>

                </div>
        }
    }

    return(
        <div className ="listings-wrapper">
            <div className ="sidebar2"></div>
            <div className ="mainbar2">
                <h1>{listing.name}</h1>
                <h2>{listing.city}</h2>
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
                {buttons}
                <div>
                    <div>{listing.description}</div>
                </div>
                {reviews}
            </div>
            <div className ="sidebar2"></div>
        </div>
    )
}

export default ProfilePage;
