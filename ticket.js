function makeRandomCode(ticket) {
  let result = '';
  let resultPrefix = '';
  let finalCode = '';
  const prefix = ['TGD','YCC','SKU'];
  const prefixLength = prefix.length;
  let array = [];
  for (let index = 0; index < ticket; index++) {
    result = Math.random().toString(36).substr(4);  
    resultPrefix = prefix[Math.floor(Math.random() * prefixLength)]  
    finalCode = resultPrefix + result.toUpperCase();
    array.push(finalCode)
  }
  return array;
  
}
let arrayResult = makeRandomCode(1000)
console.log(arrayResult)

const fs = require('fs');
const write = fs.writeFileSync('data.txt', arrayResult);

return write;