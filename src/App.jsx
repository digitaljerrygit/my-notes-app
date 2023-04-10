import Container from "@mui/material/Container";

import NotesSubmissionForm from "./components/NotesSubmissionForm";
import NotesList from "./components/NotesList";
import { Typography } from "@mui/material";

import data from "../api/data";
import { useState } from "react";

function App() {

  const [currentNotes, setCurrentNotes] = useState(data);

  const [name, setName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [newNote, setNewNote] = useState({});
  
  const handleNameInput = function(e) {
    setName(e.target.value);
    console.log(name);
  }

  const handleNoteInput = function(e) {
    setNoteText(e.target.value);
    console.log(noteText);
  }

  const handleSubmission = () => {
    setNewNote(
      {
        id: "dwdw3dddwdw24ddddwd",
        author: name,
        noteContent: noteText,
      }
    );

    const aNewNote = {
      id: "dwdw3dddwdw24ddddwd",
      author: name,
      noteContent: noteText,
    }

    setName('');
    setNoteText('');
    setCurrentNotes([
      ...currentNotes,
      aNewNote
    ]);
    console.log(currentNotes[currentNotes.length - 1]);
  }

  const deleteNote = (e) => {
    const item = e.target.value;
    setCurrentNotes(currentNotes.filter(note => note.id !== item));
  }

  return (
    <Container maxWidth="sm" sx={{position: "relative", height: "100vh"}}>
      <Typography variant="subtitle2" mb={2}>
        My Notes
      </Typography>
      <NotesList 
        notesData={currentNotes}
        onDelete={deleteNote}
      />
      <NotesSubmissionForm
        name={name}
        noteText={noteText}
        onNameChange={handleNameInput}
        onNoteChange={handleNoteInput}
        onSubmission={handleSubmission}
      />
    </Container>
  );
}

export default App;
