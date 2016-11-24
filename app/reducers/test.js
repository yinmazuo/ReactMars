import * as ActionTypes from '../constants/SidebarActionType';

const initialState = {
    show: true
};

const test = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.DISPLAY_TEST:
            return Object.assign({}, state, {show: !state.show});
        default:
            return state;
    }
};

export default test;
