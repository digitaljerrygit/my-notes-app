const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

let data = [
  {
    id: "1",
    author: "Example Name",
    noteContent:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    date: "Monday, Apr 10, 2023"
  },
  {
    id: "2",
    author: "Example Name",
    noteContent:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    date: "Monday, Apr 10, 2023"
  },
  {
    id: "3",
    author: "Example Name",
    noteContent:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    date: "Monday, Apr 10, 2023"
  },
  {
    id: "4",
    author: "Example Name",
    noteContent:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    date: "Monday, Apr 10, 2023"
  },
  {
    id: "5",
    author: "Example Name",
    noteContent:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
    date: "Monday, Apr 10, 2023"
  },
];

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
};

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/api/notes', (request, response) => {
  response
    .json(data);
});

app.get('/api/notes/:id', (request, response) => {
  const noteId = request.params.id;
  const note = data.find(note => note.id === noteId);

  if (note === undefined) {
    response
      .sendStatus(404);
  } else {
    response
      .json(note);
  }
});

app.post('/api/notes', (request, response) => {
  const body = request.body;
  const newNote = {
    id: body.id,
    author: body.author,
    noteContent: body.noteContent,
    date: body.date
  };

  data = data.concat(newNote);
  response.json(newNote);
});

app.delete('/api/notes/:id', (request, response) => {
  const noteId = request.params.id;
  data = data.filter(note => note.id !== noteId);
  response.sendStatus(204);
});

app.use(unknownEndpoint);

app.listen(port, () => {
  console.log(`Notes server listening on port http://localhost:${port}/`);
});