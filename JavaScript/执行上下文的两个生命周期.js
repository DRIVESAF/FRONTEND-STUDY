// 1. 创建阶段
var city = undefined
var area = undefined
function getAddress() {
    var country = '中国'
    return country + city + area
}
// 执⾏阶段
city = '北京'
area = '海淀区'
getAddress()
