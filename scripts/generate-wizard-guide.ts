/**
 * Generate an annotated screenshot guide for the Newsletter Wizard.
 *
 * Usage:
 *   1. Start dev server:   npm run dev
 *   2. In another shell:   npm run docs:wizard
 *
 * Output:
 *   - public/docs/wizard-screenshots/*.png  (screenshots)
 *   - docs/newsletter-wizard-guide.md       (markdown guide; references the screenshots)
 *
 * The script logs in as the seeded admin user, walks the 6 wizard steps with dummy
 * data, takes a screenshot at each meaningful state, and STOPS BEFORE the final send
 * to avoid creating real campaigns. No DB writes occur.
 */

import { chromium, type Page } from "playwright";
import fs from "fs";
import path from "path";

const BASE_URL = process.env.GUIDE_BASE_URL ?? "http://localhost:3000";
const ADMIN_EMAIL = process.env.GUIDE_ADMIN_EMAIL ?? "gkozyris@i4ria.com";
const ADMIN_PASSWORD = process.env.GUIDE_ADMIN_PASSWORD ?? "1f1femsk";

const SHOT_DIR = path.join(process.cwd(), "public", "docs", "wizard-screenshots");
const VIEWPORT = { width: 1440, height: 900 };

fs.mkdirSync(SHOT_DIR, { recursive: true });

const shots: { file: string; caption: string; step: number }[] = [];

async function shot(page: Page, name: string, caption: string, step: number) {
  const file = `${String(shots.length + 1).padStart(2, "0")}-${name}.png`;
  await page.screenshot({ path: path.join(SHOT_DIR, file), fullPage: false });
  shots.push({ file, caption, step });
  console.log(`  📸 ${file} — ${caption}`);
}

