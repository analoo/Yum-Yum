import React, { useEffect, useState } from "react";
import MainBody from "../components/Containers/mainBody"
import { OLElement, LIElement, ULElement } from "../components/Recipe/listElem"
import API from "../utils/API"



const Details = (props) => {
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [currentSteps, setCurrentSteps] = useState([])
    const [currentTags, setCurrentTags] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([])

    useEffect(() => {
        loadRecipes();
    }, [])

    function loadRecipes() {
        API.getSingleRecipe(props.match.params.id)
            .then(result => {
                setCurrentRecipe(result.data)
                setCurrentSteps(result.data.directions.split("\n\n"))
                // setCurrentTags(result.data.tags)
                // setCurrentIngredients(result.data.ingredients)
                console.log(result.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <MainBody>
                {currentRecipe === 0
                    ? <h3>No Results</h3>
                    :
                    <div className="container recipe-container">
                        <h3>{currentRecipe.name}</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="detail-img" src={currentRecipe.photo} />
                                {currentTags.map(el => (
                                    <p className="tag" key={el.tag}>{el.tag}</p>
                                ))}
                            </div>
                            <div className="col-md-8">
                                <p className="rec-label"><label>Description</label></p>
                                <p className="description">{currentRecipe.description}</p>
                                <p className="rec-label"><label>Ingredients</label></p>
                                <ULElement>
                                    {currentIngredients.map(ingredient => (
                                        <LIElement val={ingredient.name & " " & ingredient.amount & " " & ingredient.measurement} key={ingredient.name} />
                                    ))}
                                </ULElement>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"><label>Instructions</label></div>
                            <ULElement>
                                {currentSteps.map(step => (
                                    <LIElement val={step} key={step.split(".")[0]} />
                                ))}
                            </ULElement>
                        </div>
                        <button className="btn-primary">Start</button>

                    </div>
                }
            </MainBody>
        </div>
    )
}

export default Details;