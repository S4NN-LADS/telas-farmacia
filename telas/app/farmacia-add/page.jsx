export default function FarmaciaAdd() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white p-4 text-center text-xl font-semibold">
        ADICIONAR FARMACÊUTICOS
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-6">Adicionar:</h1>
        <div className="w-full max-w-md space-y-4">
          <input className="w-full p-2 rounded border" placeholder="Nome" />
          <input className="w-full p-2 rounded border" placeholder="Sobrenome" />
          <input className="w-full p-2 rounded border" placeholder="CPF" />
          <input className="w-full p-2 rounded border" placeholder="Telefone" />
          <input className="w-full p-2 rounded border" placeholder="RN:" />
        </div>
        <button className="mt-8 bg-blue-900 text-white py-2 px-8 rounded-full font-semibold">
          CONCLUIR
        </button>
      </main>
    </div>
  );
}
