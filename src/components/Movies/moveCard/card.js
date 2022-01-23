import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: "19rem", height: "22rem" }}>
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
    </div>
  );
}

export default Card;
