import React, { useState, useEffect } from 'react';
import axios from '../../../axios-order';
import Router from 'next/router';
import { Showprops } from '../Show/Show';
import cookie from 'js-cookie';
import Navbar from '../../Navigation/Navigation';

const Edit = ({ id }: Showprops) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(event.target.value);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setImage(event.target.value);
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setDescription(event.target.value);

  useEffect(() => {
    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    const token = cookie.get('token');
    axios
      .patch(`/campgrounds/${id}`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Router.push(`/campground/${id}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-center">Edit {name}</h3>
        <div style={{ width: '40%', margin: '25px auto' }}>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                required
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <input
                required
                type="text"
                name="price"
                className="form-control"
                value={price}
                onChange={handlePriceChange}
              />
            </div>
            <div className="form-group">
              <input
                required
                type="text"
                name="image"
                className="form-control"
                value={image}
                onChange={handleImageChange}
              />
            </div>
            <div className="form-group">
              <input
                required
                type="text"
                name="description"
                className="form-control"
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
