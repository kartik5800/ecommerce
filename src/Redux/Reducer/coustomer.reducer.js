import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    coustomer: [],
    error: ''
}
//coustomer database name
export const coustomerReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_COUSTOMER:
            return {
                ...state,
                isLoading: false,
                coustomer: action.payload,
                error: ''
            }
        case ActionTypes.POST_COUSTOMER:
            return {
                ...state,
                isLoading: false,
                coustomer: state.coustomer.concat(action.payload),
                error: ''
            }



                case ActionTypes.LOADING_COUSTOMER:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }


            case ActionTypes.ERROE_COUSTOMER:
            return {
                ...state,
                isLoading: false,
                coustomer: [],
                errors: action.payload
            }
        default:
            return state;
    }
}