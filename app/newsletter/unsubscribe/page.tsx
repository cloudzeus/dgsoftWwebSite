import { unsubscribeEmail } from "@/app/lib/actions/newsletter-unsubscribe";

export const metadata = { title: "Κατάργηση Εγγραφής | DGSmart" };

const LOGO_URL =
  "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404619932-zl85vx.webp";

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string }>;
}) {
  const { t } = await searchParams;

  let success = false;
  let invalid = false;

  if (!t) {
    invalid = true;
  } else {
    let email: string;
    try {
      email = Buffer.from(t, "base64url").toString("utf8");
      if (!email || !email.includes("@")) {
        invalid = true;
      } else {
        const result = await unsubscribeEmail(email);
        success = result.success;
        if (!result.success) invalid = true;
      }
    } catch {
      invalid = true;
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#141414] border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={LOGO_URL}
          alt="DGSmart"
          className="h-10 w-auto object-contain"
        />

        {success && !invalid ? (
          <>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30">
              <svg
                className="w-7 h-7 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">
                Η διαγραφή σας ολοκληρώθηκε
              </h1>
              <p className="text-white/60 text-sm leading-relaxed">
                Έχετε διαγραφεί από τη λίστα μας. Δεν θα λαμβάνετε άλλα email
                από εμάς.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/10 border border-red-500/30">
              <svg
                className="w-7 h-7 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Μη έγκυρος σύνδεσμος</h1>
              <p className="text-white/60 text-sm leading-relaxed">
                Ο σύνδεσμος διαγραφής δεν είναι έγκυρος ή έχει λήξει.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
