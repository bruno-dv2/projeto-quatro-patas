import HeaderSobre from '@/components/HeaderSobre';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Sobre() {
  const time = [
    { 
      nome: "João Pedro", 
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Tem 20 anos e ama programação, com foco em desenvolvimento front-end. Atualmente estudando na área Tecnologia",
      foto: "/team/joao-pedro.jpg",
      linkedin: "#", 
      github: "#" 
    },
    { 
      nome: "Guilherme Kauai", 
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Desenvolvedor apaixonado por tecnologia. Focado em criar soluções que impactam positivamente.",
      foto: "/team/guilherme.jpg",
      linkedin: "#", 
      github: "#" 
    },
    { 
      nome: "Bruno Aguiar", 
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Tenho 22 anos, desenvolvedor backend apaixonado por animais. No 4Patas encontrei uma forma de usar meu conhecimento para tecnologia para apoiar uma causa social.",
      foto: "/team/bruno.jpg",
      linkedin: "#", 
      github: "#" 
    },
    { 
      nome: "Saul", 
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Desenvolvedor Full-stack com 2 anos de experiência. Apaixonado por criar soluções para Desenvolvimento de sistemas para UNIFOR - Universidade de Fortaleza.",
      foto: "/team/saul.jpg",
      linkedin: "#", 
      github: "#" 
    },
    { 
      nome: "Pedro Victor", 
      cargo: "Análise e Desenvolvimento de Sistemas",
      descricao: "Estudante de TI a 4 anos (dois concluídos e dois em curso). Atualmente buscando criar soluções inovadoras que possam fazer diferença real na sociedade",
      foto: "/team/pedro.jpg",
      linkedin: "#", 
      github: "#" 
    },
    { 
      nome: "João Victor", 
      cargo: "Ciência da Computação",
      descricao: "João Victor Freitas, empreendedor e estudante de Ciências da Computação, criador do projeto 4 Patas, onde contribuiu para criar um ambiente informativo sobre ONGs e seus pets",
      foto: "/team/joao-victor.jpg",
      linkedin: "#", 
      github: "#" 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderSobre />

      {/* Seção Sobre o Projeto */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-azul-dark mb-12">
            Sobre o Projeto
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <Image src="/logo.png" alt="4 Patas" width={200} height={200} />
            </div>
            <div className="md:w-2/3 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Somos uma equipe formada por 6 alunos em fase de conclusão do 
                curso ADS-Análise e Desenvolvimento de Sistemas e Ciências da 
                Computação.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Amantes dos animais e seres vivos, optamos por criar um projeto para 
                nossa cadeira de extensão da UNIFOR-Universidade de Fortaleza, 
                localizada no endereço{' '}
                <a href="https://maps.app.goo.gl/eSBcHp7aLPK1WAC9" className="text-azul-primary underline">
                  https://maps.app.goo.gl/eSBcHp7aLPK1WAC9
                </a>, 
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

      {/* Seção Nosso Objetivo */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-azul-dark mb-12">
            Nosso Objetivo
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-48 bg-gray-300 rounded-lg"></div>
              <div className="h-48 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Pretendemos criar uma plataforma online que sirva como uma 
                central de divulgações para ONGs e serviços voltados 
                para o universo pet (focado em cachorro e gato).
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
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-azul-dark mb-12">
            Nosso Time
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {time.map((membro, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-lg"></div>
                
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
                  <a 
                    href={membro.linkedin} 
                    className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href={membro.github} 
                    className="bg-gray-800 text-white text-xs px-4 py-2 rounded-full hover:bg-gray-900 transition"
                  >
                    GitHub
                  </a>
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