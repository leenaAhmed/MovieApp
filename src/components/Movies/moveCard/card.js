import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
function Card(props) {
  return (
    <div className="card h-100">
      <Link to={`/movies-details/${props.id}`}>
        <img src={props.srcImge} className="card-img-top" alt={props.title} />
        <div className="starIcon">
          <FontAwesomeIcon icon={faStar} className="text-warning " />
          <span className="text-light">{props.rate}</span>
        </div>
      </Link>
      <div className="card-body d-flex justify-content-between">
        <Link to={`/movies-details/${props.id}`} className="card-text">
          {props.title}
        </Link>
        {props.icon}
      </div>
    </div>
  );
}

export default Card;
