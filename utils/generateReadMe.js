const fs = require('fs');
const { reject } = require('lodash');  // this generated on it's own???
const {resolve} = require('path');



const writeToFile = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'README created'
            });
        });
    });
};

module.exports = { writeToFile };