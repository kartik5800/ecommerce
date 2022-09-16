import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    category: [],
    error: ''
}



export const categoryReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);    

    switch (action.type) {
        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
        
        case ActionTypes.POST_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((l) => l.id !== action.payload),
                error: ''
            }

        case ActionTypes.UPDATE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    } else {
                        return l
                    }
                }),
                error: ''
            }


        case ActionTypes.LOADING_CATEGORY:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }


        case ActionTypes.ERROE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: [],
                errors: action.payload
            }
        default:
            return state;
    }
}


