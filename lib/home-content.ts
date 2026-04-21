import { z } from "zod";

const statSchema = z.object({
  number: z.string(),
  label: z.string(),
});

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const awardSchema = z.object({
  title: z.string(),
  org: z.string(),
});

export const ABOUT_VALUE_ICONS = [
  "zap",
  "users",
  "globe",
  "award",
  "clock",
  "shield",
  "star",
  "check",
] as const;

const valueSchema = z.object({
  icon: z.enum(ABOUT_VALUE_ICONS),
  title: z.string(),
  description: z.string(),
});

const aboutStatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const aboutSectionSchema = z.object({
  sectionLabel: z.string(),
  headingPrefix: z.string(),
  headingHighlight: z.string(),
  headingSuffix: z.string(),
  paragraphs: z.array(z.string()),
  joinCta: ctaSchema,
  awardsHeading: z.string(),
  awards: z.array(awardSchema).length(3),
  approachHeading: z.string(),
  values: z.array(valueSchema).length(4),
  stats: z.array(aboutStatSchema).length(4),
});

export type AboutSection = z.infer<typeof aboutSectionSchema>;
export type AboutAward = z.infer<typeof awardSchema>;
export type AboutValue = z.infer<typeof valueSchema>;
export type AboutValueIcon = (typeof ABOUT_VALUE_ICONS)[number];

export const homeLocaleContentSchema = z.object({
  eyebrow: z.string(),
  titlePrefix: z.string(),
  titleHighlight: z.string(),
  paragraphs: z.array(z.string()),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
  stats: z.array(statSchema).length(4),
  about: aboutSectionSchema,
});

export type HomeLocaleContent = z.infer<typeof homeLocaleContentSchema>;
export type HomeStat = z.infer<typeof statSchema>;
export type HomeCta = z.infer<typeof ctaSchema>;

const defaultAboutEL: AboutSection = {
  sectionLabel: "Ποιοι Ειμαστε",
  headingPrefix: "Από το 2006, σταθερά δίπλα στην ",
  headingHighlight: "επιχείρησή σας",
  headingSuffix: ".",
  paragraphs: [
    "Η DGSOFT είναι μια δυναμικά εξελισσόμενη εταιρεία πληροφορικής, με στενή και επίσημη συνεργασία με τη SoftOne. Εξειδικευόμαστε στη διάθεση και υλοποίηση πρωτοποριακών μηχανογραφικών λύσεων λογισμικού (ERP – CRM), βοηθώντας εκατοντάδες εταιρείες να οργανώσουν και να αυτοματοποιήσουν την καθημερινή τους λειτουργία.",
    "Συνδυάζουμε τεχνογνωσία σε ERP, CRM και CTI για επιχειρήσεις και εμπόριο. Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες και τεχνικούς, ώστε το έργο σας να ολοκληρώνεται με συνέπεια και μετρήσιμα αποτελέσματα.",
  ],
  joinCta: { label: "Join Our Team", href: "/careers" },
  awardsHeading: "Διακρισεις",
  awards: [
    { title: "SoftOne Gold Partner", org: "2018-2024" },
    { title: "Best Cloud Implementations", org: "Partner Awards" },
    { title: "Customer Success 360", org: "DGSOFT Quality" },
  ],
  approachHeading: "Η Προσεγγιση Μας",
  values: [
    {
      icon: "zap",
      title: "15+ Χρόνια Εμπειρίας",
      description:
        "Δίπλα στις επιχειρήσεις ως εξιδεικευμένος συνεργάτης από το 2006.",
    },
    {
      icon: "users",
      title: "Επίσημος Συνεργάτης SoftOne",
      description: "Πιστοποιημένη τεχνογνωσία σε κάθε πτυχή λογισμικού.",
    },
    {
      icon: "globe",
      title: "Εθνική & Κυπριακή Εμβέλεια",
      description:
        "Υποστήριξη σε Αθήνα, Θεσσαλονίκη, Ιωάννινα, Βόλο, και Κύπρο.",
    },
    {
      icon: "award",
      title: "SLA-Based Υποστήριξη",
      description:
        "Η τεχνολογία έχει αξία μόνο όταν υποστηρίζεται και είμαστε δίπλα σας.",
    },
  ],
  stats: [
    { value: "2006", label: "Έτος Ίδρυσης" },
    { value: "3K+", label: "Άδειες" },
    { value: "5", label: "Κόμβοι (GR, CY)" },
    { value: "100%", label: "Εστίαση Πελάτη" },
  ],
};

