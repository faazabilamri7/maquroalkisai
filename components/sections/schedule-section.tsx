
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

export default function ScheduleSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    return (
      <section id="jadwal" ref={ref} className="py-12 md:py-20 bg-white">
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
              Informasi Pembelajaran
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
              Jadwal & Lokasi Belajar
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
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
              <Card className="overflow-hidden transform hover:scale-[1.01] md:hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                <div className="bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] text-white p-4 md:p-6">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold mb-1 md:mb-2 flex items-center gap-2 md:gap-3">
                    <Clock className="h-5 w-5 md:h-6 md:w-6" />
                    Jam Kegiatan Belajar
                  </h3>
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="space-y-4 md:space-y-6">
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
  
              <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01] border-l-4 border-[#8B5A2B]">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#8B5A2B] to-[#D4A574] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-6 md:w-6 text-white" />
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
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
              className="relative group mt-6 md:mt-0"
            >
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] rounded-xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7331111493997!2d106.71758462685011!3d-6.268016060940748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMDQuOSJTIDEwNsKwNDMnMDMuMyJF!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl md:rounded-2xl"
                ></iframe>
              </div>
              <Button
                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-colors duration-200 shadow-md text-xs md:text-sm px-3 py-1 md:px-4 md:py-2"
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