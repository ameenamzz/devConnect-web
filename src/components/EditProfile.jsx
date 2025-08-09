import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ editUser }) => {
  const [firstName, setFirstName] = useState(editUser.firstName);
  const [lastName, setLastName] = useState(editUser.lastName);
  const [age, setAge] = useState(editUser.age);
  const [skills, setSkills] = useState(editUser.skills);
  const [description, setDescription] = useState("");
  const [photURL, setPhotURL] = useState(editUser.photURL);
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const saveProfile = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, description, photURL, skills },
        { withCredentials: true }
      );
      console.log(res.data);
      dispatch(addUser(res?.data?.data));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center gap-5">
        <div className="flex justify-center mt-5">
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-sm border p-10">
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
              max="100"
              onChange={(e) => setAge(e.target.value)}
            />

            <label className="label">skills</label>
            <input
              type="text"
              className="input"
              value={skills}
              placeholder="Gender"
              onChange={(e) => setSkills(e.target.value)}
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
              value={photURL}
              placeholder="Photo"
              onChange={(e) => setPhotURL(e.target.value)}
            />

            <button className="btn btn-primary mt-4" onClick={saveProfile}>
              Save
            </button>
          </fieldset>
        </div>
        <div>
          <UserCard
            user={{ firstName, lastName, age, description, photURL, skills }}
          />
        </div>
      </div>
      {toast && (
        <div class="toast toast-top toast-start flex mx-[40%]">
          <div class="alert alert-success ">
            <span>Profile updated successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
