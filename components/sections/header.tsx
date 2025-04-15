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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Reduced threshold for mobile
    };
    window.addEventListener("scroll", handleScroll, { passive: true }); // Added passive for performance
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => setIsMobileMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        // Reduced duration
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent" // Reduced blur for performance
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
        >
          <Image
            src="/logo-maquro.png"
            alt="Maquro Al Kisai Logo"
            width={48}
            height={48}
            className="h-12 w-auto drop-shadow-md"
            priority
          />
          {/* <span
              className={`font-semibold text-lg transition-colors duration-300 ${
                isScrolled ? "text-[#8B5A2B]" : "text-white"
              }`}
            >
              Maquro Al Kisai
            </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {[
            { href: "#tentang", label: "Tentang" },
            { href: "#pendaftaran", label: "Pendaftaran" },
            { href: "#program", label: "Program" },
            { href: "#kompetensi", label: "Kompetensi" },
            { href: "#jadwal", label: "Jadwal" },
            { href: "#pengajar", label: "Pengajar" },
            { href: "#registrasi", label: "Registrasi" },
            { href: "#galeri", label: "Galeri" },
            { href: "#kontak", label: "Kontak" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-base font-medium transition-all duration-300 hover:text-[#8B5A2B] group ${
                isScrolled ? "text-[#8B5A2B]" : "text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5A2B] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <RegisterNowForm
            className={`hidden md:flex bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm px-4 py-2`}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                : "text-white hover:bg-white/10"
            } md:hidden`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-[#8B5A2B]/10 w-full fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto" // Added max-height and scroll
      >
        <nav className="container py-3 space-y-1 px-4">
          {" "}
          {/* Reduced spacing */}
          {[
            { href: "#tentang", label: "Tentang" },
            { href: "#pendaftaran", label: "Pendaftaran" },
            { href: "#program", label: "Program" },
            { href: "#kompetensi", label: "Kompetensi" },
            { href: "#jadwal", label: "Jadwal" },
            { href: "#pengajar", label: "Pengajar" },
            { href: "#registrasi", label: "Registrasi" },
            { href: "#galeri", label: "Galeri" },
            { href: "#kontak", label: "Kontak" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.documentElement.style.overflow = ""; // Reset overflow
              }}
              className="block px-4 py-3 text-[#8B5A2B] hover:bg-[#8B5A2B]/5 active:bg-[#8B5A2B]/10 rounded-lg transition-colors duration-150 text-base font-medium" // Faster transition
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 pt-1 pb-3">
            {" "}
            {/* Reduced padding */}
            <RegisterNowForm className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] text-white shadow-md active:shadow-lg transition-all duration-150 py-2.5 text-sm" />
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
