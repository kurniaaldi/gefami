"use client";

import { useEffect } from "react";

export default function Home() {
  const hashString = async (input: string): Promise<void> => {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    console.log(hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""));
  };

  useEffect(() => {
    hashString("01112018kenpriaifabula");
  }, []);

  return (
    <div>
      {/* 2. Label and button */}
      <h1>Ini Nomor 7 (check console for result)</h1>
    </div>
  );
}
