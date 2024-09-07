"use strict";
function LogExecutionTime(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Executing ${propertyKey}...`);
        return originalMethod.apply(this, args);
    };
}
class MyService {
    doSomething() {
        console.log('Doing something');
    }
}
const service = new MyService();
service.doSomething();
// 输出:
// Executing doSomething...
// Doing something
