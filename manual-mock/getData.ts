import request from 'request';
import fs from 'fs';

export const requestToGoogle = () => {
  return new Promise(resolve => {
    request('http://www.google.com', function(_, __, body) {
      resolve(body);
    });
  });
};

export const getFromDataFile = () => {
  // console.log('existsSync', fs.existsSync);
  return JSON.parse(fs.readFileSync('manual-mock/data.json', 'utf8'));
};
