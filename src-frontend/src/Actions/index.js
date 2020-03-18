import * as types from '../Constants';

export const nextQuestion = (value) => {
    return {
        type: types.NEXT_QUESTION,
        value
    }
}
