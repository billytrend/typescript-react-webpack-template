import { combineReducers } from 'redux'
import {ACTION_TYPE} from "../actions/action";

class State {
    content: string;

    constructor(content:string) {
        this.content = content;
    }
}

const initialState = new State("Test");

function example(state = initialState, action): State {
    switch (action.type) {
        case ACTION_TYPE:
            return { content: "Actioned" };
        default:
            return state;
    }
}

const basicApp = combineReducers({
    example
});

export default basicApp;