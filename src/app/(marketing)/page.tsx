"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tv2, Wind, WashingMachine, Thermometer, Zap, Wifi } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Product silhouettes (CSS-drawn) ─────────── */

function TVSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative w-full max-w-[280px] aspect-video border-2 border-neutral-300 bg-neutral-200">
        <div className="absolute inset-[10%] border border-neutral-300 bg-neutral-100" />
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-neutral-400" />
          ))}
        </div>
      </div>
      <div className="w-8 h-5 bg-neutral-300" />
      <div className="w-20 h-1.5 bg-neutral-200" />
    </div>
  );
}

function FridgeSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-28 h-44 border-2 border-neutral-300 bg-neutral-100 rounded-sm">
        <div className="absolute top-0 left-0 right-0 h-[55%] border-b border-neutral-300 bg-neutral-200" />
        <div className="absolute top-[22%] right-3 w-1.5 h-10 bg-neutral-400 rounded-full" />
        <div className="absolute bottom-[20%] right-3 w-1.5 h-14 bg-neutral-400 rounded-full" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-neutral-300" />
          ))}
        </div>
      </div>
    </div>
  );
}

function WasherSilhouette({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-32 h-36 border-2 border-neutral-300 bg-neutral-100 rounded-sm">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 border-2 border-neutral-300 rounded-full bg-neutral-200 flex items-center justify-center">
          <div className="w-10 h-10 border border-neutral-300 rounded-full bg-neutral-100" />
        </div>
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-neutral-300" />
        <div className="absolute top-3 right-7 w-4 h-1 bg-neutral-300" />
      </div>
    </div>
  );
}

/* ── Product card data ────────────────────────── */

type Product = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  visual: React.ElementType;
  bg: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    eyebrow: "TELEVISIONS",
    title: "Infinity OLED X9 Series",
    description: "1000 nits, MicroLens Array, AI Vision Engine — cinematic precision engineered for the living room",
    href: "/televisions",
    icon: Tv2,
    visual: TVSilhouette,
    bg: "bg-neutral-100",
  },
  {
    id: 2,
    eyebrow: "REFRIGERATORS",
    title: "French Door CoolPro",
    description: "Adaptive InverterPro compressor with AI temperature management",
    href: "/cooling",
    icon: Thermometer,
    visual: FridgeSilhouette,
    bg: "bg-neutral-200",
  },
  {
    id: 3,
    eyebrow: "WASHING MACHINES",
    title: "PureWash X9 Pro",
    description: "9kg EcoWash with steam hygiene and 42dB silent operation",
    href: "/laundry",
    icon: WashingMachine,
    visual: WasherSilhouette,
    bg: "bg-white border border-neutral-200",
  },
  {
    id: 4,
    eyebrow: "AIR CONDITIONERS",
    title: "ArcticAir Split Inverter",
    description: "5-star energy rating, 3-minute quick cool, ultra-quiet 19dB",
    href: "/cooling",
    icon: Wind,
    visual: FridgeSilhouette,
    bg: "bg-neutral-300",
  },
  {
    id: 5,
    eyebrow: "QUANTUM QLED",
    title: "Crystal Series 4K",
    description: "Quantum dot technology with 120Hz ProMotion and Dolby Vision",
    href: "/televisions",
    icon: Tv2,
    visual: TVSilhouette,
    bg: "bg-neutral-100",
  },
  {
    id: 6,
    eyebrow: "CONNECTIVITY",
    title: "EG SmartHome Platform",
    description: "Unified control for all Elegant Galaxy appliances via EG Home app",
    href: "/technology",
    icon: Wifi,
    visual: TVSilhouette,
    bg: "bg-neutral-200",
  },
];

