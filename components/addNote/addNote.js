const AddNote = () => {


  return (
    <div  className="w-10/12 sm:w-8/12 md:w-6/12 h-5/6 bg-[#ffffff] rounded p-5 flex flex-col">
      <input type="text" className="font-semibold border-b" placeholder="Title"/>
      <textarea className="h-full mt-3 text-sm"></textarea>
    </div>
  );
};

export default AddNote;
