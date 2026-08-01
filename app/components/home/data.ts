import {
  BriefcaseBusiness,
  Building2,
  BusFront,
  CalendarDays,
  ClipboardCheck,
  Droplets,
  Dumbbell,
  GraduationCap,
  Hammer,
  MapPin,
  Ruler,
  ShieldCheck,
  Trees,
  Waves,
  Zap
} from "lucide-react";

export const projectImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
];

export const heroVideo = "/video/hero.mp4";

export const projects = [
  {
    slug: "yuva-utsav",
    name: "Yuva Utsav",
    stage: "Ongoing",
    location: "Kammasandra, Electronic City Ph-2",
    headline: "Premium residences for modern IT-corridor living.",
    description:
      "Yuva Utsav brings premium living to Kammasandra, off Electronic City Phase 2. Designed around the daily rhythm of IT-corridor professionals, the project pairs spacious 1, 2 and 3 BHK residences with gated-community amenities, easy access to Hosur Road, and a construction timeline you can track at every stage.",
    homes: "1, 2 & 3 BHK",
    price: "From Rs. 50L*",
    progress: 72,
    possession: "Mid 2027",
    area: "820 – 1,450 sq.ft.",
    highlights: [
      "Gated community with 24/7 security",
      "Covered parking for all units",
      "Power backup for common areas",
      "Clubhouse, pool & fitness deck",
      "2 minutes to Electronic City Ph-2",
      "RERA-registered development"
    ],
    image: projectImages[1],
    color: "bg-blue-600"
  },
  {
    slug: "yuva-sunshine",
    name: "Yuva Sunshine",
    stage: "Ongoing",
    location: "Chandapura to Anekal Main Road",
    headline: "Affordable apartments with daily connectivity built in.",
    description:
      "Yuva Sunshine is an affordable, thoughtfully planned apartment community on the Chandapura–Anekal main road. Every unit is designed for daily convenience — dependable connectivity, practical layouts, and shared amenities that keep weekend living easy without stretching the budget.",
    homes: "2 & 3 BHK",
    price: "Site visits open",
    progress: 64,
    possession: "Early 2027",
    area: "760 – 1,280 sq.ft.",
    highlights: [
      "Affordable 2 & 3 BHK layouts",
      "Direct connectivity on Chandapura–Anekal road",
      "School bus lounge & children's play zone",
      "Rainwater harvesting & green landscape",
      "Gated community with CCTV",
      "Easy access to Hosur Road"
    ],
    image: projectImages[2],
    color: "bg-emerald-500"
  },
  {
    slug: "yuva-sunrise",
    name: "Yuva Sunrise",
    stage: "Ready To Move",
    location: "Attibele Industrial Area, off Hosur Road",
    headline: "Move-in-ready homes near the Bengaluru growth corridor.",
    description:
      "Yuva Sunrise is a move-in-ready address off Hosur Road near the Attibele industrial corridor. Buyers can walk into finished homes with completed documentation, working amenities, and a community that is already settled — no construction timeline to wait for.",
    homes: "1, 2 & 3 BHK",
    price: "Ready keys",
    progress: 96,
    possession: "Ready now",
    area: "800 – 1,420 sq.ft.",
    highlights: [
      "Move-in-ready with keys available",
      "Completed amenities & common areas",
      "Established community near Hosur Road",
      "1, 2 & 3 BHK with ready documentation",
      "Rental-ready options nearby",
      "Easy reach to Attibele & Electronic City"
    ],
    image: projectImages[0],
    color: "bg-sky-600"
  }
];

export type Project = (typeof projects)[number];

export const completedProjects = [
  {
    slug: "yuva-residency",
    name: "Yuva Residency",
    stage: "Completed",
    location: "Chandapura, off Hosur Road",
    headline: "A settled community with keys delivered and residents moved in.",
    description:
      "Yuva Residency is a completed, fully occupied community off Hosur Road. Homes were handed over on schedule with finished common areas, working amenities, and a neighbourhood that has been living in it for years — proof of Yuva Group's delivery discipline.",
    homes: "2 & 3 BHK",
    price: "Sold out",
    progress: 100,
    possession: "Handed over",
    area: "780 – 1,260 sq.ft.",
    highlights: [
      "Keys delivered on schedule",
      "Occupied, settled community",
      "Finished amenities & landscaping",
      "Established neighbourhood off Hosur Road",
      "Documentation completed for all owners",
      "Rental-ready demand in the area"
    ],
    image: projectImages[3],
    color: "bg-indigo-600"
  },
  {
    slug: "yuva-heritage",
    name: "Yuva Heritage",
    stage: "Completed",
    location: "Anekal, near the industrial belt",
    headline: "Comfortable homes delivered near Anekal's growth belt.",
    description:
      "Yuva Heritage delivered comfortable 2 and 3 BHK homes near Anekal's industrial belt. The project completed with full documentation, common amenities in working order, and a resident community that continues to grow around it.",
    homes: "2 & 3 BHK",
    price: "Sold out",
    progress: 100,
    possession: "Handed over",
    area: "800 – 1,340 sq.ft.",
    highlights: [
      "Completed and handed over",
      "Near Anekal industrial belt",
      "Working common amenities",
      "Full documentation support",
      "Gated community with security",
      "Good commute access to Hosur Road"
    ],
    image: projectImages[4],
    color: "bg-amber-600"
  },
  {
    slug: "yuva-lake-view",
    name: "Yuva Lake View",
    stage: "Completed",
    location: "Attibele, off Hosur Road",
    headline: "A delivered project with calm surroundings and easy access.",
    description:
      "Yuva Lake View is a completed residential project near Attibele, off Hosur Road. Homes were handed over with finished interiors, active amenities, and a calm setting that continues to hold value for residents and investors alike.",
    homes: "1, 2 & 3 BHK",
    price: "Sold out",
    progress: 100,
    possession: "Handed over",
    area: "690 – 1,280 sq.ft.",
    highlights: [
      "Completed with keys delivered",
      "Calm, green surroundings",
      "Active community amenities",
      "Easy access to Hosur Road",
      "Strong rental demand",
      "All documentation completed"
    ],
    image: projectImages[0],
    color: "bg-teal-600"
  }
];

