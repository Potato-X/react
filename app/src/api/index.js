import server from '../utils/request.js'
export function getData(params){
    return server({
        url:'/api/getUserInfo',
        method:'get',
        params
    })
}