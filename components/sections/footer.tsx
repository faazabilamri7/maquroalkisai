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

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8B5A2B] to-[#6A4423] text-white py-12 md:py-16">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-maquro.png"
                alt="Maquro Al Kisai Logo"
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto drop-shadow-md"
                priority
              />
            </div>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Membentuk Generasi Qurani yang robbaniyyun melalui Pendidikan Al
              Quran dan Bahasa Arab yang berkualitas.
            </p>
            <div className="flex gap-3 md:gap-4">
              <Link
                href="https://www.instagram.com/maquroalkisai/"
                className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="https://wa.me/6285157706686"
                className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@maquroalkisai"
                className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@maquroalkisai-official"
                className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-cinzel font-bold text-base md:text-lg">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 md:space-y-3">
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
                    className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-white/60 group-hover:bg-white transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-cinzel font-bold text-base md:text-lg">
              Kontak
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <Link
                  href="https://wa.me/6285157706686"
                  className="flex items-start gap-2 md:gap-3 group hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-white/80 group-hover:text-white" />
                  <div className="space-y-0.5 md:space-y-1">
                    <span className="text-white/80 group-hover:text-white block transition-colors duration-200">
                    +6285157706686
                    </span>
                    <span className="text-white/60 text-xs md:text-sm">
                      Admin 1
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                {/* <Link
                  href="https://wa.me/6285719662779"
                  className="flex items-start gap-3 group hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-white/80 group-hover:text-white" />
                  <div className="space-y-1">
                    <span className="text-white/80 group-hover:text-white block transition-colors duration-300">
                      +62 857-1966-2779
                    </span>
                    <span className="text-white/60 text-sm">Admin 2</span>
                  </div>
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-cinzel font-bold text-base md:text-lg">
              Lokasi
            </h3>
            <div className="space-y-3 md:space-y-4">
              <Link
                href="https://maps.app.goo.gl/uaLFAaP4pNbecL6HA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 md:gap-3 group hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-white/80 group-hover:text-white flex-shrink-0" />
                <div className="space-y-1 md:space-y-2">
                  <span className="text-white/80 group-hover:text-white block transition-colors duration-200 font-medium">
                    Sekretariat Yayasan
                  </span>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                    Pondok Kacang Prima, Jl. Ketapang Blok I No.2, Kota
                    Tangerang Selatan, Banten 15226
                  </p>
                </div>
              </Link>
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

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Maquro Al Kisai. Hak Cipta
              Dilindungi.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/privacy"
                className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
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
