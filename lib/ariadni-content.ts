import { z } from "zod";

const statSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const ariadniLocaleContentSchema = z.object({
  heroBadge: z.string(),
  title: z.string(),
  stats: z.array(statSchema).length(2),
  tagline: z.string(),
  heroSubtext: z.string().optional().default(""),
  intro: z.string(),
  apiLeadIn: z.string(),
  integrationLines: z.array(z.string()),
  valueParagraph: z.string(),
  featureChecks: z.array(z.string()),
  strategicHeading: z.string(),
  partnerIntro: z.string(),
  partnerBullets: z.array(z.string()),
  partnerClosing: z.string(),
  advantagesHeading: z.string(),
  advantages: z.array(z.string()),
  closingLine: z.string(),
});

export type AriadniLocaleContent = z.infer<typeof ariadniLocaleContentSchema>;

export const DEFAULT_LOGO_URL =
  "https://dgsmart.b-cdn.net/newsletter/newsletter-1775618944490-agkc82.webp";

/** Programme PDF (opens in new tab from hero banner under budget cards). */
export const DEFAULT_ESPA_PDF_URL =
  "https://dgsmart.b-cdn.net/espaariadnepdffile.pdf";

/** Banner image under the two budget cards (links to PDF in a new tab). */
export const DEFAULT_ESPA_PDF_BANNER_URL =
  "https://dgsmart.b-cdn.net/EspaAriadne.jpg";

export const defaultAriadniContentEL: AriadniLocaleContent = {
  heroBadge: "ARIADNE SERVICE HUB",
  title: "Αριάδνη",
  stats: [
    { label: "ΠΡΟΥΠΟΛΟΓΙΣΜΟΣ ΕΡΓΟΥ", value: "493.890,00 €" },
    { label: "ΧΡΗΜΑΤΟΔΟΤΗΣΗ Ε.Ε.", value: "233.440,50 €" },
  ],
  tagline:
    "Ένας κόμβος διασύνδεσης υπηρεσιών για τις επιχειρήσεις του αύριο.",
  heroSubtext:
    "Το έργο υλοποιήθηκε στο πλαίσιο του προγράμματος «Ανάπτυξη Ψηφιακών Προϊόντων και Υπηρεσιών» του Ταμείου Ανάκαμψης και Ανθεκτικότητας «Ελλάδα 2.0» με τη χρηματοδότηση της Ευρωπαϊκής Ένωσης – NextGenerationEU.",
  intro: `Στη σημερινή ψηφιακή εποχή, η ταχύτητα με την οποία εξελίσσονται οι επιχειρηματικές ανάγκες απαιτεί ευελιξία, απλότητα και έξυπνη αξιοποίηση της τεχνολογίας. Το Ariadne Service Hub της DGSOFT έχει σχεδιαστεί ακριβώς για αυτόν τον σκοπό: να λειτουργήσει ως ένας ισχυρός κόμβος που ενώνει κρίσιμες επιχειρηματικές υπηρεσίες σε ένα ενιαίο περιβάλλον, προσφέροντας εύκολη πρόσβαση σε δεδομένα και εφαρμογές, χωρίς περίπλοκες διαδικασίες και υψηλά κόστη.`,
  apiLeadIn: "Μέσα από ένα κοινό API, οι επιχειρήσεις αποκτούν άμεση σύνδεση με:",
  integrationLines: [
    "ERP: Soft1 ERP, Epsilon Net ERP.",
    "E-commerce: Magento, WooCommerce, OpenCart.",
    "Τηλεφωνικά κέντρα & μηνύματα (SMS, Viber κ.ά.).",
    "Ψηφιακές υπογραφές με DocuSign.",
    "Πληρωμές μέσω DIAS Payments System & IRIS Payments.",
    "Τεχνολογίες ΑΙ μετάφρασης όπως DeepL Translator & Lecto AI.",
  ],
  valueParagraph: `Το Ariadne Service Hub απλοποιεί τη διασύνδεση συστημάτων, μειώνει κόστη και επιταχύνει την καινοτομία. Είναι ένα εργαλείο στρατηγικής αξίας που επιτρέπει στις επιχειρήσεις να εστιάσουν στην ανάπτυξη, αξιοποιώντας την τεχνολογία με τον πιο αποδοτικό τρόπο.`,
  featureChecks: [
    "Ενιαία υλοποίηση",
    "Ευελιξία – πληρωμή μόνο για τη χρήση",
    "Ιδανικό για μικρομεσαίες επιχειρήσεις",
    "Εκτενής τεκμηρίωση και έτοιμος κώδικας στο GitHub",
    "Plugins για e-shops & CMS",
    "SDK για νέες διασυνδέσεις",
  ],
  strategicHeading: "Στρατηγικός σύμμαχος στην ψηφιακή εξέλιξη.",
  partnerIntro: `Η DGSOFT είναι μια σύγχρονη εταιρεία τεχνολογίας που παρέχει ολοκληρωμένες επιχειρηματικές λύσεις λογισμικού, βοηθώντας οργανισμούς να αυτοματοποιήσουν διαδικασίες και να αυξήσουν την αποδοτικότητά τους.

Με έμπειρη ομάδα και έμφαση στην ποιότητα, προσφέρει:`,
  partnerBullets: [
    "Υλοποίηση & υποστήριξη Soft1 Cloud ERP για οικονομική διαχείριση, αποθήκη, προμήθειες, παραγωγή.",
    "Soft1 Cloud CRM για οργάνωση πελατειακών σχέσεων.",
    "Soft1 SFA για ενίσχυση πωλήσεων.",
    "Επικοινωνιακές & αυτοματοποιημένες λύσεις: CTI Contact Center Manager, ηλεκτρονικές πληρωμές, COURIER Connector, DocuSign Connector, καταγραφή εξόδων.",
  ],
  partnerClosing: `Η DGSOFT λειτουργεί με διαφάνεια, συνέπεια και σεβασμό στις ανάγκες κάθε πελάτη. Προσφέρει συνεχή τεχνική υποστήριξη και εκπαίδευση, επενδύοντας στην καινοτομία και στη δημιουργία σχέσεων εμπιστοσύνης.`,
  advantagesHeading: "Πλεονεκτήματα για τις επιχειρήσεις:",
  advantages: [
    "Ολοκληρωμένες cloud λύσεις",
    "Προσαρμοσμένες υλοποιήσεις",
    "Αξιοποίηση επιδοτούμενων προγραμμάτων",
    "Εξειδικευμένη τεχνική υποστήριξη",
  ],
  closingLine:
    "Η DGSOFT δεν είναι απλώς προμηθευτής λογισμικού — είναι ο στρατηγικός σας συνεργάτης για βιώσιμη ανάπτυξη.",
};

