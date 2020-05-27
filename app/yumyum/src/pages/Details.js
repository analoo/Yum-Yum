import React, { useEffect, useState } from "react";
import MainBody from "../components/Containers/mainBody"
import { LIElement, ULElement } from "../components/Recipe/listElem"
import Step from "../components/Recipe/step"
import AddRating from "../components/Form/Add-Rating"
import BodyMain from "../components/Containers/bodyMain"
import { useSessionContext } from "../utils/GlobalState";
import API from "../utils/API"



const Details = (props) => {
    const [state, dispatch] = useSessionContext();
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [currentSteps, setCurrentSteps] = useState([])
    const [currentTags, setCurrentTags] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([])
    const [stepCount, setStepCount] = useState("")
    const [displayRating, setDisplayRating] = useState("")


    useEffect(() => {
        loadRecipes();
        setDisplayRating(false)
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

    function startCount() {
        console.log("You tried to start count")
        setStepCount(0);
    }

    function setStateCount(count) {
        if (count === -1) {
            if (stepCount < 1) {
                setStepCount(0);
            }
            else {
                setStepCount(stepCount - 1)
            }
        }
        else if (count === 1) {
            if (stepCount >= currentSteps.length - 2) {
                setStepCount(currentSteps.length - 1)
            }
            else {
                setStepCount(stepCount + 1)
            }
        }
    }

    function createUserRecipe(){
        let newRep = {
            UserId: state.user.id,
            RecipeId: currentRecipe.id,
            userRecipeKey: `${state.user.id}-${currentRecipe.id}`
        }
        console.log(newRep)
        API.postUserRecipe(newRep)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    function handleStartClick(){
        createUserRecipe();
        startCount();
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
                                <p className="rec-label"><label>Details</label></p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className="table-head">Total Time </p>
                                        <p className="table-body">{currentRecipe.totalTime}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="table-head">Active Time </p>
                                        <p className="table-body">{currentRecipe.activeTime}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="table-head">Serving Size </p>
                                        <p className="table-body">{currentRecipe.servingSize}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="table-head">Source</p>
                                        <a className="table-body" href={currentRecipe.source}>link</a>
                                    </div>
                                </div>
                                <p className="rec-label"><label>Ingredients</label></p>
                                <ULElement>
                                    {currentIngredients.map(ingredient => (
                                        <LIElement val={ingredient.name & " " & ingredient.amount & " " & ingredient.measurement} key={ingredient.name} />
                                    ))}
                                </ULElement>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"><label>Instructions</label>
                                <ULElement>
                                    {currentSteps
                                        .map((step, i) => {
                                            return (i === stepCount) ? (<Step val={step} key={i} data={i} length={currentSteps.length} showRating={()=> setDisplayRating(true)} countDown={() => setStateCount(-1)} countUp={() => setStateCount(1)} />) : (<LIElement val={step} key={i} />)
                                        }
                                        )}
                                </ULElement>
                            </div>
                        </div>
                        {stepCount === "" ? 
                         <button className="btn-primary" onClick={handleStartClick}>Start</button> :
                         null
                        }

                       

                    </div>
                }
                {displayRating ?
                    <BodyMain >
                        <AddRating recipeID={currentRecipe.id} userID={state.user.id}/>
                    </BodyMain> : null
                }


            </MainBody>
        </div>
    )
}

export default Details;