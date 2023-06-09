import React from "react";
import { Link } from 'react-router-dom';
import "./styleCard.scss";
import Main from "../../Main";
const Card = ({item:{name,region,population,capital,flags},i}) => {
  return (
    <>
      <Link to={`/${name}`} className="card mb-5">
        <img
          src={flags.png}
          className="card-img-top border border-md"
          alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <div className="info_population d-flex">
            <strong>Population:</strong>
            <p className="card-text ms-1">{population}</p>
          </div>
          <div className="info_region d-flex">
            <strong>Region:</strong>
            <p className="card-text ms-1">{region}</p>
          </div>
          <div className="info_capital d-flex">
            <strong>Capital:</strong>
            <p className="card-text ms-1">{capital}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
