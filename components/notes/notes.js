import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Notes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes-app-nextjs")) || []);
  }, []);

  if (notes.length === 0) <></>;

  return (
    <div className="grid gap-3 p-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-stone-800 ">
      {notes &&
        notes.map((note) => (
          <div
            className="p-4 border rounded cursor-pointer"
            key={note.id}
            onClick={() => router.push(`/?note=${note.id}`)}
          >
            <h3 className="font-bold">{note.title}</h3>
            <p className="pb-1 mb-1 text-xs border-b text-stone-500 ">
              02/05/1956
            </p>
            <p className="text-sm font-extralight">{note.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Notes;
