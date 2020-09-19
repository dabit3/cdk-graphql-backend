import createNote from './createNote';
import deleteNote from './deleteNote';
import getNoteById from './getNoteById';
import listNotes from './listNotes';
import updateNote from './updateNote';

exports.handler = async (event:any) => {
    switch (event.info.fieldName) {
        case "getNoteById":
            return await getNoteById(event.arguments.noteId);
        case "createNote":
            return await createNote(event.arguments.note);
        case "listNotes":
            return await listNotes();
        case "deleteNote":
            return await deleteNote(event.arguments.noteId);
        case "updateNote":
            return await updateNote(event.arguments.note);
        default:
            return null;
    }
}