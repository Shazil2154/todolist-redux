import {ADD_TO_LIST, REMOVE_FROM_LIST} from './constants';

const initialStateAdd = {
        list:[]
};

// using the es10 spread operator here as i answered n the interview
export const currentList = (state=initialStateAdd, action={}) => {
    switch(action.type){
        case ADD_TO_LIST:
            return {
                ...state,
                list: [ ...state.list, action.payload]
            }
        case REMOVE_FROM_LIST:
            return {
                ...state,
                list: [ ...state.list ].filter((item => {
                    return action.payload !== item
                }))
            }
        default:
            return state;
    }
}