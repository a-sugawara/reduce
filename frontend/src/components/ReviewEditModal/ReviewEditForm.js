import React, { useState, useEffect } from 'react';
import {updateRev} from '../../store/review';
import {listed} from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
// import './ListingForm.css';

function ReviewEditForm({ reviewId, onClose, reviewText}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {id} = useParams()


const [review, setReview] = useState(reviewText);
const [rating, setRating] = useState(3);
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const catagories = useSelector(state => state.catagory.catagories);

useEffect(() => {
  console.log(reviewText)
  console.log(reviewId)

},[dispatch])

const handleReview= (e) =>{
    e.preventDefault();
    dispatch(updateRev({
        id:reviewId,
        userId: sessionUser.id,
        listingId:id,
        review,
        rating
    })).then(dispatch(listed()))

    onClose()
}


  if(!sessionUser){
      return null
  }

  return (
    <>
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

        <button className="nav-btn">Post</button>
    </form>
    </>
  );
}

export default ReviewEditForm;
