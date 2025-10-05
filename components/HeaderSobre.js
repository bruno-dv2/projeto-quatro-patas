import Link from 'next/link';
import Image from 'next/image';

export default function HeaderSobre() {
  return (
    <header className="bg-azul-primary text-white">
      {/* Menu Superior */}
      <nav className="flex justify-between items-center px-64 py-4 bg-[#3B7DD6]">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <Image src="/logo.png" alt="4 Patas" width={40} height={40} />
          <h1 className="text-2xl font-bold">Patas</h1>
        </Link>
        <Link 
          href="/"
          className="text-lg font-medium hover:underline"
        >
          Home
        </Link>
      </nav>

      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Conteúdo central */}
        <div className="relative z-10 text-white text-center px-8">
          <h1 className="text-5xl font-bold mb-4">O QUE NOS</h1>
          <h2 className="text-4xl font-bold mb-6">FAZEMOS?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-6">
            Encontramos ONGs confiáveis para você, apadrinhar
          </p>
          
          <Link 
            href="/#ongs"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-azul-primary transition inline-block"
          >
            Conheça as ONGs
          </Link>
        </div>
      </div>
    </header>
  );
}