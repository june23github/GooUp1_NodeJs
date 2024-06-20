const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'my-data');

const fileNames = [
    'Gooup1_User_Tracking_121220230405.txt',
    'Gooup1_User_Tracking_290220230405.txt',
    'Gooup1_User_Tracking_29022023040506.txt',
    'Gooup1_User_Tracking_290220230450.txt',
    'Gooup1_User_Tracking_290220234050.txt',
    'Gooup1_User_Tracking_290220234050.txt',
    'Gooup1_User_Tracking_290020232323.txt',
    'Gooup1_UserTracking_290020232323.txt',
    'Gooup1_User_Tracking_291220232323.txts',
  
]
if(!fs.existsSync(directoryPath)){
    fs.mkdirSync(directoryPath);
}

fileNames.forEach(filename => {
    const filePath = path.join(directoryPath, filename);
    fs.writeFileSync(filePath, filename);
})
const regex = /^Gooup1_User_Tracking_\d{12}.txt$/;

const matchingFiles = fileNames.filter(filename => regex.test(filename));

// console.log(matchingFiles);

// matchingFiles.forEach(filename => {
//     let filePath = path.join(directoryPath, filename);
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err){
//             console.log(err);
//         }else{
//             console.log(data);
//             const newData = data + '-OK';
//             fs.writeFile(filePath, newData, 'utf-8', err =>{
//                 if (err){
//                     console.log(err);
//                 }
//             })
//         }
//     });
// })


const nonMatchingFiles = fileNames.filter(filename => !regex.test(filename));
nonMatchingFiles.forEach(filename => {
    let filePath = path.join(directoryPath, filename);
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err){
            console.log(err);
        }else{
            console.log(data);
            const newData = data + '-OK';
            fs.writeFile(filePath, newData, 'utf-8', err =>{
                if (err){
                    console.log(err);
                }
            })
        }
    });
})

