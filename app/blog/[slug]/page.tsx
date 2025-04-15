"use client";

import { useEffect } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type BlogPost = {
  id: string;
  title: string;
  content: string;
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
    content: `<p>Pendidikan Al-Quran sejak dini memiliki peran yang sangat penting dalam membentuk karakter dan kepribadian anak. Pada usia dini, anak-anak memiliki kemampuan menyerap informasi yang luar biasa, sehingga ini menjadi waktu yang tepat untuk memperkenalkan mereka pada Al-Quran.</p>

<p>Beberapa manfaat pendidikan Al-Quran sejak dini antara lain:</p>

<ol>
<li><strong>Pembentukan Karakter Islami</strong> - Nilai-nilai yang terkandung dalam Al-Quran akan tertanam dalam diri anak sejak kecil, membentuk fondasi karakter yang kuat.</li>
<li><strong>Kemudahan Menghafal</strong> - Anak-anak memiliki daya ingat yang lebih baik dibandingkan orang dewasa, sehingga proses menghafal Al-Quran akan lebih mudah.</li>
<li><strong>Meningkatkan Kecerdasan</strong> - Membaca dan menghafal Al-Quran dapat meningkatkan kemampuan kognitif dan konsentrasi anak.</li>
<li><strong>Menanamkan Kecintaan pada Al-Quran</strong> - Memperkenalkan Al-Quran sejak dini akan menumbuhkan kecintaan anak terhadap kitab suci ini.</li>
</ol>

<p>Di Maquro Al Kisai, kami menerapkan metode pembelajaran Al-Quran yang menyenangkan dan sesuai dengan perkembangan anak. Dengan pendekatan yang tepat, anak-anak akan merasa senang dan termotivasi untuk belajar Al-Quran.</p>

<p>Pendidikan Al-Quran bukan hanya tentang membaca dan menghafal, tetapi juga memahami nilai-nilai yang terkandung di dalamnya. Oleh karena itu, kami juga mengajarkan tafsir dan makna ayat-ayat Al-Quran dengan cara yang mudah dipahami oleh anak-anak.</p>

<p>Mari bersama-sama menanamkan kecintaan pada Al-Quran kepada anak-anak kita sejak dini, sebagai bekal mereka menghadapi tantangan kehidupan di masa depan.</p>`,
    date: "12 April 2025",
    author: "Ustadz Ahmad",
    category: "Pendidikan",
    imageUrl: "/placeholder.jpg",
    slug: "pentingnya-pendidikan-alquran-sejak-dini",
  },
  {
    id: "2",
    title: "Metode Efektif Mengajarkan Bahasa Arab pada Anak",
    content: `<p>Bahasa Arab merupakan bahasa yang memiliki kedudukan istimewa bagi umat Islam. Selain sebagai bahasa Al-Quran, bahasa Arab juga menjadi kunci untuk memahami ajaran Islam secara lebih mendalam. Mengajarkan bahasa Arab kepada anak-anak membutuhkan pendekatan khusus agar mereka dapat mempelajarinya dengan mudah dan menyenangkan.</p>

<p>Berikut beberapa metode efektif untuk mengajarkan bahasa Arab pada anak:</p>

<ol>
<li><strong>Belajar Melalui Permainan</strong> - Anak-anak cenderung lebih mudah menyerap pelajaran melalui aktivitas yang menyenangkan. Gunakan permainan seperti tebak kata, puzzle, atau kartu bergambar untuk memperkenalkan kosakata bahasa Arab.</li>
<li><strong>Penggunaan Media Audio-Visual</strong> - Memanfaatkan video, lagu, atau cerita bergambar dapat membantu anak-anak mempelajari bahasa Arab dengan cara yang lebih menarik.</li>
<li><strong>Praktik Percakapan Sederhana</strong> - Ajarkan anak-anak percakapan sederhana dalam bahasa Arab dan dorong mereka untuk mempraktikkannya dalam kehidupan sehari-hari.</li>
<li><strong>Pengenalan Huruf Hijaiyah</strong> - Mulailah dengan mengajarkan huruf hijaiyah sebagai dasar untuk membaca dan menulis bahasa Arab.</li>
</ol>

<p>Di Maquro Al Kisai, kami menerapkan metode pembelajaran bahasa Arab yang komprehensif dan sesuai dengan tingkat perkembangan anak. Kami percaya bahwa dengan pendekatan yang tepat, setiap anak dapat menguasai bahasa Arab dengan baik.</p>

<p>Pembelajaran bahasa Arab tidak hanya bermanfaat untuk memahami Al-Quran, tetapi juga membuka wawasan anak terhadap budaya dan peradaban Islam. Mari bersama-sama memperkenalkan keindahan bahasa Arab kepada generasi penerus kita.</p>`,
    date: "5 April 2025",
    author: "Ustadzah Fatimah",
    category: "Bahasa Arab",
    imageUrl: "/placeholder.jpg",
    slug: "metode-efektif-mengajarkan-bahasa-arab",
  },
  {
    id: "3",
    title: "Kegiatan Ramadhan di Maquro Al Kisai",
    content: `<p>Bulan Ramadhan merupakan bulan yang istimewa bagi umat Islam. Di Maquro Al Kisai, kami menyambut bulan suci ini dengan berbagai kegiatan spiritual dan edukatif yang dirancang khusus untuk para santri.</p>

<p>Berikut rangkaian kegiatan Ramadhan di Maquro Al Kisai:</p>

<ol>
<li><strong>Tadarus Al-Quran</strong> - Para santri berkesempatan untuk mengkhatamkan Al-Quran selama bulan Ramadhan melalui kegiatan tadarus bersama.</li>
<li><strong>Kajian Tafsir</strong> - Ustadz dan ustadzah akan memberikan kajian tafsir Al-Quran untuk memperdalam pemahaman santri terhadap ayat-ayat yang dibaca.</li>
<li><strong>Iftar Jama'i</strong> - Berbuka puasa bersama yang diselenggarakan setiap hari, memberikan kesempatan bagi para santri untuk merasakan kebersamaan dan berbagi kebahagiaan.</li>
<li><strong>Qiyamul Lail</strong> - Shalat malam berjamaah yang dilaksanakan pada sepuluh malam terakhir Ramadhan, mengajarkan santri tentang pentingnya menghidupkan malam-malam Ramadhan.</li>
<li><strong>Santunan Anak Yatim</strong> - Kegiatan sosial untuk berbagi kebahagiaan dengan anak-anak yatim dan dhuafa di sekitar madrasah.</li>
</ol>

<p>Melalui rangkaian kegiatan ini, kami berharap para santri dapat merasakan keistimewaan bulan Ramadhan dan mengambil hikmah dari setiap ibadah yang dilakukan. Ramadhan bukan hanya tentang menahan lapar dan haus, tetapi juga tentang meningkatkan ketakwaan dan kepedulian sosial.</p>

<p>Mari bersama-sama menjadikan Ramadhan sebagai momentum untuk meningkatkan kualitas diri dan mendekatkan diri kepada Allah SWT.</p>`,
    date: "1 April 2025",
    author: "Admin Maquro",
    category: "Kegiatan",
    imageUrl: "/placeholder.jpg",
    slug: "kegiatan-ramadhan-maquro-alkisai",
  },
];

