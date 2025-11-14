import { Mail, Globe } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1 - 4Patas */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">4Patas</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Um hub criado com propósito e cuidado, onde cada ONG é verificada
            manualmente para garantir transparência e confiança.
          </p>
        </div>

        {/* Coluna 2 - Contatos */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4 text-[#5DADE2]">Contatos</h3>
          <a
            href="mailto:projeto4patasunifor@gmail.com"
            className="text-sm text-gray-300 mb-2 flex justify-center items-center gap-2 hover:text-[#5DADE2] transition-colors"
          >
            <Mail size={16} className="text-[#5DADE2]" />
            projeto4patasunifor@gmail.com
          </a>

          <a
            href="https://www.instagram.com/projeto4patas._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 mb-2 flex justify-center items-center gap-2 hover:text-[#5DADE2] transition-colors"
          >
            <SiInstagram size={16} className="text-[#5DADE2]" />
            @projeto4patas._
          </a>
        </div>

        {/* Coluna 4 - Marcas Amigas */}
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold mb-3 text-white">Apoio</h3>
          <a href="https://unifor.br/" target="_blank">
            <Image
              alt="Logo Unifor"
              src="/icons/unifor.svg"
              width={150}
              height={100}
            />
          </a>
          <div className="grid gap-3 mt-2 text-xs text-center text-gray-300"></div>
        </div>
      </div>
    </footer>
  );
}
