const Nav = () => {
  return (
    <nav className="flex h-16 p-3 bg-rose-300 text-stone-800">
      <form className="flex w-full">
        <input type="text" className="w-full px-5 rounded md:w-1/3" placeholder="Search" />
        <input type="submit" className="px-5 ml-3 bg-white rounded" value="Search" />
      </form>
    </nav>
  );
};

export default Nav;