// Related posts
const getRelatedPosts = (currentSlug: string, category: string) => {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the current post
  const post = blogPosts.find((post) => post.slug === slug);

  // Get related posts
  const relatedPosts = post ? getRelatedPosts(slug, post.category) : [];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBF7F4]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#8B5A2B] mb-4">
            Artikel tidak ditemukan
          </h1>
          <p className="text-[#5D4037]/80 mb-6">
            Maaf, artikel yang Anda cari tidak tersedia.
          </p>
          <Link href="/blog">
            <Button className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white">
              Kembali ke Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

      <main className="py-12">
        <div className="container max-w-4xl">
          {/* Back to blog */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#8B5A2B] hover:text-[#6A4423] transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Blog</span>
            </Link>
          </div>

          {/* Article header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block px-3 py-1 bg-[#8B5A2B] text-white text-sm font-medium rounded mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B5A2B] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#8B5A2B]/70">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Article content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none mb-12 prose-headings:text-[#8B5A2B] prose-a:text-[#8B5A2B] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#8B5A2B]"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>

          {/* Share buttons */}
          <div className="border-t border-b border-[#8B5A2B]/20 py-6 mb-12">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-medium text-[#8B5A2B] flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Bagikan artikel:
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#8B5A2B]/20 text-[#8B5A2B] hover:bg-[#8B5A2B]/10 hover:text-[#8B5A2B]"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
                      "_blank"
                    )
                  }
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#8B5A2B]/20 text-[#8B5A2B] hover:bg-[#8B5A2B]/10 hover:text-[#8B5A2B]"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`,
                      "_blank"
                    )
                  }
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#8B5A2B]/20 text-[#8B5A2B] hover:bg-[#8B5A2B]/10 hover:text-[#8B5A2B]"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                Artikel Terkait
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-[#8B5A2B] text-white text-xs font-medium py-1 px-2 rounded">
                        {relatedPost.category}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center text-xs text-[#8B5A2B]/70 mb-2 gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-[#8B5A2B] mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-[#8B5A2B] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 text-sm"
                      >
                        <span>Baca selengkapnya</span>
                        <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
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
