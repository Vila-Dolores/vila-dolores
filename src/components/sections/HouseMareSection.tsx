export function HouseMareSection() {
  return (
    <section className="w-full bg-[#FFD2A2] py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 md:flex-row md:items-center md:px-16">
        
        {/* Imagem à esquerda para quebrar o padrão da Casa 1 */}
        <div className="relative h-[600px] w-full flex-1 overflow-hidden rounded-xl shadow-xl md:h-[800px]">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80"
            alt="Interior da Casa Maré"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Conteúdo à direita */}
        <div className="flex flex-1 flex-col justify-center md:pl-8">
          <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#81AF8E]">
            Nossas acomodações
          </p>
          <h2 className="mb-2 font-sans text-4xl font-extrabold tracking-tight text-[#304439]">
            Casa 2 "Maré"
          </h2>
          <p className="mb-6 font-sans text-lg font-semibold text-[#304439]/70">
            térreo | Até 7 pessoas | 80m²
          </p>
          
          <p className="mb-8 font-sans text-xl font-medium italic leading-relaxed text-[#304439]">
            Um espaço amplo com pátio gourmet privativo — para curtir depois da praia.
          </p>

          <ul className="mb-10 flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                1 suíte com cama queen
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                1 quarto com cama de casal + cama de solteiro e banheiro integrado
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Sala de jantar e estar com conceito aberto, sofá-cama casal e TV conectada
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Ar-condicionado em todos os ambientes
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Cozinha equipada com cooktop, geladeira, micro-ondas e utensílios para 7 pessoas
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Lavanderia com máquina de lavar
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Pátio gourmet privativo com churrasqueira
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Chuveirão exclusivo
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#304439]" />
              <p className="font-sans text-lg font-medium text-[#304439]/90">
                Kit praia: 4 cadeiras + guarda-sol
              </p>
            </li>
          </ul>

          <p className="mb-8 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            O ambiente perfeito para churrascos, risadas e bons momentos ao ar livre.
          </p>

          <button
            type="button"
            className="self-start rounded-md bg-[#304439] px-10 py-4 font-sans text-base font-bold text-[#FFD2A2] transition hover:brightness-110"
          >
            Reservar
          </button>
        </div>
      </div>
    </section>
  );
}