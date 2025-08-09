import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionList from "./ConnectionList";

const Connections = () => {
  const connection = useSelector((store) => store.connection);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data?.data));
    } catch (error) {}
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div>
      <ConnectionList />
    </div>
  );
};

export default Connections;
