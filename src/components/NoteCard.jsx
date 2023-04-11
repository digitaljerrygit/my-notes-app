import { useEffect, useState } from "react";
//user interface
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
//helper function
import generateColor from "../functions/generateColor";

export default function NoteCard({ noteData, onClick, cardKey }) {
  const [avatarColor, setAvatarColor] = useState(null);
  useEffect(() => {
    setAvatarColor(
      {
        bgcolor: generateColor()
      }
    );
  }, []);

  return (
    <Card key={cardKey}>
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
            <Avatar
              sx={avatarColor}
            >
              {noteData.author[0].toLocaleUpperCase()}
            </Avatar>
            <Typography variant="caption" color="text.secondary">
              Posted On: {noteData.date} by {noteData.author}
            </Typography>
          </Stack>
          <Button
            size="small"
            color="error"
            onClick={onClick}
            value={cardKey}
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
