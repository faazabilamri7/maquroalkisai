"use client";

import { useEffect, useRef, useState } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { toast } from "@/components/ui/use-toast";
import {
  ChevronDown,
  MapPin,
  Phone,
  Instagram,
  Calendar,
  Clock,
  BookOpen,
  Users,
  Award,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RegisterNowForm from "@/components/register-now-form";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBF7F4]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdmissionSection />
        <ProgramsSection />
        <CompetenciesSection />
        <ScheduleSection />
        <TeachersSection />
        <RegistrationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
        >
          <Image
            src="/logo-maquro.png"
            alt="Maquro Al Kisai Logo"
            width={48}
            height={48}
            className="h-12 w-auto drop-shadow-md"
            priority
          />
          {/* <span
            className={`font-semibold text-lg transition-colors duration-300 ${
              isScrolled ? "text-[#8B5A2B]" : "text-white"
            }`}
          >
            Maquro Al Kisai
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#tentang", label: "Tentang" },
            { href: "#pendaftaran", label: "Pendaftaran" },
            { href: "#program", label: "Program" },
            { href: "#kompetensi", label: "Kompetensi" },
            { href: "#jadwal", label: "Jadwal" },
            { href: "#pengajar", label: "Pengajar" },
            { href: "#registrasi", label: "Registrasi" },
            { href: "#galeri", label: "Galeri" },
            { href: "#kontak", label: "Kontak" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-medium transition-all duration-300 hover:text-[#8B5A2B] group ${
                isScrolled ? "text-[#8B5A2B]" : "text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5A2B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <RegisterNowForm
            className={`hidden md:flex bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                : "text-white hover:bg-white/10"
            } md:hidden`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-[#8B5A2B]/10"
      >
        <nav className="container py-6 space-y-4">
          {[
            { href: "#tentang", label: "Tentang" },
            { href: "#pendaftaran", label: "Pendaftaran" },
            { href: "#program", label: "Program" },
            { href: "#kompetensi", label: "Kompetensi" },
            { href: "#jadwal", label: "Jadwal" },
            { href: "#pengajar", label: "Pengajar" },
            { href: "#registrasi", label: "Registrasi" },
            { href: "#galeri", label: "Galeri" },
            { href: "#kontak", label: "Kontak" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-[#8B5A2B] hover:bg-[#8B5A2B]/5 rounded-lg transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 pt-4">
            <RegisterNowForm className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-md hover:shadow-lg transition-all duration-300" />
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
function HeroSection() {
  return (
    <section className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5A2B]/70 to-[#8B5A2B]/40 backdrop-blur-[2px]"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                Selamat Datang di Website Resmi Maquro Al Kisai
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold leading-tight tracking-tight">
                MADRASAH PENDIDIKAN AL QURAN DAN BAHASA ARAB AL KISAI
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Membentuk Generasi Qurani yang Robbaniyyun dengan Pendidikan
              Berkualitas
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-white text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium"
                onClick={() =>
                  document
                    .getElementById("pendaftaran")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Penerimaan Santri Baru
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#8B5A2B] shadow-lg backdrop-blur-sm transition-all duration-500 transform hover:scale-105 flex items-center gap-2 font-medium group"
                onClick={() =>
                  document
                    .getElementById("tentang")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span>Tentang Maquro Al Kisai</span>
                <ChevronDown className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 px-4"
            >
              {[
                { label: "Standar Kompetensi", value: "10" },
                { label: "Ekstrakulikuler", value: "7" },
                { label: "Kegiatan Santri", value: "8" },
                { label: "Kompetensi Kelulusan", value: "5" },
                // { label: "Tahun Berdiri", value: "2024" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex justify-center w-full"
          >
            <div className="relative group w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/bSIOoVSvlhk?autoplay=1&mute=1&controls=1&cc_load_policy=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full transform transition-all duration-700 hover:scale-105"
              ></iframe>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex justify-center perspective-1000"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <Image
                src="/quran-illustration.jpg"
                alt="Al Quran Illustration"
                width={600}
                height={600}
                className="relative max-w-full h-auto rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-2"
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div> */}
        </div>

        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          onClick={() =>
            document
              .getElementById("tentang")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ChevronDown className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="tentang" ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-4">
            Tentang Maquro Al Kisai
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Membentuk Generasi Qurani yang berkualitas melalui Pendidikan Al
            Quran dan Bahasa Arab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#F5EFE7] to-white p-8 rounded-2xl border-l-4 border-[#8B5A2B] shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
                <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B]">
                  Filosofi
                </h3>
              </div>
              <p className="text-lg text-[#5D4037] italic leading-relaxed">
                "Cahaya itu di rumah-rumah yang di sana telah diperintahkan
                Allah untuk memuliakan dan menyebut namanya, di sana bertasbih
                (menyucikan) nama-Nya pada pagi dan petang."
              </p>
              <p className="text-base text-[#8B5A2B]/80 mt-4 font-medium">
                - Surat An Nur ayat 36
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl hover:bg-[#F5EFE7]/50 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
                <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B]">
                  Visi
                </h3>
              </div>
              <p className="text-lg text-[#5D4037] leading-relaxed">
                Sebagai Madrosah pembelajaran Al Quran dan Bahasa Arab yang
                terdepan dalam membentuk generasi Qurani.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl hover:bg-[#F5EFE7]/50 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
                <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B]">
                  Misi
                </h3>
              </div>
              <ul className="space-y-4 text-lg text-[#5D4037]">
                {[
                  "Menjadi madrosah untuk belajar mengenal dan mengingat Allah.",
                  "Membentuk generasi Qurani yang robbaniyyun.",
                  "Memberikan pembelajaran Al Quran dan Bahasa Arab.",
                  "Memberikan pembelajaran yang terkait dengan dan bersumber dari Al Quran.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="mt-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group perspective-1000"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform group-hover:-rotate-1 transition-transform duration-700">
              <Image
                src="/madrasah-building.jpg"
                alt="Gedung Maquro Al Kisai"
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Gedung Maquro Al Kisai
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  Lokasi pembelajaran yang nyaman dan kondusif
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function AdmissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="pendaftaran" ref={ref} className="py-24 bg-[#F5EFE7]">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Penerimaan Santri Baru
          </span>
          <h2 className=" font-cinzel text-5xl md:text-6xl font-bold text-[#8B5A2B] mb-6 tracking-tight leading-tight">
            Tahun Ajaran 2025/2026
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-[#5D4037]/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Mari bergabung bersama kami dalam membentuk generasi Qurani yang
            berkualitas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 rounded-[2rem] shadow-2xl hover:shadow-3xl transition-all duration-500 border-t-4 border-[#8B5A2B] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#8B5A2B]/10 to-transparent rounded-bl-full transform translate-x-24 -translate-y-24 group-hover:translate-x-20 group-hover:-translate-y-20 transition-transform duration-700"></div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#8B5A2B]/15 to-[#D4A574]/15 rounded-full blur-lg transform group-hover:scale-110 transition-all duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B5A2B]/15 to-[#D4A574]/15 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 hover:shadow-lg relative">
                  <Calendar className="h-8 w-8 text-[#8B5A2B] transform group-hover:rotate-6 transition-all duration-300" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-[#8B5A2B] leading-tight">
                  Pendaftaran Dibuka !
                </h3>
                <div className="inline-block px-4 py-2 bg-[#8B5A2B]/5 rounded-full">
                  <p className="text-lg md:text-xl font-semibold text-[#D4A574] animate-pulse">
                    Sampai dengan 25 Mei 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10 relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
                  <h4 className="text-2xl font-bold text-[#8B5A2B]">
                    Syarat Calon Santri
                  </h4>
                </div>
                <ul className="space-y-6">
                  {[
                    {
                      icon: "👥",
                      title: "Putra/i (islam)",
                      desc: "Terbuka untuk santri putra dan putri beragama Islam",
                    },
                    {
                      icon: "📅",
                      title: "Usia Minimal 6 tahun",
                      desc: "Per tanggal 1 Juli 2025",
                    },
                    {
                      icon: "💪",
                      title: "Sehat jasmani dan rohani",
                      desc: "Dibuktikan dengan surat keterangan sehat",
                    },
                    {
                      icon: "📖",
                      title: "Mengenal Huruf Hijaiyyah",
                      desc: "Mampu membaca huruf Arab dasar",
                    },
                    {
                      icon: "✅",
                      title: "Siap mengikuti tata tertib",
                      desc: "Berkomitmen mematuhi peraturan madrasah",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.02, x: 8 }}
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white hover:bg-[#F5EFE7] transition-all duration-300 group/item cursor-pointer shadow-lg hover:shadow-xl"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform duration-300 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-[#8B5A2B] group-hover/item:text-[#6A4423] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-[#5D4037]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t-2 border-dashed border-[#8B5A2B]/20">
                <RegisterNowForm className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] rounded-2xl text-lg font-semibold" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
              <h3 className="font-cinzel text-3xl font-bold text-[#8B5A2B]">
                5 Kompetensi Kelulusan
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Hafalan Al Quran",
                  desc: "Mampu membaca Al Quran dengan fasih 30 juz",
                  icon: "📖",
                },
                {
                  title: "Qiraat 'Ashim",
                  desc: "Memiliki hafalan Al Quran Qiraat 'Ashim Riwayat Imam Syu'bah dan Imam Hafsh minimal 10 juz",
                  subDesc:
                    "Mendapatkan sanad apabila menyelesaikan hafalan sebanyak 30 juz",
                  icon: "🎯",
                },
                {
                  title: "Sanad Tajwid",
                  desc: "Memiliki sanad mutun tajwid",
                  icon: "📜",
                },
                {
                  title: "Bilingual",
                  desc: "Aktif berbahasa bilingual (Arab - Indonesia)",
                  icon: "🗣️",
                },
                {
                  title: "Ijazah Formal",
                  desc: "Mendapatkan Ijazah Pendidikan Kesetaraan Paket A",
                  icon: "🎓",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 8 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-l-4 border-[#8B5A2B] hover:border-[#D4A574]"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-[#8B5A2B] group-hover:text-[#D4A574] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <span className="px-4 py-1.5 text-sm font-semibold bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full group-hover:bg-[#8B5A2B]/20">
                          {index + 1}/5
                        </span>
                      </div>
                      <p className="text-[#5D4037] group-hover:text-[#8B5A2B] transition-colors duration-300 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.subDesc && (
                        <p className="text-sm text-[#5D4037]/70 italic leading-relaxed">
                          {item.subDesc}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-10 bg-gradient-to-br from-[#8B5A2B]/10 to-transparent rounded-3xl border-2 border-[#8B5A2B]/20 transition-all duration-500 hover:shadow-xl"
            >
              <p className="text-[#5D4037] italic text-center text-xl font-medium leading-relaxed">
                "Investasi terbaik untuk anak Anda adalah pendidikan yang
                menyeimbangkan dunia dan akhirat"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="program" ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Program & Kegiatan
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Program Unggulan & Kegiatan Santri
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai program unggulan dan kegiatan yang
            dirancang untuk mengembangkan potensi santri secara optimal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-6">
              Kegiatan Santri
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Bilingual Bahasa",
                  desc: "Pembelajaran aktif dalam Bahasa Arab dan Indonesia setiap hari",
                  icon: <BookOpen className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Harian",
                },
                {
                  title: "Berkisah Siroh Nabawiyyah",
                  desc: "Mempelajari kisah-kisah Nabi Muhammad ﷺ",
                  icon: <Users className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Pekanan",
                },
                {
                  title: "Keputrian",
                  desc: "Pembelajaran khusus untuk santri putri",
                  icon: <Award className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Pekanan",
                },
                {
                  title: "Mabit",
                  desc: "Malam bina iman dan taqwa untuk penguatan spiritual",
                  icon: <GraduationCap className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "3 Bulanan",
                },
                {
                  title: "Rihlah Ilmu",
                  desc: "Kunjungan edukatif ke tempat-tempat bersejarah Islam",
                  icon: <ExternalLink className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Tahunan",
                },
                {
                  title: "Outing",
                  desc: "Kegiatan rekreasi edukatif untuk santri",
                  icon: <MapPin className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Tahunan",
                },
                {
                  title: "Parade Tasmi'",
                  desc: "Presentasi hafalan Al Quran santri",
                  icon: <BookOpen className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Tahunan",
                },
                {
                  title: "Market dan Charity Day",
                  desc: "Kegiatan wirausaha dan amal untuk melatih jiwa sosial",
                  icon: <Users className="h-12 w-12 text-[#8B5A2B]" />,
                  freq: "Tahunan",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#8B5A2B] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[#5D4037]/80 text-sm mb-2">
                        {item.desc}
                      </p>
                      <span className="text-xs font-medium text-[#8B5A2B] bg-[#8B5A2B]/10 px-3 py-1 rounded-full">
                        {item.freq}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-6">
              Program Ekstrakurikuler
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Renang",
                  desc: "Mengembangkan kemampuan berenang sesuai sunnah",
                  image: "/swimming.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Panahan",
                  desc: "Melatih fokus dan ketepatan dalam memanah",
                  image: "/archery.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Berkuda",
                  desc: "Belajar menunggang kuda sesuai anjuran Rasulullah",
                  image: "/horse-riding.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Basket",
                  desc: "Mengembangkan keterampilan bermain basket",
                  image: "/basketball.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Badminton",
                  desc: "Melatih ketangkasan dan kesehatan fisik",
                  image: "/badminton.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Bahasa Inggris",
                  desc: "Mengembangkan kemampuan berbahasa internasional",
                  image: "/english.jpg",
                  rowSpan: "sm:col-span-1 lg:col-span-1",
                },
                {
                  title: "Judo/BBJ",
                  desc: "Melatih bela diri dan disiplin diri",
                  image: "/judo.jpg",
                  rowSpan: "sm:col-span-2 lg:col-span-1",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col ${item.rowSpan}`}
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h4 className="font-bold text-[#8B5A2B] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#5D4037]/80 text-sm flex-1">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CompetenciesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const competencies = [
    {
      icon: "📖",
      title: "Membaca Al Quran",
      desc: "Mampu membaca Al Quran 30 juz sesuai makhorij al-huruf, shifat al-huruf, dan materi tajwid lainnya.",
    },
    {
      icon: "🎯",
      title: "Hafalan",
      desc: "Mampu menghafal Al Quran Qiraat 'Ashim, Riwayat Imam Syu'bah dan Imam Hafsh, minimal 10 juz.",
    },
    {
      icon: "📚",
      title: "Penguasaan Matan",
      desc: "Mampu menghafal dan memahami Matan al-Muqoddimah Jazariyyah dan Matan Tuhfah al-Athfal.",
    },
    {
      icon: "✍️",
      title: "Menulis Al Quran",
      desc: "Mampu menguasai keterampilan menulis Al Quran",
    },
    {
      icon: "💭",
      title: "Tadabbur Al Quran",
      desc: "Mampu memahami tadabbur Al Quran juz 30",
    },
    {
      icon: "🤲",
      title: "Adab Islami",
      desc: "Mampu memahami dan mengamalkan Adab dalam Kitab At Tibyan",
    },
    {
      icon: "📝",
      title: "Bahasa Arab",
      desc: "Mampu menghafal dan memahami Manzhumah al-Ajurrumiyyah.",
    },
    {
      icon: "🗣️",
      title: "Komunikasi Arab",
      desc: "Mampu menguasai Bahasa Arab secara aktif",
    },
    {
      icon: "🕌",
      title: "Fiqh Syafi'i",
      desc: "Mampu memahami dan mengamalkan Fiqh Syafi'i (Thoharoh, Sholat, Puasa)",
    },
    {
      icon: "📓",
      title: "Akademik",
      desc: "Mampu memahami pelajaran Matematika, Bahasa Indonesia, dan IPAS (Paket A)",
    },
  ];

  return (
    <section id="kompetensi" ref={ref} className="py-20 bg-[#F5EFE7]">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Kompetensi Lulusan
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            10 Standar Kompetensi Utama
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Setiap lulusan Maquro Al Kisai dibekali dengan kompetensi yang
            komprehensif dalam bidang Al Quran dan Bahasa Arab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full border-t-4 border-[#8B5A2B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B5A2B]/5 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  <span className="w-8 h-8 bg-[#8B5A2B]/10 rounded-full flex items-center justify-center text-sm font-semibold text-[#8B5A2B]">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-[#8B5A2B] mb-3 group-hover:text-[#D4A574] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5D4037]/80 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
function ScheduleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="jadwal" ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Informasi Pembelajaran
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Jadwal & Lokasi Belajar
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <Card className="overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-xl">
              <div className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] text-white p-6">
                <h3 className="font-cinzel text-2xl font-bold mb-2 flex items-center gap-3">
                  <Clock className="h-6 w-6" />
                  Jam Kegiatan Belajar
                </h3>
              </div>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="group p-4 rounded-xl hover:bg-[#F5EFE7] transition-colors duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-[#8B5A2B]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[#8B5A2B] font-semibold">
                          S-K
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8B5A2B]">
                          Senin-Kamis
                        </h4>
                        <p className="text-[#5D4037]">07.15 - 11.30 WIB</p>
                        <p className="text-sm text-[#8B5A2B]/70 mt-1">
                          * Kelas 3 ke atas: 07.15 - 13.30 WIB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-4 rounded-xl hover:bg-[#F5EFE7] transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#8B5A2B]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-[#8B5A2B] font-semibold">JM</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8B5A2B]">Jumat</h4>
                        <p className="text-[#5D4037]">07.15 - 10.45 WIB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border-l-4 border-[#8B5A2B]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-[#8B5A2B] mb-4">
                    Lokasi Pembelajaran
                  </h3>
                  <div className="space-y-2 text-[#5D4037]">
                    <p className="font-semibold text-[#8B5A2B]">
                      Gedung An Nur Maquro Al Kisai
                    </p>
                    <p className="leading-relaxed">
                      Jl. Pondok Jaya No.11, Pondok Jaya
                      <br />
                      Kecamatan Pondok Aren
                      <br />
                      Kota Tangerang Selatan, Banten 15220
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7331111493997!2d106.71758462685011!3d-6.268016060940748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMDQuOSJTIDEwNsKwNDMnMDMuMyJF!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
            <Button
              className="absolute bottom-4 right-4 bg-white text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-colors duration-300 shadow-lg"
              onClick={() => window.open("https://goo.gl/maps/xxxxx", "_blank")}
            >
              Buka di Google Maps
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function TeachersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="pengajar" ref={ref} className="py-20 bg-[#F5EFE7]">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Tim Pengajar
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Tenaga Pengajar dan Pembina
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Tim pengajar berkompeten dengan sertifikasi dalam bidang Al Quran
            dan bahasa Arab serta berpengalaman dari berbagai perguruan tinggi
            terkemuka.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ustadz Muhammad Yusuf Sachiro, Lc",
                role: "Pembina",
              },
              {
                name: "Ustadz Adhi Abu Abdirrohman, S.Psi",
                role: "Pembina",
              },
              {
                name: "Syarif Hidayatullah, S.E",
                role: "Penasihat",
              },
              {
                name: "Yulia Apriati Santi, S.H., M.AB",
                role: "Penasihat",
              },
              {
                name: "Efi Alawiah",
                role: "Penasihat",
              },
            ].map((teacher, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 h-full">
                  <CardContent className="p-6 bg-white">
                    <h4 className="text-lg font-bold text-[#8B5A2B] mb-2 group-hover:text-[#D4A574] transition-colors duration-300">
                      {teacher.name}
                    </h4>
                    <span className="px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium rounded-full">
                      {teacher.role}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B]">
            Standar Kualifikasi Guru
          </h3>
          <p className="text-[#5D4037]/80 mt-2">
            Kriteria utama yang harus dimiliki setiap pengajar di Maquro Al
            Kisai
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {[
            {
              icon: "📖",
              title: "Hafalan Al-Quran",
              desc: "Minimal 10 juz",
            },
            {
              icon: "🎯",
              title: "Sanad Keilmuan",
              desc: "Tersertifikasi",
            },
            {
              icon: "🎓",
              title: "Pendidikan",
              desc: "S1/S2 Perguruan Tinggi",
            },
            {
              icon: "⏳",
              title: "Pengalaman",
              desc: "Min. 3 tahun mengajar",
            },
            {
              icon: "🤝",
              title: "Akhlak",
              desc: "Teladan bagi santri",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="border-none bg-white hover:bg-[#8B5A2B] transition-colors duration-500 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#8B5A2B]/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-white/10 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#8B5A2B] mb-2 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#5D4037] group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
function RegistrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="registrasi" ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Informasi Pendaftaran
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Syarat & Alur Pendaftaran
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-[#5D4037]/80 max-w-3xl mx-auto">
            Ikuti langkah-langkah pendaftaran dengan mudah untuk bergabung
            bersama kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#F5EFE7] p-8 rounded-2xl">
              <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
                Alur Pendaftaran
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "Mengisi Formulir Pendaftaran",
                    desc: "Formulir dapat diisi secara online melalui website atau offline di sekretariat",
                    icon: "📝",
                  },
                  {
                    step: "Membayar Biaya Pendaftaran",
                    desc: "Pembayaran sebesar Rp 100.000 dapat dilakukan via transfer atau tunai",
                    icon: "💳",
                  },
                  {
                    step: "Tes Seleksi Santri",
                    desc: "Meliputi tes baca Al-Quran, wawancara santri dan orang tua",
                    icon: "📚",
                  },
                  {
                    step: "Pengumuman Hasil Seleksi",
                    desc: "Diumumkan maksimal 7 hari setelah tes seleksi",
                    icon: "📢",
                  },
                  {
                    step: "Daftar Ulang",
                    desc: "Melunasi biaya pendaftaran dan melengkapi berkas administrasi",
                    icon: "✅",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 8 }}
                    className="flex gap-6 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-full flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div className="w-1 h-full bg-[#8B5A2B]/10 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold px-3 py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full">
                          Langkah {index + 1}
                        </span>
                        {/* <div className="w-4 h-px bg-[#8B5A2B]/30"></div> */}
                      </div>
                      <h4 className=" text-xl font-bold text-[#8B5A2B]">
                        {item.step}
                      </h4>
                      <p className="text-[#5D4037]/90 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-[#F5EFE7] p-8 rounded-2xl">
              <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                Rincian Biaya
              </h3>

              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] text-white p-6">
                  <h4 className="text-xl font-bold">Tahun Ajaran 2025/2026</h4>
                  <p className="text-white/80 text-sm mt-1">
                    *Biaya dapat berubah sewaktu-waktu
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { item: "Formulir pendaftaran", amount: "100.000" },
                      { item: "Seragam (Batik & Olahraga)", amount: "400.000" },
                      {
                        item: "Uang kegiatan tahunan",
                        amount: "1.950.000",
                        details: [
                          "Keputrian Pekanan",
                          "Mabit 3 Bulanan",
                          "Rihlah Ilmu",
                          "Outing",
                          "Parade Tasmi'",
                          "Market Day",
                        ],
                      },
                      { item: "Infak gedung", amount: "3.000.000" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-[#F5EFE7]/50 rounded-lg hover:bg-[#F5EFE7] transition-all duration-300"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-[#8B5A2B]">
                              {item.item}
                            </h5>
                            {item.details && (
                              <ul className="mt-2 space-y-1 text-sm text-[#5D4037]/80">
                                {item.details.map((detail, idx) => (
                                  <li key={idx}>• {detail}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <span className="font-bold text-[#8B5A2B]">
                            Rp {item.amount}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="p-4 bg-[#8B5A2B] rounded-lg text-white">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total Biaya</span>
                        <span className="font-bold text-xl">Rp 5.350.000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6 p-6 bg-white rounded-xl border border-[#8B5A2B]/10">
                <h4 className="font-bold text-[#8B5A2B] mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Biaya Tambahan
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "SPP Bulanan", value: "Rp 490.000" },
                    { label: "Raport", value: "Rp 60.000" },
                    { label: "Katering (Kelas 3+)", value: "Rp 14.000/hari" },
                    { label: "Buku & Ekskul", value: "Menyusul" },
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-[#F5EFE7]/50 rounded-lg">
                      <p className="text-sm text-[#5D4037]">{item.label}</p>
                      <p className="font-semibold text-[#8B5A2B]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <RegisterNowForm
            // size="lg"
            className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
          />
        </motion.div>
      </div>
    </section>
  );
}
function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const galleryImages = [
    {
      src: "/gallery-1.jpg",
      title: "Kegiatan Tahfidz",
      desc: "Para santri sedang menghafal Al-Quran",
      date: "15 Januari 2024",
    },
    {
      src: "/gallery-2.jpg",
      title: "Pembelajaran Bahasa Arab",
      desc: "Kelas conversation Bahasa Arab",
      date: "20 Januari 2024",
    },
    {
      src: "/gallery-3.jpg",
      title: "Kegiatan Olahraga",
      desc: "Aktivitas olahraga pagi santri",
      date: "25 Januari 2024",
    },
    {
      src: "/gallery-4.jpg",
      title: "Acara Wisuda",
      desc: "Wisuda angkatan ke-5",
      date: "30 Januari 2024",
    },
    {
      src: "/gallery-5.jpg",
      title: "Mabit",
      desc: "Malam Bina Iman dan Taqwa",
      date: "5 Februari 2024",
    },
    {
      src: "/gallery-6.jpg",
      title: "Market Day",
      desc: "Kegiatan wirausaha santri",
      date: "10 Februari 2024",
    },
  ];

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") setSelectedImage(null);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="galeri"
      ref={ref}
      className="py-20 bg-[#F5EFE7] overflow-hidden"
    >
      <div className="container">
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Galeri Kegiatan
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Momen Berharga Kami
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Dokumentasi perjalanan pendidikan dan aktivitas santri di Maquro Al
            Kisai
          </p>
        </motion.div> */}

        <div className="container">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
              Instagram
            </span>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
              Kegiatan Terbaru
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#5D4037]/80 max-w-3xl mx-auto">
              Ikuti perkembangan terbaru kami di Instagram
            </p>
          </motion.div>

          {/* Instagram Embed */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.instagram.com/maquroalkisai/embed"
                width="100%"
                height="500"
                frameBorder="0"
                scrolling="no"
                // allowtransparency="true"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              href="https://www.instagram.com/maquroalkisai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#8B5A2B] text-[#8B5A2B] rounded-full hover:bg-[#8B5A2B] hover:text-white transition-colors duration-300 font-medium"
            >
              Kunjungi Instagram Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.1,
                      },
                    },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500">
                    <div className="relative h-72">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onClick={() => {
                          setSelectedImage(image.src);
                          setSelectedImageIndex(index);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-white/80 text-sm mb-2 block">
                            {image.date}
                          </span>
                          <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm text-white/90">{image.desc}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 hover:bg-[#8B5A2B] hover:text-white" />
          <CarouselNext className="hidden md:flex -right-12 hover:bg-[#8B5A2B] hover:text-white" />
        </Carousel>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-2 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all duration-300 font-medium group"
          >
            <span>Lihat Semua Galeri</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 transform group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </motion.div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <div className="relative">
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                    {galleryImages[selectedImageIndex].title}
                  </h3>
                  <p className="text-white/90">
                    {galleryImages[selectedImageIndex].desc}
                  </p>
                  <span className="text-white/70 text-sm block mt-2">
                    {galleryImages[selectedImageIndex].date}
                  </span>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )} */}
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // Format WhatsApp message
    const whatsappMessage = `Halo Admin Maquro Al Kisai,%0A%0A*Nama*: ${name}%0A*No. WhatsApp*: +62${phone}%0A${
      email ? `*Email*: ${email}%0A` : ""
    }%0A*Pesan*:%0A${message}%0A%0ATerima kasih.`;

    // Open WhatsApp with prefilled message
    window.open(
      `https://wa.me/6285311429632?text=${whatsappMessage}`,
      "_blank"
    );

    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section
      id="kontak"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-[#F5EFE7]/30"
    >
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-6">
            Kontak & Informasi
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
            dengan informasi lebih lanjut.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-500 overflow-hidden group">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-8 flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  Hubungi Kami
                </h3>

                <div className="space-y-8">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="p-4 rounded-xl hover:bg-[#F5EFE7] transition-all duration-300"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Phone className="h-6 w-6 text-[#8B5A2B]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#8B5A2B] mb-1">
                          Info Pendaftaran
                        </p>
                        <a
                          href="https://wa.me/6285311429632"
                          className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors block"
                        >
                          +62 853-1142-9632 (Admin 1)
                        </a>
                        <a
                          href="https://wa.me/6285719662779"
                          className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors"
                        >
                          +62 857-1966-2779 (Admin 2)
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="p-4 rounded-xl hover:bg-[#F5EFE7] transition-all duration-300"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <MapPin className="h-6 w-6 text-[#8B5A2B]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#8B5A2B] mb-1">
                          Sekretariat
                        </p>
                        <a
                          href="https://maps.app.goo.gl/uaLFAaP4pNbecL6HA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors"
                        >
                          Yayasan Risalah Cahaya Ilmu
                          <br />
                          Pondok Kacang Prima, Jl. Ketapang Blok I No.2,
                          <br />
                          Kota Tangerang Selatan, Banten 15226
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 8 }}
                    className="p-4 rounded-xl hover:bg-[#F5EFE7] transition-all duration-300"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <Instagram className="h-6 w-6 text-[#8B5A2B]" />
                      </div>
                      <div>
                        <p className="font-bold text-[#8B5A2B] mb-1">
                          Media Sosial
                        </p>
                        <a
                          href="https://instagram.com/MaquroAlKisai"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors flex items-center gap-2"
                        >
                          @MaquroAlKisai
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-lg hover:shadow-xl transition-all duration-500 group"
                    onClick={() =>
                      window.open("https://wa.me/6285311429632", "_blank")
                    }
                  >
                    <span>Hubungi via WhatsApp</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 ml-2 transform group-hover:scale-110 transition-transform"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-bold text-[#8B5A2B] mb-8 flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Kirim Pesan
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#5D4037]"
                      >
                        Nama Lengkap
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#5D4037]"
                      >
                        Nomor WhatsApp
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">+62</span>
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          required
                          className="w-full px-4 py-2 pl-12 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300"
                          placeholder="812-3456-7890"
                          pattern="[0-9]{4,15}"
                          title="Masukkan nomor WhatsApp yang valid"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#5D4037]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300"
                      placeholder="Masukkan alamat email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#5D4037]"
                    >
                      Pesan Anda
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300 resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 mr-2"
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        Kirim via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8B5A2B] to-[#6A4423] text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              {/* <Image
                src="/logo-maquro-white.png"
                alt="Maquro Al Kisai Logo"
                width={48}
                height={48}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg">Maquro Al Kisai</span>
                <span className="text-sm text-white/90">
                  Madrasah Al Quran dan Bahasa Arab
                </span>
              </div> */}
              <Image
                src="/logo-maquro.png"
                alt="Maquro Al Kisai Logo"
                width={48}
                height={48}
                className="h-12 w-auto drop-shadow-md"
                priority
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              Membentuk Generasi Qurani yang robbaniyyun melalui Pendidikan Al
              Quran dan Bahasa Arab yang berkualitas.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/maquroalkisai/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/6285311429632"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@maquroalkisai"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@maquroalkisai-official"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-cinzel font-bold text-lg">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { href: "#tentang", label: "Tentang Kami" },
                { href: "#pendaftaran", label: "Pendaftaran" },
                { href: "#program", label: "Program Unggulan" },
                { href: "#jadwal", label: "Jadwal & Lokasi" },
                { href: "#kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-cinzel font-bold text-lg">Kontak</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://wa.me/6285311429632"
                  className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mt-0.5 text-white/80 group-hover:text-white" />
                  <div className="space-y-1">
                    <span className="text-white/80 group-hover:text-white block transition-colors duration-300">
                      +62 853-1142-9632
                    </span>
                    <span className="text-white/60 text-sm">Admin 1</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/6285719662779"
                  className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 mt-0.5 text-white/80 group-hover:text-white" />
                  <div className="space-y-1">
                    <span className="text-white/80 group-hover:text-white block transition-colors duration-300">
                      +62 857-1966-2779
                    </span>
                    <span className="text-white/60 text-sm">Admin 2</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          {/* Address */}
          <div className="space-y-6">
            <h3 className="font-cinzel font-bold text-lg">Lokasi</h3>
            <div className="space-y-4">
              <Link
                href="https://maps.app.goo.gl/uaLFAaP4pNbecL6HA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 mt-1 text-white/80 group-hover:text-white flex-shrink-0" />
                <div className="space-y-2">
                  <span className="text-white/80 group-hover:text-white block transition-colors duration-300 font-medium">
                    Sekretariat Yayasan
                  </span>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Pondok Kacang Prima, Jl. Ketapang Blok I No.2, Kota
                    Tangerang Selatan, Banten 15226
                  </p>
                </div>
              </Link>{" "}
              <Link
                href="https://maps.app.goo.gl/e29KnmnzyquhUeu1A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
              >
                <MapPin className="h-5 w-5 mt-1 text-white/80 group-hover:text-white flex-shrink-0" />
                <div className="space-y-2">
                  <span className="text-white/80 group-hover:text-white block transition-colors duration-300 font-medium">
                    Maquro Al Kisai
                  </span>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Jl. Pondok Jaya No.11, Pondok Jaya Kecamatan Pondok Aren
                    Kota Tangerang Selatan, Banten 15220
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Maquro Al Kisai. Hak Cipta
              Dilindungi.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
