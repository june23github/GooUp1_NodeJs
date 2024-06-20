function check(n) {
    if ((n > 0) && (n%2 == 0)){
        return true;
    }
    return false;
}

let n1 = 10;
if (check(n1)){
    console.log(`${n1} la so nguyen duong chia het cho 2`);
} else{
    console.log(`${n1} khong phai so nguyen duong chia het cho 2`);
}
let n2 = -2;
if (check(n2)){
    console.log(`${n2} la so nguyen duong chia het cho 2`);
} else{
    console.log(`${n2} khong phai so nguyen duong chia het cho 2`);
}
let n3 = 5;
if (check(n3)){
    console.log(`${n3} la so nguyen duong chia het cho 2`);
} else{
    console.log(`${n3} khong phai so nguyen duong chia het cho 2`);
}
