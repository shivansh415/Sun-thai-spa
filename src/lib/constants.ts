// Single source of truth for Sun Thai Spa contact + brand constants.
// All components read from BUSINESS so updates propagate from one edit.

export const BUSINESS = {
  name: "Sun Thai Spa",
  address:
    "Shop No 115, First Floor, 5FJC+QPR, Aashima Mall, Shri Rameshwaram, Bagmugaliya, Bhopal, Madhya Pradesh 462043",
  phone: "+91 88272 72939",
  whatsapp: "https://wa.me/918827272939",
  instagram: "https://www.instagram.com/sun_thai_spa/",
  hours: "Open Daily 11 AM – 9 PM",
  tagline: "Luxury Wellness Destination",
  location: "Aashima Mall, Bhopal · Near Bagmugaliya · MP",
} as const;

export const phoneRaw = "+918827272939";
export const PHONE_URL = `tel:${phoneRaw}` as const;
export const COPYRIGHT = "© 2026 Sun Thai Spa. All rights reserved." as const;
