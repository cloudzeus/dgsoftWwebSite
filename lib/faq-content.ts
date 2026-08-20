import type { FaqEntry } from "@/lib/jsonld";

/**
 * FAQ sets, keyed by the page that renders them.
 *
 * These exist for Answer Engine Optimisation: featured snippets, "People also
 * ask" and voice answers all need a question-shaped heading with a short answer
 * directly beneath it. The audit found zero of either across the whole site.
 *
 * Writing rules, so the sets keep earning snippets:
 * - Phrase the question the way a customer would type it, not in house jargon.
 * - Answer in 40-60 words. Longer answers stop being extractable.
 * - Put the direct answer in the first sentence; add nuance after it.
 * - Keep facts checkable. Never state a price or deadline that shifts.
 */

export type FaqSet = { el: FaqEntry[]; en: FaqEntry[] };

const espa: FaqSet = {
  el: [
    {
      question: "Ποιες δαπάνες είναι επιλέξιμες σε ένα πρόγραμμα ΕΣΠΑ;",
      answer:
        "Τυπικά καλύπτονται λογισμικό και άδειες χρήσης, εξοπλισμός πληροφορικής, υπηρεσίες cloud, ιστοσελίδες και e-shop, ψηφιακή ασφάλεια, καθώς και συμβουλευτική υποστήριξη. Κάθε πρόσκληση ορίζει τη δική της λίστα με ανώτατα όρια ανά κατηγορία δαπάνης, γι' αυτό ο έλεγχος γίνεται πάντα πάνω στο συγκεκριμένο κείμενο της πρόσκλησης.",
    },
    {
      question: "Πόσο είναι η επιδότηση και πότε καταβάλλεται;",
      answer:
        "Το ποσοστό επιδότησης κυμαίνεται συνήθως από 40% έως 80% του επιλέξιμου προϋπολογισμού, ανάλογα με το πρόγραμμα, το μέγεθος της επιχείρησης και την περιφέρεια. Η καταβολή γίνεται μετά την υλοποίηση και την πιστοποίηση των δαπανών, ενώ αρκετά προγράμματα προβλέπουν προκαταβολή με εγγυητική επιστολή.",
    },
    {
      question: "Πόσο χρόνο παίρνει η διαδικασία από την υποβολή ως την πληρωμή;",
      answer:
        "Η προετοιμασία του φακέλου χρειάζεται συνήθως δύο έως τέσσερις εβδομάδες. Η αξιολόγηση από τον φορέα διαρκεί μερικούς μήνες και εξαρτάται από την πρόσκληση. Μετά την έγκριση, η υλοποίηση έχει καθορισμένη προθεσμία και η εκταμίευση ακολουθεί την πιστοποίηση των δαπανών.",
    },
    {
      question: "Μπορεί μια νέα επιχείρηση να ενταχθεί σε πρόγραμμα ΕΣΠΑ;",
      answer:
        "Ναι, αλλά εξαρτάται από την πρόσκληση. Αρκετά προγράμματα ζητούν τουλάχιστον μία κλεισμένη διαχειριστική χρήση, ενώ άλλα απευθύνονται ρητά σε υπό σύσταση ή νεοσύστατες επιχειρήσεις. Ο έλεγχος επιλεξιμότητας γίνεται με βάση τον ΚΑΔ, τα οικονομικά στοιχεία και το προσωπικό.",
    },
    {
      question: "Αναλαμβάνετε και την υλοποίηση ή μόνο τον φάκελο;",
      answer:
        "Αναλαμβάνουμε και τα δύο. Ελέγχουμε την επιλεξιμότητα, ετοιμάζουμε και υποβάλλουμε τον φάκελο, και στη συνέχεια υλοποιούμε το ίδιο το έργο — ERP, λογισμικό, υποδομές — ως ανάδοχοι. Έτσι όσα δηλώθηκαν στην πρόταση παραδίδονται από την ίδια ομάδα που τα σχεδίασε.",
    },
  ],
  en: [
    {
      question: "Which costs are eligible under an ΕΣΠΑ programme?",
      answer:
        "Typically software and licences, IT equipment, cloud services, websites and e-shops, digital security, and consulting support. Each call defines its own list with ceilings per cost category, so eligibility is always checked against the specific call text rather than a general rule.",
    },
    {
      question: "How large is the grant and when is it paid?",
      answer:
        "Grant rates usually run from 40% to 80% of the eligible budget, depending on the programme, company size and region. Payment follows implementation and certification of costs, though many programmes allow an advance against a letter of guarantee.",
    },
    {
      question: "How long does it take from submission to payment?",
      answer:
        "Preparing the file usually takes two to four weeks. Evaluation by the managing authority runs for some months depending on the call. After approval, implementation has a fixed deadline and disbursement follows certification of the costs.",
    },
    {
      question: "Can a new business join an ΕΣΠΑ programme?",
      answer:
        "Yes, though it depends on the call. Many programmes require at least one closed financial year, while others target newly founded or not-yet-founded businesses explicitly. Eligibility is assessed on activity code, financials and headcount.",
    },
    {
      question: "Do you handle implementation or only the application?",
      answer:
        "Both. We check eligibility, prepare and submit the file, then deliver the project itself — ERP, software, infrastructure — as the contractor. What was promised in the proposal is delivered by the same team that scoped it.",
    },
  ],
};

