import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="flex h-16 p-3 bg-white shadow-sm text-stone-800">
      <form className="flex w-full mr-3">
        <input
          type="text"
          className="w-full px-5 rounded md:w-1/3 bg-slate-100"
          placeholder="Search"
        />
      </form>
      <button
        className="w-auto px-3 text-white rounded bg-slate-800"
        onClick={() => router.push("/?mode=create")}
      >
        <Link href="/?mode=create">
          <a>Note</a>
        </Link>
      </button>
    </nav>
  );
};

export default Nav;
