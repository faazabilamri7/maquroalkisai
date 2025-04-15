
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
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
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
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3 }} // Faster animation
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
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 }} // Faster animation
              className="space-y-6 md:space-y-8"
            >
              <div className="bg-[#F5EFE7] p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                    {/* ... icon svg ... */}
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
                      whileHover={{ x: 4 }} // Reduced motion
                      className="flex gap-4 md:gap-6 p-3 md:p-4 bg-white rounded-lg md:rounded-xl hover:shadow-sm md:hover:shadow-md transition-all duration-200"
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
  
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
              className="space-y-6 md:space-y-8"
            >
              <div className="bg-[#F5EFE7] p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl">
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white">
                    {/* ... icon svg ... */}
                  </div>
                  Rincian Biaya
                </h3>
  
                <Card className="overflow-hidden shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-200">
                  {/* ... cost details with similar mobile optimizations ... */}
                </Card>
  
                <div className="mt-4 md:mt-6 p-4 md:p-6 bg-white rounded-lg md:rounded-xl border border-[#8B5A2B]/10">
                  <h4 className="font-bold text-sm md:text-base text-[#8B5A2B] mb-3 md:mb-4 flex items-center gap-1 md:gap-2">
                    {/* ... icon svg ... */}
                    Biaya Tambahan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {/* ... additional costs with similar mobile optimizations ... */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
  
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.3 }} // Faster animation
            className="mt-12 md:mt-16 text-center"
          >
            <RegisterNowForm
              className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] md:hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>
    );
  }