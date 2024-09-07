// 宠物类
class MyPets {
    owner = '⼩明'
}
// ⼩猫类
class MyCat extends MyPets {
    constructor(name, color) {
        super()
        this.name = name
        this.color = color
    }
    call() {
        console.log('喵喵喵')
    }
}
var xixi = new MyCat('⻄⻄', '⽩⾊')
var doudou = new MyCat('兜兜', '⽩⾊')
xixi.call()
doudou.call()
console.log(xixi.owner)
console.log(doudou.owner)
