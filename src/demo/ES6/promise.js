var promise = new Promise(function (resolve, reject) {
    resolve('传递给then的值')
})
promise.then(function (value) {
    console.log(value)
}, function (error) {
    console.error(error)
})


function test() {
    return new Promise((resolve, reject) => {
        reject(new Error('es'))
    })
}

test().catch((e) => {
    console.log(e.message) // es
})


// Promise.resolve()
// 让Promise直接resolve
// 就是就可以看做是语法糖
Promise.resolve(42)
new Promise(function (resolve) {
    resolve(42)
})

// Promise.reject 
Promise.reject(42)


// 手动实现Promise.all
Promise.all = function (values) {
    return new Promise((resolve, reject) => {
        let arr = [];
        let i = 0;
        let processData = function (key, value) {
            arr[key] = value;
            if (++i === values.length) {
                resolve(arr);
            }
        };
        for (let i = 0; i < values.length; i++) {
            let current = values[i];
            if (isPromise(current)) {
                //判断传进来的是promise还是普通数据
                current.then((y) => {
                    processData(i, y);
                }, reject);
            } else {
                processData(i, current);
            }
        }
    });
};