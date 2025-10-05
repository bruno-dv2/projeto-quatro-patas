import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1 - 4Patas */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">4Patas</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Um diretório criado manualmente, sem cadastros automáticos. Cada ONG é pessoalmente verificada por nossa equipe.
          </p>
        </div>

        {/* Coluna 2 - Contatos */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">Contatos</h3>
          <p className="text-sm text-gray-300 mb-2">projeto4patas@gmail.com</p>
          <p className="text-sm text-gray-300">@projeto4patas_</p>
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
            <p>Pelz</p>
            <p>Animale</p>
            <p>ProCampo</p>
          </div>
        </div>

      </div>
    </footer>
  );
}