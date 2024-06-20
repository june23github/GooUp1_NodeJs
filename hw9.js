const {XMLHttpRequest} = require('xmlhttprequest')
const xhr = new XMLHttpRequest();
const url = "https://dummyjson.com/carts";
const date = new Date();
const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
const filename = `cart-${formattedDate}.js`;

const fs = require('fs');

// xhr.open("GET", url, true);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         const fileContent = `const carts = ${JSON.stringify(data, null, 2)};`;
//         fs.writeFile('./' + filename,fileContent, 'utf8', (err) => {

//           if (err) {
//               console.log(`Error writing file: ${err}`);
//           } else {
//               console.log(`File is written successfully!`);
//           }
      
//       });
//     }
// };
// xhr.send();


// fetch(url)
//   .then(req => req.json())
//   .then(data => {
//     fs.writeFile('./' + filename, `const carts = ${JSON.stringify(data, null, 2)};`, 'utf8', (err) => {

//       if (err) {
//           console.log(`Error writing file: ${err}`);
//       } else {
//           console.log(`File is written successfully!`);
//       }
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

const axios = require('axios')

axios
  .get(url)
  .then(response => {
    const data = response.data;
        const fileContent = `const carts = ${JSON.stringify(data, null, 2)};`;
        fs.writeFile('./' + filename,fileContent, 'utf8', (err) => {

          if (err) {
              console.log(`Error writing file: ${err}`);
          } else {
              console.log(`File is written successfully!`);
          }
      
      }); 
  })
  .catch(error => {
    console.log("error", error);
  });

