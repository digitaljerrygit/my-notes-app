import data from "../api/data";
import { useState } from "react";
import NotesSubmissionForm from "./components/NotesSubmissionForm";
import NotesList from "./components/NotesList";
// User Interface
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import uniqid from 'uniqid';
import getCurrentDate from "./functions/getCurrentDate";

export default function App() {
  const [currentNotes, setCurrentNotes] = useState(data);
  const [name, setName] = useState("");
  const [noteText, setNoteText] = useState("");

  const captureNameInput = function (e) {
    setName(e.target.value);
    console.log(name);
  };

  const captureNoteText = function (e) {
    setNoteText(e.target.value);
    console.log(noteText);
  };

  const addNewNote = () => {
    const newNote = {
      id: uniqid(),
      author: name,
      noteContent: noteText,
      date: getCurrentDate()
    };

    setCurrentNotes([...currentNotes, newNote]);
    setName("");
    setNoteText("");
  };

  const deleteNote = (e) => {
    const item = e.target.value;
    console.log(item);
    setCurrentNotes(currentNotes.filter((note) => note.id !== item));
  };

  return (
    <Container maxWidth="sm" sx={{ position: "relative", height: "100vh" }}>
      <Typography variant="subtitle2" mb={2}>
        My Notes
      </Typography>
      <NotesList notesData={currentNotes} onDelete={deleteNote} />
      <NotesSubmissionForm
        name={name}
        noteText={noteText}
        onNameChange={captureNameInput}
        onNoteChange={captureNoteText}
        onSubmission={addNewNote}
      />
    </Container>
  );
}
