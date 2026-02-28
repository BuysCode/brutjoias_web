import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Badge de Erro */}
        <p className="text-2xl font-semibold text-black">404</p>
        
        {/* Título Principal */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página não encontrada
        </h1>
        
        {/* Texto de Apoio */}
        <p className="mt-6 text-base leading-7 text-gray-600">
          Desculpe, não conseguimos encontrar a página que você está procurando. 
          Talvez ela tenha sido movida ou nunca existiu.
        </p>

        {/* Ilustração ou Espaçador Visual */}
        <div className="mt-10 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gray-800 blur opacity-20"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
               <span className="text-6xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-black transition-all flex items-center gap-2"
          >
            <Home size={18} />
            Voltar ao Início
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="text-sm font-semibold text-gray-900 hover:text-gray-600 hover:underline transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Página Anterior
          </button>
        </div>
      </div>
    </main>
  );
}