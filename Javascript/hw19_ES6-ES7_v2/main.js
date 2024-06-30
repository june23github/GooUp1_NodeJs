// Import the calculation functions from the files.
import {add} from './add.js'
import {sub} from './sub.js'
import {mul} from './mul.js'
import {div} from './div.js'


// Demo
const main = () => {
    console.log(`0.1 + 0.2 = ${add(0.1, 0.2)}`);
    console.log(`0.1 - 0.2 = ${sub(0.1, 0.2)}`);
    console.log(`0.1 * 0.2 = ${mul(0.1, 0.2)}`);
    console.log(`0.1 / 0.2 = ${div(0.1, 0.2)}`);
};

main();