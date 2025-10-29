import { Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1 - 4Patas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">4Patas</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Um hub criado com propósito e cuidado, onde cada ONG é verificada manualmente para garantir transparência e confiança.
          </p>
        </div>

        {/* Coluna 2 - Contatos */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">Contatos</h3>
          <a  
            href="mailto:projeto4patasunifor@gmail.com"
            className="text-sm text-gray-300 mb-2 flex items-center gap-2 hover:text-[#5DADE2] transition-colors"
          >
            <Mail size={16} className="text-[#5DADE2]" />
            projeto4patasunifor@gmail.com
          </a>

          <a
            href="https://www.instagram.com/projeto4patas_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 flex items-center gap-2 hover:text-[#5DADE2] transition-colors"
          >
        <Globe size={16} className="text-[#5DADE2]" />
        @projeto4patas_
      </a>
        </div>

        {/* Coluna 3 - Transparência */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">Tranparência</h3>
          <p className="text-sm text-gray-300 mb-2">Objetivo do projeto</p>
          <p className="text-sm text-gray-300">Critério de Seleção</p>
        </div>

        {/* Coluna 4 - Marcas Amigas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">Marcas Amigas dos Pets</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              <span className="text-2xl">🐾</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              <span className="text-2xl">🐾</span>
            </div>
            <div className="bg-white rounded-lg p-3 flex items-center justify-center">
              <span className="text-2xl">🐾</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2 text-xs text-center text-gray-300">
            <p>Unifor</p>
            <p>Unifor</p>
            <p>Unifor</p>
          </div>
        </div>

      </div>
    </footer>
  );
}