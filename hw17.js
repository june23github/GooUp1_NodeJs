function demoPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random()*10);
            console.log(randomNumber);
            if (randomNumber >= 5){
                resolve(true);
            }else{
                reject(false);
            }
        }, 1000)
    }) 
}
// Create a array includes 20 promises 
const promises = Array(20).fill().map(() => demoPromise());

Promise.all(promises)
    .then(result => console.log('All promises resolve'))
    .catch(err => console.log('At least 1 promise reject'))
    .finally(() => console.log('All promises finished'))

// async function handlePromises    (){
//     let count = 1;
//     for (let promise of promises) {
//         let currentCount = count;
//         await promise
//             .then(result => console.log(`Promise ${currentCount} resolve`))
//             .catch(err => console.log(`Promise ${currentCount} reject`));
//         count++;
//     }
// }
// handlePromises();