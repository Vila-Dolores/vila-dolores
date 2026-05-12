import { Footer } from "../components/layout/Footer";
import { FloatingMenu } from "../components/layout/FloatingMenu";

export function Acomodacoes() {
  return (
    <div className="relative size-full bg-[#FAF9F6] font-sans">
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-8 md:px-16">
        <h1 className="text-4xl font-extrabold text-[#304439]">
          Página de Acomodações em construção...
        </h1>
      </div>
      <Footer />
      <FloatingMenu />
    </div>
  );
}