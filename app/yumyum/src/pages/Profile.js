import React, { useContext } from "react";
import { UserContext } from "../components/providers/UserProvider";
import { auth } from "../utils/firebase";
import { useHistory } from "react-router-dom";

  const Profile = () => {
    const history = useHistory();

    const fbuser = useContext(UserContext);
    if (fbuser === null) {history.push("/login")}

    const signout = () => {
      auth.signOut(); 
      history.push("/login");
    }

    const { photoURL, userName, email } = fbuser;

    return (
      <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
        <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
          <div
            style={{
              background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px"
            }}
            className="border border-blue-300"
          ></div>
          <div className="md:pl-4">
            <h2 className="text-2xl font-semibold">{userName}</h2>
            <h3 className="italic">{email}</h3>
          </div>
        </div>
        <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { signout() }}>Sign out</button>
      </div>
    )
  };

export default Profile;
