// 发送ajax请求
import config from './config'

export default (url, data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        var reqTask = wx.request({
            url: config.host + url,
            data,
            header: {'content-type':'application/json'},
            method,
            dataType: 'json',
            responseType: 'text',
            success: (result)=>{
                resolve(result.data)
            },
            fail: (error)=>{
                reject(error)
            }
        });
    })

}