export const allProjects = [...projects, ...completedProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export const propertyHighlights = [
  {
    icon: Building2,
    title: "Completed Projects",
    metric: "10+",
    copy: "Built addresses across Bengaluru give buyers a clearer read on construction quality and handover discipline.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: MapPin,
    title: "Growth Corridor Locations",
    metric: "South Bengaluru",
    copy: "Projects are positioned around Electronic City, Attibele, Chandapura, Anekal, and daily commute routes.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: ClipboardCheck,
    title: "100% Visit Before Purchase",
    metric: "Walk first",
    copy: "Buyers can inspect the project environment, progress, approach roads, and amenities before moving ahead.",
    image: projectImages[4]
  },
  {
    icon: BriefcaseBusiness,
    title: "One-to-One Site Visit Support",
    metric: "Guided",
    copy: "A dedicated team helps with project comparison, inventory, visit timing, floor-plan review, and next steps.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  }
];

export const visitLocation = {
  name: "Yuva Structures Experience Centre",
  company: "YUVA STRUCTURES PVT. LTD",
  address:
    "115, 2nd floor, Sankirana, Hosur Rd, Near Murali TVS Showroom, Chandapura, Bengaluru, Karnataka 560099",
  phone: "+91 82 82 82 3395",
  phoneSecondary: "+91 82 82 82 3396",
  email: "enquiry@yuvastructures.com",
  mapQuery: "Yuva Structures Pvt. Ltd. Chandapura Bengaluru",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yuva%20Structures%20Pvt.%20Ltd.%20Chandapura%20Bengaluru",
  embedUrl:
    "https://www.google.com/maps?q=Yuva%20Structures%20Pvt.%20Ltd.%20Chandapura%20Bengaluru&output=embed"
};

export const amenities = [
  { icon: Waves, label: "Swimming Pool" },
  { icon: Dumbbell, label: "Indoor & Outdoor Fitness" },
  { icon: Trees, label: "Green Landscape" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Zap, label: "Power Backup" },
  { icon: Droplets, label: "Rainwater Harvesting" },
  { icon: BusFront, label: "School Bus Lounge" },
  { icon: GraduationCap, label: "Connected Schools" }
];

export const roles = [
  "Site Engineer",
  "Sales Executive",
  "CRM Specialist",
  "Project Supervisor",
  "Telecaller",
  "Accounts Executive"
];

export const projectSignals = [
  {
    title: "Structure",
    copy: "Foundation, slabs, masonry, and services are tracked through milestone checks."
  },
  {
    title: "Connectivity",
    copy: "Locations are selected around Bengaluru growth corridors, schools, and daily commute routes."
  },
  {
    title: "Handover",
    copy: "Floor plans, documentation, loan support, and possession readiness are kept visible."
  }
];

export const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Shortlist",
    copy: "Compare stage, location, unit mix, and projected possession before the first call.",
    metric: "03",
    image: projectImages[1],
    detail: "Choose the address and unit type before committing to a site visit."
  },
  {
    icon: CalendarDays,
    title: "Site visit",
    copy: "Book a slot, get directions, and understand available inventory quickly.",
    metric: "24h",
    image: projectImages[3],
    detail: "Walk the site, check approach roads, and understand construction progress in person."
  },
  {
    icon: Ruler,
    title: "Plan review",
    copy: "Review floor plans, amenities, payment schedule, and construction milestones.",
    metric: "1:1",
    image: projectImages[4],
    detail: "Review dimensions, facing, sunlight, amenities, and payment plan with the team."
  },
  {
    icon: Hammer,
    title: "Handover",
    copy: "Move through documentation, final checks, and possession with fewer blind spots.",
    metric: "Key",
    image: projectImages[0],
    detail: "Complete documentation, final checks, and handover support with a clear checklist."
  }
];

export const amenityDetails = [
  {
    title: "Wellness Deck",
    copy: "Pool, fitness, and outdoor activity zones support daily routines without leaving the community.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Green Courts",
    copy: "Landscape pockets, shaded walkways, and open seating keep the site comfortable at ground level.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Safety Systems",
    copy: "Security, power backup, and water systems are planned as practical infrastructure, not decoration.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
  }
];

export const buyerFeedback = [
  {
    title: "Site visit clarity",
    name: "Rahul Sharma",
    quote:
      "The project team walked us through the actual site progress, not only the brochure view.",
    project: "Yuva Utsav",
    image: projectImages[3]
  },
  {
    title: "Location confidence",
    name: "Priya Nair",
    quote:
      "We could compare connectivity, school routes, and available units before making the next call.",
    project: "Yuva Sunshine",
    image: projectImages[2]
  },
  {
    title: "Handover support",
    name: "Kiran Kumar",
    quote:
      "The documentation and possession checklist made the buying process feel much more organized.",
    project: "Yuva Sunrise",
    image: projectImages[0]
  }
];
