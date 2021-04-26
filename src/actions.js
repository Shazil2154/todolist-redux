import {ADD_TO_LIST, REMOVE_FROM_LIST} from './constants';
let count=0;
export const addElement = (input) => ({
    type:ADD_TO_LIST,
    id: count++,
    payload: input
})
export const removeElement = (data) => ({
    type:REMOVE_FROM_LIST,
    payload:data
})
