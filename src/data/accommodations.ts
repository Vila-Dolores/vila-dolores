export interface Amenity {
  iconName: "wifi" | "tv" | "wind" | "coffee" | "waves" | "shield" | "sun" | "car" | "washer";
  label: string;
}

export interface Bed {
  type: string;
  quantity: number;
}

export interface Accommodation {
  id: string;
  name: string;
  type: string;
  capacity: number;
  size: number;
  shortDescription: string;
  fullDescription: string;
  bedrooms: number;
  bathrooms: number;
  beds: Bed[];
  amenities: Amenity[];
  images: string[];
  videoTourUrl: string; // URL do vídeo tour
  airbnbUrl: string;
  bookingUrl: string;
}

export const accommodationsData: Accommodation[] = [
  {
    id: "areia",
    name: "Areia",
    type: "térreo",
    capacity: 6,
    size: 70,
    shortDescription: "Acolhedora e prática — perfeita para famílias menores",
    fullDescription: "A Casa Areia, localizada no térreo, oferece a comodidade perfeita para quem quer chegar da praia, acomodar tudo rapidamente e desfrutar do ambiente sem subir escadas. O pequeno quintal integrado traz um respiro de ar livre e praticidade, ideal para momentos relaxantes após um banho de mar.",
    bedrooms: 2,
    bathrooms: 2, // 1 da suite + 1 integrado
    beds: [
      { type: "Cama Queen", quantity: 1 },
      { type: "Cama de Solteiro", quantity: 2 },
      { type: "Sofá-cama Casal", quantity: 1 }
    ],
    amenities: [
      { iconName: "wind", label: "Ar-condicionado em todos os cômodos" },
      { iconName: "coffee", label: "Cozinha completa para 6 pessoas" },
      { iconName: "sun", label: "Quintal privativo (8m²)" },
      { iconName: "washer", label: "Lavanderia com máquina" },
      { iconName: "waves", label: "Kit praia (4 cadeiras + guarda-sol)" },
      { iconName: "wifi", label: "Wi-Fi de alta velocidade" },
      { iconName: "tv", label: "Smart TV conectada" },
      { iconName: "car", label: "1 Vaga de Garagem" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
    ],
    videoTourUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  },
  {
    id: "mare",
    name: "Maré",
    type: "térreo",
    capacity: 7,
    size: 80,
    shortDescription: "Um espaço amplo com pátio gourmet privativo — para curtir depois da praia.",
    fullDescription: "A Casa Maré é o térreo que eleva a experiência de convivência. O grande diferencial é o seu pátio gourmet privativo com churrasqueira e chuveirão exclusivo. É o ambiente definitivo para churrascos, risadas e bons momentos ao ar livre com quem você ama, unindo a funcionalidade do interior com a delícia da área externa.",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { type: "Cama Queen", quantity: 1 },
      { type: "Cama de Casal", quantity: 1 },
      { type: "Cama de Solteiro", quantity: 1 },
      { type: "Sofá-cama Casal", quantity: 1 }
    ],
    amenities: [
      { iconName: "wind", label: "Ar-condicionado em todos os ambientes" },
      { iconName: "coffee", label: "Cozinha completa para 7 pessoas" },
      { iconName: "sun", label: "Pátio gourmet privativo" },
      { iconName: "waves", label: "Churrasqueira e Chuveirão" },
      { iconName: "washer", label: "Lavanderia com máquina" },
      { iconName: "waves", label: "Kit praia (4 cadeiras + guarda-sol)" },
      { iconName: "tv", label: "Smart TV conectada" },
      { iconName: "car", label: "1 Vaga de Garagem" }
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    ],
    videoTourUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  },
  {
    id: "horizonte",
    name: "Horizonte",
    type: "superior",
    capacity: 8,
    size: 90,
    shortDescription: "Mais espaço em 2 andares, mais conforto e um solarium gourmet privativo.",
    fullDescription: "A Casa Horizonte oferece o requinte de uma residência duplex. No andar superior, você desfruta de um amplo mezanino que funciona como um segundo ambiente de estar. O ponto alto da casa é o impressionante solarium gourmet de 20m², garantindo total privacidade para curtir a liberdade do seu próprio rooftop, de dia ou de noite.",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { type: "Cama Box Queen", quantity: 1 },
      { type: "Cama de Solteiro", quantity: 2 },
      { type: "Sofá-cama Casal", quantity: 2 } // 1 sala, 1 mezanino
    ],
    amenities: [
      { iconName: "wind", label: "Ar-condicionado nos ambientes" },
      { iconName: "coffee", label: "Cozinha equipada para 8 pessoas" },
      { iconName: "sun", label: "Solarium gourmet privativo (20m²)" },
      { iconName: "waves", label: "Chuveirão no Rooftop" },
      { iconName: "washer", label: "Lavanderia com máquina" },
      { iconName: "waves", label: "Kit praia (4 cadeiras + guarda-sol)" },
      { iconName: "tv", label: "TV no Mezanino e Sala" },
      { iconName: "car", label: "1 Vaga de Garagem" }
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80"
    ],
    videoTourUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  },
  {
    id: "brisa",
    name: "Brisa",
    type: "superior",
    capacity: 8,
    size: 90,
    shortDescription: "Mesma estrutura e charme da Casa Horizonte, com um solário gourmet privativo.",
    fullDescription: "A Casa Brisa espelha a arquitetura deslumbrante da Casa Horizonte. Com ambientes divididos em dois andares, ela possui o charme do mezanino e o luxo do solarium gourmet privativo de 20m². É o espaço ideal para famílias maiores ou grupos de amigos que não abrem mão de conforto, brisa fresca e um rooftop exclusivo em Juquehy.",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { type: "Cama Box Queen", quantity: 1 },
      { type: "Cama de Solteiro", quantity: 2 },
      { type: "Sofá-cama Casal", quantity: 2 } // 1 sala, 1 mezanino
    ],
    amenities: [
      { iconName: "wind", label: "Ar-condicionado nos ambientes" },
      { iconName: "coffee", label: "Cozinha equipada para 8 pessoas" },
      { iconName: "sun", label: "Solarium gourmet privativo (20m²)" },
      { iconName: "waves", label: "Chuveirão no Rooftop" },
      { iconName: "washer", label: "Lavanderia com máquina" },
      { iconName: "waves", label: "Kit praia (4 cadeiras + guarda-sol)" },
      { iconName: "tv", label: "TV no Mezanino e Sala" },
      { iconName: "car", label: "1 Vaga de Garagem" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
    ],
    videoTourUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  }
];