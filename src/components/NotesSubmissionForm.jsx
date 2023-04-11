import { useState } from "react";
// User Interface
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 8,
  p: 2,
};

export default function NotesSubmissionForm({
  name,
  noteText,
  onNameChange,
  onNoteChange,
  onSubmission,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

  return (
    <div>
      <FloatingButton onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent>
            <FormControl fullWidth>
              <Stack spacing={2}>
                <TextField
                  id="username"
                  label="Enter Your Name"
                  value={name}
                  onChange={onNameChange}
                  required="true"
                />
                <TextField
                  id="outlined-basic"
                  label="Enter A Note"
                  variant="outlined"
                  multiline
                  value={noteText}
                  onChange={onNoteChange}
                  required="true"
                  rows={8}
                />
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => {
                    onSubmission()
                    handleClose()
                  }}
                  disabled={
                    name.length > 0 && noteText.length > 0 
                      ? false 
                      : true
                  }
                >
                  Add New Note
                </Button>
              </Stack>
            </FormControl>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

function FloatingButton({ onClick }) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "2%",
        right: "2%",
      }}
    >
      <AddIcon />
    </Fab>
  );
}
