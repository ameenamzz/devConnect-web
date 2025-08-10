import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const ConnectionList = ({ connection }) => {
  const request = useSelector((store) => store.request);
  const location = useLocation();
  const { firstName, lastName, photURL, skills, description } = connection;
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
                <button className="btn btn-accent mr-2">Accept</button>
                <button className="btn btn-error">Reject</button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ConnectionList;
