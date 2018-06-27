console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

// fs.appendFileSync('greeting.txt', 'Hello world!'); 
// fs.appendFileSync('greeting.txt', 'Hello ' + user.username + '!');
fs.appendFileSync('greeting.txt', `Hello ${user.username}`);