"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type CarouselCustomer = {
  id: string;
  NAME: string;
  CODE?: string | null;
  logo?: string | null;
  website?: string | null;
  WEBPAGE?: string | null;
};

export default function Customers({ data = [] }: { data?: CarouselCustomer[] }) {
  /** All customers flagged for the homepage scroller; missing logos use ui-avatars fallback below. */
  const items = data;

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="customers" className="py-24 bg-monks-dark relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="section-number justify-center">Οι Πελάτες Μας</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Μας Εμπιστεύονται για την <span className="gradient-text">Ψηφιακή Τους Μετάβαση</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-monks-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-monks-dark to-transparent z-10 pointer-events-none" />

        <TooltipProvider delayDuration={150}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
            className="flex whitespace-nowrap gap-16 py-8"
          >
            {[...items, ...items].map((customer, i) => {
              const logo = customer.logo?.trim();
              const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.NAME ?? "")}&background=334155&color=94a3b8`;
              const src = logo || fallbackUrl;
              const website = customer.website?.trim() || customer.WEBPAGE?.trim();
              const content = (
                <div
                  key={`${customer.id}-${i}`}
                  className="flex h-[100px] w-[180px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={src}
                    alt={customer.NAME}
                    className="h-full w-full object-contain"
                    onError={(e) => (e.currentTarget.src = fallbackUrl)}
                  />
                </div>
              );
              return (
                <Tooltip key={`${customer.id}-${i}`}>
                  <TooltipTrigger asChild>
                    {website ? (
                      <a
                        href={website.startsWith("http") ? website : `https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl focus:outline-none focus:ring-2 focus:ring-monks-accent/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="block">{content}</span>
                    )}
                  </TooltipTrigger>
                  <TooltipContent side="top" className="rounded-lg border-0 bg-zinc-800 px-2.5 py-1.5 text-white shadow-lg">
                    <p className="text-xs font-medium text-white/95">{customer.NAME}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
}
