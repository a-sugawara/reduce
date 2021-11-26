import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
// import './ListingForm.css';

function ListingDeletePrompt({listing}){
  const [url, setUrl] = useState('')
  const history =useHistory();
  const dispatch = useDispatch();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const image = {url, listingId:listing.id}
    await dispatch(listingActions.imager(image))
    setUrl('')

    // history.push("/listings")
  }

  return (
    <form>
        Upload Photos for {listing.name}
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
        <button
         onClick={handleSubmit}
          className="delete-btn"
        >Upload</button>
    </form>
  );
}

export default ListingDeletePrompt;
