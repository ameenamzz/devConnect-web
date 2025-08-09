import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, age, photURL, skills, description } = user;
  console.log(photURL);
  return (
    <div className="flex justify-center mt-32">
      <div className="card bg-base-300 w-96 shadow-sm">
        <figure>
          <img src={photURL} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
