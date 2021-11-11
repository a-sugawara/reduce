import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
// import './ListingForm.css';

function ListingEditForm({listing}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);


  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setSt] = useState('');
  const [country, setCountry] = useState('');
  const [catagory, setCatagory] = useState(3);
  const [description, setDescription] = useState('');
//   const [lat, setLat] = useState('');
//   const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory()

  useEffect(() => {
    dispatch(getCatagories())
    },[])

  const catagories = useSelector(state => state.catagory.catagories);



  if(!sessionUser){
      return null
  }
  if(!catagories){
      return null
  }

//     if (!sessionUser) return (
//     <Redirect to="/" />
//   );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    dispatch(listingActions.updateListing(
        {
            id:listing.id,
            userId:sessionUser.id,
            city,
            address,
            state,
            country,
            catagoryId:catagory,
            name,
            price,
            description,
        }
    ))
        .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    })

    history.push("/submission")
  }



  return (
    <>
        <ul className="errors-list">
            {errors.map((error, id) => <li key={id}>{error}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Address"
            min="1"
            required
            value={address}
            onChange={e=> setAddress(e.target.value)} />
            <input
            type="text"
            placeholder="City"
            min="1"
            required
            value={city}
            onChange={e=> setCity(e.target.value)} />
            <input
            type="text"
            placeholder="State"
            min="1"
            required
            value={state}
            onChange={e=> setSt(e.target.value)} />
            <input
            type="text"
            placeholder="Country"
            min="1"
            required
            value={country}
            onChange={e=> setCountry(e.target.value)} />
            <input
            type="text"
            placeholder="Name"
            min="1"
            required
            value={name}
            onChange={e=> setName(e.target.value)} />
            <input
            type="number"
            placeholder="Price"
            min="1"
            required
            value={price}
            onChange={e=> setPrice(e.target.value)} />
            <textarea
            placeholder="Description"
            min="1"
            required
            value={description}
            onChange={e=> setDescription(e.target.value)} />

            <div>
                <label>
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[0][0]}
                        onChange={(e) => setCatagory(catagories[0][0])}
                    />
                    Music
                </label>
                <label>
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[1][0]}
                        onChange={(e) => setCatagory(catagories[1][0])}
                    />
                    Photography
                </label>
                <label>
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[2][0]}
                        onChange={(e) => setCatagory(catagories[2][0])}
                    />
                    Art
                </label>
                <label>
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[3][0]}
                        onChange={(e) => setCatagory(catagories[3][0])}
                    />
                    Film
                </label>
            </div>

            <button type="submit">Submit</button>
        </form>
    </>
  );
}

export default ListingEditForm;
