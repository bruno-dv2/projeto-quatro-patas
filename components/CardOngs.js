export default function CardOngs({ ong }) {
  const coresTag = {
    "Instagram": "bg-pink-500",
    "Facebook": "bg-blue-600",
    "WhatsApp": "bg-green-500",
    "Site": "bg-gray-700"
  };

  return (
    <div className="bg-azul-light rounded-lg p-6 hover:shadow-xl transition">
      {/* Logo e Nome */}
      <div className="flex items-center gap-4 mb-4">
        <div className="text-5xl">{ong.logo}</div>
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

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {ong.tags.map((tag, index) => (
          <span 
            key={index}
            className={`${coresTag[tag]} text-white text-xs px-3 py-1 rounded-full font-semibold`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}