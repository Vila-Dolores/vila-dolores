const baseUrl = import.meta.env.VITE_URL_CLOUDFLARE;

export interface Amenity {
  iconName:
    | "wifi"
    | "tv"
    | "wind"
    | "coffee"
    | "waves"
    | "shield"
    | "sun"
    | "car"
    | "washer";
  labelKey: string;
}

export interface Bed {
  typeKey: string;
  quantity: number;
  roomKey: string;
}

export interface Accommodation {
  id: string;
  name: string;
  typeKey: string;
  capacity: number;
  size: number;
  shortDescriptionKey: string;
  fullDescriptionKey: string;
  bedrooms: number;
  bathrooms: number;
  beds: Bed[];
  amenities: Amenity[];
  images: string[];
  airbnbUrl: string;
  bookingUrl: string;
}

export const accommodationsData: Accommodation[] = [
  {
    id: "casa-1",
    name: "Casa 1",
    typeKey: "accommodations.labels.ground",
    capacity: 6,
    size: 70,
    shortDescriptionKey: "accommodations.casa_1.short_desc",
    fullDescriptionKey: "accommodations.casa_1.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.queen", quantity: 1, roomKey: "accommodations.rooms.suite" },
      { typeKey: "accommodations.beds.single", quantity: 2, roomKey: "accommodations.rooms.bedroom" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.living" },
    ],
    amenities: [
      {
        iconName: "wind",
        labelKey: "accommodations.amenities.air_conditioning_all",
      },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_6" },
      { iconName: "sun", labelKey: "accommodations.amenities.backyard" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "wifi", labelKey: "accommodations.amenities.wifi" },
      { iconName: "tv", labelKey: "accommodations.amenities.smart_tv" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" },
    ],
    images: [
      `${baseUrl}/casa-1/suite1.webp`,
      `${baseUrl}/casa-1/thumbs/sala0a.webp`,
      `${baseUrl}/casa-1/thumbs/sala1a.webp`,
      `${baseUrl}/casa-1/thumbs/sala1d.webp`,
      `${baseUrl}/casa-1/thumbs/sala1h.webp`,
      `${baseUrl}/casa-1/thumbs/sala1i.webp`,
      `${baseUrl}/casa-1/thumbs/sala2.webp`,
      `${baseUrl}/casa-1/thumbs/sala2a.webp`,
      `${baseUrl}/casa-1/thumbs/sala2b.webp`,
      `${baseUrl}/casa-1/thumbs/sala2c.webp`,
      `${baseUrl}/casa-1/thumbs/sala9.webp`,
      `${baseUrl}/casa-1/thumbs/sala9a.webp`,
      `${baseUrl}/casa-1/thumbs/cozinha1.webp`,
      `${baseUrl}/casa-1/thumbs/cozinha4.webp`,
      `${baseUrl}/casa-1/thumbs/cozinha6.webp`,
      `${baseUrl}/casa-1/thumbs/quarto2.webp`,
      `${baseUrl}/casa-1/thumbs/quarto5.webp`,
      `${baseUrl}/casa-1/thumbs/quarto7.webp`,
      `${baseUrl}/casa-1/thumbs/suite1.webp`,
      `${baseUrl}/casa-1/thumbs/suite2.webp`,
      `${baseUrl}/casa-1/thumbs/suite3.webp`,
      `${baseUrl}/casa-1/thumbs/suite6.webp`,
      `${baseUrl}/casa-1/thumbs/lavanderia2.webp`,
      `${baseUrl}/casa-1/thumbs/quintal2.webp`,
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com",
  },
  {
    id: "casa-2",
    name: "Casa 2",
    typeKey: "accommodations.labels.ground",
    capacity: 7,
    size: 80,
    shortDescriptionKey: "accommodations.casa_2.short_desc",
    fullDescriptionKey: "accommodations.casa_2.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.queen", quantity: 1, roomKey: "accommodations.rooms.suite" },
      { typeKey: "accommodations.beds.double", quantity: 1, roomKey: "accommodations.rooms.bedroom" },
      { typeKey: "accommodations.beds.single", quantity: 1, roomKey: "accommodations.rooms.bedroom" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.living" },
    ],
    amenities: [
      {
        iconName: "wind",
        labelKey: "accommodations.amenities.air_conditioning_environments",
      },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_7" },
      { iconName: "sun", labelKey: "accommodations.amenities.gourmet_patio" },
      { iconName: "waves", labelKey: "accommodations.amenities.bbq_shower" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.smart_tv" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" },
    ],
    images: [
      `${baseUrl}/casa-2/suite1-casa2.webp`,
      `${baseUrl}/casa-2/thumbs/1a.webp`,
      `${baseUrl}/casa-2/thumbs/1b.webp`,
      `${baseUrl}/casa-2/thumbs/1c.webp`,
      `${baseUrl}/casa-2/thumbs/sala1.webp`,
      `${baseUrl}/casa-2/thumbs/sala2.webp`,
      `${baseUrl}/casa-2/thumbs/sala3.webp`,
      `${baseUrl}/casa-2/thumbs/sala3a.webp`,
      `${baseUrl}/casa-2/thumbs/sala4.webp`,
      `${baseUrl}/casa-2/thumbs/sala4a.webp`,
      `${baseUrl}/casa-2/thumbs/cozinha1.webp`,
      `${baseUrl}/casa-2/thumbs/quarto1.webp`,
      `${baseUrl}/casa-2/thumbs/quarto2.webp`,
      `${baseUrl}/casa-2/thumbs/quarto3.webp`,
      `${baseUrl}/casa-2/thumbs/quarto4.webp`,
      `${baseUrl}/casa-2/thumbs/suite1.webp`,
      `${baseUrl}/casa-2/thumbs/suite2.webp`,
      `${baseUrl}/casa-2/thumbs/suite2a.webp`,
      `${baseUrl}/casa-2/thumbs/suite3.webp`,
      `${baseUrl}/casa-2/thumbs/suite4.webp`,
      `${baseUrl}/casa-2/thumbs/wc2.webp`,
      `${baseUrl}/casa-2/thumbs/wcsuite1.webp`,
      `${baseUrl}/casa-2/thumbs/lavanderia2.webp`,
      `${baseUrl}/casa-2/thumbs/z.webp`,
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com",
  },
  {
    id: "casa-3",
    name: "Casa 3",
    typeKey: "accommodations.labels.superior",
    capacity: 8,
    size: 100,
    shortDescriptionKey: "accommodations.casa_3.short_desc",
    fullDescriptionKey: "accommodations.casa_3.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.queen", quantity: 1, roomKey: "accommodations.rooms.suite" },
      { typeKey: "accommodations.beds.single", quantity: 2, roomKey: "accommodations.rooms.bedroom" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.living" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.mezzanine" },
    ],
    amenities: [
      {
        iconName: "wind",
        labelKey: "accommodations.amenities.air_conditioning_rooms",
      },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_8" },
      {
        iconName: "sun",
        labelKey: "accommodations.amenities.gourmet_solarium",
      },
      {
        iconName: "waves",
        labelKey: "accommodations.amenities.rooftop_shower",
      },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.tv_mezzanine" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" },
    ],
    images: [
      `${baseUrl}/casa-3/suite-casa-3.webp`,
      `${baseUrl}/casa-3/thumbs/1b.webp`,
      `${baseUrl}/casa-3/thumbs/sala1.webp`,
      `${baseUrl}/casa-3/thumbs/sala2.webp`,
      `${baseUrl}/casa-3/thumbs/sala2a.webp`,
      `${baseUrl}/casa-3/thumbs/sala3.webp`,
      `${baseUrl}/casa-3/thumbs/sala7.webp`,
      `${baseUrl}/casa-3/thumbs/sala8.webp`,
      `${baseUrl}/casa-3/thumbs/cozinha1.webp`,
      `${baseUrl}/casa-3/thumbs/cozinha4.webp`,
      `${baseUrl}/casa-3/thumbs/cozinha5.webp`,
      `${baseUrl}/casa-3/thumbs/cozinha6.webp`,
      `${baseUrl}/casa-3/thumbs/escada%20mezanino.webp`,
      `${baseUrl}/casa-3/thumbs/mezanino1.webp`,
      `${baseUrl}/casa-3/thumbs/mezanino2.webp`,
      `${baseUrl}/casa-3/thumbs/mezanino3.webp`,
      `${baseUrl}/casa-3/thumbs/mezanino4.webp`,
      `${baseUrl}/casa-3/thumbs/quarto1.webp`,
      `${baseUrl}/casa-3/thumbs/quarto2a.webp`,
      `${baseUrl}/casa-3/thumbs/quarto3.webp`,
      `${baseUrl}/casa-3/thumbs/quarto3a.webp`,
      `${baseUrl}/casa-3/thumbs/quarto4.webp`,
      `${baseUrl}/casa-3/thumbs/lavanderia1.webp`,
      `${baseUrl}/casa-3/thumbs/sol%C3%A1rio1.webp`,
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com",
  },
  {
    id: "casa-4",
    name: "Casa 4",
    typeKey: "accommodations.labels.superior",
    capacity: 8,
    size: 100,
    shortDescriptionKey: "accommodations.casa_4.short_desc",
    fullDescriptionKey: "accommodations.casa_4.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.queen", quantity: 1, roomKey: "accommodations.rooms.suite" },
      { typeKey: "accommodations.beds.single", quantity: 2, roomKey: "accommodations.rooms.bedroom" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.living" },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1, roomKey: "accommodations.rooms.mezzanine" },
    ],
    amenities: [
      {
        iconName: "wind",
        labelKey: "accommodations.amenities.air_conditioning_rooms",
      },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_8" },
      {
        iconName: "sun",
        labelKey: "accommodations.amenities.gourmet_solarium",
      },
      {
        iconName: "waves",
        labelKey: "accommodations.amenities.rooftop_shower",
      },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.tv_mezzanine" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" },
    ],
    images: [
      `${baseUrl}/casa-4/suite4-casa-4.webp`,
      `${baseUrl}/casa-4/thumbs/1b.webp`,
      `${baseUrl}/casa-4/thumbs/sala1.webp`,
      `${baseUrl}/casa-4/thumbs/sala2.webp`,
      `${baseUrl}/casa-4/thumbs/sala3.webp`,
      `${baseUrl}/casa-4/thumbs/sala3a.webp`,
      `${baseUrl}/casa-4/thumbs/sala4.webp`,
      `${baseUrl}/casa-4/thumbs/sala5.webp`,
      `${baseUrl}/casa-4/thumbs/sala6.webp`,
      `${baseUrl}/casa-4/thumbs/sala8.webp`,
      `${baseUrl}/casa-4/thumbs/sala9.webp`,
      `${baseUrl}/casa-4/thumbs/cozinha1.webp`,
      `${baseUrl}/casa-4/thumbs/cozinha3.webp`,
      `${baseUrl}/casa-4/thumbs/escada%20mezanino.webp`,
      `${baseUrl}/casa-4/thumbs/mezanino1.webp`,
      `${baseUrl}/casa-4/thumbs/mezanino3.webp`,
      `${baseUrl}/casa-4/thumbs/mezanino4.webp`,
      `${baseUrl}/casa-4/thumbs/quarto.webp`,
      `${baseUrl}/casa-4/thumbs/quarto1.webp`,
      `${baseUrl}/casa-4/thumbs/quarto2.webp`,
      `${baseUrl}/casa-4/thumbs/quarto3.webp`,
      `${baseUrl}/casa-4/thumbs/lavanderia2.webp`,
      `${baseUrl}/casa-4/thumbs/solario1.webp`,
      `${baseUrl}/casa-4/thumbs/solario2.webp`,
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com",
  },
];