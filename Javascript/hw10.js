const { v4: uuidv4 } = require('uuid');

const orderIds = new Set();
const orderDetails = new Map();

function createOrder(products) {
    if (products.length === 0) {
        console.log('Products must have at least 1 product');
        return;
    }
    const orderId = uuidv4(); // Corrected the creation of UUID
    orderIds.add(orderId);

    const order = products.map(product => {
        return {
            productId: product.productId,
            productQuantity: product.productQuantity,
            productName: product.productName,
            price: product.price
        };
    });
    orderDetails.set(orderId, order);
    console.log(`Order created with ID: ${orderId}`); // Debugging statement
}

function updateOrder(orderId, updateProducts) {
    if (!orderDetails.has(orderId)) {
        console.log(`Don't have any product with ID ${orderId}`);
        return;
    }
    let checkProductQuantity = updateProducts.every(product => product.productQuantity === 0);
    if (checkProductQuantity) {
        orderDetails.delete(orderId);
        orderIds.delete(orderId);
    } else {
        const updateOrder = updateProducts.map(product => {
            return {
                productId: product.productId,
                productQuantity: product.productQuantity,
                productName: product.productName,
                price: product.price
            };
        });
        orderDetails.set(orderId, updateOrder);
    }
}

function deleteOrder(orderId){
    if (!orderIds.has(orderId)){
        console.log(`Dont have any order with ID ${orderId}`);
        return;
    }
    orderDetails.delete(orderId);
    orderIds.delete(orderId)
}

function getAllOrders(){
    for(let [orderId, orderProduct] of orderDetails){
        console.log(orderId, orderProduct);
    }
}

function getMaxpriceOrder(){
    var orderIdmax = orderIds.values().next().value;
    var pricemax = 0;
    for (let [orderId, orderProduct] of orderDetails){
        let totalPrice =  orderProduct.reduce((total, product) => {
            return total + Number(product.productQuantity) * Number(product.price);
        }, 0);
        console.log(totalPrice);
        if (totalPrice >= pricemax){
            pricemax = totalPrice;
            orderIdmax = orderId
        }
    }
    return [orderIdmax, pricemax]
}

function getOrderIds(){
    for (const id of orderIds) {
        console.log(id);
    }
}
const productsTest1 = [
    {
        productId: 1,
        productQuantity: 3,
        productName: "Milk",
        price: 8000
    },
    {
        productId: 2,
        productQuantity: 3,
        productName: "Egg",
        price: 7000
    },
    {
        productId: 3,
        productQuantity: 3,
        productName: "Oranges",
        price: 5000
    }
];
const productsTest2 = [
    {
        productId: 4,
        productQuantity: 3,
        productName: "Table",
        price: 4000
    },
    {
        productId: 5,
        productQuantity: 3,
        productName: "Chair",
        price: 1500
    },
    {
        productId: 6,
        productQuantity: 3,
        productName: "Phone",
        price: 5000
    }
];
const productsTest3 = [
    {
        productId: 7,
        productQuantity: 3,
        productName: "Box",
        price: 1000
    },
    {
        productId: 2,
        productQuantity: 3,
        productName: "Laptop",
        price: 2000
    }
];
const productsTest4 = [
    {
        productId: 7,
        productQuantity: 0,
        productName: "Box",
        price: 8000
    },
    {
        productId: 2,
        productQuantity: 0,
        productName: "Laptop",
        price: 7000
    }
];

createOrder(productsTest1);
createOrder(productsTest2);
createOrder(productsTest3);
//getAllOrders();

getOrderIds();

// console.log(getMaxpriceOrder());

// deleteOrder(orderIds.values().next().value)
// getAllOrders();


// const firstOrderId = orderIds.values().next().value;
// console.log(`First Order ID to update: ${firstOrderId}`); // Debugging statement

// updateOrder(firstOrderId, productsTest4);

// console.log("Updated Order IDs Size:", orderIds.size);
// console.log("Updated Order Details:", orderDetails);
