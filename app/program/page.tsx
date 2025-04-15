"use client";

import { useRef, useEffect } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BookOpen,
  Users,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProgramsPage() {
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
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80 font-bold"
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
        <CoreProgramsSection />
        <TahfidzSection />
        <ArabicSection />
        <ExtracurricularSection />
        <TestimonialsSection />
        <CTASection />
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
    <section className="relative py-20 md:py-32 overflow-hidden bg-[url('/program-hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#8B5A2B]/70 backdrop-blur-sm"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Program Unggulan Maquro Al Kisai
            </h1>
            <p className="text-xl mb-8">
              Membentuk generasi Qurani yang robbaniyyun melalui program
              pendidikan Al Quran dan Bahasa Arab yang komprehensif
            </p>
            <Button
              size="lg"
              className="bg-white text-[#8B5A2B] hover:bg-white/90"
            >
              Lihat Program Kami
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoreProgramsSection() {
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
            Program Inti
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Maquro Al Kisai menawarkan program pendidikan yang komprehensif
            untuk membentuk generasi yang unggul dalam ilmu Al Quran dan Bahasa
            Arab
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Program Tahfidz Al-Quran",
              desc: "Program hafalan Al-Quran dengan metode yang sistematis dan sanad yang terpercaya",
              icon: <BookOpen className="h-10 w-10 text-[#8B5A2B]" />,
              features: [
                "Hafalan minimal 10 juz",
                "Qiraat 'Ashim Riwayat Imam Syu'bah dan Imam Hafsh",
                "Mendapatkan sanad apabila menyelesaikan 30 juz",
                "Metode menghafal yang menyenangkan",
              ],
              image: "/tahfidz-program.jpg",
            },
            {
              title: "Program Bahasa Arab",
              desc: "Pembelajaran Bahasa Arab aktif untuk komunikasi sehari-hari dan pemahaman Al-Quran",
              icon: <Users className="h-10 w-10 text-[#8B5A2B]" />,
              features: [
                "Pembelajaran bilingual (Arab-Indonesia) harian",
                "Penguasaan Manzhumah al-Ajurrumiyyah",
                "Kemampuan berbahasa Arab aktif",
                "Metode pembelajaran yang interaktif",
              ],
              image: "/arabic-program.jpg",
            },
            {
              title: "Program Pendidikan Kesetaraan",
              desc: "Pendidikan formal setara dengan pendidikan dasar untuk melengkapi pendidikan Al-Quran",
              icon: <GraduationCap className="h-10 w-10 text-[#8B5A2B]" />,
              features: [
                "Ijazah Pendidikan Kesetaraan Paket A",
                "Pembelajaran Matematika",
                "Pembelajaran Bahasa Indonesia",
                "Pembelajaran IPAS (Ilmu Pengetahuan Alam dan Sosial)",
              ],
              image: "/formal-program.jpg",
            },
          ].map((program, index) => (
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
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-[#8B5A2B] mb-2">
                    {program.title}
                  </h3>
                  <p className="text-[#5D4037] mb-4">{program.desc}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#8B5A2B] mt-0.5 flex-shrink-0" />
                        <span className="text-[#5D4037]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TahfidzSection() {
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
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8B5A2B]/10 rounded-full"></div>
              <Image
                src="/tahfidz-detail.jpg"
                alt="Program Tahfidz Al-Quran"
                width={600}
                height={400}
                className="rounded-lg shadow-lg relative z-10"
              />
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
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4">
              Program Tahfidz Al-Quran
            </h2>
            <div className="w-20 h-1 bg-[#8B5A2B] mb-6"></div>

            <p className="text-[#5D4037] mb-6">
              Program Tahfidz Al-Quran di Maquro Al Kisai dirancang untuk
              membantu santri menghafal Al-Quran dengan metode yang sistematis
              dan menyenangkan. Santri akan dibimbing oleh para pengajar yang
              berpengalaman dan memiliki sanad yang terpercaya.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Metode Pembelajaran
                </h3>
                <p className="text-[#5D4037]">
                  Menggunakan metode talaqqi dan tasmi' yang telah terbukti
                  efektif dalam membantu santri menghafal Al-Quran dengan baik
                  dan benar sesuai dengan kaidah tajwid.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Target Hafalan
                </h3>
                <p className="text-[#5D4037]">
                  Santri diharapkan dapat menghafal minimal 10 juz selama 6
                  tahun pendidikan, dengan kesempatan untuk menyelesaikan 30 juz
                  dan mendapatkan sanad.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Evaluasi Berkala
                </h3>
                <p className="text-[#5D4037]">
                  Evaluasi hafalan dilakukan secara berkala melalui ujian
                  harian, mingguan, dan parade tasmi' tahunan untuk memastikan
                  kualitas hafalan santri.
                </p>
              </div>
            </div>

            <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
              Daftar Program Tahfidz
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArabicSection() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4">
              Program Bahasa Arab
            </h2>
            <div className="w-20 h-1 bg-[#8B5A2B] mb-6"></div>

            <p className="text-[#5D4037] mb-6">
              Program Bahasa Arab di Maquro Al Kisai dirancang untuk membekali
              santri dengan kemampuan berbahasa Arab aktif, baik dalam
              percakapan sehari-hari maupun dalam memahami teks-teks Al-Quran
              dan hadits.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#F5EFE7] p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Pembelajaran Bilingual
                </h3>
                <p className="text-[#5D4037]">
                  Santri dibiasakan berkomunikasi dalam bahasa Arab dan
                  Indonesia setiap hari untuk menciptakan lingkungan bahasa yang
                  kondusif.
                </p>
              </div>

              <div className="bg-[#F5EFE7] p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Penguasaan Tata Bahasa
                </h3>
                <p className="text-[#5D4037]">
                  Santri akan mempelajari dan menghafal Manzhumah
                  al-Ajurrumiyyah sebagai dasar pemahaman tata bahasa Arab yang
                  kuat.
                </p>
              </div>

              <div className="bg-[#F5EFE7] p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#8B5A2B] mb-2">
                  Praktik Percakapan
                </h3>
                <p className="text-[#5D4037]">
                  Metode pembelajaran interaktif dengan banyak praktik
                  percakapan untuk meningkatkan kemampuan berbicara dan
                  mendengar dalam bahasa Arab.
                </p>
              </div>
            </div>

            <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
              Daftar Program Bahasa Arab
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8B5A2B]/10 rounded-full"></div>
              <Image
                src="/arabic-detail.jpg"
                alt="Program Bahasa Arab"
                width={600}
                height={400}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExtracurricularSection() {
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
            Program Ekstrakurikuler
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Maquro Al Kisai menyediakan berbagai program ekstrakurikuler untuk
            mengembangkan bakat dan minat santri sesuai dengan sunnah Rasulullah
            SAW
          </p>
        </motion.div>

        <Tabs defaultValue="olahraga" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="olahraga" className="text-lg">
              Olahraga
            </TabsTrigger>
            <TabsTrigger value="seni" className="text-lg">
              Seni & Bahasa
            </TabsTrigger>
            <TabsTrigger value="kegiatan" className="text-lg">
              Kegiatan Rutin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="olahraga">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Renang",
                  desc: "Mengembangkan kemampuan berenang sesuai sunnah Rasulullah SAW",
                  schedule: "Setiap Jumat, 13:00 - 15:00 WIB",
                  image: "/swimming.jpg",
                },
                {
                  title: "Panahan",
                  desc: "Melatih fokus dan ketepatan dalam memanah sesuai anjuran Rasulullah SAW",
                  schedule: "Setiap Selasa, 13:30 - 15:00 WIB",
                  image: "/archery.jpg",
                },
                {
                  title: "Berkuda",
                  desc: "Belajar menunggang kuda sesuai anjuran Rasulullah SAW",
                  schedule: "Setiap Kamis, 13:30 - 15:30 WIB",
                  image: "/horse-riding.jpg",
                },
                {
                  title: "Judo/BBJ",
                  desc: "Belajar bela diri untuk perlindungan diri",
                  schedule: "Setiap Rabu, 13:30 - 15:00 WIB",
                  image: "/judo.jpg",
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
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#8B5A2B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#5D4037] mb-4">{item.desc}</p>
                      <div className="text-sm text-[#8B5A2B] font-medium">
                        {item.schedule}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seni">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Kaligrafi",
                  desc: "Belajar seni menulis indah huruf Arab",
                  schedule: "Setiap Senin, 13:30 - 15:00 WIB",
                  image: "/calligraphy.jpg",
                },
                {
                  title: "Bahasa Inggris",
                  desc: "Memperkaya kemampuan berbahasa internasional",
                  schedule: "Setiap Selasa & Kamis, 13:30 - 14:30 WIB",
                  image: "/english.jpg",
                },
                {
                  title: "Tilawah",
                  desc: "Belajar membaca Al-Quran dengan lagu dan irama yang indah",
                  schedule: "Setiap Rabu, 13:30 - 15:00 WIB",
                  image: "/tilawah.jpg",
                },
                {
                  title: "Hadrah",
                  desc: "Belajar seni musik islami dengan rebana",
                  schedule: "Setiap Jumat, 13:30 - 15:00 WIB",
                  image: "/hadrah.jpg",
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
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#8B5A2B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#5D4037] mb-4">{item.desc}</p>
                      <div className="text-sm text-[#8B5A2B] font-medium">
                        {item.schedule}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kegiatan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mabit (Malam Bina Iman dan Taqwa)",
                  desc: "Kegiatan bermalam di madrasah untuk penguatan spiritual dan kemandirian santri",
                  schedule: "Setiap 3 bulan sekali",
                  image: "/mabit.jpg",
                },
                {
                  title: "Parade Tasmi'",
                  desc: "Unjuk kemampuan hafalan Al-Quran santri di hadapan para penguji dan orang tua",
                  schedule: "Setiap akhir tahun ajaran",
                  image: "/tasmi.jpg",
                },
                {
                  title: "Rihlah Ilmu",
                  desc: "Perjalanan edukatif untuk memperluas wawasan santri",
                  schedule: "Setiap semester",
                  image: "/rihlah.jpg",
                },
                {
                  title: "Market dan Charity Day",
                  desc: "Kegiatan kewirausahaan dan amal untuk melatih jiwa sosial dan bisnis santri",
                  schedule: "Setiap semester",
                  image: "/market-day.jpg",
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
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#8B5A2B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#5D4037] mb-4">{item.desc}</p>
                      <div className="text-sm text-[#8B5A2B] font-medium">
                        {item.schedule}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function TestimonialsSection() {
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
            Testimoni Orang Tua Santri
          </h2>
          <div className="w-20 h-1 bg-[#8B5A2B] mx-auto mb-6"></div>
          <p className="text-lg text-[#5D4037] max-w-2xl mx-auto">
            Apa kata mereka tentang program pendidikan di Maquro Al Kisai
          </p>
        </motion.div>

        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                name: "Ibu Fatimah",
                role: "Orang Tua Santri Kelas 4",
                quote:
                  "Alhamdulillah, anak saya yang dulu sulit sekali menghafal Al-Quran, sekarang sudah hafal 5 juz dalam 2 tahun berkat metode pembelajaran yang menyenangkan di Maquro Al Kisai.",
                image: "/parent-1.jpg",
              },
              {
                name: "Bapak Ahmad",
                role: "Orang Tua Santri Kelas 3",
                quote:
                  "Saya sangat terkesan dengan kemampuan anak saya berbahasa Arab. Sekarang dia bisa berkomunikasi dalam bahasa Arab dengan lancar, padahal baru 1,5 tahun belajar di Maquro Al Kisai.",
                image: "/parent-2.jpg",
              },
              {
                name: "Ibu Aisyah",
                role: "Orang Tua Santri Kelas 5",
                quote:
                  "Program ekstrakurikuler di Maquro Al Kisai sangat lengkap dan sesuai dengan sunnah Rasulullah SAW. Anak saya sangat menikmati kegiatan renang dan panahan yang diadakan setiap minggu.",
                image: "/parent-3.jpg",
              },
              {
                name: "Bapak Umar",
                role: "Orang Tua Santri Kelas 2",
                quote:
                  "Saya melihat perubahan signifikan pada akhlak anak saya setelah belajar di Maquro Al Kisai. Dia menjadi lebih disiplin, mandiri, dan hormat kepada orang tua.",
                image: "/parent-4.jpg",
              },
            ].map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-1"
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#8B5A2B]">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-[#5D4037]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#5D4037] italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-[#8B5A2B]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Berikan Pendidikan Terbaik untuk Putra-Putri Anda
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Daftarkan putra-putri Anda di Maquro Al Kisai dan jadikan mereka
            generasi Qurani yang robbaniyyun. Pendaftaran untuk tahun ajaran
            2025/2026 telah dibuka!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#8B5A2B] hover:bg-white/90"
            >
              Daftar Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
