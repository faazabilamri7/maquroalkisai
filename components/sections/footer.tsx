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
              {/* Social media icons with responsive sizing */}
              <Link
                href="https://www.instagram.com/maquroalkisai/"
                className="p-1.5 md:p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <Link
                href="https://wa.me/6285311429632"
                className="flex items-start gap-2 md:gap-3 group hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-white/80 group-hover:text-white" />
                <div className="space-y-0.5 md:space-y-1">
                  <span className="text-white/80 group-hover:text-white block transition-colors duration-200">
                    +62 853-1142-9632
                  </span>
                  <span className="text-white/60 text-xs md:text-sm">
                    Admin 1
                  </span>
                </div>
              </Link>
              <Link
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
                  href="https://wa.me/6285311429632"
                  className="flex items-start gap-2 md:gap-3 group hover:bg-white/5 p-1.5 md:p-2 rounded-lg transition-colors duration-200 text-sm md:text-base"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-white/80 group-hover:text-white" />
                  <div className="space-y-0.5 md:space-y-1">
                    <span className="text-white/80 group-hover:text-white block transition-colors duration-200">
                      +62 853-1142-9632
                    </span>
                    <span className="text-white/60 text-xs md:text-sm">
                      Admin 1
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
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
                </Link>
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
