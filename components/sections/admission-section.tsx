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

export default function AdmissionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <section id="pendaftaran" ref={ref} className="py-12 md:py-24 bg-[#F5EFE7]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-center mb-12 md:mb-20"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Penerimaan Santri Baru
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold text-[#8B5A2B] mb-4 md:mb-6 tracking-tight leading-tight">
              Tahun Ajaran 2025/2026
            </h2>
            <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037]/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Mari bergabung bersama kami dalam membentuk generasi Qurani yang
              berkualitas
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 }} // Faster animation
              className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-300 border-t-4 border-[#8B5A2B] relative overflow-hidden group"
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
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
              className="space-y-6 md:space-y-10"
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
  