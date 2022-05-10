import { useRouter } from "next/router";
import AddNote from "../addNote/addNote";

const Modal = () => {
  const router = useRouter();

  return (
    <div
      id="modal"
      className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-[#00000088]"
      onClick={(e) => e.target.id === "modal" && router.push("/")}
    >
      {router.query.mode && <AddNote />}
      {router.query.note && <AddNote />}
    </div>
  );
};

export default Modal;
