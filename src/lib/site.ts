/** Practice-wide details used across the site. */
export const site = {
  name: "MM Counselling",
  counsellor: "Michelle Mackrell",
  role: "Registered Counsellor",
  tagline: "A space for healing, growth and connection.",
  phoneDisplay: "+27 76 605 7895",
  phoneHref: "tel:+27766057895",
  email: "michelle@mmcounselling.co.za",
  location: "Meybar Medical Center / Sandown Medical Center",
  area: "Table View/Parklands",
  // This is the address the current live site links to (note the spelling).
  facebook: "https://www.facebook.com/michellemcouncelling",
  hpcsa: "PRC 0010987",
  practiceNo: "0949973",
} as const;

export const navLinks = [
  { label: "About Me", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/#approach" },
] as const;

export const contactLink = { label: "Contact", href: "/#contact" } as const;
