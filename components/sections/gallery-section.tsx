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

export default function GallerySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    return (
      <section id="galeri" ref={ref} className="py-12 md:py-20 bg-[#F5EFE7] overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3 }} // Faster animation
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Instagram
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
              Kegiatan Terbaru
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-lg text-[#5D4037]/80 max-w-3xl mx-auto">
              Ikuti perkembangan terbaru kami di Instagram
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
            className="flex justify-center"
          >
            <div className="w-full max-w-4xl">
              <iframe
                src="https://www.instagram.com/maquroalkisai/embed"
                width="100%"
                height="400" // Reduced height for mobile
                frameBorder="0"
                scrolling="no"
                className="rounded-lg shadow-md md:shadow-lg"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.3 }} // Faster animation
            className="mt-8 md:mt-12 text-center"
          >
            <Link
              href="https://www.instagram.com/maquroalkisai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 border border-[#8B5A2B] text-[#8B5A2B] rounded-full hover:bg-[#8B5A2B] hover:text-white transition-colors duration-200 font-medium text-sm md:text-base"
            >
              Kunjungi Instagram Kami
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" // Smaller icon for mobile
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
  