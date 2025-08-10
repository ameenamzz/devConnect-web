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
      dispatch(addRequest(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    reuquests && (
      <div className="mt-10">
        {reuquests.map((req, _id) => (
          <ConnectionList key={_id} connection={req.fromUserId} />
        ))}
      </div>
    )
  );
};

export default Requests;
