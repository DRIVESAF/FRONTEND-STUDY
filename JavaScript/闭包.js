function funOut(a) {
    return function funIn(b) {
        return a + b
    }
}
var funAdd = funOut(10)
console.log(funAdd(20)) // 30