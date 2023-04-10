import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, Avatar, Snackbar, Alert } from "@mui/material";

import { useState } from "react";

export default function NoteCard({noteData, onClick}) {
 
  return (
    <Card key={noteData.id}>
      <CardContent>
        <Typography gutterBottom>{noteData.noteContent}</Typography>
      </CardContent>
      <CardActions>
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>{noteData.author[0].toLocaleUpperCase()}</Avatar>
            <Typography variant="caption" color="text.secondary">
              Posted On: November 14, 2023 by {noteData.author}
            </Typography>
          </Stack>
          <Button size="small" color="error" onClick={onClick} value={noteData.id}>
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}