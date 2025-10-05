export default function ComoSelecionamos() {
  const criterios = [
    {
      icone: "🔍",
      titulo: "Pesquisa",
      descricao: "Iniciamos nosso processo seletivo, pesquisando por ONGs nas redes sociais mais famosas e via navegadores populares."
    },
    {
      icone: "📍",
      titulo: "Validação da Localização",
      descricao: "Verificar se a ONG pode ser localizada via aplicativo geolocalizador, se a mesma permite visitas abertas ao espaço, ajuda a comprovar a seriedade do trabalho."
    },
    {
      icone: "✅",
      titulo: "Dados Validados",
      descricao: "Clareza do processo de adoção. - Verificar se os dados bancários são correspondentes ao da ONG. - ONGs transparentes, publicam feedbacks, do destino, de suas arrecadações."
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-azul-dark">
          Como selecionamos as ONGs
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Você pode utilizar isso como base para buscar outras ONGs confiáveis, 
          ou utilizar as ONGs que selecionamos para você!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {criterios.map((item, index) => (
            <div 
              key={index}
              className="bg-azul-light p-8 rounded-lg text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icone}</div>
              <h3 className="text-xl font-bold mb-3 text-azul-dark">
                {item.titulo}
              </h3>
              <p className="text-gray-700">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-sm">
          Estes foram os indicadores que usamos para validar ONGs confiáveis.
        </p>
      </div>
    </section>
  );
}