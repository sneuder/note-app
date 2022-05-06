import { useRouter } from "next/router";
import AddNote from "../addNote/addNote";
import Note from "../note/note";

const Modal = () => {
  const router = useRouter();

  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-[#00000088]"
      
    >
      {router.query.mode && <AddNote />}
      {router.query.note && <Note />}
    </div>
  );
};

export default Modal;
