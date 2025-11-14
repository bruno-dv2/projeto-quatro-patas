import HeaderSobre from '@/components/HeaderSobre';
import Footer from '@/components/Footer';
import Image from 'next/image';


export default function Sobre() {
  const time = [
    {
      nome: "João Pedro",
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Tenho 20 anos e sou desenvolvedor full-stack. Acredito que a tecnologia tem o poder de conectar pessoas e transformar o mundo. É por isso que me dedico a criar soluções que façam diferença.",
      foto: "/images/joaopedro.png",
      linkedin: "https://www.linkedin.com/in/joaopedrosholanda",
      github: "#"
    },
    {
      nome: "Kauai Palmeira",
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Desenvolvedor apaixonado por tecnologia. Focado em criar soluções que impactam positivamente.",
      foto: "/images/KauaiPalmeira.png",
      linkedin: "https://www.linkedin.com/in/kauai-palmeira-826126307",
      github: "https://github.com/KauaiPalmeira"
    },
    {
      nome: "Bruno Aguiar",
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Tenho 29 anos, desenvolvedor backend apaixonado por animais. No 4Patas encontrei uma forma de usar meu conhecimento para tecnologia para apoiar uma causa social.",
      foto: "/images/bruno.png",
      linkedin: "https://www.linkedin.com/in/bruno-aguiar-santana-dev/",
      github: "https://github.com/bruno-dv2"
    },
    {
      nome: "Saul",
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Desenvolvedor Full-stack com 2 anos de experiência. Apaixonado por criar soluções para Desenvolvimento de sistemas para UNIFOR - Universidade de Fortaleza.",
      foto: "/images/saul.png",
      linkedin: "https://linkedin.com/in/saul-santos-142372246/",
      github: "https://github.com/SaulSantos1"
    },
    {
      nome: "Pedro Victor",
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Estudante de TI a 4 anos (dois concluídos e dois em curso). Atualmente buscando criar soluções inovadoras que possam fazer diferença real na sociedade",
      foto: "/images/pedro.png",
      linkedin: "https://www.linkedin.com/in/pedrovictormcb", 
      github: "https://github.com/PedroVictorMcB"
    },
    {
      nome: "João Victor",
      cargo: "Ciência da Computação",
      descricao: "João Victor Freitas, empreendedor e estudante de Ciências da Computação, criador do projeto 4 Patas, onde contribuiu para criar um ambiente informativo sobre ONGs e seus pets",
      foto: "/images/joaovictor.png",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeaderSobre />

      {/* Seção Sobre o Projeto */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-azul-dark mb-10 md:mb-12">
            Sobre o Projeto
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex justify-center">
              <Image src="/logo.png" alt="4 Patas" width={200} height={200} />
            </div>
            <div className="md:w-2/3 space-y-4 text-center md:text-left">
              <p className="text-gray-700 leading-relaxed">
                Somos uma equipe formada por 6 alunos em fase de conclusão do
                curso ADS-Análise e Desenvolvimento de Sistemas e Ciências da
                Computação.
              </p>
              <p className="text-gray-700 leading-relaxed break-words">
                Amantes dos animais e seres vivos, optamos por criar um projeto para
                nossa cadeira de extensão da UNIFOR-Universidade de Fortaleza,
                localizada no endereço{' '}
                que estivesse voltado para a causa animal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Escolhemos criar um canal de divulgação para ONGs
                que atendem a causa animal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-azul-dark mb-10 md:mb-12">
            Nosso Objetivo
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/3 flex justify-center">
              <Image src="/icons/objetivo.png" alt="4 Patas" width={200} height={10} />
            </div>
            <div className="md:w-2/3 space-y-4 text-center md:text-left">
              <p className="text-gray-700 leading-relaxed">
                O 4 Patas é uma plataforma online que atua como uma central de divulgações para ONGs e serviços dedicados ao universo pet, 
                conectando pessoas e instituições voltadas ao cuidado de cães e gatos.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nosso objetivo é facilitar o acesso a informação deste universo pet,
                para tutores de pet, e pessoas simpatizantes da causa animal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com mais atenção direcionada a essa necessidade de
                pouquinhos das ONGs envolvidas no projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nosso Time */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-azul-dark mb-10 md:mb-12">
            Nosso Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {time.map((membro, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                        src={membro.foto}
                        alt={`Foto de ${membro.nome}`}
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="text-xl font-bold text-azul-dark mb-2">
                  {membro.nome}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {membro.cargo}
                </p>
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  {membro.descricao}
                </p>
                <div className="flex justify-center gap-3">
                  {membro.linkedin && membro.linkedin !== "#" && (
                    <a
                      href={membro.linkedin}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      LinkedIn
                    </a>
                  )}
                  {membro.github && membro.github !== "#" && (
                    <a
                      href={membro.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white text-xs px-4 py-2 rounded-full hover:bg-gray-900 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

