const csv = require('csv-parser');
const { Readable } = require('stream');


const parseCSVToJSON = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const results = [];

    const stream = Readable.from(fileBuffer, { encoding: 'utf-8' });
    
    stream
      .pipe(csv({ separator: ';' })) 
      .on('data', (data) => {
        const formattedData = {};

        for (const key in data) {
          const formattedKey = key.replace(/;/g, ''); 
          formattedData[formattedKey] = data[key];
        }
        results.push(formattedData);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};


module.exports = parseCSVToJSON