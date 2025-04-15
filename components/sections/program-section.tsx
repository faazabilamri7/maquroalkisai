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
import React from "react";

export default function ProgramsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <section id="program" ref={ref} className="py-12 md:py-20 bg-white">
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
              Program & Kegiatan
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
              Program Unggulan & Kegiatan Santri
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-lg text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan berbagai program unggulan dan kegiatan yang
              dirancang untuk mengembangkan potensi santri secara optimal
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
              <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
                Kegiatan Santri
              </h3>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
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
                    className="hover:shadow-md transition-all duration-200" // Faster transition
                  >
                    <CardContent className="p-4 md:p-6 flex gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5A2B]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                        {React.cloneElement(item.icon, { 
                          className: "h-5 w-5 md:h-6 md:w-6 text-[#8B5A2B]" 
                        })}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base text-[#8B5A2B] mb-1 md:mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-sm text-[#5D4037]/80 mb-1 md:mb-2">
                          {item.desc}
                        </p>
                        <span className="text-xs font-medium text-[#8B5A2B] bg-[#8B5A2B]/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full">
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
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
              className="space-y-6 md:space-y-8"
            >
              <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
                Program Ekstrakurikuler
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                    className={`overflow-hidden hover:shadow-md transition-all duration-200 h-full flex flex-col ${item.rowSpan}`}
                  >
                    <div className="relative h-36 md:h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2} // Prioritize first 2 images
                      />
                    </div>
                    <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                      <h4 className="font-bold text-sm md:text-base text-[#8B5A2B] mb-1 md:mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-[#5D4037]/80 flex-1">
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
  