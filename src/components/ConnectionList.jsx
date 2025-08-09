import React from "react";

const ConnectionList = ({ connection }) => {
  const { firstName, lastName, photURL, skills, description } = connection;
  return (
    <div className="flex justify-center mb-5">
      <ul className="list bg-base-300 rounded-box shadow-md w-[30%]">
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={photURL} />
          </div>
          <div>
            <div>
              <h1 className="text-lg font-bold">
                {firstName} {lastName}
              </h1>
              <div className="text-xs uppercase font-semibold opacity-60">
                {skills}
              </div>
              <p className="list-col-wrap text-xs">{description}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ConnectionList;
