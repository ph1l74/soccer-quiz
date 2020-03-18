import * as types from '../Constants';

export const nextQuestion = (value) => {
    return {
        type: types.NEXT_QUESTION,
        value
    }
}

export function startLoading() {
    return {
        type: types.START_LOADING
    }
}

export function stopLoading() {
    return {
        type: types.STOP_LOADING
    }
}

export function addData(value) {
    return {
        type: types.ADD_DATA,
        value
    }
}

export function addAnswer(value) {
    return {
        type: types.ADD_ANSWER,
        value
    }
}
