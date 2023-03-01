import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
const SingleUser = ({ user }) => {
  return (
    <div className="single-user">
      <div className="user-img">
        <img src={user.picture.medium} alt="randomuser"></img>
      </div>
      <div className="user-info">
        <h3>
          {user.name.title}. {user.name.first} {user.name.last}
        </h3>
        <p>
          {" "}
          <FontAwesomeIcon icon={faMailBulk} className="icon"/>
          {user.email}
        </p>
        <p>
          <FontAwesomeIcon icon={faHouse} className="icon"/>
          {user.location.country} | {user.location.city}
        </p>

        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone} className="icon"/>
          {user.phone}
        </p>
      </div>
    </div>
  );
};

export default SingleUser;
