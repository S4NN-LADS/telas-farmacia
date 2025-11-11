"use client";

export default function ModalPaciente({ paciente, onClose }) {
  if (!paciente) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[320px] shadow-2xl">
        <h2 className="text-xl font-bold text-center mb-3">
          DETALHES DO PACIENTE
        </h2>

        <div className="space-y-1 text-sm">
          <p>
            <strong>Nome:</strong> {paciente.nome}
          </p>
          <p>
            <strong>ID:</strong> {paciente.id}
          </p>
        </div>

        <div className="flex flex-col mt-6 space-y-3">
          <a
            href="/tratamento"
            className="bg-blue-900 text-white py-2 rounded-lg text-center font-semibold"
          >
            TRATAMENTO
          </a>

          <button
            className="bg-gray-400 text-white py-2 rounded-lg font-semibold"
            onClick={onClose}
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
}
