function tiketGenerate(tiket){
  let array =[]
  let char = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
  let charLength = char.length
  let digit = 9
  let code = ''
  let ticket = ''
  const prefix = ['TGD','YCC','SKU'];
  const prefixLength = prefix.length;
  let pref = ''
  for (let x = 0; x < tiket; x++){
    for (let i = 0; i < digit; i++) {
      let result = char[Math.floor(Math.random()*charLength)]
      code = code + result
    }
    pref = prefix[Math.floor(Math.random()*prefixLength)]
    ticket = pref + code
    array.push(ticket)
    code = ''
  }
  return array
}

let tiketResult = tiketGenerate(1000)

const fs = require('fs');
const write = fs.writeFileSync('hasil-soal-2.txt', tiketResult);

return write;