async function tryLogin(page: Page) {
  await page.goto(`${BASE_URL}/api/auth/signin`, { waitUntil: "domcontentloaded" });
  // The site uses Auth.js — the default sign-in page exposes a credentials form
  // OR the project may use a custom /login route. Try the custom one first.
  const customLogin = `${BASE_URL}/login`;
  await page.goto(customLogin, { waitUntil: "domcontentloaded" }).catch(() => {});

  // Detect a visible password field, fill it, submit.
  const emailField = page.locator('input[type="email"], input[name="email"]').first();
  const passwordField = page.locator('input[type="password"], input[name="password"]').first();
  if (await emailField.count() && await passwordField.count()) {
    await emailField.fill(ADMIN_EMAIL);
    await passwordField.fill(ADMIN_PASSWORD);
    await Promise.all([
      page.waitForLoadState("networkidle").catch(() => {}),
      page.locator('button[type="submit"], button:has-text("Σύνδεση"), button:has-text("Sign in")').first().click(),
    ]);
  } else {
    console.warn("⚠️  Could not find login form — assuming already authenticated.");
  }
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: VIEWPORT, locale: "el-GR" });
  const page = await ctx.newPage();

  console.log("🔐 Logging in…");
  await tryLogin(page);

  console.log("🧭 Navigating to wizard…");
  await page.goto(`${BASE_URL}/admin/newsletter/wizard`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  // ——— Step 1 — Audience source picker ———
  await shot(page, "step1-source-picker", "Επιλογή πηγής παραληπτών — 3 πρωτεύουσες πηγές + secondary chips.", 1);

  // Pick "Subscribers" card (third card)
  await page.locator('button:has(p:has-text("Newsletter Subscribers"))').first().click().catch(() => {});
  await page.waitForTimeout(800);
  await shot(page, "step1-subscribers-panel", "Πάνελ Subscribers — επιλογή όλων ή συγκεκριμένων, με live recipient chip.", 1);

  // Switch to segmentation by going back and picking another card
  await page.locator('button:has-text("Αλλαγή πηγής")').first().click().catch(() => {});
  await page.waitForTimeout(400);
  await page.locator('button:has(p:has-text("Segmentation Πελατών"))').first().click().catch(() => {});
  await page.waitForTimeout(1500); // wait for filter options load
  await shot(page, "step1-segmentation", "Πάνελ Segmentation — 8 συνδυαζόμενα φίλτρα με αναζήτηση μέσα στο combo box.", 1);

  // Open a combo box to show the search/chips UX
  await page.locator('button[role="combobox"]').first().click().catch(() => {});
  await page.waitForTimeout(500);
  await shot(page, "step1-combobox", "Combo box: αναζήτηση, «Επιλογή όλων», chips, virtualization για 100+ επιλογές.", 1);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  // Next → Step 2
  await page.locator('button:has-text("Επόμενο")').first().click();
  await page.waitForTimeout(800);
  await shot(page, "step2-content-split", "Step 2 — split view: αριστερά πρότυπα, δεξιά live preview, με κουμπί full-screen designer.", 2);

  // Open designer
  await page.locator('button:has-text("Σχεδιάστε νέο περιεχόμενο"), button:has-text("Επεξεργασία σχεδίου")').first().click().catch(() => {});
  await page.waitForTimeout(1200);
  await shot(page, "step2-designer-fullscreen", "Visual Designer σε full-screen modal για άνετο σχεδιασμό.", 2);
  await page.locator('button:has-text("Αποθήκευση & κλείσιμο")').first().click().catch(() => {});
  await page.waitForTimeout(500);

  // Next → Step 3
  await page.locator('button:has-text("Επόμενο")').first().click();
  await page.waitForTimeout(800);
  await shot(page, "step3-base-template", "Step 3 — επιλογή προτύπου βάσης (wrapper) με προαιρετική παραμετροποίηση πεδίων.", 3);

  // Next → Step 4
  await page.locator('button:has-text("Επόμενο")').first().click();
  await page.waitForTimeout(600);

  await page.locator('input[placeholder*="Newsletter Νοεμβρίου"]').first().fill("Demo Campaign — Νοέμβριος 2026").catch(() => {});
  await page.locator('input[placeholder*="Νέα προγράμματα"]').first().fill("Νέα προγράμματα ΕΣΠΑ για ψηφιακό μετασχηματισμό").catch(() => {});
  await page.locator('input[placeholder*="Σύντομη περιγραφή"]').first().fill("Επιδότηση έως 80% για ΜμΕ — Δείτε αν είστε δικαιούχοι.").catch(() => {});
  await page.waitForTimeout(400);
  await shot(page, "step4-details", "Step 4 — όνομα, θέμα, preheader (με counter) και επιλογή sender profile.", 4);

  // Open sender picker
  await page.locator('button:has-text("Επιλέξτε εταιρεία αποστολής"), button:has-text("Αλλαγή")').first().click().catch(() => {});
  await page.waitForTimeout(500);
  await shot(page, "step4-sender-picker", "Dialog επιλογής εταιρείας αποστολής — logo, sender name, email.", 4);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  // Skip sender requirement: just navigate to step 5 without sender (will toast but for screenshot we just navigate via step indicator)
  // Use step-jump if a sender is selected; otherwise this step is required.
  // For the demo, we'll attempt to pick the first option:
  await page.locator('button:has-text("Επιλέξτε εταιρεία αποστολής"), button:has-text("Αλλαγή")').first().click().catch(() => {});
  await page.waitForTimeout(400);
  await page.locator('[role="dialog"] button').nth(1).click().catch(() => {}); // first profile in dialog
  await page.waitForTimeout(400);
  await page.locator('button:has-text("Επόμενο")').first().click();
  await page.waitForTimeout(1000);

  await shot(page, "step5-review", "Step 5 — desktop/mobile preview, σύνοψη και έλεγχος ποιότητας (quality score).", 5);

  // Toggle mobile
  await page.locator('button:has-text("Mobile")').first().click().catch(() => {});
  await page.waitForTimeout(500);
  await shot(page, "step5-mobile-preview", "Mobile preview για έλεγχο εμφάνισης σε κινητό.", 5);

  // Open persistent test-send dialog
  await page.locator('button:has-text("Test")').first().click().catch(() => {});
  await page.waitForTimeout(400);
  await shot(page, "test-send-dialog", "Persistent toolbar: «Test» αποστέλλει σε αυθαίρετο email από οποιοδήποτε βήμα.", 5);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  // Next → Step 6
  await page.locator('button:has-text("Επόμενο")').first().click();
  await page.waitForTimeout(600);
  await shot(page, "step6-send", "Step 6 — τελική επιβεβαίωση με checkbox πριν την αποστολή.", 6);

  console.log(`\n✅ Captured ${shots.length} screenshots in ${SHOT_DIR}`);
  await browser.close();
  writeMarkdown();
}

