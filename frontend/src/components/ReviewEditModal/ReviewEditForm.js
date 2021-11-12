import React, { useState, useEffect } from 'react';
import {updateRev} from '../../store/review';
import {listed} from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
// import './ListingForm.css';

function ReviewEditForm({ reviewId, onClose}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {id} = useParams()


const [review, setReview] = useState('');
const [rating, setRating] = useState(3);
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const catagories = useSelector(state => state.catagory.catagories);

useEffect(() => {

},[dispatch])

const handleReview= (e) =>{
    e.preventDefault();
    console.log(reviewId)
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
  );
}

export default ReviewEditForm;
