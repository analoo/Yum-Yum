import React, {createContext, useReducer, useContext} from "react";

import {
    ADD_RECIPE,
    ADD_FAVORITE,
    LOADING,
    UPDATE_RECIPE,
    REMOVE_RECIPE,
    SET_CURRENT_RECIPE,
    COPY_RECIPE,
    LOADING,
    REMOVE_FAVORITE
} from ".actions";

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
                favorites: [action.recipe, ...state.favorites],
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
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
            tags: [],
        },
        currentIngredients: {
            id: "",
            name: "",
            amount: "",
            measurement: ""
        },
        currentTags:{

        },
        userGenerated: [],
        userFavorites: [],
        currentSearch: "",
        // AMF: I still do not know wht loading does but I am adding it here for consistency
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />
}

const useSessionContext = () => {
    return useContext(SessionContext);
}

export { SessionProvider, useSessionContext};