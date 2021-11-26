import React, { useState, useEffect } from 'react';
import {unlisted} from '../../store/review';
import {listed} from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
// import './ListingForm.css';

function ReviewDeletePrompt({reviewId,onClose}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const {id} = useParams()


const [review, setReview] = useState('');
const [rating, setRating] = useState(3);
  const [errors, setErrors] = useState([]);
  const history = useHistory()
  const catagories = useSelector(state => state.catagory.catagories);

//   useEffect(() => {

//     },[dispatch])

const handleReview= () =>{
    dispatch(unlisted(reviewId)).then(() =>dispatch(listed()))
    onClose()
}



  if(!sessionUser){
      return null
  }




  return (
        <form onSubmit={handleReview}>
            Are your sure you want to delete this review?
            <button
              className="delete-btn"
            >Delete</button>
        </form>
  );
}

export default ReviewDeletePrompt;
