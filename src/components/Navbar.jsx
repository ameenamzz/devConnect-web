import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogOut = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {}
  };
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            devConnect 🧑‍💻
          </Link>
        </div>
        {user && (
          <div className="flex gap-2 mr-5">
            <div className="dropdown dropdown-end">
              <span className="mr-3">Welcome {user.firstName}</span>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user.photURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