export const defaultAriadniContentEN: AriadniLocaleContent = {
  heroBadge: "ARIADNE SERVICE HUB",
  title: "Ariadne",
  stats: [
    { label: "PROJECT BUDGET", value: "€493,890.00" },
    { label: "EU FUNDING", value: "€233,440.50" },
  ],
  tagline: "A service hub connecting the businesses of tomorrow.",
  heroSubtext:
    "The project was implemented under the programme «Development of Digital Products and Services» of the Recovery and Resilience Fund «Greece 2.0», funded by the European Union – NextGenerationEU.",
  intro: `In today’s digital era, the pace of evolving business needs demands flexibility, simplicity and smart use of technology. DGSOFT’s Ariadne Service Hub is built for exactly that: to operate as a powerful hub that unites critical business services in one environment—giving easy access to data and applications without complex processes or high cost.`,
  apiLeadIn:
    "Through a common API, businesses gain direct connectivity with:",
  integrationLines: [
    "ERP: Soft1 ERP, Epsilon Net ERP.",
    "E-commerce: Magento, WooCommerce, OpenCart.",
    "Call centres & messaging (SMS, Viber, etc.).",
    "Digital signatures with DocuSign.",
    "Payments via DIAS Payments System & IRIS Payments.",
    "AI translation technologies such as DeepL Translator & Lecto AI.",
  ],
  valueParagraph: `Ariadne Service Hub simplifies system integration, reduces cost and accelerates innovation. It is a strategic tool that lets organisations focus on growth while using technology as efficiently as possible.`,
  featureChecks: [
    "Single implementation",
    "Flexibility — pay only for what you use",
    "Ideal for SMEs",
    "Extensive documentation and sample code on GitHub",
    "Plugins for e-shops & CMS",
    "SDK for new integrations",
  ],
  strategicHeading: "Strategic partner in digital evolution.",
  partnerIntro: `DGSOFT is a modern technology company delivering complete business software solutions—helping organisations automate processes and improve efficiency.

With an experienced team and a strong focus on quality, it offers:`,
  partnerBullets: [
    "Implementation & support of Soft1 Cloud ERP for finance, warehouse, procurement and production.",
    "Soft1 Cloud CRM for customer relationship management.",
    "Soft1 SFA to strengthen sales.",
    "Communication & automation solutions: CTI Contact Center Manager, electronic payments, COURIER Connector, DocuSign Connector, expense recording.",
  ],
  partnerClosing: `DGSOFT operates with transparency, consistency and respect for every client’s needs. It provides ongoing technical support and training, investing in innovation and trusted relationships.`,
  advantagesHeading: "Benefits for businesses:",
  advantages: [
    "End-to-end cloud solutions",
    "Tailored implementations",
    "Leverage of EU-funded programmes",
    "Specialised technical support",
  ],
  closingLine:
    "DGSOFT is not just a software vendor — it is your strategic partner for sustainable growth.",
};

export function parseLocaleContent(raw: unknown): AriadniLocaleContent | null {
  const r = ariadniLocaleContentSchema.safeParse(raw);
  return r.success ? r.data : null;
}

export function mergeAriadniContent(
  stored: unknown,
  defaults: AriadniLocaleContent
): AriadniLocaleContent {
  const parsed = parseLocaleContent(stored);
  if (!parsed) return defaults;
  return {
    ...defaults,
    ...parsed,
    stats:
      parsed.stats?.length === 2
        ? parsed.stats
        : defaults.stats,
    integrationLines:
      parsed.integrationLines?.length > 0
        ? parsed.integrationLines
        : defaults.integrationLines,
    featureChecks:
      parsed.featureChecks?.length > 0
        ? parsed.featureChecks
        : defaults.featureChecks,
    partnerBullets:
      parsed.partnerBullets?.length > 0
        ? parsed.partnerBullets
        : defaults.partnerBullets,
    advantages:
      parsed.advantages?.length > 0
        ? parsed.advantages
        : defaults.advantages,
  };
}
