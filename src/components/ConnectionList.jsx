import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeRequest } from "../utils/requestSlice";

const ConnectionList = ({ connection, _id }) => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);
  const location = useLocation();
  const { firstName, lastName, photURL, skills, description } = connection;

  const handleConnectionRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mb-5">
      <ul className="list bg-base-300 rounded-box shadow-md w-[40%]">
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={photURL} />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">
                {firstName} {lastName}
              </h1>
              <div className="text-xs uppercase font-semibold opacity-60">
                {skills}
              </div>
              <p className="list-col-wrap text-xs">{description}</p>
            </div>
            {location.pathname === "/requests" && (
              <div className>
                <button
                  className="btn btn-accent mr-2"
                  onClick={() => handleConnectionRequests("accepted", _id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleConnectionRequests("rejected", _id)}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ConnectionList;
