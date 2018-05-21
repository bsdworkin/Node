const fs = require('fs');

var fetchNotes = ()=>{
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{

    var notes = fetchNotes();
    var newNote = {
    	title,
    	body
    };

    var duplicateNotes = notes.filter((newNote) => newNote.title === title);

    if(duplicateNotes.length === 0){

        notes.push(newNote);
        saveNotes(notes);
        return newNote; 
    } 
};

var getAll = () =>{
	return fetchNotes();
};

var getNote = (title) =>{
    var notes = fetchNotes();
    var newNotes = notes.filter((newNote)=> newNote.title === title);
    return newNotes[0];
};

var removeNote = (title) =>{
	var notes = fetchNotes();
    var newNotes = notes.filter((newNote)=> newNote.title !== title);
	saveNotes(newNotes);

	return notes.length !== newNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log('Title: ' + note.title);
    console.log('Body: ' + note.body);
};

module.exports = {
	addNote: addNote,
	getAll: getAll,
	getNote: getNote,
	removeNote: removeNote,
	logNote: logNote
};

