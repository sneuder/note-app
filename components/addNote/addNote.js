import { useEffect, useState, useId } from "react";

const AddNote = () => {
  const id = useId();

  useEffect(() => {
    return () => {
      const note = JSON.parse(localStorage.getItem('note-app-nextjs')) || {title: '', description: ''};
      const {title, description} = note;
      
      if(title !== '' || description !== ''){
        const notes = JSON.parse(localStorage.getItem('notes-app-nextjs')) || [];
        note.id = id;
        notes.unshift(note);
        
        localStorage.setItem('notes-app-nextjs', JSON.stringify(notes));
        localStorage.removeItem('note-app-nextjs');
      }
    }
  });

  const saveData = () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;

    const note = JSON.parse(localStorage.getItem('note-app-nextjs')) || {title: '', description: ''};
    
      note.title = title;
      note.description = description;
      localStorage.setItem('note-app-nextjs', JSON.stringify(note));
    
  }

  return (
    <div  className="w-10/12 sm:w-8/12 md:w-6/12 h-5/6 bg-[#ffffff] rounded p-5 flex flex-col">
      <input type="text" className="font-semibold border-b" placeholder="Title" id="title" onChange={saveData}/>
      <textarea className="h-full mt-3 text-sm" id="description" onChange={saveData}></textarea>
    </div>
  );
};

export default AddNote;
