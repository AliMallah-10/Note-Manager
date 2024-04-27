// pages/listnote.js
"use client";
// pages/listnote.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { deleteNote } from "../reduxFolder/action";

const ListNote = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this note?")) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-black rounded-xl p-4">
        <img src="images/Samsung_Notes_icon.png" alt="" className="w-10" />
        <h1 className="text-3xl font-bold text-white ml-4">
          List of Notes
        </h1>
      </div>

      <div className="flex justify-between items-center justify-items-center my-5">
        <p className="tracking-wide w-1/2 text-white">
          The Note Manager project is a web application designed to help users
          organize their notes and tasks efficiently. It provides a
          user-friendly interface where users can add, edit, and delete notes,
          as well as mark them as completed or pending.
        </p>
        <Link href="/AddNote">
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add Note
          </p>
        </Link>
      </div>
      <div className="flex flex-wrap">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-1/5 mx-2 my-4 bg-black rounded-lg overflow-hidden shadow-md flex flex-col"
            style={{ minHeight: "300px" }} // Set a minimum height for cards
          >
            <div className="flex-grow">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">
                  {note.title}
                </div>
                <p className="text-gray-400 text-base">{note.content}</p>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-6 py-4">
              <p className="text-gray-500">{note.status}</p>
              <p className="text-gray-500">{note.date}</p>
            </div>
            <div className="px-6 py-4 flex justify-between">
              <Link href={`/EditNote/${note.id}`}>
                <p className="text-blue-500 hover:text-blue-700">Edit</p>
              </Link>
              <button
                onClick={() => handleDelete(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListNote;
