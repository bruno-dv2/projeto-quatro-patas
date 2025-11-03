'use client';

import { useState } from 'react';
import { GAEvent } from './GoogleAnalytics';
import Image from 'next/image';
import { SiInstagram, SiFacebook, SiWhatsapp, SiLinktree, SiTiktok } from 'react-icons/si';
import { FiMail, FiGlobe, FiCopy } from 'react-icons/fi'; 


export default function CardOngs({ ong }) {
  const coresTag = {
    "Instagram": "bg-pink-500",
    "Facebook": "bg-blue-600",
    "WhatsApp": "bg-green-500",
    "Email" : "bg-red-400",
    "Linktree": "bg-green-300",
    "Site": "bg-gray-700",
    "Tiktok" : "bg-cyan-300"
  };

  const iconesTag = {
    Instagram: <SiInstagram size={14} />,
    Facebook: <SiFacebook size={14} />,
    WhatsApp: <SiWhatsapp size={14} />,
    Email: <FiMail size={14} />,
    Linktree: <SiLinktree size={14} />,
    Site: <FiGlobe size={14} />,
    Tiktok: <SiTiktok size={14} />
  };

  const iconesNecessidades = {
    "Ração": "🍖",
    "Medicamentos": "💊",
    "Sachês": "🥫",
    "Produtos de limpeza": "🧽",
    "Produtos para pets": "🐾",
    "Roupas": "👕",
    "Livros": "📚",
    "Decorações": "🖼️",
    "Outros itens para o bazar": "🎁",
    "Castração": "✂️",
    "Financeira": "💰",
    "Apoio financeiro para custear alimentação, vacinas e cuidados veterinários": "💵",
    "Maior doação de recursos": "🤝",
    "Necessidade de um espaço maior e mais estruturado": "🏠",
    "Entrada financeira constante": "🔁",
    "Lar temporário para abrigar os animais resgatados até a adoção": "🏡"
  };


  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

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

      if (socialNetwork === "Email") {
        setShowEmailPopup(true);
        return;
      }

      if (!link.startsWith("http") && !link.startsWith("mailto")) {
        link = `https://${link}`;
      }
      
      // Abrir em nova aba
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    } else {
      console.warn(`Link não encontrado para ${socialNetwork}`, ong.links);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ong.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div 
        className="bg-azul-light rounded-lg p-6 hover:shadow-xl transition"
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
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ong.localizacao)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm  hover:underline text-blue-800 transition hover:text-blue-600"
          >
            {ong.localizacao}
          </a>
        </div>

        {/* Descrição */}
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          {ong.descricao}
        </p>

        {Array.isArray(ong.necessidades) && ong.necessidades.length > 0 && (
          <div className="my-7 bg-yellow-100 text-sm rounded-2xl p-3">
            <strong className="text-yellow-900">Principais necessidades: </strong>
            <ul className="mt-2 flex flex-wrap gap-2">
              {ong.necessidades.slice(0, 10).map((item, idx) => (
                <li
                  key={idx}
                  className="bg-yellow-200 text-yellow-900 px-1 py-1 rounded-full text-xs"
                >
                  <span className='me-1'>{iconesNecessidades[item] || "✨"}</span>
                  {item}
                </li>
              ))}

              {/* Se houver mais que 7 itens, mostra um indicador "+N" */}
              {ong.necessidades.length > 10 && (
                <li
                  className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full"
                  title={ong.necessidades.slice(10).join(", ")}
                >
                  +{ong.necessidades.length - 10}
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Tags - Com tracking individual */}
        <div className="flex flex-wrap gap-2">
          {ong.tags.map((tag, index) => (
            <button
              key={index}
              onClick={(e) => handleSocialClick(e, tag)}
              className={`${coresTag[tag]} text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1 transform transition-all duration-200 hover:scale-110 cursor-pointer`}
              aria-label={`Abrir ${tag} da ${ong.nome}`}
            >
              {iconesTag[tag]} <span>{tag}</span>
            </button>
          ))}
        </div>
      </div>

      {showEmailPopup && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 text-center animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">E-mail de contato</h3>
            <p className="text-gray-600 mb-4">{ong.links.email}</p>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <FiCopy size={16} />
                {copied ? "Copiado!" : "Copiar"}
              </button>

              <button
                onClick={() => setShowEmailPopup(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}