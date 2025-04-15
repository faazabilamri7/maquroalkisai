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
import ProgramsSection from "@/components/sections/program-section";
import CompetenciesSection from "@/components/sections/competencies-section";
import ScheduleSection from "@/components/sections/schedule-section";
import TeachersSection from "@/components/sections/teacher-section";
import RegistrationSection from "@/components/sections/registration-section";
import GallerySection from "@/components/sections/gallery-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBF7F4] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdmissionSection />
        <ProgramsSection />
        <CompetenciesSection />
        <ScheduleSection />
        <TeachersSection />
        <RegistrationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}





