import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, photURL, description, skills } = user;
  console.log(photURL);
  return (
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
            <button className="btn btn-primary">Follow</button>
            <button className="btn btn-secondary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
