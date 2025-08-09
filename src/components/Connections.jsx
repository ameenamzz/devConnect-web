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

  return connection ? (
    <div className="mt-10">
      <h1 className="p-4 pb-2 text-xl font-bold opacity-60 tracking-wide flex justify-center">
        Connections
      </h1>
      {connection.map((con) => (
        <ConnectionList connection={con} />
      ))}
    </div>
  ) : (
    <h1 className="p-4 pb-2 text-xl font-bold opacity-60 tracking-wide flex justify-center">
      No Connections
    </h1>
  );
};

export default Connections;
