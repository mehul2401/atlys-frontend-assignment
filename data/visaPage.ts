export type StatChip = {
  label: string;
  value: string;
};

export type HeroData = {
  title: string;
  subtitle: string;
  country: string;
  flagEmoji: string;
  stats: StatChip[];
  ctaLabel: string;
};

export type SectionTab = {
  id: string;
  label: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string;
};

export type ApprovalStep = {
  id: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
};

export type CountryAccess = {
  id: string;
  name: string;
  imageUrl: string;
};

export type TextSegment = {
  text: string;
  color?: string;
};

export type CardContent = {
  title: TextSegment[];
  subtitle?: TextSegment[];
  imageUrl?: string;
  imageStyle?: { marginRight?: string };
};

export type ComparisonSlide = {
  id: string;
  others: CardContent;
  atlys: CardContent;
};

export const comparisonSlides: ComparisonSlide[] = [
  {
    id: "profile",
    others: {
      title: [{ text: "Give everyone the same long checklist." }],
    },
    atlys: {
      title: [{ text: "Built around your profile" }],
      subtitle: [
        { text: "We create a " },
        { text: "custom checklist", color: "rgb(255,255,255)" },
        { text: " based on your profile to get you " },
        { text: "approved.", color: "rgb(255,255,255)" },
      ],
      imageUrl: "https://media.atlys.com/b2c/clp/version-3/built-around-profile.avif?tr=orig",
    },
  },
  {
    id: "verify",
    others: {
      title: [{ text: "Collect your documents and forward as-is." }],
    },
    atlys: {
      title: [
        { text: "We verify everything. " },
        { text: "Not just forward It.", color: "rgb(119,119,119)" },
      ],
      subtitle: [
        { text: "We check every document. Because one weak document can undo everything." },
      ],
      imageUrl: "https://media.atlys.com/b2c/clp/version-3/verify-everything.avif?tr=orig",
    },
  },
  {
    id: "data",
    others: {
      title: [{ text: "Treat every case in\nisolation." }],
    },
    atlys: {
      title: [
        { text: "Backed by Data.\n" },
        { text: "Not Generic Advice.", color: "rgb(119,119,119)" },
      ],
      subtitle: [
        { text: "We use insights from past applications to predict risks & plug gaps." },
      ],
      imageUrl: "https://media.atlys.com/b2c/clp/version-3/real-experience.avif?tr=orig",
    },
  },
  {
    id: "risks",
    others: {
      title: [
        { text: "Discover issues only after " },
        { text: "rejection.", color: "rgb(159,0,0)" },
      ],
    },
    atlys: {
      title: [
        { text: "Catches risks\n" },
        { text: "before", color: "rgb(0,235,94)" },
        { text: " submission" },
      ],
      subtitle: [
        { text: "We spot red flags and fix them " },
        { text: "before", color: "rgb(255,255,255)" },
        { text: " submission." },
      ],
      imageUrl: "https://media.atlys.com/b2c/clp/version-3/catches-risk.avif?tr=orig",
      imageStyle: { marginRight: "-34px" },
    },
  },
];

export const heroData: HeroData = {
  title: "France Visitor Visa",
  subtitle: "Plan your trip with a visa experience focused on approvals.",
  country: "France",
  flagEmoji: "🇫🇷",
  stats: [
    { label: "Processing time", value: "10–15 days" },
    { label: "Validity", value: "Up to 90 days" },
    { label: "Entry type", value: "Single / Multiple" },
  ],
  ctaLabel: "Check eligibility",
};

export const sectionTabs: SectionTab[] = [
  { id: "overview", label: "Overview" },
  { id: "requirements", label: "Requirements" },
  { id: "fees", label: "Fees" },
  { id: "success-stories", label: "Success stories" },
  { id: "one-visa-access", label: "One visa access" },
];

export const supportFeatures: Feature[] = [
  {
    id: "expert-review",
    title: "Expert document review",
    description:
      "Every application is reviewed by visa specialists to minimise avoidable rejections.",
  },
  {
    id: "end-to-end",
    title: "End-to-end guidance",
    description:
      "From choosing the right visa type to the day of your appointment, we keep you on track.",
  },
  {
    id: "proactive-updates",
    title: "Proactive updates",
    description:
      "Get clear updates on what happens next so you always know where your case stands.",
  },
];

export const approvalSteps: ApprovalStep[] = [
  {
    id: "profile-check",
    title: "Profile check",
    description:
      "We understand your travel plan and match it with the most suitable visa path.",
  },
  {
    id: "document-optimisation",
    title: "Document optimisation",
    description:
      "We structure your documents to clearly tell your story to the visa officer.",
  },
  {
    id: "pre-submission-review",
    title: "Pre‑submission review",
    description:
      "Before you submit, we run through your application one more time for consistency.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "story-1",
    name: "Aditi, Bengaluru",
    location: "Approved for France tourist visa",
    quote:
      "The process felt transparent and predictable. I always knew what the next step was.",
  },
  {
    id: "story-2",
    name: "Rahul, Mumbai",
    location: "Approved for Schengen family trip",
    quote:
      "They helped me present my finances and itinerary in a way that made sense to the embassy.",
  },
  {
    id: "story-3",
    name: "Meera, Delhi",
    location: "First-time traveller",
    quote:
      "As a first-time traveller I had many doubts, but the guidance was clear at every step.",
  },
];

export const oneVisaCountries: CountryAccess[] = [
  {
    id: "france",
    name: "France",
    imageUrl: "/images/france-placeholder.svg",
  },
  {
    id: "italy",
    name: "Italy",
    imageUrl: "/images/italy-placeholder.svg",
  },
  {
    id: "spain",
    name: "Spain",
    imageUrl: "/images/spain-placeholder.svg",
  },
  {
    id: "switzerland",
    name: "Switzerland",
    imageUrl: "/images/switzerland-placeholder.svg",
  },
];

export const oneVisaAccessCopy = {
  flagImageUrl: "https://media.atlys.com/image/upload/country_flags/fr.svg",
  flagAlt: "France",
  title: "One visa to access 29 countries",
  subtitle:
    "Enter 29 countries on one schengen visa.\nSee countries closest to France that you can cover together!",
};

export const oneVisaAccessCountries: CountryAccess[] = [
  {
    id: "it",
    name: "Italy",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/IT/Florence_Italy.jpeg",
  },
  {
    id: "de",
    name: "Germany",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/DE/Munich.jpeg",
  },
  {
    id: "be",
    name: "Belgium",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/BE/Ghent.jpeg",
  },
  {
    id: "ee",
    name: "Estonia",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/EE/Tallinn_Estonia.jpeg",
  },
  {
    id: "si",
    name: "Slovenia",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/SI/Koper_Slovenia.jpeg",
  },
  {
    id: "hu",
    name: "Hungary",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/HU/Esztergom_Hungary.jpeg",
  },
  {
    id: "hr",
    name: "Croatia",
    imageUrl:
      "https://media.atlys.com/image/upload/w_800/schengen_glance/HR/Zadar.jpeg",
  },
];

