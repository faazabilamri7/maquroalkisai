"use client";

import { useRef, useEffect, useState } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F4]">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo-maquro.png"
                alt="MaQuRo Al Kisai Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-col">
              <span className="font-bold text-[#8B5A2B]">MaQuRo Al Kisai</span>
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
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80 font-bold"
            >
              Jadwal
            </Link>
            <Link
              href="/kontak"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
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
        <ScheduleSection />
        <LocationSection />
        <CalendarSection />
        <FAQSection />
      </main>

      <footer className="bg-[#8B5A2B] text-white py-8">
        <div className="container">
          <div className="text-center">
            <p className="text-sm opacity-80">
              &copy; {new Date().getFullYear()} MaQuRo Al Kisai. Hak Cipta
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
    <section className="relative py-16 md:py-24 overflow-hidden bg-[url('/schedule-hero-bg.jpg')] bg-cover bg-center">
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
              Jadwal & Lokasi Belajar
            </h1>
            <p className="text-xl mb-8">
              Informasi lengkap mengenai jadwal kegiatan belajar mengajar dan
              lokasi MaQuRo Al Kisai
            </p>
            <Button
              size="lg"
              className="bg-white text-[#8B5A2B] hover:bg-white/90"
            >
              Lihat Jadwal
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [selectedClass, setSelectedClass] = useState("all");

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
            Jadwal Kegiatan Belajar Mengajar
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Jadwal kegiatan belajar mengajar di MaQuRo Al Kisai dirancang untuk
            memaksimalkan proses pembelajaran santri
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#8B5A2B]" />
            <span className="font-medium text-[#8B5A2B]">
              Tahun Ajaran 2025/2026
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#8B5A2B]" />
              <span className="text-sm text-[#5D4037]">Filter Kelas:</span>
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[180px] border-[#8B5A2B]/20 focus:ring-[#8B5A2B]">
                <SelectValue placeholder="Pilih Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kelas</SelectItem>
                <SelectItem value="1">Kelas 1</SelectItem>
                <SelectItem value="2">Kelas 2</SelectItem>
                <SelectItem value="3">Kelas 3</SelectItem>
                <SelectItem value="4">Kelas 4</SelectItem>
                <SelectItem value="5">Kelas 5</SelectItem>
                <SelectItem value="6">Kelas 6</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
            >
              <Download className="h-4 w-4 mr-2" /> Unduh Jadwal
            </Button>
          </div>
        </div>

        <Tabs defaultValue="regular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="regular" className="text-lg">
              Jadwal Reguler
            </TabsTrigger>
            <TabsTrigger value="special" className="text-lg">
              Kegiatan Khusus
            </TabsTrigger>
          </TabsList>

          <TabsContent value="regular">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#F5EFE7]">
                        <TableHead className="text-[#8B5A2B] font-bold">
                          Hari
                        </TableHead>
                        <TableHead className="text-[#8B5A2B] font-bold">
                          Waktu
                        </TableHead>
                        <TableHead className="text-[#8B5A2B] font-bold">
                          Kelas 1-2
                        </TableHead>
                        <TableHead className="text-[#8B5A2B] font-bold">
                          Kelas 3-6
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium" rowSpan={3}>
                          Senin
                        </TableCell>
                        <TableCell>07:15 - 08:30</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>08:30 - 10:00</TableCell>
                        <TableCell>Bahasa Arab</TableCell>
                        <TableCell>Bahasa Arab</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10:00 - 11:30</TableCell>
                        <TableCell>Matematika</TableCell>
                        <TableCell>Matematika</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium" rowSpan={3}>
                          Selasa
                        </TableCell>
                        <TableCell>07:15 - 08:30</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>08:30 - 10:00</TableCell>
                        <TableCell>Tajwid</TableCell>
                        <TableCell>Tajwid</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10:00 - 11:30</TableCell>
                        <TableCell>Bahasa Indonesia</TableCell>
                        <TableCell>Bahasa Indonesia</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium" rowSpan={3}>
                          Rabu
                        </TableCell>
                        <TableCell>07:15 - 08:30</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>08:30 - 10:00</TableCell>
                        <TableCell>Adab</TableCell>
                        <TableCell>Adab</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10:00 - 11:30</TableCell>
                        <TableCell>IPAS</TableCell>
                        <TableCell>IPAS</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium" rowSpan={4}>
                          Kamis
                        </TableCell>
                        <TableCell>07:15 - 08:30</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>08:30 - 10:00</TableCell>
                        <TableCell>Fiqh</TableCell>
                        <TableCell>Fiqh</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>10:00 - 11:30</TableCell>
                        <TableCell>Siroh Nabawiyyah</TableCell>
                        <TableCell>Siroh Nabawiyyah</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>11:30 - 13:30</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>Ekstrakurikuler</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-medium" rowSpan={2}>
                          Jumat
                        </TableCell>
                        <TableCell>07:15 - 08:30</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                        <TableCell>Tahfidz Al-Quran</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>08:30 - 10:45</TableCell>
                        <TableCell>Murojaah & Keputrian</TableCell>
                        <TableCell>Murojaah & Keputrian</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-[#F5EFE7] p-4 rounded-lg">
              <h3 className="font-semibold text-[#8B5A2B] mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" /> Catatan Jadwal:
              </h3>
              <ul className="list-disc list-inside text-[#5D4037] space-y-1">
                <li>Santri diharapkan hadir 15 menit sebelum KBM dimulai</li>
                <li>Kelas 1-2 pulang pukul 11:30 WIB</li>
                <li>Kelas 3-6 pulang pukul 13:30 WIB pada hari Senin-Kamis</li>
                <li>
                  Kegiatan ekstrakurikuler dilaksanakan setelah KBM (sesuai
                  jadwal masing-masing)
                </li>
                <li>
                  Jadwal dapat berubah sewaktu-waktu sesuai dengan kebutuhan
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="special">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Mabit (Malam Bina Iman dan Taqwa)",
                      schedule: "Setiap 3 bulan sekali",
                      desc: "Kegiatan bermalam di madrasah untuk penguatan spiritual dan kemandirian santri",
                      participants: "Seluruh santri",
                    },
                    {
                      title: "Parade Tasmi'",
                      schedule: "Akhir tahun ajaran (Juni 2026)",
                      desc: "Unjuk kemampuan hafalan Al-Quran santri di hadapan para penguji dan orang tua",
                      participants: "Seluruh santri",
                    },
                    {
                      title: "Rihlah Ilmu",
                      schedule:
                        "Semester 1: Oktober 2025, Semester 2: Maret 2026",
                      desc: "Perjalanan edukatif untuk memperluas wawasan santri",
                      participants: "Seluruh santri",
                    },
                    {
                      title: "Market dan Charity Day",
                      schedule:
                        "Semester 1: November 2025, Semester 2: April 2026",
                      desc: "Kegiatan kewirausahaan dan amal untuk melatih jiwa sosial dan bisnis santri",
                      participants: "Seluruh santri",
                    },
                    {
                      title: "Ujian Tengah Semester",
                      schedule:
                        "Semester 1: Oktober 2025, Semester 2: Maret 2026",
                      desc: "Evaluasi pembelajaran tengah semester",
                      participants: "Seluruh santri",
                    },
                    {
                      title: "Ujian Akhir Semester",
                      schedule:
                        "Semester 1: Desember 2025, Semester 2: Juni 2026",
                      desc: "Evaluasi pembelajaran akhir semester",
                      participants: "Seluruh santri",
                    },
                  ].map((event, index) => (
                    <div key={index} className="bg-[#F5EFE7] p-4 rounded-lg">
                      <h3 className="font-bold text-[#8B5A2B] mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-start gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-[#8B5A2B] mt-1 flex-shrink-0" />
                        <span className="text-[#5D4037]">{event.schedule}</span>
                      </div>
                      <p className="text-[#5D4037] mb-2">{event.desc}</p>
                      <div className="text-sm font-medium text-[#8B5A2B]">
                        Peserta: {event.participants}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function LocationSection() {
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
            Lokasi Pembelajaran
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            MaQuRo Al Kisai berlokasi di lingkungan yang nyaman dan kondusif
            untuk proses belajar mengajar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" /> Lokasi Gedung Pembelajaran
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#8B5A2B] mb-1">
                      Gedung Jariyah An Nur MAQURO AL KISAI
                    </h4>
                    <p className="text-[#5D4037]">
                      Jl. Pondok Jaya No.11
                      <br />
                      Pondok Jaya, Kecamatan Pondok Aren
                      <br />
                      Kota Tangerang Selatan, Banten 15220
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#8B5A2B] mb-1">
                      Sekretariat
                    </h4>
                    <p className="text-[#5D4037]">
                      Yayasan Risalah Cahaya Ilmu
                      <br />
                      Pondok Kacang Prima, Jl. Ketapang Blok I No.2,
                      <br />
                      RT.18/RW.8, Pondok Kacang Timur,
                      <br />
                      Kecamatan Pondok Aren,
                      <br />
                      Kota Tangerang Selatan, Banten 15226
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#8B5A2B] mb-1">
                      Kontak
                    </h4>
                    <p className="text-[#5D4037]">
                      Admin 1: +6285157706686
                      {/* <br />
                      Admin 2: +62 857-1966-2779 */}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
                    Lihat di Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#8B5A2B] mb-2">Fasilitas</h4>
                <ul className="list-disc list-inside text-[#5D4037] space-y-1">
                  <li>Ruang kelas yang nyaman dan ber-AC</li>
                  <li>Musholla</li>
                  <li>Perpustakaan</li>
                  <li>Area bermain</li>
                  <li>Kantin sehat</li>
                  <li>Toilet bersih</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[#8B5A2B] mb-2">
                  Transportasi
                </h4>
                <p className="text-[#5D4037]">
                  Lokasi mudah diakses dengan kendaraan pribadi dan transportasi
                  umum. Tersedia layanan antar-jemput santri (biaya terpisah).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
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
        </div>
      </div>
    </section>
  );
}

function CalendarSection() {
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
            Kalender Akademik
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Kalender akademik MaQuRo Al Kisai tahun ajaran 2025/2026
          </p>
        </motion.div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-4">
                  Semester 1 (Juli - Desember 2025)
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      month: "Juli 2025",
                      events: [
                        { date: "15-17", name: "Masa orientasi santri baru" },
                        { date: "18", name: "Awal tahun ajaran baru" },
                      ],
                    },
                    {
                      month: "Agustus 2025",
                      events: [
                        { date: "17", name: "Libur Hari Kemerdekaan RI" },
                        { date: "25-26", name: "Mabit Semester 1" },
                      ],
                    },
                    {
                      month: "September 2025",
                      events: [
                        {
                          date: "10",
                          name: "Libur Tahun Baru Hijriyah 1447 H",
                        },
                      ],
                    },
                    {
                      month: "Oktober 2025",
                      events: [
                        { date: "7-12", name: "Ujian Tengah Semester 1" },
                        { date: "20", name: "Rihlah Ilmu Semester 1" },
                      ],
                    },
                    {
                      month: "November 2025",
                      events: [{ date: "15", name: "Market dan Charity Day" }],
                    },
                    {
                      month: "Desember 2025",
                      events: [
                        { date: "5-10", name: "Ujian Akhir Semester 1" },
                        { date: "15", name: "Pembagian Raport Semester 1" },
                        { date: "16-31", name: "Libur Semester 1" },
                      ],
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-[#8B5A2B] mb-2">
                        {item.month}
                      </h4>
                      <ul className="space-y-1">
                        {item.events.map((event, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#8B5A2B] font-medium min-w-[50px]">
                              {event.date}
                            </span>
                            <span className="text-[#5D4037]">{event.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-4">
                  Semester 2 (Januari - Juni 2026)
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      month: "Januari 2026",
                      events: [
                        { date: "1", name: "Libur Tahun Baru 2026" },
                        { date: "2", name: "Awal masuk Semester 2" },
                      ],
                    },
                    {
                      month: "Februari 2026",
                      events: [{ date: "15-16", name: "Mabit Semester 2" }],
                    },
                    {
                      month: "Maret 2026",
                      events: [
                        { date: "6-11", name: "Ujian Tengah Semester 2" },
                        { date: "20", name: "Rihlah Ilmu Semester 2" },
                      ],
                    },
                    {
                      month: "April 2026",
                      events: [
                        { date: "10", name: "Market dan Charity Day" },
                        { date: "20-25", name: "Mabit Semester 2" },
                      ],
                    },
                    {
                      month: "Mei 2026",
                      events: [
                        { date: "1", name: "Libur Hari Buruh" },
                        { date: "15-20", name: "Persiapan Parade Tasmi'" },
                      ],
                    },
                    {
                      month: "Juni 2026",
                      events: [
                        { date: "1-6", name: "Ujian Akhir Semester 2" },
                        { date: "10", name: "Parade Tasmi'" },
                        { date: "15", name: "Pembagian Raport Semester 2" },
                        { date: "16-30", name: "Libur Akhir Tahun Ajaran" },
                      ],
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-[#8B5A2B] mb-2">
                        {item.month}
                      </h4>
                      <ul className="space-y-1">
                        {item.events.map((event, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#8B5A2B] font-medium min-w-[50px]">
                              {event.date}
                            </span>
                            <span className="text-[#5D4037]">{event.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
            <Download className="h-4 w-4 mr-2" /> Unduh Kalender Akademik
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
            Jawaban untuk pertanyaan yang sering diajukan tentang jadwal dan
            lokasi pembelajaran
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Apakah ada kegiatan belajar pada hari Sabtu dan Minggu?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Tidak, kegiatan belajar mengajar reguler di MaQuRo Al Kisai
                hanya berlangsung dari hari Senin hingga Jumat. Hari Sabtu dan
                Minggu adalah waktu libur untuk santri. Namun, terkadang ada
                kegiatan khusus seperti Mabit yang dapat dilaksanakan pada akhir
                pekan, tetapi akan diinformasikan jauh-jauh hari.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Bagaimana jika santri terlambat datang ke madrasah?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Santri yang terlambat datang ke madrasah harus melapor ke guru
                piket terlebih dahulu sebelum masuk ke kelas. Keterlambatan yang
                berulang akan ditindaklanjuti dengan pemanggilan orang tua/wali
                santri. Kami sangat menganjurkan santri untuk datang 15 menit
                sebelum KBM dimulai untuk persiapan pembelajaran.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Apakah tersedia layanan antar-jemput santri?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Ya, MaQuRo Al Kisai menyediakan layanan antar-jemput santri
                dengan biaya terpisah. Biaya layanan ini tergantung pada jarak
                tempat tinggal santri dari madrasah. Untuk informasi lebih
                lanjut dan pendaftaran layanan antar-jemput, silakan hubungi
                Admin Pendaftaran kami.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Bagaimana dengan kegiatan ekstrakurikuler?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Kegiatan ekstrakurikuler dilaksanakan setelah KBM reguler, yaitu
                mulai pukul 11:30 WIB untuk kelas 3-6. Setiap ekstrakurikuler
                memiliki jadwal yang berbeda, dan santri dapat memilih maksimal
                2 kegiatan ekstrakurikuler. Beberapa ekstrakurikuler yang
                tersedia antara lain renang, panahan, berkuda, judo, kaligrafi,
                tilawah, dan bahasa Inggris.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                Apakah tersedia layanan katering untuk santri?
              </AccordionTrigger>
              <AccordionContent className="text-[#5D4037]">
                Ya, MaQuRo Al Kisai menyediakan layanan katering untuk santri
                dengan biaya Rp 14.000/hari. Layanan katering ini wajib bagi
                santri kelas 3-6 yang pulang pada pukul 13:30 WIB. Menu katering
                dirancang dengan memperhatikan gizi seimbang dan disiapkan
                dengan standar kebersihan yang tinggi.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