const defaultAboutEN: AboutSection = {
  sectionLabel: "Who We Are",
  headingPrefix: "Since 2006, standing by your ",
  headingHighlight: "business",
  headingSuffix: ".",
  paragraphs: [
    "DGSOFT is a fast-growing IT company with a close, official partnership with SoftOne. We specialise in delivering and implementing pioneering business software solutions (ERP – CRM), helping hundreds of companies organise and automate their day-to-day operations.",
    "We combine deep expertise in ERP, CRM and CTI for enterprises and retail. Our team brings together experienced professionals and engineers so that every project is delivered consistently and with measurable results.",
  ],
  joinCta: { label: "Join Our Team", href: "/careers" },
  awardsHeading: "Awards",
  awards: [
    { title: "SoftOne Gold Partner", org: "2018-2024" },
    { title: "Best Cloud Implementations", org: "Partner Awards" },
    { title: "Customer Success 360", org: "DGSOFT Quality" },
  ],
  approachHeading: "Our Approach",
  values: [
    {
      icon: "zap",
      title: "15+ Years of Experience",
      description:
        "A specialist partner to businesses since 2006.",
    },
    {
      icon: "users",
      title: "Official SoftOne Partner",
      description: "Certified know-how across every facet of the software.",
    },
    {
      icon: "globe",
      title: "Nationwide & Cyprus Reach",
      description:
        "Support from Athens, Thessaloniki, Ioannina, Volos and Cyprus.",
    },
    {
      icon: "award",
      title: "SLA-Based Support",
      description:
        "Technology is only valuable when it's supported — and we're right there with you.",
    },
  ],
  stats: [
    { value: "2006", label: "Founded" },
    { value: "3K+", label: "Licences" },
    { value: "5", label: "Hubs (GR, CY)" },
    { value: "100%", label: "Customer Focus" },
  ],
};

export const defaultHomeContentEL: HomeLocaleContent = {
  eyebrow: "Από το ERP στο ολοκληρωμένο ψηφιακό σου οικοσύστημα",
  titlePrefix: "Business ",
  titleHighlight: "Forward",
  paragraphs: [
    "Η DGSOFT, επίσημος και πιστοποιημένος συνεργάτης της ENTERSOFTONE, είναι ένας δυναμικά αναπτυσσόμενος όμιλος τεχνολογίας με παρουσία στην ελληνική αγορά από το 2006.",
    "Προσφέρουμε προηγμένες λύσεις Business Software, Web & Mobile εφαρμογών, AI & IoT, καθώς και συμβουλευτική ψηφιακού μετασχηματισμού, ειδικά σχεδιασμένες για τις ανάγκες μικρομεσαίων και μεγάλων επιχειρήσεων σε Ελλάδα και Κύπρο.",
    "Με έμφαση στην ποιότητα, την ταχύτητα υλοποίησης και την προσαρμοστικότητα, βοηθάμε τις εταιρείες να αυτοματοποιήσουν καθημερινές διαδικασίες, να μειώσουν κόστος και να επιταχύνουν την ανάπτυξή τους.",
    "Η έμπειρη ομάδα μας, με βαθιά γνώση της αγοράς πληροφορικής, αναλαμβάνει από τον σχεδιασμό μέχρι και την υποστήριξη κάθε έργου, ώστε οι συνεργάτες μας να έχουν έναν αξιόπιστο τεχνολογικό σύμμαχο στην πορεία τους.",
  ],
  primaryCta: { label: "Κλείσε Παρουσίαση", href: "#contact" },
  secondaryCta: {
    label: "Ζητήστε αξιολόγηση ψηφιακής ωριμότητας",
    href: "#contact",
  },
  stats: [
    { number: "150+", label: "Projects Delivered" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Global Clients" },
    { number: "25+", label: "Team Members" },
  ],
  about: defaultAboutEL,
};

export const defaultHomeContentEN: HomeLocaleContent = {
  eyebrow: "From ERP to a complete digital ecosystem",
  titlePrefix: "Business ",
  titleHighlight: "Forward",
  paragraphs: [
    "DGSOFT, an official and certified ENTERSOFTONE partner, is a fast-growing technology group with a presence in the Greek market since 2006.",
    "We deliver advanced Business Software, Web & Mobile applications, AI & IoT, and digital transformation consulting — tailored for the needs of SMEs and large enterprises across Greece and Cyprus.",
    "With a focus on quality, speed of implementation and adaptability, we help companies automate day-to-day processes, cut costs and accelerate growth.",
    "Our experienced team, with deep knowledge of the IT market, handles every project from design to support — making sure our partners have a reliable technology ally on their journey.",
  ],
  primaryCta: { label: "Book a Presentation", href: "#contact" },
  secondaryCta: {
    label: "Request a digital maturity assessment",
    href: "#contact",
  },
  stats: [
    { number: "150+", label: "Projects Delivered" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Global Clients" },
    { number: "25+", label: "Team Members" },
  ],
  about: defaultAboutEN,
};

function parseLocaleContent(raw: unknown): HomeLocaleContent | null {
  const r = homeLocaleContentSchema.safeParse(raw);
  return r.success ? r.data : null;
}

export function mergeHomeContent(
  stored: unknown,
  defaults: HomeLocaleContent
): HomeLocaleContent {
  const parsed = parseLocaleContent(stored);
  if (!parsed) return defaults;
  return {
    ...defaults,
    ...parsed,
    paragraphs:
      parsed.paragraphs?.length > 0 ? parsed.paragraphs : defaults.paragraphs,
    stats: parsed.stats?.length === 4 ? parsed.stats : defaults.stats,
    about: {
      ...defaults.about,
      ...parsed.about,
      paragraphs:
        parsed.about?.paragraphs?.length > 0
          ? parsed.about.paragraphs
          : defaults.about.paragraphs,
      awards:
        parsed.about?.awards?.length === 3
          ? parsed.about.awards
          : defaults.about.awards,
      values:
        parsed.about?.values?.length === 4
          ? parsed.about.values
          : defaults.about.values,
      stats:
        parsed.about?.stats?.length === 4
          ? parsed.about.stats
          : defaults.about.stats,
    },
  };
}
