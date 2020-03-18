import * as types from '../Constants';

const rootReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case types.NEXT_QUESTION: 
            return {...state, countQuestion: action.value}
        default:
            return state
    }
} 

export default rootReducer;