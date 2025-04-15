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

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-20 md:pt-32 pb-12 md:pb-32 overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-fixed px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B5A2B]/70 to-[#8B5A2B]/40 backdrop-blur-[1px] md:backdrop-blur-[2px]"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center min-h-[calc(90vh-3rem)] md:min-h-[calc(100vh-10rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white space-y-6 md:space-y-8" // Increased base spacing
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-3 md:space-y-4" // Increased base spacing
            >
              <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium mt-4 md:mt-0">
                {" "}
                Selamat Datang di Website Resmi Maquro Al Kisai
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold leading-tight tracking-tight">
                MADRASAH PENDIDIKAN AL QURAN DAN BAHASA ARAB AL KISAI
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-2xl font-medium text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }} // Faster animation
            >
              Membentuk Generasi Qurani yang Robbaniyyun dengan Pendidikan
              Berkualitas
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }} // Faster animation
            >
              <Button
                size="lg"
                className="text-sm sm:text-base bg-white text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-medium px-4 sm:px-6"
              >
                Penerimaan Santri Baru
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#8B5A2B] shadow-lg backdrop-blur-sm transition-all duration-500 transform hover:scale-105 flex items-center gap-2 font-medium group px-4 sm:px-6"
              >
                <span>Tentang Maquro Al Kisai</span>
                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }} // Faster animation
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 pt-2 px-1"
            >
              {[
                { label: "Standar Kompetensi", value: "10" },
                { label: "Ekstrakulikuler", value: "7" },
                { label: "Kegiatan Santri", value: "8" },
                { label: "Kompetensi Kelulusan", value: "5" },
              ].map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-xl sm:text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} // Simpler animation
            className="flex justify-center w-full mt-6 md:mt-0"
          >
            <div className="relative group w-full max-w-md sm:max-w-lg md:max-w-2xl aspect-video rounded-lg overflow-hidden shadow-xl md:shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/bSIOoVSvlhk?autoplay=1&mute=1&controls=1&cc_load_policy=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full transform transition-all duration-700 hover:scale-105 max-w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 group"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.8,
          }}
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
