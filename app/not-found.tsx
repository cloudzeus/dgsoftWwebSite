import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-monks-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-black text-white mb-2">404</h1>
      <p className="text-monks-light text-lg mb-8">
        Η σελίδα δεν βρέθηκε / Page not found
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-monks-black transition-all"
      >
        Αρχική / Home
      </Link>
    </div>
  );
}
