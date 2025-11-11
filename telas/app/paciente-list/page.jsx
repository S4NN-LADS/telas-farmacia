"use client";
import { useState } from "react";
import Header from "../components/Header";

export default function PacienteList() {
  const list = [
    { id: 1, nome: "João Silva" },
    { id: 2, nome: "Maria Oliveira" },
    { id: 3, nome: "Pedro Santos" },
    { id: 4, nome: "Ana Costa" },
    { id: 5, nome: "Carlos Lima" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header title="PACIENTE" />

      <main className="flex-1 p-6 space-y-4">
        {list.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p)}
            className="bg-gray-300 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-400 transition"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👤</span>
              <span className="font-medium">NOME: {p.nome}</span>
            </div>
            <span className="text-xl">☰</span>
          </div>
        ))}

        <div className="flex justify-end">
          <button className="bg-blue-900 text-white py-2 px-6 rounded-xl flex items-center space-x-2 font-semibold">
            <span className="text-xl">＋</span>
            <span>ADICIONAR</span>
          </button>
        </div>
      </main>
    </div>
  );
}
