"use client";

import { useState } from "react";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

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
];

// Categories for filtering
const categories = [
  { value: "all", label: "Semua" },
  { value: "Pendidikan", label: "Pendidikan" },
  { value: "Bahasa Arab", label: "Bahasa Arab" },
  { value: "Kegiatan", label: "Kegiatan" },
  { value: "Pengumuman", label: "Pengumuman" },
];

export default function BlogSection() {
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
    <section id="blog" className="py-20 bg-[#F5EFE7]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B5A2B] mb-4">
            Artikel & Berita Terbaru
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8B5A2B] to-[#D4A574] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#5D4037]/80 max-w-3xl mx-auto">
            Informasi terkini seputar pendidikan Al Quran, kegiatan madrasah,
            dan artikel islami
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-10 justify-between items-center">
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

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
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
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
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

        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <Button
              className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
              size="lg"
            >
              Lihat Semua Artikel
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
