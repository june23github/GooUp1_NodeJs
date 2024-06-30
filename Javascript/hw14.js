
function demoPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random()*10;
        console.log(randomNumber);
        if (randomNumber >= 5){
            resolve(true);
        }else{
            reject(false);
        }
    });
}

// demoPromise()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

Promise.all([demoPromise(), demoPromise()])
    .then(results => {
        console.log('2 promise resolve:', results);
    })
    .catch(error => {
        console.log('1 promise reject:', error);
    })
    .finally(() => {
        console.log('Promise.all đã hoàn thành.');
    });
    