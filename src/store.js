import { createStore } from 'redux'

// action tytpe
const ADD = 'ADD';
const DELETE = 'DELETE';

// action creator
const addItem = text => {
    return { type: ADD, text };
}

const deleteItem = id => {
    return { type: DELETE, id };
}

export const actionCreators = { addItem, deleteItem };

// reducer
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
}

// store지정
let store = createStore(reducer);
export default store;
