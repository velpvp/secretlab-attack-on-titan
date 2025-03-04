import { Comprar } from "./_components/comprar";
import { Footer } from "./_components/footer";
import { Galeria } from "./_components/galeria";
import { Header } from "./_components/header";
import { Lencos } from "./_components/lencos";
import { Mesa } from "./_components/mesa";
import { Sobre } from "./_components/sobre";
import { SobreCadeira } from "./_components/sobrecadeira";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <SobreCadeira />
        <Lencos />
        <Comprar />
        <Mesa />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}
