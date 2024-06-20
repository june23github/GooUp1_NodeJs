function getInfoUser(user) {
    const {name, age, gender} = user;
    console.log(name, age, gender);
}

getInfoUser({
    name: "Le Hoang Linh",
    age: 20,
    gender: 'Male'
});


function logger(...input){
    return input.join('|');
}
console.log(logger('hello', 'world', 'this', 'is', 'a', 'test'))

const url = 'https://dummyjson.com/carts'
async function fetchProducts(url) {
    try {
        await fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Fetch data successfully!");
    } catch (error) {
        console.error("Error fetching data:", error);
    }   
  }
  
fetchProducts(url);

