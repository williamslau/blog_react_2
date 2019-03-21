import * as types from '../action-type'

export default {
    add(count) {
        return { type: types.ADD, count };
    },
    minus(count) {
        return { type: types.MINUS, count };
    }
}