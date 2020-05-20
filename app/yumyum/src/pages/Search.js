import React from "react";
import MainBody from "../components/Containers/mainBody";
import SearchBar from "../components/Search/Search-Bar"


function Search() {
  return (
    <div>
      <MainBody>
        <SearchBar placeholder="Search Recipes"/>
      <h1>Search Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </MainBody>
    </div>
  );
}

export default Search;
