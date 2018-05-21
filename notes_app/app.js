const fs = require('fs');
//const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
    	title: titleOptions
    })
    .command('remove', 'Remove a note', {
    	title: titleOptions
    })
    .help()
    .argv;
var command  = argv._[0];


if(command === 'add'){
	var newNote = notes.addNote(argv.title, argv.body);
	//Prints successfully
	if(newNote){
        console.log('note created');
        notes.logNote(newNote);
        
	}else{
        console.log('note title taken');
	}
}else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((newNote)=> notes.logNote(newNote));
}else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
        console.log('Note Found');
        notes.logNote(note);
	}else{
		console.log('Note not found');
	}
}else if(command === 'remove'){

	var noteRemoved = notes.removeNote(argv.title);
	//ternary operator syntax:condition ? true : false
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
}else{
	console.log('Command not recognized');
}

//var array = _.uniq(['Benji']);
//console.log(array);

//console.log(_.isString(true));
//console.log(_.isString('Ben'));

//console.log('Result:', notes.add(5,4));

//var user = os.userInfo();

//fs.appendFile('greetings.txt', 'hello' +  user.username + 'you are ' + notes.age, function(err){
//	if(err){
//		console.log('Unable to write file');
//	}
//});
