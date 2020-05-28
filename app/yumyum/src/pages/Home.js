import React, { useEffect, useState } from "react";
import MainBody from "../components/Containers/mainBody"
import BodyMain from "../components/Containers/bodyMain"
import Card from "../components/Card/index";
import CardContainer from "../components/Card/CardContainer";
import CardRow from "../components/Card/CardRow"
import API from "../utils/API"


function Home() {
  const [recipes, setRecipes] = useState([])

  function loadRecipes() {
    API.getTopRecipes()
      .then(res => {
        setRecipes(res.data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadRecipes();
  }, [])


  return (
    <div>
      <MainBody>
        <BodyMain>
          <div>
            <h3>Welcome to Yum&Yum</h3>
            <CardContainer>
              <CardRow>
                {recipes.map(recipe => (
                  <Card recipe={recipe} key={recipe.id} />
                ))}
              </CardRow>
            </CardContainer>

          </div>
        </BodyMain>
      </MainBody>
    </div>
  );
}

export default Home;
