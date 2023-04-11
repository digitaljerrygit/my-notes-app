import { useState } from "react";
import NoteCard from "./NoteCard";
// User Interface
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export default function NotesList({ notesData, onDelete }) {
  const [page, setPage] = useState(1);
  const maxItems = 4;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const listOfNotes = notesData
    .map((note) => <NoteCard noteData={note} key={note.id} cardKey={note.id} onClick={onDelete} />)
    .reverse()
    .slice((page - 1) * maxItems, page * maxItems);

  return (
    <Stack spacing={2}>
      {listOfNotes}
      <Pagination
        count={Math.ceil(notesData.length / maxItems)}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
