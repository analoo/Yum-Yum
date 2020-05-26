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
    ADD_CURRENT_INGREDIENT,
    ADD_STEP,
    ADD_TAG,
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

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.recipe, ...state.userFavorites],
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
            };

        case ADD_CURRENT_INGREDIENT:
            return {
                ...state,
                currentIngredients: state.currentIngredients.concat(action.ingredient),
                loading: false
              };

        case ADD_STEP:
            return {
                ...state,
                currentDirections: state.currentDirections.concat(action.step),
                loading: false
                };

        case ADD_TAG:
            return {
                ...state,
                currentTags: state.currentTags.concat(action.tag),
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
        user: {},
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
        currentDirections: [],
        currentIngredients: [],
        currentTags:[],
        userGenerated: [],
        userFavorites: [],
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