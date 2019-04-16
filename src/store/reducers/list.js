import * as types from '../action-type';
const initState = {
    data: [],
    lately: [],
};
function reducer(state = initState, action) {
    switch (action.type) {
        case types.GET_LIST_DATA:
            return { ...state, data: action.payload };
        case types.GET_LATELY_DATA:
            return { ...state, lately: action.payload };
        default:
            return state;
    }
}
export default reducer;