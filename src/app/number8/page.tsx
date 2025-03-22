/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  const data = [
    {
      explain: "Tanda koma (,) yang hilang – tepat nya di line 22",
    },
    {
      explain: "Tanda petik yang hilang – tepat nya di line 428",
    },
    {
      explain:
        "sebuah key dalam object haru memiliki value tidak boleh kosong – tepat nya di line 437",
    },
    {
      explain:
        "Kesalahan: cleanA[].slice(1, cleanA[i].length), cleanA[] tidak valid dalam JavaScript. – tepat nya di line 540",
    },
    {
      explain:
        "variable tmpStrb bernilai null atau undifined maka pemanggilan tmpStrb.match(/[d+/g); akan menyebabkan error maka solusi nya diberikan pengecekan terlebih dahulu menggunakan optional chaining – tepat nya di line 541",
    },
  ];
  return (
    <div>
      <div className="flex gap-4 items-center justify-around flex-wrap">
        {data.map((item, index) => (
          <div key={index} className="w-96 border rounded p-4">
            <div className="flex items-start w-full flex-col">
              <p className="text-red-800">Problem</p>
              <img src={`./error${index + 1}.png`} alt="error1" />
              <p className="text-green-800">Solve</p>
              <img src={`./solve${index + 1}.png`} alt="error1" />
              <p>{item.explain}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
