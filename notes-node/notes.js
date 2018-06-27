console.log('Starting notes.js');

module.exports.age = 28;

// Using arrow function
module.exports.addNote = () => {
	console.log('addNote');
	return 'New note';
};

// Old school calling function
// module.exports.addNote = function () {};

// console.log(module);