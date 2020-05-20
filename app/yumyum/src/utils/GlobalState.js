import React, {createContext, useReducer, useContext} from "react";

import {
    GET_MYRECIPES,
    ADD_RECIPE,
    ADD_FAVORITE,
    LOADING,
    UPDATE_FAVORITE,
    UPDATE_RECIPES,
    REMOVE_RECIPE,
    SET_CURRENT_RECIPE,
    COPY_RECIPE,
    REMOVE_FAVORITE
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
            }
        case UPDATE_RECIPES:
            return {
                ...state,

            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case UPDATE_FAVORITE:
            return{
                ...state,
                favorites: [...state.userFavorites],
                loading: false
            }
        case SET_CURRENT_RECIPE:
            return{
                ...state,
                currentRecipe: action.recipe,
                loading: false
            }
        default:
            return state

    }
}

const SessionProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer,{
        user: {
            id: "",
            username: "",
            email: "",
            name: ""
        },
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
        currentIngredients: [{
            ingredient: "",
            amount: "",
            measurement: ""
        }],
        currentTags:[{
            tag: ""
        }],
        userGenerated: [],
        userFavorites: [],
        currentSearch: "",
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />
}

const useSessionContext = () => {
    return useContext(SessionContext);
}

export { SessionProvider, useSessionContext};