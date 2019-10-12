import React, { useState, useEffect } from 'react';
import axios from '../../../axios-order';
import Table from './Table/Table';
import { useRouter } from 'next/router';
import Navbar from '../../Navigation/Navigation';
import cookie from 'js-cookie';
import { ICamp } from '../Campgrounds';

export interface IUser {
  _id: string;
  username: string;
  password: string;
}

export type Showprops = {
  id: string;
};

const Show = ({ id }: Showprops) => {
  const [campground, setCampground] = useState<ICamp | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const authUser = cookie.get('user');

    if (authUser) {
      setUser(JSON.parse(authUser));
    }

    axios
      .get(`/campgrounds/${id}`)
      .then(response => {
        setCampground(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const tabRow = () => {
    return (
      campground && (
        <Table
          obj={campground}
          userId={user ? user._id : ''}
          key={campground._id}
        />
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">{tabRow()}</div>
    </>
  );
};

export default Show;
