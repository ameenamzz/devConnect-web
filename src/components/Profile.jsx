import EditProfile from "./EditProfile";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div>
        <EditProfile editUser={user} />
      </div>
    )
  );
};

export default Profile;
