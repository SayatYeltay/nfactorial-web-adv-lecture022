const {readFileSync, writeFileSync} = require("fs");

const text = readFileSync('./content/test.txt', 'utf-8');
const textToWrite = readFileSync('./content/testToWrite.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', ` | ${text}, ${textToWrite}, additional info`, {flag: "a"});

console.log(text, textToWrite);

