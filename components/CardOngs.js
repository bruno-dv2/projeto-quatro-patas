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

  // Formatar link do WhatsApp
  const formatWhatsAppLink = (number) => {
    if (!number) return null;

    // Remove caracteres não numéricos
    const cleanNumber = number.replace(/\D/g, '');

    // Se já tem https://wa.me, retorna como está
    if (number.startsWith('https://wa.me')) return number;
    
    // Adiciona código do Brasil se necessário
    const formattedNumber = cleanNumber.startsWith('55') ? cleanNumber : `55${cleanNumber}`;
    return `https://wa.me/${formattedNumber}`;
  };

  // Rastrear clique nas redes sociais e abrir link
  const handleSocialClick = (e, socialNetwork) => {
    e.stopPropagation(); // Evita duplo tracking do card
    
    // Registrar evento no GA
    GAEvent.clickOngSocial(ong.nome, socialNetwork);
    
    // Abrir link correspondente
    let link = null;
    const networkKey = socialNetwork.toLowerCase();
    
    if (ong.links && ong.links[networkKey]) {
      link = ong.links[networkKey];
      
      // Formatação especial para WhatsApp
      if (socialNetwork === 'WhatsApp') {
        link = formatWhatsAppLink(link);
      }
      
      // Abrir em nova aba
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    } else {
      console.warn(`Link não encontrado para ${socialNetwork}`, ong.links);
    }
  };

  return (
    <div 
      className="bg-azul-light rounded-lg p-6 hover:shadow-xl transition cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Logo e Nome */}
      <div className="flex items-center gap-4 mb-4">
        <Image 
          src={ong.logo} 
          alt={`Logo da ${ong.nome}`}  
          width={64} 
          height={64} 
          className="rounded-full object-cover"
        />
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
            onClick={(e) => handleSocialClick(e, tag)}
            className={`${coresTag[tag]} text-white text-xs px-3 py-1 rounded-full font-semibold hover:opacity-90 transition`}
            aria-label={`Abrir ${tag} da ${ong.nome}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}