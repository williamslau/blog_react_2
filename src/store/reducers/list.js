import * as types from '../action-type';
const initState = {
    data: {
        items: [],
        pageNum: 1,
        pageSize: 0,
        total: 0,
    },
    lately:[],
    tags:[],
};
function reducer(state = initState, action) {
    switch (action.type) {
        case types.GET_LIST_DATA:
            return {...state,data: action.payload};
        default:
            return state;
    }
}
export default reducer;