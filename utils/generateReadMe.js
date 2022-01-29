// const fs = require('fs');
// const { resolve } = require('path');



// const writeToFile = (fileContent) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./dist/README.md', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             resolve({
//                 ok: true,
//                 message: 'README created'
//             });
//         });
//     });
// };

// const copyFile = () => {
//     return new Promise((resolve, reject) => {
//         fs.copyFile('./dist/app.js', fileContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: 'copy complete'
//             });
//         });
//     });
// };

// module.exports = { writeToFile, copyFile };