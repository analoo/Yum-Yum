import React, { useContext, useEffect, useState } from "react";
import MainBody from "../components/Containers/mainBody"
import BodyMain from "../components/Containers/bodyMain"
import API from "../utils/API"
import { useSessionContext } from "../utils/GlobalState";
import { SET_CURRENT_USER, LOADING } from "../utils/actions";


// import { UserContext } from "../components/UserProvider";
import { auth } from "../utils/firebase";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();

  const [state, dispatch] = useSessionContext();
  const [getUser, setUser] = useState({})

  const setCurrentUser = (user) => {

    dispatch({
      type: LOADING
    });
    dispatch({
      type: SET_CURRENT_USER,
      user: user
    });
  };

  useEffect(() => {
    setUser(state.user);
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentUser(getUser)
    API.updateUserName(getUser)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  function logOut(){
    setCurrentUser({
      name:"",
      username: "",
      id: "",
    })
    history.push("/login");
  }

  return (
    <MainBody>
      <BodyMain>


        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
          <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
            <div className="banner">Welcome {getUser.username}</div>
            {/* we don't have a place to store user photos otherwise we could show one here */}
            {/* <div style={{
              background: `url(${getUser.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px"
            }} className="border border-blue-300"
          ></div> */}
            <div className="form-division">
              <div className="row">
                <div className="col-md-3">
                  <label>Email</label>
                </div>
                <div className="col-md-7">
                  <p className="description" style={{ fontSize: "larger" }}>{getUser.email}</p>
                </div>
              </div>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="form-group col-md-3">
                    <label>Name</label>
                  </div>

                  <div className="form-group col-md-7">
                    <input type="text" className="form-control col-md-12" id="exampleFormControlInput1"
                      defaultValue={getUser.name}
                      name="name"
                      onChange={e => setUser({ ...getUser, name: e.target.value })}
                      placeholder="Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-3">
                    <label>Display Name</label>
                  </div>
                  <div className="form-group col-md-7">
                    <input type="text" className="form-control col-md-12" id="exampleFormControlInput1"
                      defaultValue={getUser.username}
                      name="username"
                      onChange={e => setUser({ ...getUser, username: e.target.value })}
                      placeholder="UserName" />
                  </div>

                  <button type="submit" className="btn-primary">Update</button>
                </div>
              </form>
            </div>
            <button className="btn-primary w-full py-3 bg-red-600 mt-4 text-white" onClick={() => { logOut() }}>Sign out</button>
          </div>
        </div>




        {/* <div className="md:pl-4">
            <h5 className="text-2xl font-semibold">Display Name: {userName}</h5>
            <h5 className="italic">email: {email}</h5>
          </div>
        </div>
        */}
        {/* </div>
      </div> */}
      </BodyMain>
    </MainBody >
  )
};

export default Profile;
