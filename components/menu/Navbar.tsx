'use server';

import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav className="container sticky top-0 rounded-xl py-6">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="flex h-16 items-center justify-center rounded-xl bg-stone-800 px-5"
        >
          <span role="img" className="text-xl font-bold">
            My Mood Jazz
          </span>
        </Link>
        <ul className="h-16 flex-grow rounded-xl bg-stone-900">
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
