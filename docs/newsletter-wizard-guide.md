# Οδηγός Χρήσης — Newsletter Wizard

> **Σημείωση:** Αυτό είναι το **αρχικό template** του οδηγού. Τα screenshots παράγονται αυτόματα τρέχοντας:
>
> ```bash
> npm run dev          # σε ένα terminal
> npm run docs:wizard  # σε άλλο terminal — γεμίζει το public/docs/wizard-screenshots/
> ```
>
> Το script ξαναγράφει αυτό το αρχείο με τα τελευταία screenshots μαζί με τα captions.

---

## Σύνοψη

Ο νέος wizard έχει **6 βήματα** με τη λογική «audience-first»:

| # | Βήμα | Σκοπός |
|---|------|--------|
| 1 | **Παραλήπτες** | Επιλογή πηγής λίστας πρώτα (καθορίζει tone & φίλτρα). |
| 2 | **Περιεχόμενο** | Σχεδιασμός του κυρίου σώματος. |
| 3 | **Πρότυπο Βάσης** | Branding wrapper (header/footer). |
| 4 | **Στοιχεία** | Όνομα, θέμα, preheader, sender. |
| 5 | **Έλεγχος** | Preview, quality score, test send. |
| 6 | **Αποστολή** | Τελική επιβεβαίωση & αποστολή. |

**Persistent header** σε όλα τα βήματα: live recipient chip · Preview · Test send.
**Step-jumping**: κλικ σε ολοκληρωμένο βήμα για επιστροφή.

---

## Βήμα 1 — Παραλήπτες (Audience)

Διαλέξτε **την κύρια πηγή παραληπτών**. Τρεις πρωτεύουσες πηγές:

- 🇪🇺 **Ευρωπαϊκό Πρόγραμμα** — στόχευση δικαιούχων ΕΣΠΑ. Φιλτράρει αυτόματα τους ΚΑΔ του προγράμματος.
- 🎯 **Segmentation Πελατών** — φίλτρα από SoftOne: περιφέρεια, νομική μορφή, ΚΑΔ, TRDPGROUP, TRDBUSINESS.
- 📧 **Newsletter Subscribers** — εγγεγραμμένοι από τη φόρμα του site (με consent).

Επιπλέον secondary πηγές: **Excel/CSV**, **Χειροκίνητη επιλογή πελατών**, **Συνδυασμός πηγών**.

Ο **recipient chip** πάνω δεξιά ενημερώνεται live (500ms debounce) καθώς αλλάζετε φίλτρα — δεν χρειάζεται να πατήσετε κουμπί.

### Subscriber picker
Όταν επιλέξετε «Newsletter Subscribers», μπορείτε:
- Να συμπεριλάβετε **όλους** τους ενεργούς (εξαιρούνται αυτόματα όσοι έχουν απεγγραφεί).
- Ή να **διαλέξετε συγκεκριμένους** με αναζήτηση σε email/όνομα.

### Combo boxes φιλτραρίσματος
Όλα τα combo boxes διαθέτουν:
- **Αναζήτηση** με Ελληνικά (αγνοεί τόνους & accents).
- **Chips** κάτω από το πεδίο που δείχνουν τι έχει επιλεγεί (μέχρι 4 + "X more").
- **«Επιλογή όλων ορατών»** για bulk select.
- **«Καθαρισμός»** για instant clear.
- **Virtualization** για λίστες >100 επιλογών.

---

## Βήμα 2 — Περιεχόμενο (Content)

**Split view**: αριστερά διαλέγετε σημείο εκκίνησης, δεξιά βλέπετε **live preview**.

Επιλογές εκκίνησης:
- **Σχεδιάστε νέο** — ανοίγει τον **Visual Designer σε full-screen modal** για άνετο block-based σχεδιασμό.
- **Χωρίς περιεχόμενο** — αν θέλετε μόνο το base template (π.χ. ενημέρωση holiday).
- **Υπάρχον template** — επιλογή από αποθηκευμένα templates.

Όταν αποθηκεύσετε από τον designer, το preview δεξιά ενημερώνεται αυτόματα.

---

## Βήμα 3 — Πρότυπο Βάσης

Το πρότυπο βάσης είναι το **branding wrapper** (header/footer/logo/social) γύρω από το περιεχόμενό σας.

Κάθε εκστρατεία μπορεί να **παραμετροποιήσει πεδία** (logo URL, social links, διεύθυνση, τηλέφωνο, κλπ.) **μόνο για αυτή τη φορά**, χωρίς να αλλάξει το global template.

Πεδία που μπορούν να παρακαμφθούν: companyName, logoUrl, facebookUrl, instagramUrl, linkedinUrl, xUrl, tagline, addressLine, phone, contactEmail, privacyPolicyUrl, termsUrl, unsubscribeUrl — όλα με δυνατότητα **inline media picker** από τη γκαλερί.

---

## Βήμα 4 — Στοιχεία αποστολής

Συμπληρώστε:

