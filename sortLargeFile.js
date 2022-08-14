const fs = require("fs");
const { BitVector } = require("./bit_vector");
const readline = require('readline');
const readlineSync = require("readline-sync")

const fileName = readlineSync.question("Enteer file name : ", function () {
    readline.close();
});

const fileStream = fs.createReadStream(`${fileName}`, 'utf-8');

const rl = readline.createInterface({
    input: fileStream,
});

let writeFile = fs.createWriteStream("input.txt", {
    flags: 'a'
})

let length = 2000000000;
let vector = new BitVector(length)

const someFunc = async () =>{
for await (const line of rl) {
    vector.set(line)
  }
for(let i = 0; i <= length; i++){
    if(vector.get(i)){
        writeFile.write(`${i}\n`)
    }
}
}
someFunc();
