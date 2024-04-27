// actions.js

let nextId = 1;

export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: {
    id: nextId++,
    title: note.title,
    content: note.content,
    status: note.status,
    date: note.date,
  },
});

export const updateNote = (note) => ({
  type: "UPDATE_NOTE",
  payload: note,
});

export const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: id,
});