| Πεδίο | Περιγραφή |
|-------|-----------|
| **Όνομα εκστρατείας** ⭐ | Εσωτερικό, δεν φαίνεται στους παραλήπτες. |
| **Θέμα email** ⭐ | Counter επισημαίνει αν ξεπεράσετε τους 60 χαρακτήρες — κόβεται σε mobile. |
| **Preheader** | Σύντομη περιγραφή που εμφανίζεται δίπλα στο θέμα. Αυξάνει σημαντικά το open rate. |
| **Sender profile** ⭐ | Εταιρεία αποστολής με logo, sender name, email. |

⭐ = υποχρεωτικό

---

## Βήμα 5 — Έλεγχος & Test

**Desktop & Mobile preview** με toggle στο πάνω μέρος. Έτσι βλέπετε ακριβώς πώς θα εμφανίζεται το email σε διαφορετικές οθόνες.

### Quality score 0–100%
Αυτόματος έλεγχος σε 6 διαστάσεις:
1. Μήκος θέματος (30–60 χαρακτήρες)
2. ALL CAPS detection στο θέμα
3. Υπερβολικά θαυμαστικά (< 3)
4. Preheader παρών (≥ 20 χαρακτήρες)
5. Sender επιλεγμένος
6. Base template επιλεγμένο

Κάθε αποτυχημένος έλεγχος έχει **actionable note** που εξηγεί τι λείπει.

### Σύνοψη
Δεξιά εμφανίζεται όλη η σύνοψη: όνομα · θέμα · sender · περιεχόμενο · base · παραλήπτες · εκτιμώμενο count.

### Test send
Από το **persistent toolbar** στο header (όχι μόνο εδώ — από οποιοδήποτε βήμα) μπορείτε να στείλετε δοκιμαστικό σε δικό σας email.

---

## Βήμα 6 — Αποστολή

Τελική σελίδα με:
- Σύνοψη (όνομα, θέμα, αριθμός παραληπτών)
- **Explicit confirmation checkbox** πριν ενεργοποιηθεί το κουμπί αποστολής — αποτρέπει τυχαία αποστολή
- Κουμπί **«Αποστολή σε N παραλήπτες»** με loading state

Μετά την αποστολή ανακατευθύνεστε στη λίστα εκστρατειών με toast που δείχνει εστάλη/απέτυχαν.

---

## Persistent Toolbar

Σε **όλα τα βήματα** στο sticky header:

| Στοιχείο | Λειτουργία |
|----------|-----------|
| 👥 Recipient chip | Live count εκτιμώμενων παραληπτών (debounced 600ms). |
| 👁️ Preview | Πλήρης προεπισκόπηση του email σε modal. |
| ✉️ Test | Αποστολή δοκιμαστικού σε αυθαίρετο email. |

**Step indicator**: τα ολοκληρωμένα βήματα είναι clickable για επιστροφή.

---

## Troubleshooting

| Πρόβλημα | Λύση |
|----------|------|
| Recipient count = 0 | Τα φίλτρα είναι πολύ στενά. Πατήστε «Αλλαγή πηγής» ή χαλαρώστε φίλτρα. |
| Test send αποτυγχάνει | Ελέγξτε ότι έχει επιλεγεί sender profile (Βήμα 4). |
| Quality score < 50% | Διαβάστε τα warnings στο Step 5· κάθε έλεγχος έχει actionable note. |
| Designer δεν ανοίγει | Refresh σελίδας. Ο VisualDesigner απαιτεί client-side rendering. |
| Combo box «Καμία διαθέσιμη επιλογή» | Τα filter options δεν έχουν φορτώσει ακόμη. Περιμένετε 1–2 δευτερόλεπτα. |

---

## Για developers

### Δομή αρχείων

| Αρχείο | Σκοπός |
|--------|--------|
| `components/newsletter/wizard/NewsletterWizardClient.tsx` | Main shell — 6 steps, persistent header, navigation |
| `components/newsletter/wizard/StepAudience.tsx` | Step 1 — source picker + 6 source-specific panels |
| `components/newsletter/multi-select-filter.tsx` | Upgraded combo box (search/chips/virtualization) |
| `app/lib/actions/newsletter.ts` | Server actions: `buildRecipientList`, `estimateNewsletterRecipients`, `searchNewsletterSubscribers`, etc. |
| `scripts/generate-wizard-guide.ts` | Playwright auto-screenshot script |

### Επέκταση `NewsletterFilters`

Το `NewsletterFilters` type υποστηρίζει πλέον:
- `subscriberIds?: string[]` — επιλεγμένοι NewsletterSubscriber IDs
- `allSubscribers?: boolean` — flag για όλους τους subscribers
- `euProgramId?: string | null` — επιλεγμένο ΕΣΠΑ πρόγραμμα
- `audienceSource?: AudienceSource` — UI metadata (eu/segmentation/subscribers/excel/manual/mixed)

Το `buildRecipientList` συνενώνει TRDR customers + NewsletterSubscribers, dedupes ανά email, και τιμάει τη global `NewsletterUnsubscribe` λίστα.

### Regenerating this guide

```bash
npm run dev           # terminal 1
npm run docs:wizard   # terminal 2 — γεμίζει screenshots + ξαναγράφει αυτό το αρχείο
```

Το script κάνει login με τον seeded admin (`gkozyris@i4ria.com`), διασχίζει αυτόματα τα 6 steps με dummy data, και **σταματάει πριν την αποστολή** ώστε να μη δημιουργηθεί καμπάνια στη βάση.
