export function MapSection() {
  return (
    <section className="w-full bg-white py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 md:flex-row md:items-center md:px-16">
        <div className="h-[400px] w-full flex-1 overflow-hidden rounded-xl border border-[#304439]/10 shadow-lg md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.6441617255154!2d-45.7667236!3d-23.7667484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd56a066ebbc57%3A0x6b4f7069b2d8816c!2sAv.%20Jo%C3%A3o%20Luiz%20Faustino%2C%20420%20-%20Juquehy%2C%20S%C3%A3o%20Sebasti%C3%A3o%20-%20SP%2C%2011623-256!5e0!3m2!1spt-BR!2sbr!4v1715090000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h2 className="mb-6 font-sans text-2xl font-extrabold tracking-tight text-[#304439] md:text-3xl">
            CONFORTO E PRATICIDADE
          </h2>
          <p className="mb-8 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            a 500 metros da praia e próxima do centro comercial,<br />
            a poucos quarteirões de tudo o que você precisa:<br />
            supermercados, excelentes restaurantes, ótimas sorveterias,<br />
            padarias, farmácias e shopping centers.
          </p>
          
          <span className="mb-8 font-sans text-3xl font-light text-[#81AF8E]">
            /
          </span>
          
          <address className="font-sans text-base font-bold not-italic leading-relaxed text-[#304439]">
            Av João Luiz Faustino, 420<br />
            Juquehy, São Sebastião, SP 11623-256
          </address>
        </div>
      </div>
    </section>
  );
}