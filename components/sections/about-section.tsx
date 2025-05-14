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

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="tentang" ref={ref} className="py-12 md:py-20 bg-white">
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
            Tentang Kami
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-3 md:mb-4">
            Tentang Maquro Al Kisai
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-[#5D4037]/80 max-w-3xl mx-auto leading-relaxed">
            Membentuk Generasi Qurani yang berkualitas melalui Pendidikan Al
            Quran dan Bahasa Arab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-[#F5EFE7] to-white p-6 md:p-8 rounded-xl md:rounded-2xl border-l-4 border-[#8B5A2B] shadow-md hover:shadow-lg transition-all duration-300" // Faster transition
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-1.5 h-8 md:h-10 bg-gradient-to-b from-[#8B5A2B] to-[#D4A574] rounded-full"></div>
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B]">
                  Filosofi
                </h3>
              </div>
              <p className="text-base md:text-lg text-[#5D4037] italic leading-relaxed">
                "Cahaya itu di rumah-rumah yang di sana telah diperintahkan
                Allah untuk memuliakan dan menyebut namanya, di sana bertasbih
                (menyucikan) nama-Nya pada pagi dan petang."
              </p>
              <p className="text-sm md:text-base text-[#8B5A2B]/80 mt-3 md:mt-4 font-medium">
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
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
            className="relative group perspective-1000 mt-8 md:mt-0"
          >
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] rounded-xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

            <div className="relative z-10 overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500">
              <Image
                src="/pendaftaran.jpg"
                alt="Pendaftaran Santri Baru"
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Pendaftaran Santri Baru
                </h3>
                <p className="text-white/90 text-sm mt-1">
                  Yuk segera daftarkan putra-putri anda untuk bergabung bersama
                  kami
                </p>
              </div>
            </div>

            {/* <div className="relative z-10 overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500">
              <Image
                src="/madrasah-building.jpg"
                alt="Gedung Maquro Al Kisai"
                width={600}
                height={400}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                priority
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
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
