import React, {createContext, useReducer, useContext} from "react";

import {
    UPDATE_RECIPE,
    REMOVE_RECIPE,
    SET_CURRENT_RECIPE,
    COPY_RECIPE,
    ADD_RECIPE,
    LOADING,
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from ".actions";

const SessionContext = createContext();
const {Provider} = SessionContext;

const reducer = (state,action) => {
    switch (action.type) {
        
        
        default:
            return state






    }
}

const SessionProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer,{
        user: {
            username: "",
            email: "",
            name: ""
        },
        currentRecipe: {
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
            ingredients: [],
            tags: []


        },
        userGenerated: [],
        userFavorites: [],
    })
}