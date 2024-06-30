// function formatMoney(value) {
//     let str = Math.floor(value).toString();
//     const len = str.length;
//     let count = 0;
//     let result = '';

//     for (let i = len-1; i >= 0; i--){
//         if (count != 0 && count % 3 == 0){
//             result = ',' + result;
//         }
//         result = str[i] + result;
//         count++;
//     }
//     return result;
// }
function formatMoney(value, numberToRound) {
    let str = Math.floor(Math.round(value/(10**numberToRound))*(10**numberToRound)).toString();
    
    const len = str.length;
    let count = 0;
    let result = '';

    for (let i = len-1; i >= 0; i--){
        if (count != 0 && count % 3 == 0){
            result = ',' + result;
        }
        result = str[i] + result;
        count++;
    }
    return result;
}
console.log(formatMoney(1278994, 4));