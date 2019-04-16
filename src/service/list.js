import { get } from './index';

const ENTITY = '/api/';

let getList = (data) => {
    return get(`${ENTITY}articleList`,data);
}
export default {
    getList,
}