import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const DIV = styled.div`
  padding: 0;
  img {
    width: 100%;
    padding-top: 10px;
  }
  .caption(padding: 9px;);
`;

export interface CampBody {
  obj: {
    _id: string;
    name: string;
    image: string;
    price: string;
    description: string;
  };
}

const Body = (props: CampBody) => {
  return (
    <div className="col-md-3 col-sm-6">
      <DIV>
        <img alt="" src={props.obj.image} />
        <div>
          <h4>{props.obj.name}</h4>
        </div>

        <p>
          <Link
            href={`/campground?id=${props.obj._id}`}
            as={`/campground/${props.obj._id}`}
          >
            <a className="btn btn-primary">Show more info</a>
          </Link>
        </p>
      </DIV>
    </div>
  );
};

export default Body;
