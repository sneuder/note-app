const Notes = () => {
  return (
    <div className="grid gap-4 p-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-stone-800 ">
      <div className="p-4 border rounded">
        <h3 className="font-bold">Comprar dulces de navidad</h3>
        <p className="pb-1 mb-1 text-xs border-b text-stone-500 ">02/05/1956</p>

        <p className="font-extralight">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.{" "}
        </p>
      </div>
    </div>
  );
};

export default Notes;
