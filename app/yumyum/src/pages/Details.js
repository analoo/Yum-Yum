import React, { useEffect, useState } from "react";
import MainBody from "../components/Containers/mainBody"
import { LIElement, ULElement } from "../components/Recipe/listElem"
import Step from "../components/Recipe/step"
import AddRating from "../components/Form/Add-Rating"
import BodyMain from "../components/Containers/bodyMain"
import API from "../utils/API"
import { Link } from "react-router-dom";


import { useSessionContext } from "../utils/GlobalState";
import {
    LOADING,
    SET_CURRENT_INGREDIENTS,
    SET_CURRENT_RECIPE,
    SET_TAGS,
    SET_DIRECTIONS
} from "../utils/actions";



const Details = (props) => {
    const [state, dispatch] = useSessionContext();
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [currentSteps, setCurrentSteps] = useState([])
    const [currentTags, setCurrentTags] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([])
    const [stepCount, setStepCount] = useState("")
    const [displayRating, setDisplayRating] = useState("")
    const [ownedByUser, setOwnedByUser] = useState("")

    console.log("current Recipe:" , state.currentRecipe)
    console.log("current Ingredients:" , state.currentIngredients)
    console.log("current Tags:" , state.currentTags)
    console.log("current Directions:" , state.currentDirections)






    useEffect(() => {
        loadRecipes();
        setDisplayRating(false)
        setOwnedByUser(false)
    }, [])

    const updateGlobalState = (data) => {
        let ingredientData = [];
        let tagData = [];

        
        data.RecipeIngredients.map(ing => {
            ingredientData.push({name: ing.IngredientName, amount: ing.amount, measurement: ing.measurement})
            
        })

        data.RecipeTags.map(tag => {
            tagData.push(tag.tag)
            
        })
        dispatch({
            type: LOADING
        });
        dispatch({
            type: SET_DIRECTIONS,
            directions: data.directions
        })
        dispatch({
            type: SET_CURRENT_INGREDIENTS,
            ingredients: ingredientData
        });

        dispatch({
            type: SET_CURRENT_RECIPE,
            recipe: {
                name: data.name,
                servingSize: data.servingSize,
                activeTime: data.activeTime,
                totalTime: data.totalTime,
                directions: data.directions,
                ingredients: ingredientData,
                tags: tagData,
                source: state.user.id,
                UserId: state.user.id
            }
        });
        dispatch({
            type: SET_TAGS,
            tags: tagData
        });
    };

    function isUserRecipe(arr) {
        arr.map(item => {
            console.log(item.UserId)
            console.log(state.user.id)
            console.log(item.edited)
            if (item.UserId === state.user.id && item.edited === true) {
                setOwnedByUser(true)
            }
        })
    }



    function loadRecipes() {
        API.getSingleRecipe(props.match.params.id)
            .then(result => {
                setCurrentRecipe(result.data)
                setCurrentSteps(result.data.directions.split("\n\n"))
                setCurrentTags(result.data.RecipeTags)
                setCurrentIngredients(result.data.RecipeIngredients)
                isUserRecipe(result.data.UserRecipes)
                updateGlobalState(result.data)

                console.log(result.data)
            })
            .catch(err => console.log(err))
    }

    function startCount() {
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

    function createUserRecipe() {
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

    function handleStartClick() {
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
                        {ownedByUser ?
                            <div className="add-recipe" style={{ color: "#ff6754" }}>
                                <a href="/add-Recipe">Edit My Recipe</a>
                            </div> :
                            <div className="edit-recipe">
                                <Link to={"/add-Recipe/"}>

                                <p style={{ color: "#ff6754" }}>Copy Recipe</p>
                                </Link>
                            </div>
                        }

                        <h3>{currentRecipe.name}</h3>
                        <div className="row">
                            <div className="col-md-4">
                                <img className="detail-img" src={currentRecipe.photo} />
                                {props.ratingAverage ?
                                    <p>{props.ratingAverage}</p> :
                                    null}
                                {currentTags.map(el => (
                                    <p className="tag" key={el.tag}>{el.tag}</p>
                                ))}
                            </div>
                            <div className="col-md-8">
                                <p className="rec-label"><label>Details</label></p>
                                <div className="row" style={{ textAlign: "center" }}>
                                    {currentRecipe.totalTime ?
                                        <div className="col-md-3">
                                            <p className="table-head">Total Time </p>
                                            <p className="table-body">{currentRecipe.totalTime}</p>
                                        </div> : null}
                                    {currentRecipe.activeTime ?
                                        <div className="col-md-3">
                                            <p className="table-head">Active Time </p>
                                            <p className="table-body">{currentRecipe.activeTime}</p>
                                        </div> : null}

                                    {currentRecipe.servingSize ?
                                        <div className="col-md-3">
                                            <p className="table-head">Serving Size </p>
                                            <p className="table-body">{currentRecipe.servingSize}</p>
                                        </div> : null}

                                    {currentRecipe.source ?
                                        <div className="col-md-3">
                                            <p className="table-head">Source</p>
                                            <a className="table-body" href={currentRecipe.source}>link</a>
                                        </div> : null}
                                </div>
                                <p className="rec-label"><label>Ingredients</label></p>
                                <ULElement>
                                    {currentIngredients.map(ingredient => (
                                        <LIElement val1={` ${ingredient.amount} ${ingredient.measurement}`} val2={`${ingredient.IngredientName}`} key={ingredient.IngredientName} />
                                    ))}
                                </ULElement>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12"><label>Instructions</label>
                                <ULElement>
                                    {currentSteps
                                        .map((step, i) => {
                                            return (i === stepCount) ? (<Step val={step} key={`step-${i}`} data={i} length={currentSteps.length} showRating={() => setDisplayRating(true)} countDown={() => setStateCount(-1)} countUp={() => setStateCount(1)} />) : (<LIElement val1={`${i + 1}.`} val2={`${step}`} key={`step-${i}`} />)
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
                        <AddRating recipeID={currentRecipe.id} userID={state.user.id} />
                    </BodyMain> : null
                }


            </MainBody>
        </div>
    )
}

export default Details;