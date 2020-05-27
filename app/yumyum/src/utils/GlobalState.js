import React, {createContext, useReducer, useContext} from "react";

import {
    GET_MYRECIPES,
    ADD_RECIPE,
    LOADING,
    UPDATE_RECIPES,
    REMOVE_RECIPE,
    SET_CURRENT_RECIPE,
    COPY_RECIPE,
    ADD_FAVORITE,
    UPDATE_FAVORITE,
    REMOVE_FAVORITE,
    SET_CURRENT_INGREDIENTS,
    SET_DIRECTIONS,
    SET_TAGS,
    SET_CURRENT_USER
} from "./actions";

const SessionContext = createContext();
const {Provider} = SessionContext;

const reducer = (state,action) => {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                currentRecipe: action.recipe,
                loading: false
            };

        case UPDATE_RECIPES:
            return {
                ...state,
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.favorite, ...state.favorites],
                loading: false
            };

        case UPDATE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.favorite],
                loading: false
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => {
                    return favorite.id !== action.id;
                })
            };

        case SET_CURRENT_RECIPE:
            return{
                ...state,
                currentRecipe: action.recipe,
                loading: false
            }
        case SET_CURRENT_INGREDIENTS:

            return {
                ...state,
                currentIngredients: action.ingredients,
                loading: false
              };
        case SET_DIRECTIONS:
            return {
                ...state,
                currentDirections: action.directions,
                loading: false
                };
        case SET_TAGS:

            return {
                ...state,
                currentTags: action.tags,
                loading: false
                };

        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.user,
                loading: false
            };
        default:
            return state

    }
}

const SessionProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer,{
        user: {id:1},
        favorites:[],
        currentRecipe: {
            id: "",
            name: "",
            description: "",
            photo: "",
            servingSize: "",
            activeTime: "",
            totalTime: "",
            directions: "",
            source: "",
            originalRecipeID: "",
            rating: "",
            // ingredients and tag will need to be revised before being loaded
            ingredients: [],
            tags: [],
        },
        currentDirections: [""],
        currentIngredients: [{name: "", amount: "", measurement: ""}],
<<<<<<< HEAD
        currentTags:[],
=======
        currentTags:[""],
        userGenerated: [],
        userFavorites: [],
>>>>>>> 419352e062bb2bde7e427568b771d10af42bac24
        currentSearch: "",
        path:"",
        loading: false
    });


    return <Provider value={[state, dispatch]} {...props} />
}

const useSessionContext = () => {
    return useContext(SessionContext);
}

export { SessionProvider, useSessionContext};