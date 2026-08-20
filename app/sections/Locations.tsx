"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone, Map, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { useLocale } from "../context/LocaleContext";

const geoUrl = "/greece-cyprus.json";

export default function Locations({ data = [] }: { data?: any[] }) {
    const [activeId, setActiveId] = useState<string | null>(null);
    // d3-geo projection math yields last-decimal float differences between Node
    // and the browser, so the decorative map must be client-only to avoid
    // hydration mismatches on Marker transforms.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const locale = useLocale();
    const locName = (loc: any) => (locale === "en" && loc.nameEN) ? loc.nameEN : loc.nameEL;
    const locCity = (loc: any) => (locale === "en" && loc.cityEN) ? loc.cityEN : (loc.cityEL || loc.cityEN);
    const locAddress = (loc: any) => (locale === "en" && loc.addressEN) ? loc.addressEN : (loc.addressEL || loc.addressEN);
    const locCountry = (loc: any) => (locale === "en" && loc.countryEN) ? loc.countryEN : (loc.countryEL || loc.countryEN);

    // We only want to render specific countries to keep the map clean ("outlined greece to understand the spaces")
    // Greece and Cyprus ISO codes or just approximate bounds.
    // We'll let the zoom handle it, but hide other countries by making them very dim or invisible.

    return (
        <section id="locations" className="py-32 bg-monks-black relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-monks-red-dark/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Map Information / List of Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <span className="section-number">{locale === "el" ? "Δίκτυο" : "Network"}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {locale === "el" ? <>Δίπλα σας, όπου κι αν <span className="gradient-text">βρίσκεστε.</span></> : <>Next to you, wherever <span className="gradient-text">you are.</span></>}
                        </h2>
                        <p className="text-monks-light text-lg max-w-lg mb-8">
                            {locale === "el"
                                ? "Η παρουσία μας σε Ελλάδα και Κύπρο διασφαλίζει άμεση τηλεφωνική, απομακρυσμένη και επιτόπια εξυπηρέτηση."
                                : "Our presence in Greece and Cyprus ensures immediate phone, remote and on-site support."}
                        </p>

                        {/* Internal link into the per-office pages — they carry the
                            LocalBusiness markup that local search reads. */}
                        <Link
                            href="/locations"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-monks-accent/50 hover:text-monks-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
                        >
                            {locale === "el" ? "Δείτε όλα τα γραφεία μας" : "See all our offices"}
                        </Link>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {data.map((loc, idx) => {
                                const city = locCity(loc);
                                const country = locCountry(loc);
                                const fullCity = [city, country].filter(Boolean).join(" (");
                                const displayCity = fullCity.includes("(") ? fullCity + ")" : fullCity;
                                return (
                                    <motion.div
                                        key={loc.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        onMouseEnter={() => setActiveId(loc.id)}
                                        onMouseLeave={() => setActiveId(null)}
                                        className={`relative flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 border ${activeId === loc.id
                                            ? "bg-monks-accent/20 border-monks-accent"
                                            : "bg-monks-gray/30 border-white/5 hover:border-monks-accent/30"
                                        }`}
                                    >
                                        {loc.website && (
                                            <a
                                                href={loc.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 z-10"
                                            >
                                                <span className="sr-only">{locName(loc)} (ανοίγει σε νέο παράθυρο)</span>
                                            </a>
                                        )}
                                        <MapPin aria-hidden="true" className={`w-8 h-8 shrink-0 mt-1 transition-colors ${activeId === loc.id ? "text-monks-red-light" : "text-white/50"}`} />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-bold text-white text-xl">{displayCity || locName(loc)}</h3>
                                                {loc.website && (
                                                    <ExternalLink aria-hidden="true" className={`w-4 h-4 shrink-0 transition-colors ${activeId === loc.id ? "text-monks-red-light" : "text-white/50"}`} />
                                                )}
                                            </div>
                                            <p className="text-monks-light text-base mt-1">{locName(loc)}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, delay: 0.2, ease: "backOut" }}
                        aria-hidden="true"
                        className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square bg-[#0a0b0d] rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl"
                    >
                        {/* Outline Map of Greece & Cyprus using react-simple-maps (decorative — location list above is the accessible source) */}
                        {mounted && <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                center: [27.0, 38.5],
                                scale: 2800
                            }}
                            className="w-full h-full outline-none overflow-visible"
                            style={{ overflow: 'visible' }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }: { geographies: any[] }) =>
                                    geographies.map((geo: any) => {
                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#1A1D24"
                                                stroke="rgba(230, 57, 70, 0.4)" // e63946 with opacity
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { outline: "none" },
                                                    hover: { outline: "none", fill: "#241014" },
                                                    pressed: { outline: "none" },
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>

                            {/* Markers for specific locations */}
                            {data.filter(l => l.longitude && l.latitude).map((loc) => (
                                <Marker key={loc.id} coordinates={[loc.longitude, loc.latitude] as [number, number]}>
                                    {/* Marker Dot */}
                                    <g>
                                        <circle
                                            r={activeId === loc.id ? 8 : 5}
                                            fill="#e63946" // monks-accent
                                            className="transition-all duration-300 pointer-events-none"
                                        />
                                        <circle
                                            r={14}
                                            fill="#e63946"
                                            opacity="0.3"
                                            className={`${activeId === loc.id ? 'animate-ping' : 'opacity-0'} transition-opacity pointer-events-none`}
                                        />
                                    </g>

                                    {/* HTML Tooltip mapped to coordinate */}
                                    {activeId === loc.id && (
                                        <foreignObject
                                            x={0}
                                            y={0}
                                            width={1}
                                            height={1}
                                            style={{ overflow: "visible" }}
                                        >
                                            <div
                                                className={`absolute bg-monks-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 pointer-events-none w-[320px] z-50`}
                                                style={{
                                                    left: loc.longitude > 28 ? -320 : (loc.longitude < 22 ? 20 : -160),
                                                    top: loc.latitude > 39 ? -160 : 30
                                                }}
                                            >
                                                <h4 className="text-white font-bold text-base border-b border-white/10 pb-2 mb-1">{locCity(loc) || locName(loc)}</h4>
                                                <div className="flex items-center gap-3 text-sm text-monks-light">
                                                    <Map className="w-4 h-4 text-monks-red-light shrink-0" />
                                                    <span className="truncate">{[locAddress(loc), loc.zip, locCity(loc)].filter(Boolean).join(", ")}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-monks-light">
                                                    <Phone className="w-4 h-4 text-monks-red-light shrink-0" />
                                                    <span>{loc.phone || "-"}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-monks-light">
                                                    <Mail className="w-4 h-4 text-monks-red-light shrink-0" />
                                                    <span className="truncate">{loc.email || "-"}</span>
                                                </div>
                                                {loc.website && (
                                                    <div className="flex items-center gap-3 text-sm text-monks-light">
                                                        <ExternalLink className="w-4 h-4 text-monks-red-light shrink-0" />
                                                        <span className="truncate">{loc.website}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </foreignObject>
                                    )}
                                </Marker>
                            ))}
                        </ComposableMap>}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
