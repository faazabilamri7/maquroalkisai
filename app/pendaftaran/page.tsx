"use client";

import { useState } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Check,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
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
              className="text-sm font-medium text-[#8B5A2B] hover:text-[#8B5A2B]/80 font-bold"
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

      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#8B5A2B] mb-4">
              Pendaftaran Santri Baru
            </h1>
            <p className="text-[#5D4037] max-w-2xl mx-auto">
              Tahun Ajaran 2025/2026 - Pendaftaran dibuka sampai dengan 25 Mei
              2025
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${
                    index + 1 <= step ? "text-[#8B5A2B]" : "text-[#8B5A2B]/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      index + 1 < step
                        ? "bg-[#8B5A2B] text-white"
                        : index + 1 === step
                        ? "bg-[#8B5A2B]/20 border-2 border-[#8B5A2B] text-[#8B5A2B]"
                        : "bg-[#8B5A2B]/10 text-[#8B5A2B]/40"
                    }`}
                  >
                    {index + 1 < step ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className="text-xs font-medium hidden md:block">
                    {index === 0 && "Informasi Santri"}
                    {index === 1 && "Informasi Orang Tua"}
                    {index === 2 && "Riwayat Pendidikan"}
                    {index === 3 && "Dokumen"}
                    {index === 4 && "Konfirmasi"}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-[#8B5A2B]/10 rounded-full h-2.5">
              <div
                className="bg-[#8B5A2B] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Steps */}
          <Card className="border-[#8B5A2B]/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                    Informasi Santri
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label
                        htmlFor="fullName"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Nama Lengkap <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Masukkan nama lengkap santri"
                        className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="nickname"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Nama Panggilan
                      </Label>
                      <Input
                        id="nickname"
                        placeholder="Masukkan nama panggilan santri"
                        className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="birthPlace"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Tempat Lahir <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="birthPlace"
                        placeholder="Masukkan tempat lahir"
                        className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="birthDate"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Tanggal Lahir <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="birthDate"
                        type="date"
                        className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        required
                      />
                    </div>

                    <div>
                      <Label className="text-[#5D4037] mb-2 block">
                        Jenis Kelamin <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        defaultValue="laki-laki"
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="laki-laki" id="laki-laki" />
                          <Label htmlFor="laki-laki">Laki-laki</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="perempuan" id="perempuan" />
                          <Label htmlFor="perempuan">Perempuan</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label
                        htmlFor="nik"
                        className="text-[#5D4037] mb-2 block"
                      >
                        NIK (Nomor Induk Kependudukan){" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nik"
                        placeholder="Masukkan 16 digit NIK"
                        className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label
                      htmlFor="address"
                      className="text-[#5D4037] mb-2 block"
                    >
                      Alamat Lengkap <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Masukkan alamat lengkap"
                      className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label
                        htmlFor="hijaiyahKnowledge"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Pengenalan Huruf Hijaiyah{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="border-[#8B5A2B]/20 focus:ring-[#8B5A2B]">
                          <SelectValue placeholder="Pilih tingkat pengenalan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="belum">Belum mengenal</SelectItem>
                          <SelectItem value="sebagian">
                            Mengenal sebagian
                          </SelectItem>
                          <SelectItem value="semua">Mengenal semua</SelectItem>
                          <SelectItem value="lancar">Lancar membaca</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="quranReading"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Kemampuan Membaca Al-Quran
                      </Label>
                      <Select>
                        <SelectTrigger className="border-[#8B5A2B]/20 focus:ring-[#8B5A2B]">
                          <SelectValue placeholder="Pilih tingkat kemampuan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="belum">Belum bisa</SelectItem>
                          <SelectItem value="iqro">Iqro</SelectItem>
                          <SelectItem value="juz-amma">Juz Amma</SelectItem>
                          <SelectItem value="al-quran">Al-Quran</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="memorization"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Hafalan Al-Quran
                      </Label>
                      <Select>
                        <SelectTrigger className="border-[#8B5A2B]/20 focus:ring-[#8B5A2B]">
                          <SelectValue placeholder="Pilih tingkat hafalan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="belum">Belum ada</SelectItem>
                          <SelectItem value="surat-pendek">
                            Beberapa surat pendek
                          </SelectItem>
                          <SelectItem value="juz-30">Juz 30</SelectItem>
                          <SelectItem value="lebih">
                            Lebih dari 1 juz
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                    Informasi Orang Tua/Wali
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Data Ayah
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="fatherName"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nama Lengkap Ayah{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fatherName"
                          placeholder="Masukkan nama lengkap ayah"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="fatherPhone"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nomor HP Ayah <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fatherPhone"
                          placeholder="Contoh: 08123456789"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="fatherEmail"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Email Ayah
                        </Label>
                        <Input
                          id="fatherEmail"
                          type="email"
                          placeholder="Contoh: ayah@email.com"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="fatherJob"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Pekerjaan Ayah <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fatherJob"
                          placeholder="Masukkan pekerjaan ayah"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Data Ibu
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="motherName"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nama Lengkap Ibu{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="motherName"
                          placeholder="Masukkan nama lengkap ibu"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="motherPhone"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nomor HP Ibu <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="motherPhone"
                          placeholder="Contoh: 08123456789"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="motherEmail"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Email Ibu
                        </Label>
                        <Input
                          id="motherEmail"
                          type="email"
                          placeholder="Contoh: ibu@email.com"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="motherJob"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Pekerjaan Ibu <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="motherJob"
                          placeholder="Masukkan pekerjaan ibu"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Data Wali (Opsional)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="guardianName"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nama Lengkap Wali
                        </Label>
                        <Input
                          id="guardianName"
                          placeholder="Masukkan nama lengkap wali"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="guardianPhone"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Nomor HP Wali
                        </Label>
                        <Input
                          id="guardianPhone"
                          placeholder="Contoh: 08123456789"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="guardianRelation"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Hubungan dengan Santri
                        </Label>
                        <Input
                          id="guardianRelation"
                          placeholder="Contoh: Paman, Bibi, dll"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                    Riwayat Pendidikan
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Pendidikan Formal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="lastSchool"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Sekolah Terakhir
                        </Label>
                        <Input
                          id="lastSchool"
                          placeholder="Masukkan nama sekolah terakhir"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="lastGrade"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Kelas Terakhir
                        </Label>
                        <Select>
                          <SelectTrigger className="border-[#8B5A2B]/20 focus:ring-[#8B5A2B]">
                            <SelectValue placeholder="Pilih kelas terakhir" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tk">TK</SelectItem>
                            <SelectItem value="1">Kelas 1</SelectItem>
                            <SelectItem value="2">Kelas 2</SelectItem>
                            <SelectItem value="3">Kelas 3</SelectItem>
                            <SelectItem value="4">Kelas 4</SelectItem>
                            <SelectItem value="5">Kelas 5</SelectItem>
                            <SelectItem value="6">Kelas 6</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Pendidikan Non-Formal
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label
                          htmlFor="quranEducation"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Pendidikan Al-Quran
                        </Label>
                        <Input
                          id="quranEducation"
                          placeholder="Contoh: TPQ/TPA, Madrasah Diniyah, dll"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="achievements"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Prestasi yang Pernah Diraih
                        </Label>
                        <Textarea
                          id="achievements"
                          placeholder="Tuliskan prestasi yang pernah diraih (jika ada)"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Informasi Tambahan
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <Label
                          htmlFor="healthInfo"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Riwayat Kesehatan
                        </Label>
                        <Textarea
                          id="healthInfo"
                          placeholder="Tuliskan riwayat kesehatan atau alergi yang perlu diketahui (jika ada)"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="specialNeeds"
                          className="text-[#5D4037] mb-2 block"
                        >
                          Kebutuhan Khusus
                        </Label>
                        <Textarea
                          id="specialNeeds"
                          placeholder="Tuliskan kebutuhan khusus yang perlu diperhatikan (jika ada)"
                          className="border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                    Unggah Dokumen
                  </h2>
                  <p className="text-[#5D4037] mb-6">
                    Silakan unggah dokumen-dokumen yang diperlukan dalam format
                    PDF atau JPG/PNG (ukuran maksimal 2MB per file).
                  </p>

                  <div className="space-y-6">
                    <div>
                      <Label
                        htmlFor="photoUpload"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Pas Foto 3x4 <span className="text-red-500">*</span>
                      </Label>
                      <div className="border-2 border-dashed border-[#8B5A2B]/30 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-[#8B5A2B]/50 mx-auto mb-2" />
                        <p className="text-sm text-[#5D4037] mb-2">
                          Klik untuk mengunggah atau seret file ke sini
                        </p>
                        <p className="text-xs text-[#5D4037]/70">
                          Format: JPG, PNG (Maks. 2MB)
                        </p>
                        <input
                          type="file"
                          id="photoUpload"
                          className="hidden"
                          accept="image/jpeg,image/png"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                          onClick={() =>
                            document.getElementById("photoUpload")?.click()
                          }
                        >
                          Pilih File
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="birthCertUpload"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Akta Kelahiran <span className="text-red-500">*</span>
                      </Label>
                      <div className="border-2 border-dashed border-[#8B5A2B]/30 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-[#8B5A2B]/50 mx-auto mb-2" />
                        <p className="text-sm text-[#5D4037] mb-2">
                          Klik untuk mengunggah atau seret file ke sini
                        </p>
                        <p className="text-xs text-[#5D4037]/70">
                          Format: PDF, JPG, PNG (Maks. 2MB)
                        </p>
                        <input
                          type="file"
                          id="birthCertUpload"
                          className="hidden"
                          accept="application/pdf,image/jpeg,image/png"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                          onClick={() =>
                            document.getElementById("birthCertUpload")?.click()
                          }
                        >
                          Pilih File
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="familyCardUpload"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Kartu Keluarga <span className="text-red-500">*</span>
                      </Label>
                      <div className="border-2 border-dashed border-[#8B5A2B]/30 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-[#8B5A2B]/50 mx-auto mb-2" />
                        <p className="text-sm text-[#5D4037] mb-2">
                          Klik untuk mengunggah atau seret file ke sini
                        </p>
                        <p className="text-xs text-[#5D4037]/70">
                          Format: PDF, JPG, PNG (Maks. 2MB)
                        </p>
                        <input
                          type="file"
                          id="familyCardUpload"
                          className="hidden"
                          accept="application/pdf,image/jpeg,image/png"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                          onClick={() =>
                            document.getElementById("familyCardUpload")?.click()
                          }
                        >
                          Pilih File
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="immunizationUpload"
                        className="text-[#5D4037] mb-2 block"
                      >
                        Kartu Imunisasi
                      </Label>
                      <div className="border-2 border-dashed border-[#8B5A2B]/30 rounded-lg p-6 text-center">
                        <Upload className="h-10 w-10 text-[#8B5A2B]/50 mx-auto mb-2" />
                        <p className="text-sm text-[#5D4037] mb-2">
                          Klik untuk mengunggah atau seret file ke sini
                        </p>
                        <p className="text-xs text-[#5D4037]/70">
                          Format: PDF, JPG, PNG (Maks. 2MB)
                        </p>
                        <input
                          type="file"
                          id="immunizationUpload"
                          className="hidden"
                          accept="application/pdf,image/jpeg,image/png"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-4 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                          onClick={() =>
                            document
                              .getElementById("immunizationUpload")
                              ?.click()
                          }
                        >
                          Pilih File
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-[#8B5A2B] mb-6">
                    Konfirmasi Pendaftaran
                  </h2>

                  <div className="bg-[#F5EFE7] p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Rincian Biaya Pendaftaran
                    </h3>
                    <table className="w-full">
                      <tbody className="divide-y divide-[#8B5A2B]/20">
                        <tr>
                          <td className="py-2 text-[#5D4037]">
                            Formulir pendaftaran
                          </td>
                          <td className="py-2 text-right text-[#5D4037] font-medium">
                            Rp 100.000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-[#5D4037]">
                            Seragam (Batik & Olahraga)
                          </td>
                          <td className="py-2 text-right text-[#5D4037] font-medium">
                            Rp 400.000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-[#5D4037]">
                            Uang kegiatan tahunan
                          </td>
                          <td className="py-2 text-right text-[#5D4037] font-medium">
                            Rp 1.950.000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-[#5D4037]">Infak gedung</td>
                          <td className="py-2 text-right text-[#5D4037] font-medium">
                            Rp 3.000.000
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2 text-[#8B5A2B] font-bold">
                            Total biaya pendaftaran
                          </td>
                          <td className="py-2 text-right text-[#8B5A2B] font-bold">
                            Rp 5.450.000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#8B5A2B] mb-4">
                      Metode Pembayaran
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="transfer"
                          id="transfer"
                          checked
                        />
                        <div>
                          <Label htmlFor="transfer" className="font-medium">
                            Transfer Bank
                          </Label>
                          <p className="text-sm text-[#5D4037]">
                            Bank Syariah Indonesia (BSI)
                            <br />
                            No. Rekening: 7190827361
                            <br />
                            Atas Nama: Yayasan Risalah Cahaya Ilmu
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Saya menyatakan bahwa data yang saya isi adalah benar
                          dan saya bersedia mematuhi semua peraturan yang
                          berlaku di Maquro Al Kisai.
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          Setelah menyelesaikan pendaftaran, silakan lakukan
                          pembayaran biaya pendaftaran dan kirimkan bukti
                          pembayaran ke nomor WhatsApp Admin Pendaftaran.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B]/10"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" /> Sebelumnya
                  </Button>
                ) : (
                  <div></div>
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
                  >
                    Selanjutnya <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
                  >
                    Kirim Pendaftaran
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#8B5A2B] mb-4">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                  Apa saja persyaratan untuk mendaftar di Maquro Al Kisai?
                </AccordionTrigger>
                <AccordionContent className="text-[#5D4037]">
                  Persyaratan untuk mendaftar di Maquro Al Kisai adalah:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Putra/i (islam)</li>
                    <li>Usia minimal 6 tahun pada tanggal 1 Juli 2025</li>
                    <li>Sehat jasmani dan rohani</li>
                    <li>Mengenal Huruf Hijaiyyah</li>
                    <li>Siap mengikuti tata tertib</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                  Berapa biaya pendaftaran dan SPP bulanan?
                </AccordionTrigger>
                <AccordionContent className="text-[#5D4037]">
                  Total biaya pendaftaran adalah Rp 5.450.000 yang mencakup
                  formulir pendaftaran, seragam, uang kegiatan tahunan, dan
                  infak gedung. SPP bulanan sebesar Rp 490.000. Biaya tambahan
                  lainnya meliputi raport (Rp 60.000), buku sesuai kurikulum,
                  katering (Rp 14.000/hari dimulai kelas 3), dan biaya
                  ekstrakurikuler bagi yang mengikuti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                  Bagaimana proses seleksi santri baru?
                </AccordionTrigger>
                <AccordionContent className="text-[#5D4037]">
                  Proses seleksi santri baru meliputi:
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Pengisian formulir pendaftaran</li>
                    <li>Pembayaran biaya pendaftaran</li>
                    <li>
                      Tes seleksi yang meliputi tes baca Al-Quran, wawancara
                      santri dan orang tua
                    </li>
                    <li>
                      Pengumuman hasil seleksi (maksimal 7 hari setelah tes)
                    </li>
                    <li>
                      Daftar ulang dengan melunasi biaya pendaftaran dan
                      melengkapi berkas administrasi
                    </li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                  Apa saja program unggulan di Maquro Al Kisai?
                </AccordionTrigger>
                <AccordionContent className="text-[#5D4037]">
                  Program unggulan di Maquro Al Kisai meliputi program hafalan
                  Al-Quran dengan sanad, pembelajaran bilingual
                  (Arab-Indonesia), kegiatan spiritual seperti mabit dan parade
                  tasmi', serta ekstrakurikuler islami seperti berenang,
                  panahan, berkuda, dan judo. Semua program dirancang untuk
                  membentuk santri yang unggul dalam ilmu agama dan keterampilan
                  hidup.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-[#8B5A2B] hover:text-[#8B5A2B]/80">
                  Bagaimana jika saya memiliki pertanyaan lain?
                </AccordionTrigger>
                <AccordionContent className="text-[#5D4037]">
                  Jika Anda memiliki pertanyaan lain, silakan hubungi Admin
                  Pendaftaran kami melalui:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Admin 1: +62 853-1142-9632</li>
                    <li>Admin 2: +62 857-1966-2779</li>
                  </ul>
                  Atau kunjungi sekretariat kami di Yayasan Risalah Cahaya Ilmu,
                  Pondok Kacang Prima, Jl. Ketapang Blok I No.2, RT.18/RW.8,
                  Pondok Kacang Timur, Kecamatan Pondok Aren, Kota Tangerang
                  Selatan, Banten 15226.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
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
