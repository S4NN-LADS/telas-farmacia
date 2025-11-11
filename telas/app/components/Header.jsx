"use client";

export default function Header({ title }) {
  return (
    <header className="bg-blue-900 text-white p-4 text-center text-xl font-semibold">
      {title}
    </header>
  );
}
