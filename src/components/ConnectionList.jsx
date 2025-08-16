import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeRequest } from "../utils/requestSlice";
import { Link } from "react-router-dom";
const ConnectionList = ({ connection, id }) => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);
  const location = useLocation();
  const { _id, firstName, lastName, photURL, skills, description } = connection;

  const handleConnectionRequests = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
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
                  onClick={() => handleConnectionRequests("accepted", id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleConnectionRequests("rejected", id)}
                >
                  Reject
                </button>
              </div>
            )}
            {location.pathname === "/connections" && (
              <div className>
                <Link to={"/chat/" + _id}>
                  <button className="btn btn-accent mr-2">Chat</button>{" "}
                </Link>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ConnectionList;
