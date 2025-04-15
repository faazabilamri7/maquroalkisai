"use client";

import { useState } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Pentingnya Pendidikan Al-Quran Sejak Dini",
    excerpt:
      "Memahami manfaat pembelajaran Al-Quran pada usia emas anak untuk membentuk karakter islami yang kuat.",
    date: "12 April 2025",
    author: "Ustadz Ahmad",
    category: "Pendidikan",
    imageUrl: "/placeholder.jpg",
    slug: "pentingnya-pendidikan-alquran-sejak-dini",
  },
  {
    id: "2",
    title: "Metode Efektif Mengajarkan Bahasa Arab pada Anak",
    excerpt:
      "Teknik dan pendekatan terbaik untuk memperkenalkan bahasa Arab kepada anak-anak dengan cara yang menyenangkan.",
    date: "5 April 2025",
    author: "Ustadzah Fatimah",
    category: "Bahasa Arab",
    imageUrl: "/placeholder.jpg",
    slug: "metode-efektif-mengajarkan-bahasa-arab",
  },
  {
    id: "3",
    title: "Kegiatan Ramadhan di Maquro Al Kisai",
    excerpt:
      "Rangkaian kegiatan spiritual dan edukatif selama bulan Ramadhan untuk para santri Maquro Al Kisai.",
    date: "1 April 2025",
    author: "Admin Maquro",
    category: "Kegiatan",
    imageUrl: "/placeholder.jpg",
    slug: "kegiatan-ramadhan-maquro-alkisai",
  },
  {
    id: "4",
    title: "Tips Menjaga Semangat Belajar Al-Quran",
    excerpt:
      "Berbagai cara untuk mempertahankan konsistensi dan semangat dalam mempelajari Al-Quran.",
    date: "25 Maret 2025",
    author: "Ustadz Mahmud",
    category: "Pendidikan",
    imageUrl: "/placeholder.jpg",
    slug: "tips-menjaga-semangat-belajar-alquran",
  },
  {
    id: "5",
    title: "Persiapan Penerimaan Santri Baru 2025",
    excerpt:
      "Informasi lengkap mengenai jadwal, persyaratan, dan proses pendaftaran santri baru tahun ajaran 2025/2026.",
    date: "20 Maret 2025",
    author: "Admin Maquro",
    category: "Pengumuman",
    imageUrl: "/placeholder.jpg",
    slug: "persiapan-penerimaan-santri-baru-2025",
  },
  {
    id: "6",
    title: "Prestasi Santri Maquro Al Kisai di Kompetisi Nasional",
    excerpt:
      "Keberhasilan para santri dalam berbagai kompetisi Al-Quran dan Bahasa Arab tingkat nasional.",
    date: "15 Maret 2025",
    author: "Ustadzah Khadijah",
    category: "Prestasi",
    imageUrl: "/placeholder.jpg",
    slug: "prestasi-santri-kompetisi-nasional",
  },
];

// Categories for filtering
const categories = [
  { value: "all", label: "Semua" },
  { value: "Pendidikan", label: "Pendidikan" },
  { value: "Bahasa Arab", label: "Bahasa Arab" },
  { value: "Kegiatan", label: "Kegiatan" },
  { value: "Pengumuman", label: "Pengumuman" },
  { value: "Prestasi", label: "Prestasi" },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              href="/#pendaftaran"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Pendaftaran
            </Link>
            <Link
              href="/#program"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Program
            </Link>
            <Link
              href="/#jadwal"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Jadwal
            </Link>
            <Link
              href="/#kontak"
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80"
            >
              Kontak
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-white bg-[#8B5A2B] px-3 py-1 rounded-md hover:bg-[#6A4423]"
            >
              Blog
            </Link>
          </nav>
          <button className="md:hidden p-2 text-[#8B5A2B] hover:bg-[#8B5A2B]/10 rounded-lg transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className="py-12 md:py-20 bg-[#8B5A2B]">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
              >
                Blog & Artikel
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-24 h-1.5 bg-white mx-auto mb-6 rounded-full"
              ></motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-white/90 max-w-2xl"
              >
                Informasi terkini seputar pendidikan Al Quran, kegiatan
                madrasah, dan artikel islami
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
              {/* Back to home */}
              <Link
                href="/"
                className="flex items-center gap-2 text-[#8B5A2B] hover:text-[#6A4423] transition-colors duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Link>

              {/* Search */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B5A2B]/60 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Cari artikel..."
                  className="pl-10 border-[#8B5A2B]/20 focus:border-[#8B5A2B] focus:ring-[#8B5A2B]/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  className={
                    selectedCategory === category.value
                      ? "bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
                      : "border-[#8B5A2B]/30 text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                  }
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Number(post.id) * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-[#8B5A2B] text-white text-xs font-medium py-1 px-2 rounded">
                          {post.category}
                        </div>
                      </div>
                      <CardContent className="flex-grow p-6">
                        <div className="flex items-center text-sm text-[#8B5A2B]/70 mb-3 gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3.5 w-3.5" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#8B5A2B] mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#5D4037]/80 line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#8B5A2B] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                        >
                          <span>Baca selengkapnya</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white/50 rounded-lg">
                <p className="text-[#8B5A2B]/70 text-lg">
                  Tidak ada artikel yang ditemukan.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[#8B5A2B] text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <Image
                src="/logo-maquro.png"
                alt="Maquro Al Kisai Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold">Maquro Al Kisai</span>
                <span className="text-xs text-white/80">
                  Madrasah Al Quran dan Bahasa Arab
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <Link href="/" className="text-white/90 hover:text-white">
                Beranda
              </Link>
              <Link href="/#tentang" className="text-white/90 hover:text-white">
                Tentang
              </Link>
              <Link href="/#program" className="text-white/90 hover:text-white">
                Program
              </Link>
              <Link href="/#kontak" className="text-white/90 hover:text-white">
                Kontak
              </Link>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-6 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Maquro Al Kisai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