const services: FaqSet = {
  el: [
    {
      question: "Πόσο διαρκεί η υλοποίηση ενός ERP;",
      answer:
        "Μια τυπική εγκατάσταση Soft1 για μικρομεσαία επιχείρηση ολοκληρώνεται σε έξι έως δώδεκα εβδομάδες. Ο χρόνος καθορίζεται κυρίως από τη μεταφορά δεδομένων, τις διασυνδέσεις με τρίτα συστήματα και τον αριθμό των χρηστών που εκπαιδεύονται, όχι από την ίδια την εγκατάσταση.",
    },
    {
      question: "Μπορεί το ERP να συνδεθεί με το e-shop μου;",
      answer:
        "Ναι. Συνδέουμε το Soft1 με WooCommerce, Shopify και custom καταστήματα, ώστε αποθέματα, τιμές, παραγγελίες και παραστατικά να συγχρονίζονται αυτόματα. Η διασύνδεση γίνεται μέσω των επίσημων web services του Soft1, χωρίς παρεμβάσεις που σπάνε στις αναβαθμίσεις.",
    },
    {
      question: "Τι γίνεται με τα δεδομένα από το παλιό μου πρόγραμμα;",
      answer:
        "Μεταφέρονται. Αναλαμβάνουμε τη μετάπτωση πελατών, προμηθευτών, ειδών, υπολοίπων και ιστορικού κινήσεων από το υπάρχον σύστημα. Πριν τη μετάβαση γίνεται δοκιμαστική μετάπτωση και συμφωνία υπολοίπων, ώστε να εντοπιστούν αποκλίσεις όσο το παλιό σύστημα λειτουργεί ακόμη.",
    },
    {
      question: "Παρέχετε υποστήριξη μετά την παράδοση;",
      answer:
        "Ναι. Προσφέρουμε συμβόλαια υποστήριξης με χρόνους απόκρισης, απομακρυσμένη και επιτόπια βοήθεια, αναβαθμίσεις εκδόσεων και παραμετροποιήσεις όταν αλλάζουν οι ανάγκες σας. Οι αιτήματα καταγράφονται σε σύστημα ticketing, ώστε να υπάρχει ιστορικό και μετρήσιμος χρόνος επίλυσης.",
    },
    {
      question: "Φτιάχνετε λογισμικό κατά παραγγελία ή μόνο έτοιμα προϊόντα;",
      answer:
        "Και τα δύο. Όταν ένα έτοιμο προϊόν καλύπτει την ανάγκη, το υλοποιούμε και το παραμετροποιούμε. Όταν δεν καλύπτει, αναπτύσσουμε custom εφαρμογές — web πλατφόρμες, εργαλεία εσωτερικής χρήσης, διασυνδέσεις — που δουλεύουν δίπλα στο ERP αντί να το αντικαθιστούν.",
    },
  ],
  en: [
    {
      question: "How long does an ERP implementation take?",
      answer:
        "A typical Soft1 rollout for a small or mid-sized business completes in six to twelve weeks. The timeline is driven mostly by data migration, integrations with third-party systems and the number of users to train — not by the installation itself.",
    },
    {
      question: "Can the ERP connect to my e-shop?",
      answer:
        "Yes. We connect Soft1 to WooCommerce, Shopify and custom storefronts so stock, prices, orders and invoices stay in sync automatically. Integration uses the official Soft1 web services, avoiding customisations that break on upgrades.",
    },
    {
      question: "What happens to the data in my current system?",
      answer:
        "It moves with you. We migrate customers, suppliers, items, balances and transaction history from the existing system. A trial migration and balance reconciliation run before go-live, so discrepancies surface while the old system is still available.",
    },
    {
      question: "Do you provide support after go-live?",
      answer:
        "Yes. We offer support contracts with defined response times, remote and on-site assistance, version upgrades and reconfiguration as your needs change. Requests are tracked in a ticketing system, so there is history and measurable resolution time.",
    },
    {
      question: "Do you build custom software or only off-the-shelf products?",
      answer:
        "Both. Where a standard product fits, we implement and configure it. Where it does not, we build custom applications — web platforms, internal tools, integrations — that run alongside the ERP rather than replacing it.",
    },
  ],
};

