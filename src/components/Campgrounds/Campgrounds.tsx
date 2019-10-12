import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../axios-order';
import Navbar from '../Navigation/Navigation';
import Body from './Body';
import cookie from 'js-cookie';

export interface ICamp {
  _id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  owner: string;
}

const Campgrounds = () => {
  const [campground, setCampground] = useState<[]>([]);
  const user = cookie.get('token');

  useEffect(() => {
    axios
      .get('/campgrounds')
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground &&
      campground.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <header className="jumbotron">
          <div className="container">
            <h1>Welcome To YelpCamp</h1>
            <p>View our hand picked campgrounds from all over the world</p>
            {user ? (
              <p>
                <Link href="/new" as="/new">
                  <a className="btn btn-primary btn-lg">Add New Campground</a>
                </Link>
              </p>
            ) : (
              <div className="text-center">
                <h5>Please login or signup to add new Campgrounds</h5>
              </div>
            )}
          </div>
        </header>

        <div
          className="row text-center"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tabRow()}
        </div>
      </div>
    </>
  );
};

export default Campgrounds;
