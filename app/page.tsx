import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2">
      <section className="max-w-2xl mx-auto p-6 min-h-96 rounded-lg shadow-md">
        <h1 className="font-bold text-3xl">UI Practice</h1>
        <p className="py-4 text-gray-700">
          Re-implementing websites to sharpen frontend skills.
        </p>
        <ul>
          <li>
            <Link
              href={"/"}
              className="text-gray-800 font-serif underline py-3 block"
            >
              Home
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
