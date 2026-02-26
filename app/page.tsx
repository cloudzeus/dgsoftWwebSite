export const dynamic = "force-dynamic";
import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Solutions from "./sections/Solutions";
import Work from "./sections/Work";
import About from "./sections/About";
import Customers from "./sections/Customers";
import Locations from "./sections/Locations";
import Contact from "./sections/Contact";
import LatestInsights from "./sections/LatestInsights";
import Footer from "./components/Footer";
import { getPublicLocations } from "./lib/actions/location";
import { getPublicWorks } from "./lib/queries/work";

export default async function Home() {
  const [locations, works] = await Promise.all([
    getPublicLocations(),
    getPublicWorks()
  ]);

  return (
    <main className="min-h-screen bg-monks-black">
      <Navigation />
      <Hero />
      <Customers />
      <Solutions />
      <Work initialWorks={works} />
      <Locations data={locations} />
      <About />
      <LatestInsights />
      <Contact />
      <Footer />
    </main>
  );
}
