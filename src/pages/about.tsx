import Link from "next/link";

export default function About() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">To Do</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>About Page</h1>
    </main>
  );
}
