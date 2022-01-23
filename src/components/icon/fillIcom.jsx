import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function fillIcom(props) {
  return (
    <div>
      <FontAwesomeIcon icon={faHeart} className="text-danger fs-2" />
    </div>
  );
}

export default fillIcom;
