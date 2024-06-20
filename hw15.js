const delayBound1 = 2000;
const delayBound2 = 3000;

function demoPromise(delayBound) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random()*10;
            console.log(randomNumber);
            if (randomNumber >= 5){
                resolve(true);
            }else{
                reject(false);
            }
        }, delayBound)
    });
}



Promise.all([demoPromise(delayBound1), demoPromise(delayBound2)])
    .then(results => {
        console.log('2 promise resolve:', results);
    })
    .catch(error => {
        console.log('1 promise reject:', error);
    })
    .finally(() => {
        console.log('Promise.all đã hoàn thành.');
    });

// Promise.allSettled([demoPromise(delayBound1), demoPromise(delayBound2)])
//     .then(results => {
//         console.log(results);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() =>{
//         console.log('Promise.allSettled đã hoàn thành.');
//     })

