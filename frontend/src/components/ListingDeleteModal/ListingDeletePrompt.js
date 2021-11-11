import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
// import './ListingForm.css';

function ListingDeletePrompt({listing}){
  const history =useHistory()
  const dispatch = useDispatch();
  const handleDelete = async () =>{
    await dispatch(listingActions.unlisted(listing.id))
    history.push("/listings")
  }

  return (
    <div>
        Are you sure you want to delete {listing.name}
        <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default ListingDeletePrompt;
