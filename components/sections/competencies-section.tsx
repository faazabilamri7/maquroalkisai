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

export default function CompetenciesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="kompetensi" ref={ref} className="py-12 md:py-20 bg-[#F5EFE7]">
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
            Kompetensi Lulusan
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
            10 Standar Kompetensi Utama
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base md:text-lg lg:text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Setiap lulusan Maquro Al Kisai dibekali dengan kompetensi yang
            komprehensif dalam bidang Al Quran dan Bahasa Arab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {competencies.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.2, delay: 0.05 * index }} // Faster animation
              whileHover={{ y: -4, transition: { duration: 0.2 } }} // Reduced motion
              className="group"
            >
              <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full border-t-4 border-[#8B5A2B] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#8B5A2B]/5 to-transparent rounded-bl-full transform translate-x-4 md:translate-x-8 -translate-y-4 md:-translate-y-8 group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:-translate-y-2 md:group-hover:-translate-y-4 transition-transform duration-300"></div>

                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] rounded-lg md:rounded-2xl flex items-center justify-center text-xl md:text-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <span className="w-6 h-6 md:w-8 md:h-8 bg-[#8B5A2B]/10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold text-[#8B5A2B]">
                    {index + 1}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#8B5A2B] mb-2 md:mb-3 group-hover:text-[#D4A574] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#5D4037]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
