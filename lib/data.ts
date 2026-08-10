import type { Service, PortfolioItem, StatItem, ProcessStep, WhyItem } from "@/types";

export const services: Service[] = [
  {
    id: "impression",
    icon: "Printer",
    title: "Impression",
    description:
      "Cartes de visite, flyers, affiches, catalogues et tous vos supports imprimés avec une qualité irréprochable.",
    items: [
      "Cartes de visite",
      "Flyers & prospectus",
      "Affiches",
      "Brochures & Catalogues",
      "Impression tous supports",
    ],
    images: [
      "/services/impression-1.jpg",
      "/services/impression-2.jpg",
      "/services/impression-3.jpg",
    ],
  },

  {
    id: "grand-format",
    icon: "Maximize2",
    title: "Signalétique & Grand Format",
    description:
      "Banderoles, enseignes, vitrines et publicités grand format pour une visibilité maximale.",
    items: [
      "Banderoles & bâches",
      "Roll-ups & kakémonos",
      "Backlight impression",
      "Panneaux publicitaires",
      "Signalétique intérieure & extérieure",
    ],
    images: [
      "/services/grand-format-1.jpg",
      "/services/grand-format-2.jpg",
      "/services/grand-format-3.jpg",
    ],
  },

  {
    id: "design",
    icon: "PenTool",
    title: "Design Graphique",
    description:
      "Logos, identité visuelle, réseaux sociaux et tous vos besoins en design professionnel.",
    items: [
      "Logo & identité",
      "Charte graphique",
      "Réseaux sociaux",
      "Packaging",
    ],
    images: [
      "/services/design-1.jpg",
      "/services/design-2.jpg",
      "/services/design-3.jpg",
    ],
  },

  {
    id: "enseignes",
    icon: "Megaphone",
    title: "Enseignes & Façades",
    description:
      "Valorisez votre commerce avec une façade et une enseigne professionnelle qui attirent l'attention.",
    items: [
      "Lettres lumineuses",
      "Traitement de façade",
      "Habillage de vitrines",
      "Enseignes personnalisées",
      "Aluco-Bond & habillage casquette",
    ],
    images: [
      "/services/enseigne-1.jpg",
      "/services/enseigne-2.jpg",
      "/services/enseigne-3.jpg",
    ],
  },

  {
    id: "affichage-digital",
    icon: "Presentation",
    title: "Affichage Digital",
    description:
      "Des solutions d'affichage modernes et dynamiques pour communiquer efficacement avec vos clients.",
    items: [
      "Écrans LED",
      "Afficheurs RGB",
      "LED P2",
      "LED P5",
      "LED P10",
    ],
    images: [
      "/services/led-1.jpg",
      "/services/led-2.jpg",
      "/services/led-3.jpg",
    ],
  },

  {
    id: "qr",
    icon: "QrCode",
    title: "Solutions QR",
    description:
      "Cartes de visite QR, menus QR et expériences digitales intelligentes reliées à vos supports physiques.",
    items: [
      "Cartes QR Business",
      "Menus QR restaurant",
      "Profils digitaux",
      "Landing pages",
    ],
    images: [
      "/services/qr-1.jpg",
      "/services/qr-2.jpg",
      "/services/qr-3.jpg",
    ],
  },

  {
    id: "digital",
    icon: "Globe",
    title: "Solutions Digitales",
    description:
      "Présence en ligne, menus digitaux, réseaux sociaux et outils business pour développer votre visibilité.",
    items: [
      "Sites vitrine",
      "Menus en ligne",
      "Social media",
      "Google Business",
    ],
    images: [
      "/services/digital-1.jpg",
      "/services/digital-2.jpg",
      "/services/digital-3.jpg",
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "p1", category: "Cartes de visite", title: "Identité Corporate Élite", gradient: "from-slate-800 to-slate-900", accent: "#C8102E" },
  { id: "p2", category: "Flyers", title: "Campagne Restaurant Al Farouk", gradient: "from-amber-700 to-orange-900", accent: "#F59E0B" },
  { id: "p3", category: "Affiches", title: "Événement Médical Annuel", gradient: "from-blue-800 to-indigo-900", accent: "#3B82F6" },
  { id: "p4", category: "Branding", title: "Marque Concept Store Mode", gradient: "from-purple-800 to-purple-900", accent: "#A855F7" },
  { id: "p5", category: "Menus", title: "Menu QR Café Lumière", gradient: "from-emerald-700 to-green-900", accent: "#10B981" },
  { id: "p6", category: "Enseignes", title: "Enseigne Pharmacie Centrale", gradient: "from-red-800 to-rose-900", accent: "#C8102E" },
  { id: "p7", category: "Digital", title: "Profil QR Business Premium", gradient: "from-gray-700 to-zinc-900", accent: "#6B7280" },
  { id: "p8", category: "Cartes de visite", title: "Cabinet Médical Dr. Benali", gradient: "from-cyan-700 to-teal-900", accent: "#0891B2" },
];

export const portfolioCategories = [
  "Tous",
  "Cartes de visite",
  "Flyers",
  "Affiches",
  "Branding",
  "Menus",
  "Enseignes",
  "Digital",
];

export const stats: StatItem[] = [
  { value: "500", suffix: "+", label: "Projets réalisés", icon: "CheckCircle" },
  { value: "100", suffix: "+", label: "Clients accompagnés", icon: "Users" },
  { value: "8", suffix: " ans", label: "D'expérience", icon: "Award" },
  { value: "48", suffix: "h", label: "Délai moyen", icon: "Clock" },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Vous nous expliquez votre besoin", description: "Partagez votre vision, vos objectifs et vos contraintes. Par message, appel ou formulaire." },
  { number: "02", title: "Nous créons votre design", description: "Notre équipe travaille sur une proposition visuelle adaptée à votre image et à votre cible." },
  { number: "03", title: "Vous validez", description: "Nous vous présentons le design. Vos retours sont intégrés jusqu'à votre satisfaction complète." },
  { number: "04", title: "Nous produisons votre projet", description: "Une fois validé, nous passons à l'impression ou à la mise en ligne avec les meilleurs standards." },
];

export const whyItems: WhyItem[] = [
  { icon: "Star", title: "Qualité professionnelle", description: "Des supports conçus et produits avec les meilleurs matériaux pour représenter votre marque à sa juste valeur." },
  { icon: "Sparkles", title: "Créativité au service de votre marque", description: "Des designs qui sortent du lot, pensés pour attirer l'attention et rester dans les mémoires." },
  { icon: "Headphones", title: "Accompagnement personnalisé", description: "Un interlocuteur dédié qui vous guide de la première idée jusqu'à la livraison finale." },
  { icon: "Layers", title: "Solutions complètes", description: "Du print au digital, tout ce dont vous avez besoin pour développer votre visibilité, en un seul endroit." },
];
