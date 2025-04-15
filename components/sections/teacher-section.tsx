
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

export default function TeachersSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <section id="pengajar" ref={ref} className="py-12 md:py-20 bg-[#F5EFE7]">
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
              Tim Pengajar
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
              Tenaga Pengajar dan Pembina
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-lg text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
              Tim pengajar berkompeten dengan sertifikasi dalam bidang Al Quran
              dan bahasa Arab serta berpengalaman dari berbagai perguruan tinggi
              terkemuka.
            </p>
          </motion.div>
  
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.2, delay: 0.05 * index }} // Faster animation
                  whileHover={{ y: -4 }} // Reduced motion
                  className="h-full"
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-4 md:p-6 bg-white">
                      <h4 className="text-base md:text-lg font-bold text-[#8B5A2B] mb-1 md:mb-2 group-hover:text-[#D4A574] transition-colors duration-200">
                        {teacher.name}
                      </h4>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-[#8B5A2B]/10 text-[#8B5A2B] text-xs md:text-sm font-medium rounded-full">
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
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
            className="text-center mb-6 md:mb-8"
          >
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B]">
              Standar Kualifikasi Guru
            </h3>
            <p className="text-sm md:text-base text-[#5D4037]/80 mt-1 md:mt-2">
              Kriteria utama yang harus dimiliki setiap pengajar di Maquro Al
              Kisai
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.3 }} // Faster animation
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
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
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.2, delay: 0.05 * index }} // Faster animation
                whileHover={{ y: -4 }} // Reduced motion
                className="group"
              >
                <Card className="border-none bg-white hover:bg-[#8B5A2B] transition-colors duration-300 h-full">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-[#8B5A2B]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl group-hover:bg-white/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-[#8B5A2B] mb-1 md:mb-2 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#5D4037] group-hover:text-white/80 transition-colors duration-300">
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