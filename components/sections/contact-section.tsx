
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

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Reduced amount for mobile
    const controls = useAnimation();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const form = e.target as HTMLFormElement;
      const name = (form.elements.namedItem("name") as HTMLInputElement).value;
      const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value;
  
      // Format WhatsApp message
      const whatsappMessage = `Halo Admin Maquro Al Kisai,%0A%0A*Nama*: ${name}%0A*No. WhatsApp*: +62${phone}%0A${
        email ? `*Email*: ${email}%0A` : ""
      }%0A*Pesan*:%0A${message}%0A%0ATerima kasih.`;
  
      // Open WhatsApp with prefilled message
      window.open(
        `https://wa.me/6285157706686?text=${whatsappMessage}`,
        "_blank"
      );
  
      setIsSubmitting(false);
      form.reset();
    };
  
    return (
      <section
        id="kontak"
        ref={ref}
        className="py-12 md:py-20 bg-gradient-to-b from-white to-[#F5EFE7]/30"
      >
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
              Hubungi Kami
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-bold text-[#8B5A2B] mb-4 md:mb-6">
              Kontak & Informasi
            </h2>
            <div className="w-24 md:w-32 h-1 md:h-2 bg-gradient-to-r from-[#8B5A2B] via-[#D4A574] to-[#8B5A2B] mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base md:text-lg text-[#5D4037]/80 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
              dengan informasi lebih lanjut.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 }} // Faster animation
            >
              <Card className="h-full hover:shadow-lg md:hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                    Hubungi Kami
                  </h3>
  
                  <div className="space-y-4 md:space-y-6">
                    <motion.div
                      whileHover={{ x: 4 }} // Reduced motion
                      className="p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-[#F5EFE7] transition-all duration-200"
                    >
                      <div className="flex gap-3 md:gap-4 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B5A2B]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#8B5A2B]" />
                        </div>
                        <div>
                          <p className="font-bold text-sm md:text-base text-[#8B5A2B] mb-1">
                            Info Pendaftaran
                          </p>
                          <a
                            href="https://wa.me/6285157706686"
                            className="text-xs md:text-sm text-[#5D4037] hover:text-[#8B5A2B] transition-colors block"
                          >
                            +6285157706686 (Admin 1)
                          </a>
                          {/* <a
                            href="https://wa.me/6285719662779"
                            className="text-xs md:text-sm text-[#5D4037] hover:text-[#8B5A2B] transition-colors"
                          >
                            +62 857-1966-2779 (Admin 2)
                          </a> */}
                        </div>
                      </div>
                    </motion.div>
  
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="p-4 rounded-xl hover:bg-[#F5EFE7] transition-all duration-300"
                    >
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <MapPin className="h-6 w-6 text-[#8B5A2B]" />
                        </div>
                        <div>
                          <p className="font-bold text-[#8B5A2B] mb-1">
                            Sekretariat
                          </p>
                          <a
                            href="https://maps.app.goo.gl/uaLFAaP4pNbecL6HA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors"
                          >
                            Yayasan Risalah Cahaya Ilmu
                            <br />
                            Pondok Kacang Prima, Jl. Ketapang Blok I No.2,
                            <br />
                            Kota Tangerang Selatan, Banten 15226
                          </a>
                        </div>
                      </div>
                    </motion.div>
  
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="p-4 rounded-xl hover:bg-[#F5EFE7] transition-all duration-300"
                    >
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-[#8B5A2B]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                          <Instagram className="h-6 w-6 text-[#8B5A2B]" />
                        </div>
                        <div>
                          <p className="font-bold text-[#8B5A2B] mb-1">
                            Media Sosial
                          </p>
                          <a
                            href="https://instagram.com/MaquroAlKisai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#5D4037] hover:text-[#8B5A2B] transition-colors flex items-center gap-2"
                          >
                            @MaquroAlKisai
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
  
                  <div className="mt-8">
                    <Button
                      className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-lg hover:shadow-xl transition-all duration-500 group"
                      onClick={() =>
                        window.open("https://wa.me/6285311429632", "_blank")
                      }
                    >
                      <span>Hubungi via WhatsApp</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" // Smaller icon for mobile
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 md:h-5 md:w-5 ml-2 transform group-hover:scale-110 transition-transform"
                      >
                        {/* WhatsApp icon path */}
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
  
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.2 }} // Faster animation
            >
              <Card className="h-full hover:shadow-lg md:hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold text-[#8B5A2B] mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                    {/* Email icon */}
                    Kirim Pesan
                  </h3>
  
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-xs md:text-sm font-medium text-[#5D4037]"
                        >
                          Nama Lengkap
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="w-full px-3 py-2 md:px-4 md:py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-200 text-sm md:text-base"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#5D4037]"
                        >
                          Nomor WhatsApp
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500">+62</span>
                          </div>
                          <input
                            id="phone"
                            type="tel"
                            required
                            className="w-full px-4 py-2 pl-12 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300"
                            placeholder="812-3456-7890"
                            pattern="[0-9]{4,15}"
                            title="Masukkan nomor WhatsApp yang valid"
                          />
                        </div>
                      </div>
                    </div>
  
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#5D4037]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300"
                        placeholder="Masukkan alamat email"
                      />
                    </div>
  
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#5D4037]"
                      >
                        Pesan Anda
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-[#8B5A2B]/30 rounded-lg focus:ring-2 focus:ring-[#8B5A2B]/50 focus:border-[#8B5A2B] transition-all duration-300 resize-none"
                        placeholder="Tulis pesan Anda di sini..."
                      ></textarea>
                    </div>
  
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] hover:from-[#D4A574] hover:to-[#8B5A2B] text-white shadow-md md:shadow-lg hover:shadow-lg md:hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-3 w-3 md:h-4 md:w-4 animate-spin mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            {/* Loading spinner */}
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 md:h-4 md:w-4 mr-2"
                          >
                            {/* Send icon */}
                          </svg>
                          Kirim via WhatsApp
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }