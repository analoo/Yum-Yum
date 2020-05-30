import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Recipes from "../seeders/recipeSeeds";

function SeedsPage() {
    const [getRecipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(Recipes);
    }, [])

    console.log(Recipes);
    console.log(getRecipes);

    const seedRecipes = (e) => {
        e.preventDefault();

        let recipesArr = [...getRecipes];

        for (let i = 0; i < recipesArr.length; i++) {
            createRecipe(i);
            console.log("recipe successfully submitted!");
        }
    }

    const createRecipe = (i) => {

        let recipesArr = [...getRecipes];

        let name = recipesArr[i].name;
        let servingSize = recipesArr[i].servingSize;


        let directions = recipesArr[i].directions;
        let directionsString = "";

        for (var j = 0; j < directions.length; j++) {

            if(j === (directions.length-1)){
                directionsString += directions[j];
            }
            else{
                directionsString += directions[j] + "\n\n";
            }
        }

        let ingredients = recipesArr[i].ingredients;
        let tags = recipesArr[i].tags;
        let source = recipesArr[i].source;

        let photo = recipesArr[i].photo

        let newRecipe = {
            name: name,
            photo: photo,
            servingSize: servingSize,
            directions: directionsString,
            ingredients: ingredients,
            tags: tags,
            source: source,
            UserId: 1
        }

        console.log(newRecipe)
        API.postRecipe(
            newRecipe
        )
            .then(res1 => {
                console.log("recipe submitted!");
                console.log(res1);
                let recipeId = res1.data;
                const ingredients = newRecipe.ingredients;
                console.log(ingredients);

                for (let i = 0; i < ingredients.length; i++) {
                    console.log("submitting ingredient" + i);
                    const ingredient = ingredients[i];
                    API.postIngredient({
                        name: ingredient.name.toLowerCase()
                    }).then(res3 => {
                        console.log(res3);
                    }).catch(err => {
                        console.log(err);
                    })

                    const recipeIngredient = {
                        amount: ingredient.amount,
                        measurement: ingredient.measurement,
                        IngredientName: ingredient.name.toLowerCase(),
                        RecipeId: recipeId
                    }

                    API.postRecipeIngredient(recipeIngredient)
                        .then(res4 => {
                            console.log(res4);
                        }).catch(err => {
                            console.log(err);
                        })
                }

                const tags = newRecipe.tags

                for (let i = 0; i < tags.length; i++) {

                    const newTag = {
                        tag: tags[i].toLowerCase()
                    };

                    API.postTag(newTag)
                        .then(res4 => {
                            console.log(res4);
                        }).catch(err => {
                            console.log(err);
                        });

                    const recipeTag = {
                        category: "",
                        RecipeId: recipeId,
                        TagTag: tags[i].toLowerCase()
                    }

                    API.postRecipeTag(recipeTag)
                        .then(res6 => {
                            console.log(res6);
                        }).catch(err => {
                            console.log(err);
                        });
                }

                console.log(res1)
            })
            .catch(err => {
                console.log(err)
            })
    };

    return (
        <div>
            <p>Click to seed recipe data</p>
            <button onClick={e => seedRecipes(e)}>Seed</button>
        </div>
    )
}

export default SeedsPage;