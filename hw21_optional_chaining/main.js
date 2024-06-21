import { store } from './store.js';

// Use optional chaining to access specifications of the first product
const firstProductSpecifications = store.products[0]?.details?.specifications;
if (firstProductSpecifications) {
  console.log('Specifications of the first product:', firstProductSpecifications);
} else {
  console.log('Specifications can not be found');
}

// Use optional chaining to call getPrice for the third product
const thirdProductPrice = store.products[2]?.getPrice?.();
if (thirdProductPrice !== undefined) {
  console.log('Price of the third product:', thirdProductPrice);
} else {
  console.log('Không có thông tin giá.');
}