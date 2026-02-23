"use client";

import { motion } from "framer-motion";

const customers = [
    { name: "Customer 1", id: 1 },
    { name: "Customer 2", id: 2 },
    { name: "Customer 3", id: 3 },
    { name: "Customer 4", id: 4 },
    { name: "Customer 5", id: 5 },
    { name: "Customer 6", id: 6 },
    { name: "Customer 7", id: 7 },
    { name: "Customer 8", id: 8 },
];

export default function Customers() {
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
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-monks-dark to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-monks-dark to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    className="flex whitespace-nowrap gap-16 py-8"
                >
                    {/* Double array to create seamless loop */}
                    {[...customers, ...customers].map((customer, i) => (
                        <div
                            key={`${customer.id}-${i}`}
                            className="flex-shrink-0 flex items-center justify-center w-[200px] h-[100px] bg-monks-gray/50 border border-white/5 rounded-2xl hover:bg-monks-gray hover:border-monks-accent/50 transition-all duration-300"
                        >
                            <span className="text-white/50 text-xl font-bold">{customer.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
