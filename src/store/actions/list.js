import * as types from '../action-type'
import articleService from "../../service/list"

export default {
    getListData(data) {
        console.log(articleService.getList);
        return {
            type: types.GET_LIST_DATA,
            payload: articleService.getList(data)
        }
    },
}