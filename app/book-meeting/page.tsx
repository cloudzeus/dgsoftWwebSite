import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BookMeetingForm from "@/components/teams-booking/book-meeting-form";

export const metadata = {
  title: "Κλείστε ραντεβού | DGSMART — DGSOFT",
  description: "Η ομάδα DGSMART (dgsmart.gr) εξυπηρετεί τα αιτήματά σας από τον ιστότοπο. Κλείστε Microsoft Teams συνάντηση, επιλέξτε ημερομηνία και ώρα και λάβετε σύνδεσμο και email με τα στοιχεία.",
};

export default function BookMeetingPage() {
  return (
    <main className="min-h-screen bg-monks-black flex flex-col">
      <Navigation />
      <section className="py-24 flex-grow">
        <div className="max-w-[640px] mx-auto px-6 md:px-12">
          <BookMeetingForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
