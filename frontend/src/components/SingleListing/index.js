import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink , useParams} from 'react-router-dom';
import ListingEditModal from "../ListingEditModal"
import ListingDeleteModal from '../ListingDeleteModal';
import {book} from "../../store/booking"
import {reviewer} from "../../store/review"
import './SingleListing.css';
import { Redirect, useHistory } from 'react-router-dom';
import ReviewEditModal from"../ReviewEditModal"
import ReviewDeleteModal from"../ReviewDeleteModal"

function SingleListing(){
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

        dispatch(book({
            userId: sessionUser.id,
            listingId:id,
            startTime,
            endTime
        }))
        history.push("/booked")
    }
    const handleReview= (e) =>{
        e.preventDefault()
        dispatch(reviewer({
            userId: sessionUser.id,
            listingId:id,
            review,
            rating
        }))
        setReview("")
    }

    let reviews

    // if(!listing){
    //     return <Redirect to="/" />
    // }else{
        if (listing?.Reviews){
            reviews = listing.Reviews.map((review,idx)=>{
                if(sessionUser?.id === review.userId){

                return  <>
                        <div key={idx} className="review">
                            <div className="userName">
                                {review.User?review.User.username : sessionUser.username}
                            </div>
                            <div className="userReview">
                                <p >{review.review}</p>
                            </div>
                            <div className="bar-holder">
                                <div className={`star${review.rating}`} ></div>
                            </div>
                        </div>
                            <div className="prot-btn">
                                <ReviewEditModal reviewId={review.id} reviewText={review.review}/>
                                <ReviewDeleteModal reviewId={review.id}/>
                            </div>
                        </>
                }else{
                    return  <div className="review">
                                <div className="userName">
                                    <p>{review.User.username}</p>
                                </div>
                                <div className="userReview">
                                    <p >{review.review}</p>
                                </div>
                                <div className="bar-holder">
                                    <div className={`star${review.rating}`} ></div>
                                </div>
                            </div>
                }
            })
        // }


    }


    let photo1
    let photo2
    let photo3
    let photo4
    if(listing?.Images){
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
    }


    let ReviewForm = null
    let buttons = null
    if(sessionUser){
        if(sessionUser.id === listing?.userId){
            buttons =
                <div>
                    <ListingEditModal listing={listing}/>
                    <ListingDeleteModal listing={listing}/>
                </div>
        }else{
            buttons =

                    <form onSubmit={handleBooking} className="booking-form">
                        <div className="booking-input-wrapper">
                            <input
                                type="datetime-local"
                                // type="date"
                                value={startTime}
                                onChange={e=> setSTime(e.target.value)}
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required
                                className="booking-input"
                                required
                                />
                            <input
                                type="datetime-local"
                                // type="date"
                                value={endTime}
                                onChange={e=> setETime(e.target.value)}
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" required
                                className="booking-input"
                                required
                            />
                            <button className="booking-button">Book now</button>
                        </div>
                        <div className="booking-info">
                            <div className="booking-price">
                                ${listing?.price}/Hour
                            </div>
                            <div className="booking-info2">
                                <div>{listing?.description}</div>
                                <div>{listing?.User.username}</div>
                            </div>
                        </div>
                    </form>


            ReviewForm =<>
                <form className="review-form" onSubmit={handleReview}>
                    <textarea
                        className="review-input"
                        type="textarea"
                        value={review}
                        onChange={e=> setReview(e.target.value)}
                        required
                        />
                    <div>
                    Rating:&nbsp;&nbsp;&nbsp;
                        <input
                            className="rating"
                            type="number"
                            min={1}
                            max={5}
                            value={rating}
                            onChange={e=> setRating(e.target.value)}
                            required
                        />
                    </div>

                    <button class="nav-btn">Post</button>
                </form>
                </>
        }
    }

    return (
        <div className ="listings-wrapper">
            <div className ="sidebar2"></div>
            <div className ="mainbar2">
                <h1>{listing?.name}</h1>
                <h2>{listing?.city}</h2>
                <div className ="photosbox">
                    <img alt="photo1" className="photo1" src={photo1}/>
                    <div className="three-photo-box">
                        <div className="two-photo-box">
                            <img alt="photo2" className="photo2" src={photo2}/>
                            <img alt="photo3" className="photo3" src={photo3}/>
                        </div>
                        <div className="lastPhoto">
                            <img alt="photo4" className="photo4" src={photo4}/>
                        </div>
                    </div>
                </div>
                {buttons}

                    {ReviewForm}
                    <div></div>

                    {reviews}
            </div>
            <div className ="sidebar2"></div>
        </div>
    )
}

export default SingleListing;
