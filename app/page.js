import Header from "@/components/Header";
import ComoSelecionamos from "@/components/ComoSelecionamos";
import ListaOngs from "@/components/ListaOngs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ComoSelecionamos />
      <div id="ongs">
        <ListaOngs />
      </div>
      <Footer />
    </div>
  );
}
