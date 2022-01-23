import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <Link to={`/movies-details/${props.id}`}>
          <img src={props.srcImge} className="card-img-top" alt={props.title} />
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
