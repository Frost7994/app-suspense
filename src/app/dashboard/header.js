"use client";

// base
import Link from "next/link";

// utils
import { useRouter } from "next/navigation";

const Header = () => {
  const { refresh } = useRouter();

  return (
    <div className="border rounded-md flex items-center justify-between px-3 py-2 border-slate-500">
      <h1 className="text-2xl font-bold">Header</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            refresh();
          }}
          className="border rounded-md border-slate-500 px-3 py-2"
        >
          Reload
        </button>
        <Link
          prefetch={false}
          href="/"
          className="border rounded-md border-slate-500 px-3 py-2"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
