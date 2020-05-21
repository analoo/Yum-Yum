import React from "react";
import MainBody from "../components/Containers/mainBody"
import BodyMain from "../components/Containers/bodyMain"


function Home() {
  return (

    <div>
      <MainBody>
        <BodyMain>
          <div>
            <h3>Home Page</h3>
            <img className="logo brand" src="/pot-v2.svg" alt="logo"/>
    <img className="logo brand" src="/retro-v2.svg" alt="logo"/>
    <img className="logo brand" src="/pan-v2.svg" alt="logo"/>
    <img className="logo brand" src="/plate-v2.svg" alt="logo"/>
          </div>
        </BodyMain>
      </MainBody>
    </div>
  );
}

export default Home;