const espaImplementation: FaqSet = {
  el: [
    {
      question: "Γιατί να αναθέσω τον φάκελο ΕΣΠΑ και την υλοποίηση στην ίδια εταιρεία;",
      answer:
        "Γιατί ό,τι δηλώθηκε στην πρόταση πρέπει να παραδοθεί όπως ακριβώς περιγράφηκε. Όταν ο σύμβουλος και ο ανάδοχος είναι διαφορετικοί, οι αποκλίσεις εμφανίζονται στην πιστοποίηση, όταν πλέον η διόρθωση κοστίζει. Με ενιαία ομάδα, ο φάκελος γράφεται από όσους θα τον υλοποιήσουν.",
    },
    {
      question: "Τι γίνεται αν η πρότασή μου απορριφθεί;",
      answer:
        "Εξετάζουμε το σκεπτικό της απόρριψης και, όπου υπάρχει βάση, υποβάλλουμε ένσταση εντός της προθεσμίας. Παράλληλα ελέγχουμε αν η επένδυση ταιριάζει σε άλλη ενεργή ή επικείμενη πρόσκληση, ώστε ο φάκελος να αξιοποιηθεί αντί να χαθεί.",
    },
    {
      question: "Ποιος αναλαμβάνει την πιστοποίηση των δαπανών;",
      answer:
        "Εμείς. Συγκεντρώνουμε τιμολόγια, εξοφλήσεις, συμβάσεις και αποδεικτικά παράδοσης, τα αντιστοιχίζουμε στις εγκεκριμένες κατηγορίες δαπάνης και υποβάλλουμε τον φάκελο πιστοποίησης. Εσείς υπογράφετε — δεν χρειάζεται να χτίσετε τον φάκελο μόνοι σας.",
    },
    {
      question: "Χρειάζεται να αλλάξω το ERP μου για να ενταχθώ;",
      answer:
        "Όχι απαραίτητα. Πολλά προγράμματα χρηματοδοτούν αναβάθμιση ή επέκταση του υπάρχοντος συστήματος, όχι αντικατάσταση. Αν το σημερινό σας σύστημα καλύπτει τις ανάγκες, το ενισχύουμε με τις επιλέξιμες δαπάνες αντί να προτείνουμε μετάβαση που δεν χρειάζεστε.",
    },
    {
      question: "Πόσο κοστίζει η υπηρεσία σας για τον φάκελο;",
      answer:
        "Η αμοιβή συμφωνείται πριν την ανάληψη και εξαρτάται από το πρόγραμμα και το εύρος του έργου. Σε αρκετές προσκλήσεις η συμβουλευτική υποστήριξη είναι η ίδια επιλέξιμη δαπάνη, οπότε επιδοτείται μαζί με την υπόλοιπη επένδυση.",
    },
  ],
  en: [],
};

