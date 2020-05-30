import React, { createContext, useReducer, useContext } from "react";

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
const { Provider } = SessionContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_RECIPE:
            return {
                ...state,
                currentRecipe: action.recipe,
                loading: false
            }
        
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
                favorites: {...action.favorites},
                loading: false
            };

        case UPDATE_FAVORITE:
            return {
                ...state,
                favorites: {...action.favorites},
                loading: false
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((favorite) => {
                    return favorite.id !== action.id;
                })
            };


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

const SessionProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {

        user: {id:2, name: "Lisa", username: "lalalalisa", email: "lisa.simpson@mail.com"},
        favorites: {1:false},
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
            // AMF 5/30 added these for consistency
            ratingAverage: "",
            ratingCount: "",
            ratingTotal: "",
            ingredients: [],
            tags: [],
            // AMF 5/30 - this will store whether the user is the owner of this recipe
            userOwner: false
        },
        currentDirections: [],
        currentIngredients: [{ name: "", amount: "", measurement: "" }],
        currentTags: [""],

        // AMF 5/30 - commented these out with the goal of deleting
        userGenerated: [],
        currentSearch: "",
        path: "",
        loading: false
    });


    return <Provider value={[state, dispatch]} {...props} />
}

const useSessionContext = () => {
    return useContext(SessionContext);
}

export { SessionProvider, useSessionContext };