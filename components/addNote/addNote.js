import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddNote = () => {
  const router = useRouter();
  const [shownNote, setShownNote] = useState({});

  useEffect(() => {
    return () => {
      const note = JSON.parse(localStorage.getItem("note-app-nextjs")) || {
        title: "",
        description: "",
      };
      const { title, description, id } = note;

      if (title !== "" || description !== "") {
        const notes = JSON.parse(localStorage.getItem("notes-app-nextjs")) || [];
        if(id) notes = notes.filter(note => note.id !== id);

        note.id = id || uuidv4();
        note.date = new Date().toDateString();

        notes.unshift(note);
        localStorage.setItem("notes-app-nextjs", JSON.stringify(notes));
        localStorage.removeItem("note-app-nextjs");
      }
    };
  });

  useEffect(() => {
    const auxiliar = JSON.parse(localStorage.getItem("notes-app-nextjs")) || [];
    const note = auxiliar.find((note) => note.id === router.query.note);
    setShownNote(note || { title: "", description: "" });
  }, []);

  const saveData = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;

    let note = {};

    if (router.query.note) {
      note = JSON.parse(localStorage.getItem("notes-app-nextjs")).find(
        (note) => note.id === router.query.note
      );
    } else {
      note = JSON.parse(localStorage.getItem("note-app-nextjs")) || {
        title: "",
        description: "",
      };
    }

    note.title = title;
    note.description = description;
    localStorage.setItem("note-app-nextjs", JSON.stringify(note));
  };

  return (
    <div className="w-10/12 sm:w-8/12 md:w-6/12 h-4/6 bg-[#ffffff] rounded p-5 flex flex-col">
      <input
        type="text"
        className="font-semibold border-b"
        placeholder="Title"
        id="title"
        defaultValue={shownNote?.title}
        onChange={saveData}
      />
      <textarea
        className="h-full mt-3 text-sm resize-none"
        id="description"
        defaultValue={shownNote?.description}
        onChange={saveData}
      ></textarea>
    </div>
  );
};

export default AddNote;