function writeMarkdown() {
  const lines: string[] = [];
  lines.push("# Οδηγός Χρήσης — Newsletter Wizard\n");
  lines.push("Αυτός ο οδηγός παράγεται **αυτόματα** από `scripts/generate-wizard-guide.ts`.");
  lines.push("Για να ξαναφτιαχτούν τα screenshots:\n");
  lines.push("```bash\nnpm run dev       # σε ένα terminal\nnpm run docs:wizard # σε άλλο terminal\n```\n");
  lines.push("---\n");
  lines.push("## Σύνοψη");
  lines.push("Ο νέος wizard έχει **6 βήματα** με τη λογική «audience-first»:\n");
  lines.push("1. **Παραλήπτες** — επιλογή πηγής λίστας πρώτα (καθορίζει tone & φίλτρα).");
  lines.push("2. **Περιεχόμενο** — σχεδιασμός του κυρίου σώματος.");
  lines.push("3. **Πρότυπο Βάσης** — branding wrapper (header/footer).");
  lines.push("4. **Στοιχεία** — όνομα, θέμα, preheader, sender.");
  lines.push("5. **Έλεγχος** — preview, quality score, test send.");
  lines.push("6. **Αποστολή** — τελική επιβεβαίωση & αποστολή.\n");
  lines.push("**Persistent header** σε όλα τα βήματα: live recipient chip · Preview · Test send.\n");
  lines.push("**Step-jumping**: κλικ σε ολοκληρωμένο βήμα για επιστροφή.\n");
  lines.push("---\n");

  // Group by step
  const byStep = new Map<number, typeof shots>();
  for (const s of shots) {
    if (!byStep.has(s.step)) byStep.set(s.step, []);
    byStep.get(s.step)!.push(s);
  }
  const stepTitles = [
    "",
    "Βήμα 1 — Παραλήπτες (Audience)",
    "Βήμα 2 — Περιεχόμενο (Content)",
    "Βήμα 3 — Πρότυπο Βάσης",
    "Βήμα 4 — Στοιχεία αποστολής",
    "Βήμα 5 — Έλεγχος & Test",
    "Βήμα 6 — Αποστολή",
  ];
  const stepDescriptions = [
    "",
    `Διαλέξτε **την κύρια πηγή παραληπτών**. Τρεις πρωτεύουσες πηγές:
- 🇪🇺 **Ευρωπαϊκό Πρόγραμμα** — στόχευση δικαιούχων ΕΣΠΑ· φιλτράρει αυτόματα τους ΚΑΔ του προγράμματος.
- 🎯 **Segmentation Πελατών** — φίλτρα από SoftOne (περιφέρεια, νομική μορφή, ΚΑΔ, TRDPGROUP, TRDBUSINESS).
- 📧 **Newsletter Subscribers** — εγγεγραμμένοι από τη φόρμα του site (με consent).

Επιπλέον secondary πηγές: **Excel/CSV**, **Χειροκίνητη επιλογή πελατών**, **Συνδυασμός πηγών**.

Ο **recipient chip** πάνω δεξιά ενημερώνεται live καθώς αλλάζετε φίλτρα.`,
    `**Split view**: αριστερά διαλέγετε σημείο εκκίνησης (κενό, υπάρχον template, ή νέο σχέδιο), δεξιά βλέπετε **live preview**.

Πατώντας **«Σχεδιάστε νέο»** ή **«Επεξεργασία σχεδίου»** ανοίγει ο **Visual Designer σε full-screen** για άνετο block-based σχεδιασμό.`,
    `Επιλέξτε branding wrapper. Κάθε εκστρατεία μπορεί να **παραμετροποιήσει πεδία** (logo, social, διεύθυνση) μόνο για αυτή τη φορά, χωρίς να αλλάξει το global template.`,
    `Συμπληρώστε:
- **Όνομα εκστρατείας** (εσωτερικό, δεν φαίνεται στους παραλήπτες).
- **Θέμα email** (counter επισημαίνει αν ξεπεράσετε τους 60 χαρακτήρες — κόβεται σε mobile).
- **Preheader** — σύντομη περιγραφή που εμφανίζεται δίπλα στο θέμα· αυξάνει σημαντικά το open rate.
- **Sender profile** — εταιρεία αποστολής (από/email/logo).`,
    `**Desktop & Mobile preview** με toggle. **Quality score 0–100%** ελέγχει αυτόματα:
- Μήκος θέματος (30–60 χαρακτήρες)
- ALL CAPS detection
- Υπερβολικά θαυμαστικά
- Preheader παρών
- Sender επιλεγμένος
- Base template επιλεγμένο

Persistent **Test send** button στο header λειτουργεί από όλα τα βήματα.`,
    `Τελική σελίδα: **explicit confirmation checkbox** πριν την αποστολή — αποτρέπει τυχαία αποστολή. Δείχνει αριθμό παραληπτών και το θέμα.`,
  ];

  for (let i = 1; i <= 6; i++) {
    lines.push(`## ${stepTitles[i]}\n`);
    lines.push(stepDescriptions[i] + "\n");
    const stepShots = byStep.get(i) ?? [];
    for (const s of stepShots) {
      lines.push(`![${s.caption}](/docs/wizard-screenshots/${s.file})`);
      lines.push(`*${s.caption}*\n`);
    }
    lines.push("");
  }

  lines.push("---\n");
  lines.push("## Persistent Toolbar");
  lines.push("Από οποιοδήποτε βήμα μπορείτε:");
  lines.push("- Να δείτε **live recipient count** στο header.");
  lines.push("- Να ανοίξετε **πλήρη προεπισκόπηση** του email.");
  lines.push("- Να στείλετε **δοκιμαστικό** σε δικό σας email πριν την τελική αποστολή.\n");
  lines.push("## Combo Boxes φιλτραρίσματος");
  lines.push("Όλα τα combo boxes (Περιφέρεια, ΚΑΔ, Δήμος, κ.λπ.) διαθέτουν:");
  lines.push("- **Αναζήτηση** με Ελληνικά (αγνοεί τόνους).");
  lines.push("- **Chips** κάτω από το πεδίο που δείχνουν τι έχει επιλεγεί.");
  lines.push("- **«Επιλογή όλων ορατών»** για bulk select.");
  lines.push("- **«Καθαρισμός»** για instant clear.");
  lines.push("- **Virtualization** για λίστες >100 επιλογών (εμφανίζει τις πρώτες 100, ζητάει πληκτρολόγηση για περισσότερες).");
  lines.push("\n## Troubleshooting");
  lines.push("- **Recipient count = 0**: τα φίλτρα είναι πολύ στενά. Πατήστε «Αλλαγή πηγής» ή χαλαρώστε τα φίλτρα.");
  lines.push("- **Test send αποτυγχάνει**: ελέγξτε ότι έχει επιλεγεί sender profile (Βήμα 4).");
  lines.push("- **Quality score < 50%**: διαβάστε τα warnings στο Step 5· κάθε έλεγχος έχει actionable note.");

  const outPath = path.join(process.cwd(), "docs", "newsletter-wizard-guide.md");
  fs.writeFileSync(outPath, lines.join("\n"));
  console.log(`📝 Guide written: ${outPath}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
