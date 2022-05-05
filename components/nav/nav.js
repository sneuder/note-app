const Nav = () => {
  return (
    <nav className="flex h-16 p-3 bg-rose-300">
      <form className="flex w-full">
        <input type="text" className="w-1/3 px-5 rounded" placeholder="Search" />
        <input type="submit" className="px-5 ml-3 bg-white rounded" value="Search" />
      </form>
    </nav>
  );
};

export default Nav;
