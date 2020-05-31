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

    // local state variables for tracking information
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [currentSteps, setCurrentSteps] = useState([])
    const [currentTags, setCurrentTags] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState([])

    // local state variables for tracking display elements
    const [stepCount, setStepCount] = useState("")
    const [displayRating, setDisplayRating] = useState("")
    // by default, we assume that the record is not owned by the user
    const [ownedByUser, setOwnedByUser] = useState("")

    // On load, we want to load recipes, set display to false 
    useEffect(() => {
        loadRecipes();
        setDisplayRating(false)
    }, [])

    
    // This function updates the recipe in the global state
    const updateGlobalState = (data) => {
        let ingredientData = [];
        let tagData = [];
        let owner;
        // ingredients data from recipeIngredients is parsed into the correct format
        data.RecipeIngredients.map(ing => {
            return ingredientData.push({ name: ing.IngredientName, amount: ing.amount, measurement: ing.measurement })
        })
        // tags from recipeIngredients is parsed into the correct format
        data.RecipeTags.map(tag => {
            tagData.push(tag.TagTag)
        })

        // function that checks if the recipe viewed is owned by the viewer and updates local and global state

        data.UserRecipes.map(item => {
            if (item.UserId === state.user.id && item.edited === true) {
                owner = true
                setOwnedByUser(true)
                
            }
            else {
                owner = false
                setOwnedByUser(false)  
            }
        })

        // dispatch statements to build global state
        dispatch({
            type: LOADING
        });
        dispatch({
            type: SET_DIRECTIONS,
            directions: data.directions.split('\n\n')
        })
        dispatch({
            type: SET_CURRENT_INGREDIENTS,
            ingredients: ingredientData
        });

        dispatch({
            type: SET_CURRENT_RECIPE,
            recipe: {
                id: data.id,
                name: data.name,
                servingSize: data.servingSize,
                activeTime: data.activeTime,
                totalTime: data.totalTime,
                directions: data.directions,
                ingredients: ingredientData,
                tags: tagData,
                source: state.user.id,
                UserId: state.user.id,
                userOwner: owner
            }
        });
        dispatch({
            type: SET_TAGS,
            tags: tagData
        });
    };

    // load Recipes takes the pages params id to make a call to get a single Recipe and all local state variables are assigned here)
    function loadRecipes() {
        API.getSingleRecipe(props.match.params.id)
            .then(result => {
                setCurrentRecipe(result.data)
                setCurrentSteps(result.data.directions.split("\n\n"))
                setCurrentTags(result.data.RecipeTags)
                setCurrentIngredients(result.data.RecipeIngredients)
                updateGlobalState(result.data)
                console.log(result.data)
            })
            .catch(err => console.log(err))
    }

    // to build the user/recipe relationship
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

    // when start button is clicked, creates a user recipe relationship and sets step count to 0
    function handleStartClick() {
        createUserRecipe();
        setStepCount(0);
    }

    // makes sure that step count does not go out of range as the user is going next or previous
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

    return (
        <div>
            <MainBody>
                <div className="container recipe-container">
                    {ownedByUser ?
                        <div className="edit-recipe">
                            <Link to={"/add-Recipe/"}>

                                <p style={{ color: "#ff6754" }}>Edit Recipe</p>
                            </Link>
                        </div>
                        :
                        <div className="edit-recipe">
                            <Link to={"/add-Recipe/"}>

                                <p style={{ color: "#ff6754" }}>Copy Recipe</p>
                            </Link>
                        </div>
                    }

                    <h3>{currentRecipe.name}</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="detail-img" src={currentRecipe.photo} alt={currentRecipe.name} />
                            {currentRecipe.ratingAverage ?
                                <p id="yum-score" style={{ color: "#ff6754" }}>rating: <label>{currentRecipe.ratingAverage}</label></p> :
                                null}

                            {currentTags.length > 0 ?    
                            currentTags.map( (el,i) => (
                                <p className="tag" key={i}>{el.TagTag}</p>
                            )) : null
                        }
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
                            <hr />
                            <p className="rec-label"><label>Ingredients</label></p>
                            <ULElement>
                                {currentIngredients.map(ingredient => (
                                    <LIElement val1={` ${ingredient.amount} ${ingredient.measurement}`} val2={`${ingredient.IngredientName}`} key={ingredient.IngredientName} />
                                ))}
                            </ULElement>
                        </div>
                    </div>
                    <hr />
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