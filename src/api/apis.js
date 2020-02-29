import axios from 'axios'

let req=axios.create({
    baseURL:'http://192.168.2.102:3000',//基本路径
    timeout:10000//请求10秒
})

export function getmian(){
    return req.get('/api/seller')
}
export function getgoods(){
    return req.get('/api/goods')
}
export function getevaluate(){
    return req.get('/api/ratings')
}