const locations: FaqSet = {
  el: [
    {
      question: "Σε ποιες περιοχές της Ελλάδας έχετε παρουσία;",
      answer:
        "Διατηρούμε γραφεία σε Περιστέρι Αττικής, Αθήνα, Βόλο, Ρέθυμνο Κρήτης και Ιωάννινα, καθώς και στη Λευκωσία Κύπρου. Η υποστήριξη παρέχεται πανελλαδικά, με επιτόπια εξυπηρέτηση από το πλησιέστερο γραφείο.",
    },
    {
      question: "Εξυπηρετείτε επιχειρήσεις εκτός των πόλεων που έχετε γραφείο;",
      answer:
        "Ναι. Το μεγαλύτερο μέρος της υποστήριξης γίνεται απομακρυσμένα, ανεξάρτητα από την έδρα σας. Για εγκαταστάσεις, εκπαίδευση και έργα που απαιτούν φυσική παρουσία, μετακινούμαστε από το πλησιέστερο γραφείο σε όλη την Ελλάδα και την Κύπρο.",
    },
    {
      question: "Πώς κλείνω ραντεβού με το γραφείο της περιοχής μου;",
      answer:
        "Καλέστε στο 210 5711581 ή στείλτε μήνυμα στη φόρμα επικοινωνίας δηλώνοντας την περιοχή σας. Σας συνδέουμε με το γραφείο που εξυπηρετεί την περιοχή και ορίζουμε συνάντηση δια ζώσης ή μέσω Microsoft Teams.",
    },
  ],
  en: [],
};

const soft1: FaqSet = {
  el: [
    {
      question: "Τι είναι το Soft1 Cloud ERP;",
      answer:
        "Είναι το σύστημα διαχείρισης επιχειρησιακών πόρων της ENTERSOFTONE, που λειτουργεί στο cloud. Ενοποιεί εμπορική διαχείριση, αποθήκη, λογιστική, CRM και παραστατικά σε ένα σύστημα, με πρόσβαση από browser χωρίς εγκατάσταση σε κάθε υπολογιστή.",
    },
    {
      question: "Ποια είναι η διαφορά ανάμεσα σε Soft1 Cloud και τοπική εγκατάσταση;",
      answer:
        "Στο cloud δεν χρειάζεστε server, αντίγραφα ασφαλείας ή αναβαθμίσεις — τα αναλαμβάνει η υποδομή. Πληρώνετε συνδρομή αντί για άδεια και έχετε πρόσβαση από παντού. Η τοπική εγκατάσταση παραμένει επιλογή όταν υπάρχουν ειδικές απαιτήσεις δικτύου ή δεδομένων.",
    },
    {
      question: "Είστε πιστοποιημένος συνεργάτης της SoftOne;",
      answer:
        "Ναι. Η DGSOFT είναι επίσημος και πιστοποιημένος συνεργάτης της ENTERSOFTONE. Αυτό σημαίνει πρόσβαση στις επίσημες εκδόσεις και στα web services, εκπαιδευμένους συμβούλους και υποστήριξη που ακολουθεί τις επίσημες διαδικασίες του κατασκευαστή.",
    },
    {
      question: "Καλύπτει το Soft1 την ηλεκτρονική τιμολόγηση και το myDATA;",
      answer:
        "Ναι. Τα παραστατικά διαβιβάζονται στο myDATA και η ηλεκτρονική τιμολόγηση υποστηρίζεται μέσω ENTERSOFTONE IMPACT. Η παραμετροποίηση γίνεται κατά την εγκατάσταση, ώστε οι σειρές και οι χαρακτηρισμοί να αντιστοιχούν στις υποχρεώσεις της επιχείρησής σας.",
    },
  ],
  en: [],
};

export const FAQ_SETS = { espa, services, espaImplementation, locations, soft1 } as const;
export type FaqKey = keyof typeof FAQ_SETS;

/** Entries for a set in the requested language, falling back to Greek. */
export function faqEntries(key: FaqKey, locale: "el" | "en"): FaqEntry[] {
  const set = FAQ_SETS[key];
  return locale === "en" && set.en.length ? set.en : set.el;
}
