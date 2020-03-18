import * as types from '../Constants';

const rootReducer = (state = { questions: [], isLoading: false, curQuestion: 0 }, action) => {
    switch (action.type) {
        case types.NEXT_QUESTION:
            return { ...state, curQuestion: action.value }
        case types.START_LOADING:
            return { ...state, isLoading: true };
        case types.STOP_LOADING:
            return { ...state, isLoading: false };
        case types.ADD_DATA:
            return { ...state, questions: action.value }
        default:
            return state
    }
}

export default rootReducer;