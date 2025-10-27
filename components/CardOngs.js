'use client';

import { GAEvent } from './GoogleAnalytics';
import Image from 'next/image';

export default function CardOngs({ ong }) {
  const coresTag = {
    "Instagram": "bg-pink-500",
    "Facebook": "bg-blue-600",
    "WhatsApp": "bg-green-500",
    "Site": "bg-gray-700"
  };

  // Rastrear clique no card
  const handleCardClick = () => {
    GAEvent.clickOngCard(ong.nome, ong.id);
  };

  // Rastrear clique nas redes sociais
  const handleSocialClick = (socialNetwork) => {
    GAEvent.clickOngSocial(ong.nome, socialNetwork);
    
    // Aqui pode adicionar a lógica para abrir o link real
    // Por exemplo:
     if (ong.links && ong.links[socialNetwork.toLowerCase()]) {
       window.open(ong.links[socialNetwork.toLowerCase()], '_blank');
     }
  };

  return (
    <div 
      className="bg-azul-light rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Logo e Nome */}
      <div className="flex items-center gap-4 mb-4">
        <Image src={ong.logo} alt={`Logo da ${ong.nome}`}  width={64} height={64} className="rounded-full" />
        <div>
          <h3 className="text-2xl font-bold text-azul-dark">{ong.nome}</h3>
          <p className="text-sm text-gray-600">{ong.subtitulo}</p>
        </div>
      </div>

      {/* Localização */}
      <div className="flex items-center gap-2 mb-4 text-gray-700">
        <span>📍</span>
        <span className="text-sm">{ong.localizacao}</span>
      </div>

      {/* Descrição */}
      <p className="text-gray-700 mb-6 text-sm leading-relaxed">
        {ong.descricao}
      </p>

      {/* Tags - Com tracking individual */}
      <div className="flex flex-wrap gap-2">
        {ong.tags.map((tag, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation(); // Evita duplo tracking
              handleSocialClick(tag);
            }}
            className={`${coresTag[tag]} text-white text-xs px-3 py-1 rounded-full font-semibold hover:opacity-90 transition`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}