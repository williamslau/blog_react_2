import * as types from '../action-type';
let initState = {
    number: 0
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case types.ADD:
            return { number: state.number + action.count };
        case types.MINUS:
            return { number: state.number - action.count };
        default:
            return state;
    }
}