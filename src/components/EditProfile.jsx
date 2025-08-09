import React, { useState } from "react";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  return (
    <div className="flex justify-center mt-5">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-10">
        <legend className="fieldset-legend">Edit Profile</legend>

        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label className="label">Last Name</label>
        <input
          type="text"
          className="input"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="label">Age</label>
        <input
          type="number"
          className="input"
          value={age}
          placeholder="Age"
          min="12"
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="label">Gender</label>
        <input
          type="text"
          className="input"
          value={gender}
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />

        <label className="label">Description</label>
        <input
          type="text"
          className="input"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="label">Photo</label>
        <input
          type="text"
          className="input"
          value={photoURL}
          placeholder="Photo"
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <button className="btn btn-neutral mt-4">Save</button>
      </fieldset>
    </div>
  );
};

export default EditProfile;
