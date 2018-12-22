import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return actions.payload;
        default:
            return state;
    }
};