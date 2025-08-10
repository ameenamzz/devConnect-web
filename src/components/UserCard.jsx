import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, age, photURL, description, skills } = user;
  const handSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
    } catch (error) {}
  };

  console.log(photURL);
  return  (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img className="w-40" src={photURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p>Age : {age}</p>
          <p>Skills: {skills}</p>
          <p>Description: {description}</p>
          <div className="card-actions flex justify-center mt-5 ">
            <button
              className="btn btn-primary"
              onClick={() => handSendRequest("interested", _id)}
            >
              interested
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handSendRequest("ignore", _id)}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
