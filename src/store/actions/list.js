import * as types from '../action-type'
import articleService from "../../service/list"

export default {
    getListData(data) {
        return {
            type: types.GET_LIST_DATA,
            payload: articleService.getList(data)
        }
    },
    getLatelyData(data) {
        return {
            type: types.GET_LATELY_DATA,
            payload: articleService.getList(data)
        }
    },
}