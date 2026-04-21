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
import { getPublicServices } from "./lib/queries/public-services";
import { getPublicCustomersForCarousel } from "./lib/actions/trdr";
import { getPublicHomePage } from "./lib/actions/home";

export default async function Home() {
  const [locations, works, services, carouselCustomers, homeContent] =
    await Promise.all([
      getPublicLocations(),
      getPublicWorks(),
      getPublicServices(),
      getPublicCustomersForCarousel(),
      getPublicHomePage(),
    ]);

  return (
    <main className="min-h-screen bg-monks-black">
      <Navigation />
      <Hero
        contentEL={homeContent.contentEL}
        contentEN={homeContent.contentEN}
      />
      <Customers data={carouselCustomers} />
      <Solutions services={services.slice(0, 4)} />
      <Work initialWorks={works} />
      <Locations data={locations} />
      <About
        contentEL={homeContent.contentEL}
        contentEN={homeContent.contentEN}
      />
      <LatestInsights />
      <Contact />
      <Footer />
    </main>
  );
}
