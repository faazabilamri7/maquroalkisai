"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Phone, MapPin, Instagram, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FBF7F4]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo-maquro.png"
                alt="Maquro Al Kisai Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-col">
              <span className="font-bold text-[#8B5A2B]">Maquro Al Kisai</span>
              <span className="text-xs text-[#8B5A2B]/80">
                Madrasah Al Quran dan Bahasa Arab
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#tentang"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Tentang
            </Link>
            <Link
              href="/pendaftaran"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Pendaftaran
            </Link>
            <Link
              href="/program"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Program
            </Link>
            <Link
              href="/jadwal"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Jadwal
            </Link>
            <Link
              href="/kontak"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80 font-bold"
            >
              Kontak
            </Link>
          </nav>
          <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
            Daftar Sekarang
          </Button>
        </div>
      </header>

      <main>
        <HeroSection />
        <ContactInfoSection />
        <ContactFormSection
          formStatus={formStatus}
          handleSubmit={handleSubmit}
        />
        <MapSection />
        <FAQSection />
      </main>

      <footer className="bg-[#8B5A2B] text-white py-8">
        <div className="container">
          <div className="text-center">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} Maquro Al Kisai. Hak Cipta
              Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[url('/contact-hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#8B5A2B]/70 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl mb-8">
              Kami siap membantu Anda dengan informasi lebih lanjut tentang
              Maquro Al Kisai
            </p>
            <Button
              size="lg"
              className="bg-white text-[#8B5A2B] hover:bg-white/90"
            >
              Kirim Pesan
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-4">
            Informasi Kontak
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Silakan hubungi kami melalui berbagai saluran komunikasi berikut
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Telepon",
              desc: "Hubungi kami melalui telepon untuk informasi lebih lanjut",
              icon: <Phone className="h-10 w-10 text-[#8B5A2B]" />,
              details: [
                "Admin 1: +6285157706686",
                // "Admin 2: +62 857-1966-2779",
                "Jam Operasional: 08.00 - 16.00 WIB",
              ],
            },
            {
              title: "Alamat",
              desc: "Kunjungi kami di lokasi madrasah atau sekretariat",
              icon: <MapPin className="h-10 w-10 text-[#8B5A2B]" />,
              details: [
                "Gedung Jariyah An Nur MAQURO AL KISAI",
                "Jl. Pondok Jaya No.11, Pondok Jaya",
                "Kecamatan Pondok Aren, Kota Tangerang Selatan, Banten 15220",
              ],
            },
            {
              title: "Media Sosial",
              desc: "Ikuti kami di media sosial untuk informasi terbaru",
              icon: <Instagram className="h-10 w-10 text-[#8B5A2B]" />,
              details: [
                "Instagram: @MaquroAlKisai",
                "Email: info@maquroalkisai.sch.id",
                "Website: www.maquroalkisai.sch.id",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#8B5A2B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5D4037] mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-[#5D4037]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection({
  formStatus,
  handleSubmit,
}: {
  formStatus: null | "success" | "error";
  handleSubmit: (e: React.FormEvent) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 bg-[#F5EFE7]">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-4">
            Kirim Pesan
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Silakan isi formulir di bawah ini untuk mengirimkan pesan kepada
            kami
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              {formStatus === "success" ? (
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-700">
                        Pesan Anda telah berhasil dikirim. Kami akan segera
                        menghubungi Anda kembali.
                      </p>
                    </div>
                  </div>
                </div>
              ) : formStatus === "error" ? (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        Terjadi kesalahan saat mengirim pesan. Silakan coba lagi
                        nanti.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#5D4037]">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#5D4037]">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan alamat email"
                      className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#5D4037]">
                      Nomor Telepon <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Masukkan nomor telepon"
                      className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#5D4037]">
                      Subjek <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Masukkan subjek pesan"
                      className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="message" className="text-[#5D4037]">
                    Pesan <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini..."
                    className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
                >
                  <Send className="h-4 w-4 mr-2" /> Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-4">
            Lokasi Kami
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Kunjungi Maquro Al Kisai di lokasi yang strategis dan mudah diakses
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[500px] rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7331111493997!2d106.7!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        <div className="mt-8 text-center">
          <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
            Lihat di Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-20 bg-[#F5EFE7]">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan tentang MaQuRo Al
            Kisai
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Bagaimana cara mendaftar di Maquro Al Kisai?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Untuk mendaftar di Maquro Al Kisai, Anda dapat mengisi formulir
                pendaftaran online di website kami atau datang langsung ke
                sekretariat kami. Setelah mengisi formulir dan membayar biaya
                pendaftaran, calon santri akan mengikuti tes seleksi yang
                meliputi tes baca Al-Quran, wawancara santri dan orang tua.
                Hasil seleksi akan diumumkan maksimal 7 hari setelah tes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Berapa biaya pendidikan di Maquro Al Kisai?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Total biaya pendaftaran adalah Rp 5.450.000 yang mencakup
                formulir pendaftaran, seragam, uang kegiatan tahunan, dan infak
                gedung. SPP bulanan sebesar Rp 490.000. Biaya tambahan lainnya
                meliputi raport (Rp 60.000), buku sesuai kurikulum, katering (Rp
                14.000/hari dimulai kelas 3), dan biaya ekstrakurikuler bagi
                yang mengikuti.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Apakah Maquro Al Kisai menyediakan program beasiswa?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Ya, Maquro Al Kisai menyediakan program beasiswa untuk santri
                berprestasi dan santri dari keluarga kurang mampu. Program
                beasiswa ini mencakup keringanan biaya pendaftaran dan/atau SPP
                bulanan. Untuk informasi lebih lanjut tentang program beasiswa,
                silakan hubungi Admin Pendaftaran kami.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Apa saja fasilitas yang tersedia di Maquro Al Kisai?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Maquro Al Kisai menyediakan berbagai fasilitas untuk mendukung
                proses belajar mengajar, antara lain ruang kelas yang nyaman dan
                ber-AC, musholla, perpustakaan, area bermain, kantin sehat, dan
                toilet bersih. Selain itu, kami juga menyediakan layanan
                antar-jemput santri dengan biaya terpisah.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Bagaimana jika saya memiliki pertanyaan lain?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Jika Anda memiliki pertanyaan lain, silakan hubungi kami melalui
                formulir kontak di website ini, atau hubungi langsung Admin
                Pendaftaran kami di nomor +6285157706686 (Admin). Kami siap membantu Anda dengan
                informasi lebih lanjut tentang Maquro Al Kisai.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
