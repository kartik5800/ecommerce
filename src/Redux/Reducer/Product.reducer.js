import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    product: [],
    error: ''
}



export const productReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.GET_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                error: ''
            }
            case ActionTypes.GET_SINGLE_PRODUCT:
                return {
                    ...state,
                    isLoading: false,
                    product: state.product.filter((l) => l.id !== action.payload),
                    error: ''
                }
        case ActionTypes.POST_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: state.product.concat(action.payload),
                error: ''
            }
            case ActionTypes.DELETE_PRODUCT:
                return {
                    ...state,
                    isLoading: false,
                    product: state.product.filter((l) => l.id !== action.payload),
                    error: ''
                }

                case ActionTypes.UPDATE_PRODUCT:
                return {
                    ...state,
                    isLoading: false,
                    product: state.product.map((l) => {
                        if (l.id === action.payload.id) {
                            return action.payload
                        }else{
                            return l
                        }
                    }),
                    error: ''
                }


                case ActionTypes.LOADING_PRODUCT:
            return {
                ...state,
                isLoading: true,
                errors: ''
            }


            case ActionTypes.ERROE_PRODUCT:
            return {
                ...state,
                isLoading: false,
                product: [],
                errors: action.payload
            }
        default:
            return state;
    }
}


