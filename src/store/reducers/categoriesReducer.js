import { CATEGORIES_FAIlURE, CATEGORIES_FETCH_END, CATEGORIES_FETCH_START, CATEGORIES_SUCCESS, SET_CATEGORIES } from "../actions/types";

const initialState = {
    error: false,
    loading: true,
    categories: []
}

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload 
            }
        case CATEGORIES_FETCH_START:
            return {
                ...state,
                loading: true
            }
        case CATEGORIES_FETCH_END:
            return {
                ...state,
                loading: false 
            }
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                error: false
            }
        case CATEGORIES_FAIlURE:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}