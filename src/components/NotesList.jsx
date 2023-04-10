import { Stack, Pagination } from "@mui/material";
import { useState } from "react";
import NoteCard from "./NoteCard";

export default function NotesList({ notesData, onDelete }) {
  const [page, setPage] = useState(1);
  const maxItems = 4;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const listOfNotes = notesData.map((note) => (
    <NoteCard 
      noteData={note}
      onClick={onDelete}
    />
  )).reverse();

  return (
    <Stack spacing={2}>
      {listOfNotes.slice((page - 1) * maxItems, page * maxItems)}
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
