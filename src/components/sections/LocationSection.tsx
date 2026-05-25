import { useTranslation } from "react-i18next";

export function LocationSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-24 font-sans" id="localizacao">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 md:flex-row md:items-center md:px-16">
        <div className="flex flex-1 flex-col justify-center p-4 md:p-8">
          <h2 className="mb-6 font-sans text-3xl font-extrabold tracking-tight text-[#304439] md:text-4xl">
            {t("location.title")}
          </h2>
          <p className="mb-4 font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            {t("location.description_1")}
          </p>
          <p className="font-sans text-lg font-medium leading-relaxed text-[#304439]/90">
            {t("location.description_2")}
          </p>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48 overflow-hidden rounded-xl md:h-64">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                alt={t("location.images.restaurants")}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-48 overflow-hidden rounded-xl md:h-64">
              <img
                src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?auto=format&fit=crop&w=600&q=80"
                alt={t("location.images.commerce")}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-48 overflow-hidden rounded-xl md:h-64">
              <img
                src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80"
                alt={t("location.images.architecture")}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-48 overflow-hidden rounded-xl md:h-64">
              <img
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=600&q=80"
                alt={t("location.images.streets")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}