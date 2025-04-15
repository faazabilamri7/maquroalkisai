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
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import AdmissionSection from "@/components/sections/admission-section";

export default function RegistrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // More mobile-friendly threshold
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="registrasi" ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container px-4 sm:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 }, // Reduced initial offset
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.4, ease: "easeOut" }} // Smoother animation
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            Informasi Pendaftaran
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
            Syarat & Alur Pendaftaran
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg text-[#5D4037]/80 max-w-3xl mx-auto">
            Ikuti langkah-langkah pendaftaran dengan mudah untuk bergabung
            bersama kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 }, // Reduced offset
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="bg-[#F5EFE7] p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
              <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                Alur Pendaftaran
              </h3>

              <div className="space-y-4 md:space-y-6">
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
                    whileHover={{
                      x: 4,
                      boxShadow: "0 4px 6px -1px rgba(139, 90, 43, 0.1)",
                    }}
                    className="flex gap-4 md:gap-6 p-3 md:p-4 bg-white rounded-lg md:rounded-xl transition-all duration-200"
                  >
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-[#8B5A2B]/10 rounded-full flex items-center justify-center text-xl md:text-2xl">
                        {item.icon}
                      </div>
                      <div className="w-1 h-full bg-[#8B5A2B]/10 rounded-full"></div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="text-xs font-semibold px-2 py-0.5 md:px-3 md:py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full">
                          Langkah {index + 1}
                        </span>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-[#8B5A2B]">
                        {item.step}
                      </h4>
                      <p className="text-xs md:text-sm text-[#5D4037]/90 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Cost Details Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 }, // Reduced offset
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 md:space-y-8" // Consistent spacing
          >
            <div className="bg-[#F5EFE7] p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
              <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16" // Adjusted size
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

              <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="mt-12 md:mt-16 text-center"
      >
        <RegisterNowForm className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]" />
      </motion.div>
    </section>
  );
}