function ProductCard({
  product,
  large = false,
}: {
  product: Product;
  large?: boolean;
}) {
  const Visual = product.visual;

  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${product.bg} ${large ? "min-h-[460px]" : "min-h-[240px]"}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Base content */}
      <motion.div
        variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
        transition={{ duration: 0.22, ease }}
        className={`${large ? "p-12" : "p-8"} h-full flex flex-col justify-between`}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400 mb-3">
            {product.eyebrow}
          </p>
          <h3
            className={`${large ? "text-[1.7rem]" : "text-[1.1rem]"} font-semibold text-neutral-900 leading-tight tracking-tight`}
          >
            {product.title}
          </h3>
        </div>

        <div className="flex items-center justify-center flex-1 py-6">
          <Visual className={large ? "scale-110" : ""} />
        </div>

        <p className="text-[12.5px] text-neutral-500 leading-relaxed">
          {product.description}
        </p>
      </motion.div>

      {/* Hover overlay */}
      <motion.div
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.32, ease }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(15,15,15,0.52), rgba(15,15,15,0.14))",
        }}
      />

      {/* Hover content */}
      <motion.div
        variants={{ rest: { opacity: 0, y: 14 }, hover: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.36, delay: 0.05, ease }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8"
      >
        <motion.h3
          variants={{ rest: { y: 10, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.38, delay: 0.08, ease }}
          className={`${large ? "text-[1.7rem]" : "text-[1.1rem]"} font-semibold text-white text-center tracking-tight`}
        >
          {product.title}
        </motion.h3>
        <motion.p
          variants={{ rest: { y: 8, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.38, delay: 0.11, ease }}
          className="text-[12.5px] text-white/65 text-center max-w-[200px] leading-relaxed"
        >
          {product.description}
        </motion.p>
        <motion.span
          variants={{
            rest: { y: 8, opacity: 0, scale: 0.96 },
            hover: { y: 0, opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.38, delay: 0.14, ease }}
          className="px-7 py-2.5 bg-white text-neutral-900 text-[12.5px] font-semibold rounded-full hover:bg-neutral-100 transition-colors duration-200"
        >
          Explore
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

/* ── Stats ────────────────────────────────────── */
const STATS = [
  { value: "120+", label: "Product Models Worldwide" },
  { value: "5★", label: "Energy Efficiency Rating" },
  { value: "25yr", label: "Engineering Heritage" },
  { value: "98%", label: "Customer Satisfaction Score" },
];

/* ── Technologies ─────────────────────────────── */
const TECHNOLOGIES = [
  {
    icon: Tv2,
    title: "AI Vision Engine",
    desc: "Real-time picture upscaling and adaptive brightness calibration for every content type.",
  },
  {
    icon: Zap,
    title: "InverterPro Motor",
    desc: "Variable-speed compressor technology delivering up to 60% energy savings over standard units.",
  },
  {
    icon: WashingMachine,
    title: "EcoWash System",
    desc: "Precision water dosing and fabric-adaptive wash cycles for optimal care with minimal waste.",
  },
  {
    icon: Wifi,
    title: "SmartConnect Platform",
    desc: "Unified appliance ecosystem with EG Home app integration and third-party smart home support.",
  },
];

/* ── Page ─────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────── */}
      <section className="bg-white border-b border-neutral-100 min-h-screen flex flex-col justify-center px-8 lg:px-16 xl:px-24 pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 xl:gap-24 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-8"
            >
              Premium Home Appliances
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="font-semibold leading-[0.92] tracking-[-0.03em] text-neutral-900 mb-8"
              style={{ fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)" }}
            >
              Engineered
              <br />
              <span className="text-neutral-300">for life.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.28, ease }}
              className="h-px w-24 bg-neutral-300 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="text-[17px] text-neutral-500 max-w-[400px] leading-relaxed mb-12"
            >
              Precision-engineered televisions, cooling systems, and laundry
              appliances — built to perform, designed to endure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/store"
                className="px-8 py-3.5 bg-neutral-900 text-white text-[13.5px] font-semibold hover:bg-neutral-700 transition-colors duration-200"
              >
                Shop Products
              </Link>
              <Link
                href="/televisions"
                className="px-8 py-3.5 border border-neutral-200 text-neutral-700 text-[13.5px] font-medium hover:border-neutral-300 hover:bg-neutral-50 transition-colors duration-200"
              >
                Explore Televisions
              </Link>
            </motion.div>
          </div>

          {/* Right — hero TV silhouette */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            {/* Main TV */}
            <div className="relative w-full max-w-[420px]">
              <div className="aspect-video w-full border-2 border-neutral-200 bg-neutral-100 relative overflow-hidden">
                <div className="absolute inset-[8%] border border-neutral-200 bg-neutral-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-40">
                  <div className="w-8 h-8 border border-neutral-400 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-neutral-500 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-neutral-300" />
                  ))}
                </div>
              </div>
              {/* Stand */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-5 bg-neutral-200" />
                <div className="w-28 h-1.5 bg-neutral-200" />
              </div>
            </div>

            {/* Labels */}
            <div className="w-full max-w-[420px] space-y-0">
              {[
                { label: "Infinity OLED X9 — 77\"", sub: "MicroLens Array Display" },
                { label: "AI Vision Engine 3.0", sub: "Real-time upscaling" },
                { label: "Dolby Vision IQ + Atmos", sub: "Certified immersive audio" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-neutral-100">
                  <span className="text-[12px] font-medium text-neutral-700">{item.label}</span>
                  <span className="text-[11px] text-neutral-400">{item.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────── */}
      <section className="bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.07}>
                <div className="border-l-2 border-neutral-200 pl-6">
                  <p className="text-[2.5rem] font-semibold text-neutral-900 tracking-tight leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-neutral-400 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Showcase Grid ─────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-24">
          <FadeIn className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-4">
                Product Collection
              </p>
              <h2
                className="font-semibold text-neutral-900 leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
              >
                Precision for every
                <br />
                corner of your home.
              </h2>
            </div>
            <Link
              href="/store"
              className="hidden lg:flex items-center gap-2 text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
            >
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>

          {/* Row 1: large + 2 stacked */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-100">
            <div className="lg:col-span-2 lg:row-span-2 bg-white">
              <ProductCard product={PRODUCTS[0]} large />
            </div>
            <div className="bg-white">
              <ProductCard product={PRODUCTS[1]} />
            </div>
            <div className="bg-white">
              <ProductCard product={PRODUCTS[2]} />
            </div>
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-100 mt-px">
            <div className="bg-white">
              <ProductCard product={PRODUCTS[3]} />
            </div>
            <div className="bg-white">
              <ProductCard product={PRODUCTS[4]} />
            </div>
            <div className="bg-white">
              <ProductCard product={PRODUCTS[5]} />
            </div>
          </div>

          {/* Enterprise strip */}
          <div className="mt-px bg-neutral-50 border border-neutral-100 p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-3">
                Commercial & Hospitality
              </p>
              <h3
                className="font-semibold text-neutral-900 tracking-tight mb-3"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)" }}
              >
                Built for hospitality,
                <br />
                configured to scale.
              </h3>
              <p className="text-[13.5px] text-neutral-500 leading-relaxed">
                Custom procurement, bulk configuration, extended warranties,
                and dedicated account management for hotels, offices, and
                institutions.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-3.5 border border-neutral-300 text-[13.5px] font-medium text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 transition-colors duration-250"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* ── Technology Section ────────────────── */}
      <section className="bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-24">
          <FadeIn className="mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-4">
              Core Technologies
            </p>
            <h2
              className="font-semibold text-neutral-900 leading-tight tracking-tight max-w-xl"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              The engineering behind
              every product.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {TECHNOLOGIES.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <FadeIn key={tech.title} delay={i * 0.08}>
                  <div className="bg-neutral-100 p-8 h-full hover:bg-white transition-colors duration-300 group">
                    <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center mb-6 group-hover:border-neutral-400 transition-colors duration-300">
                      <Icon className="w-4.5 h-4.5 text-neutral-500" />
                    </div>
                    <h4 className="text-[14.5px] font-semibold text-neutral-900 mb-3">
                      {tech.title}
                    </h4>
                    <p className="text-[12.5px] text-neutral-500 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Brand Narrative ───────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-center">
            <FadeIn>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-8">
                Our Philosophy
              </p>
              <h2
                className="font-semibold text-neutral-900 leading-tight tracking-tight mb-8"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                Designed to disappear
                <br />
                into your life.
              </h2>
              <p className="text-[16px] text-neutral-500 leading-relaxed mb-5">
                The best appliance is one you never have to think about. Silent,
                efficient, precise — Elegant Galaxy products are engineered to
                perform flawlessly in the background of daily life.
              </p>
              <p className="text-[16px] text-neutral-500 leading-relaxed mb-12">
                Every material selected for longevity. Every mechanism calibrated
                for accuracy. Every surface refined for the spaces you inhabit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="px-8 py-3.5 bg-neutral-900 text-white text-[13.5px] font-semibold hover:bg-neutral-700 transition-colors duration-200"
                >
                  Our Story
                </Link>
                <Link
                  href="/technology"
                  className="px-8 py-3.5 border border-neutral-200 text-neutral-700 text-[13.5px] font-medium hover:border-neutral-300 transition-colors duration-200"
                >
                  Engineering Standards
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div>
                {[
                  {
                    step: "01",
                    title: "Precision Manufacturing",
                    desc: "Every unit assembled under ISO 9001 certified processes with ±0.1mm tolerance standards.",
                  },
                  {
                    step: "02",
                    title: "Materials Science",
                    desc: "Aircraft-grade aluminum, tempered borosilicate glass, and food-safe polymer composites.",
                  },
                  {
                    step: "03",
                    title: "Efficiency Engineering",
                    desc: "Inverter-driven motors and adaptive algorithms reduce energy draw by up to 60%.",
                  },
                  {
                    step: "04",
                    title: "Longevity Design",
                    desc: "Engineered for 20-year service life with modular repairability and 10-year parts availability.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="border-b border-neutral-100 py-6 flex gap-8 hover:border-neutral-200 transition-colors duration-200"
                  >
                    <span className="text-[10px] font-semibold text-neutral-300 pt-0.5 w-5 shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-neutral-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[12.5px] text-neutral-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Certifications Strip ──────────────── */}
      <section className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-16">
          <FadeIn className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
              Certified Standards
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {[
                "ISO 9001",
                "Energy Star",
                "BEE 5★ Rating",
                "CE Certified",
                "RoHS Compliant",
                "BIS Approved",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-neutral-300" />
                  <span className="text-[12px] font-medium text-neutral-500">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-24 py-32 text-center">
          <FadeIn>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-400 mb-6">
              Discover the Collection
            </p>
            <h2
              className="font-semibold text-neutral-900 leading-tight tracking-tight mb-6 mx-auto"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
            >
              Engineered for
              <br />
              the way you live.
            </h2>
            <p className="text-[16px] text-neutral-500 max-w-sm mx-auto mb-12 leading-relaxed">
              Explore the full range of Elegant Galaxy televisions, cooling
              systems, and laundry appliances.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/store"
                className="px-10 py-4 bg-neutral-900 text-white text-[13.5px] font-semibold hover:bg-neutral-700 transition-colors duration-200"
              >
                View All Products
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border border-neutral-300 text-neutral-700 text-[13.5px] font-medium hover:border-neutral-400 transition-colors duration-200"
              >
                Find a Store
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
