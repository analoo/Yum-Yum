import API from "../utils/API";
import recipes from "../../../seeders/recipeSeeds";

for(let i=0; i<recipes.length; i++){
        let directionsString;
        directionsString += directions[i] + "\n\n";

        const newRecipe ={
            name: recipe[i].name,
            servingSize: recipe[i].servingSize,
            activeTime: recipe[i].activeTime,
            totalTime: recipe[i].totalTime,
            directions: recipe[i].directions,
            ingredients: recipe[i].ingredients,
            tags: recipe[i].tags,
            source: recipe[i].source,
            UserId: 0
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

                for(let i=0; i<tags.length; i++){
                    
                    const newTag = {
                        tag:tags[i].toLowerCase()
                    };

                    API.postTag(newTag)
                    .then(res4 => {
                        console.log(res4);
                    }).catch(err => {
                        console.log(err);
                    });
                        
                    const recipeTag={
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
}