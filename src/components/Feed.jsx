import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const fetchFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.log(message.error);
    }
  };
  useEffect(() => {
    fetchFeed();
  }, []);

  // if (feed.length === 0) return;

  return feed && feed.length > 0 ? (
    <div>
      <UserCard user={feed[0]} />
    </div>
  ) : (
    <div className="mt-10">
      <h1 className="p-4 pb-2 text-xl font-bold opacity-60 tracking-wide flex justify-center">
        No Users to show
      </h1>
    </div>
  );
};

export default Feed;
