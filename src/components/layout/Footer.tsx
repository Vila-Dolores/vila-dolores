export function Footer() {
  return (
    <footer className="w-full bg-[#304439] px-8 py-12 font-sans md:px-16" id="contato">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 border-b border-[#FFD2A2]/20 pb-12 md:flex-row md:items-start">
        <div className="flex h-32 w-32 shrink-0 items-center justify-center bg-[#FFD2A2] p-4 shadow-lg">
          <img
            src="/logo-original.png"
            alt="Vila Dolores Logo"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex max-w-lg flex-col items-center gap-6 text-center md:items-center">
          <p className="font-sans text-sm font-medium leading-relaxed text-[#FFD2A2]/90">
            A Vila Dolores é um conjunto exclusivo de quatro house apartments em Juquehy. O equilíbrio perfeito entre o aconchego de uma casa e a sofisticação da hospitalidade de alto padrão.
          </p>
          <div className="h-px w-16 bg-[#FFD2A2]/30" />
          <address className="font-sans text-sm font-medium not-italic text-[#FFD2A2]/70">
            Av João Luiz Faustino, 420 <br />
            Juquehy, São Sebastião - SP
          </address>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex flex-col items-center gap-3 md:items-end">
            <a href="/#localizacao" className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white">
              Localização
            </a>
            <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white">
              Airbnb
            </a>
            <a href="https://booking.com" target="_blank" rel="noreferrer" className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white">
              Booking
            </a>
            <a href="#contato" className="font-sans text-sm font-bold tracking-wide text-[#FFD2A2] transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl justify-center">
        <p className="font-sans text-xs text-[#FFD2A2]/50">
          © {new Date().getFullYear()} Vila Dolores. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}