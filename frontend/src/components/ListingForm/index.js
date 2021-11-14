import React, { useState, useEffect } from 'react';
import * as listingActions from '../../store/listing';
import { getCatagories } from '../../store/catagory';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './ListingForm.css';

function ListingForm() {
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

  const validate = () =>{
    const errors =[]
    if(price > 10000) errors.push("Cost Cannot exceed $10000")
    if(description.length < 10 )errors.push("description should be descriptive (10 or more characters)")
    if(state.length < 3) errors.push("Must type full name of state")
    return errors
  }


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
    const error = validate();
    setErrors(error)
    if(error.length > 0)return
    dispatch(listingActions.lister({
        userId:sessionUser.id,
        city,
        address,
        state,
        country,
        catagoryId:catagory,
        name,
        price,
        description,
    }))


    dispatch(listingActions.listed()).then(() => {history.push("/listings")})



  }
  let eMessage
  if(errors.length > 0) {
      eMessage =
        <ul className="errors-list">
            {errors.map((error, id) => <li key={id}>{error}</li>)}
        </ul>
  }

  return (
    <div className="form-wrapper">
        <form className="Radioform" onSubmit={handleSubmit}>
            <h1 className="white" >Become a Producer</h1>
            <input
            type="text"
            placeholder="Address"
            min="1"
            required
            className="form-input"
            value={address}
            onChange={e=> setAddress(e.target.value)} />

            <input
            type="text"
            placeholder="City"
            min="1"
            required
            value={city}
            className="form-input"
            onChange={e=> setCity(e.target.value)} />
            <input
            type="text"
            placeholder="State"
            min="1"
            required
            className="form-input"
            value={state}
            onChange={e=> setSt(e.target.value)} />
            <input
            type="text"
            placeholder="Country"
            min="1"
            required
            value={country}
            className="form-input"
            onChange={e=> setCountry(e.target.value)} />

            <input
            type="text"
            placeholder="Name"
            min="1"
            required
            className="form-input"
            value={name}
            onChange={e=> setName(e.target.value)} />
            <input
            type="number"
            placeholder="Price"
            min="1"
            required
            className="form-input"
            value={price}
            onChange={e=> setPrice(e.target.value)} />
            <textarea
            placeholder="Description"
            min="1"
            required
            className="form-text-input"
            value={description}
            onChange={e=> setDescription(e.target.value)} />
            <div className="radioButtons"> Please Pick a Category</div>
            <div className="radiowrapper">
                <label className="radioButtons">
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        className="radioButtons"
                        checked={catagory === catagories[0][0]}
                        onChange={(e) => setCatagory(catagories[0][0])}
                    />
                    Music
                </label>
                <label className="radioButtons">
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[1][0]}
                        onChange={(e) => setCatagory(catagories[1][0])}
                    />
                    Photography
                </label>
                <label className="radioButtons">
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[2][0]}
                        onChange={(e) => setCatagory(catagories[2][0])}
                    />
                    Film
                </label>
                <label className="radioButtons">
                    <input
                        type="radio"
                        value="cat"
                        name="photoType"
                        checked={catagory === catagories[3][0]}
                        onChange={(e) => setCatagory(catagories[3][0])}
                    />
                    Art
                </label>
            </div>

            <button class="nav-btn" type="submit">Submit</button>
        </form>
        {eMessage}
    </div>
  );
}

export default ListingForm;
