"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

const data: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

export default function Home() {
  const [label, setLabel] = useState<string>(data[0].name);

  return (
    <div className="flex min-w-2xl border rounded p-4 flex-col items-center justify-center gap-4">
      <p className="text-2xl">{label}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          setLabel(data[Math.floor(Math.random() * data.length)].name)
        }
      >
        Change Label
      </button>
    </div>
  );
}
