import { get } from './index';

// const ENTITY = '/api/';

// let getList = () => {
//     return get(`${ENTITY}articleList`);
// }
const ENTITY='/api/list/';
function getList({current = 1, pageSize = 5, keyword = '',link='',category=''}){
    return get(`${ENTITY}getList?pageNum=${1}&pageSize=${pageSize}&keyword=${keyword}&link=${link}&category=${category}`);
}
export default {
    getList,
}