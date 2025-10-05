import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-azul-primary text-white">

    {/* Menu Superior */}
    <nav className="flex justify-between items-center px-64 py-4 bg-[#3B7DD6]">
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
        <Image src="/logo.png" alt="4 Patas" width={40} height={40} />
        <h1 className="text-2xl font-bold">Patas</h1>
    </Link>
    <Link 
        href="/sobre"
        className="text-lg font-medium hover:underline"
    >
        Sobre
    </Link>
    </nav>

      <div className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          ONGs confiáveis para ajudar nossos amigos de 4Patas
        </h2>

        <p className="text-lg mb-10 opacity-95">
          Encontre ONGs confiáveis em Fortaleza dedicadas ao bem-estar de cães e gatos.
          <br />
          Cada organização é inspecionada minuciosamente por nossa equipe.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/#ongs"
            className="bg-white text-azul-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Encontre ONGs
          </Link>
          <Link 
            href="/sobre"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-azul-primary transition"
          >
            Como validar ONGs
          </Link>
        </div>
      </div>
    </header>
  );
}