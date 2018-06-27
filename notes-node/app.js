console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

// var user = os.userInfo();
// // console.log(user);
// // fs.appendFileSync('greeting.txt', 'Hello world!'); 
// // fs.appendFileSync('greeting.txt', 'Hello ' + user.username + '!');
// fs.appendFileSync('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);