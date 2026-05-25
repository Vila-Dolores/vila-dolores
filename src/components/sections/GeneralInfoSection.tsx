import { MapPin, Car, Wifi, ShieldCheck, Droplets, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function GeneralInfoSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-[#304439] py-24 font-sans">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 md:flex-row md:items-center md:px-16">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="mb-10 font-sans text-3xl font-extrabold tracking-tight text-[#FFD2A2] md:text-4xl">
            {t("general_info.title")}
          </h2>
          
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.location_label")}</strong> {t("general_info.location_desc")}
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Car className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.parking_label")}</strong> {t("general_info.parking_desc")}
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Wifi className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.wifi_label")}</strong> {t("general_info.wifi_desc")}
              </p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.security_label")}</strong> {t("general_info.security_desc")}
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Droplets className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.shower_label")}</strong> {t("general_info.shower_desc")}
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-[#FFD2A2]" />
              <p className="font-sans text-lg font-medium leading-relaxed text-white/90">
                <strong className="text-[#FFD2A2]">{t("general_info.schedule_label")}</strong> {t("general_info.schedule_desc")}
              </p>
            </li>
          </ul>
        </div>

        <div className="relative h-[500px] w-full flex-1 overflow-hidden rounded-xl shadow-2xl md:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1000&q=80"
            alt="Vista do mar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}