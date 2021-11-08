import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Listing.css';

function Listings() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    if(!sessionUser){
        <Redirect to="/" />
    }


    useEffect(() => {
        dispatch(listingActions.listed())
      }, [dispatch]);

    const listings = Object.entries(useSelector(state => state.listing)).map(listing => listing[1])



    return (
        <div>
            {listings.map(listing => <div>{listing.name}</div>)}
        </div>
    )
  }

  export default Listings;
