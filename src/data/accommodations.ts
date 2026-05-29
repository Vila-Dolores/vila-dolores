export interface Amenity {
  iconName: "wifi" | "tv" | "wind" | "coffee" | "waves" | "shield" | "sun" | "car" | "washer";
  labelKey: string;
}

export interface Bed {
  typeKey: string;
  quantity: number;
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
      { typeKey: "accommodations.beds.queen", quantity: 1 },
      { typeKey: "accommodations.beds.single", quantity: 2 },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1 }
    ],
    amenities: [
      { iconName: "wind", labelKey: "accommodations.amenities.air_conditioning_all" },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_6" },
      { iconName: "sun", labelKey: "accommodations.amenities.backyard" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "wifi", labelKey: "accommodations.amenities.wifi" },
      { iconName: "tv", labelKey: "accommodations.amenities.smart_tv" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" }
    ],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
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
      { typeKey: "accommodations.beds.queen", quantity: 1 },
      { typeKey: "accommodations.beds.double", quantity: 1 },
      { typeKey: "accommodations.beds.single", quantity: 1 },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 1 }
    ],
    amenities: [
      { iconName: "wind", labelKey: "accommodations.amenities.air_conditioning_environments" },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_7" },
      { iconName: "sun", labelKey: "accommodations.amenities.gourmet_patio" },
      { iconName: "waves", labelKey: "accommodations.amenities.bbq_shower" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.smart_tv" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" }
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  },
  {
    id: "casa-3",
    name: "Casa 3",
    typeKey: "accommodations.labels.superior",
    capacity: 8,
    size: 90,
    shortDescriptionKey: "accommodations.casa_3.short_desc",
    fullDescriptionKey: "accommodations.casa_3.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.box_queen", quantity: 1 },
      { typeKey: "accommodations.beds.single", quantity: 2 },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 2 }
    ],
    amenities: [
      { iconName: "wind", labelKey: "accommodations.amenities.air_conditioning_rooms" },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_8" },
      { iconName: "sun", labelKey: "accommodations.amenities.gourmet_solarium" },
      { iconName: "waves", labelKey: "accommodations.amenities.rooftop_shower" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.tv_mezzanine" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" }
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80"
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  },
  {
    id: "casa-4",
    name: "Casa 4",
    typeKey: "accommodations.labels.superior",
    capacity: 8,
    size: 90,
    shortDescriptionKey: "accommodations.casa_4.short_desc",
    fullDescriptionKey: "accommodations.casa_4.full_desc",
    bedrooms: 2,
    bathrooms: 2,
    beds: [
      { typeKey: "accommodations.beds.box_queen", quantity: 1 },
      { typeKey: "accommodations.beds.single", quantity: 2 },
      { typeKey: "accommodations.beds.sofa_bed", quantity: 2 }
    ],
    amenities: [
      { iconName: "wind", labelKey: "accommodations.amenities.air_conditioning_rooms" },
      { iconName: "coffee", labelKey: "accommodations.amenities.kitchen_8" },
      { iconName: "sun", labelKey: "accommodations.amenities.gourmet_solarium" },
      { iconName: "waves", labelKey: "accommodations.amenities.rooftop_shower" },
      { iconName: "washer", labelKey: "accommodations.amenities.washer" },
      { iconName: "waves", labelKey: "accommodations.amenities.beach_kit" },
      { iconName: "tv", labelKey: "accommodations.amenities.tv_mezzanine" },
      { iconName: "car", labelKey: "accommodations.amenities.garage" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
    ],
    airbnbUrl: "https://airbnb.com",
    bookingUrl: "https://booking.com"
  }
];