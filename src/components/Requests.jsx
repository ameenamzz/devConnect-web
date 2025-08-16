import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import ConnectionList from "./ConnectionList";

const Requests = () => {
  const reuquests = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addRequest(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return reuquests && reuquests.length > 0 ? (
    <div className="mt-10">
      <h1 className="p-4 pb-2 text-xl font-bold opacity-60 tracking-wide flex justify-center">
        Requests
      </h1>
      {reuquests.map((req, _id) => (
        <ConnectionList key={_id} connection={req.fromUserId} id={req._id} />
      ))}
    </div>
  ) : (
    <div className="mt-10">
      <h1 className="p-4 pb-2 text-xl font-bold opacity-60 tracking-wide flex justify-center">
        No Requests
      </h1>
    </div>
  );
};

export default Requests;
