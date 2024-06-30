const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'json_files');
var textToWrite = '';

// // Tạo thư mục nếu chưa tồn tại
// if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
// }

// function generateRandomString(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// function generateValidJSON() {
//     return JSON.stringify({
//         name: generateRandomString(5),
//         age: Math.floor(Math.random() * 100),
//         city: generateRandomString(7)
//     }, null, 2);
// }

// function generateInvalidJSON() {
//     return generateRandomString(50);
// }

// for (let i = 1; i <= 10; i++) {
//     const fileName = path.join(dir, `file${i}.json`);
//     let content;
//     if (i <= 5) {
//         content = generateValidJSON();  // Tạo file JSON hợp lệ
//     } else {
//         content = generateInvalidJSON(); // Tạo file JSON không hợp lệ
//     }
//     fs.writeFileSync(fileName, content, 'utf8');
//     console.log(`Created ${fileName}`);
// }
const fileNames = fs.readdirSync(dirPath);
console.log(fileNames);

fileNames.forEach(filename => {
    const filepath = path.join(dirPath, filename);
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            console,log(err);
        }else{
            try {
                data = JSON.parse(data);
                textToWrite += filename + '\n' + 'OK' + '\n';
                fs.writeFile('result.txt', textToWrite, 'utf-8', (err, data) => {
                    if (err) {
                        console,log(err);
                    }
            })
            } catch (error) {
                textToWrite += filename + '\n' + 'NOK' + '\n';
                fs.writeFile('result.txt', textToWrite, 'utf-8', (err, data) => {
                    if (err) {
                        console,log(err);
                    }
                })
                console.log(error);
            }
        }
    })
})