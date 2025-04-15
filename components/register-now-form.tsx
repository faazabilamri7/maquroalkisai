"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterNowForm({ className }: { className?: string }) {
  const handleClick = () => {
    const phoneNumber = "6285311429632"; // Replace with your WhatsApp number
    const message =
      "Halo, saya ingin mendaftarkan anak saya di Maquro Al Kisai";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        bg-[#8B5A2B] 
        font-bold 
        text-white
        hover:bg-[#6A4423]
        hover:translate-x-1
        transition-all
        duration-300
        ease-in-out
        shadow-md
        hover:shadow-lg
        rounded-full
        px-6
        py-2.5
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        Daftar Sekarang
        <ChevronRight className="w-4 h-4 animate-[bounce-horizontal_1s_ease-in-out_infinite]" />
      </span>
    </Button>
  );
}

// "use client";

// import type React from "react";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ChevronRight, AlertCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// export default function RegisterNowForm({ className }: { className?: string }) {
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     parentName: "",
//     phone: "",
//     email: "",
//     childAge: "",
//     gender: "laki-laki",
//     agreeToTerms: false,
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });

//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors({
//         ...errors,
//         [name]: "",
//       });
//     }
//   };

//   const handleRadioChange = (value: string) => {
//     setFormData({
//       ...formData,
//       gender: value,
//     });
//   };

//   const handleCheckboxChange = (checked: boolean) => {
//     setFormData({
//       ...formData,
//       agreeToTerms: checked,
//     });

//     if (errors.agreeToTerms) {
//       setErrors({
//         ...errors,
//         agreeToTerms: "",
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Nama anak harus diisi";
//     }

//     if (!formData.parentName.trim()) {
//       newErrors.parentName = "Nama orang tua harus diisi";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Nomor telepon harus diisi";
//     } else if (!/^(\+62|62|0)[0-9]{9,12}$/.test(formData.phone.trim())) {
//       newErrors.phone = "Format nomor telepon tidak valid";
//     }

//     if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Format email tidak valid";
//     }

//     if (!formData.childAge.trim()) {
//       newErrors.childAge = "Usia anak harus diisi";
//     } else if (
//       isNaN(Number(formData.childAge)) ||
//       Number(formData.childAge) < 5 ||
//       Number(formData.childAge) > 12
//     ) {
//       newErrors.childAge = "Usia anak harus antara 5-12 tahun";
//     }

//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = "Anda harus menyetujui syarat dan ketentuan";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Close dialog and redirect to full registration page
//       setOpen(false);
//       router.push("/pendaftaran");
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>
//         <Button
//           className={`
//             bg-[#8B5A2B]
//             font-bold
//             text-white
//             hover:bg-[#6A4423]
//             hover:translate-x-1
//             transition-all
//             duration-300
//             ease-in-out
//             shadow-md
//             hover:shadow-lg
//             rounded-full
//             px-6
//             py-2.5
//             ${className}
//           `}
//         >
//           <span className="flex items-center gap-2">
//             Daftar Sekarang
//             <ChevronRight className="w-4 h-4 animate-[bounce-horizontal_1s_ease-in-out_infinite]" />
//           </span>
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[500px]">
//         <DialogHeader>
//           <DialogTitle className="text-[#8B5A2B] text-2xl">
//             Formulir Pendaftaran Awal
//           </DialogTitle>
//           <DialogDescription>
//             Silakan isi formulir singkat ini untuk memulai proses pendaftaran
//             santri baru di Maquro Al Kisai.
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//           <div className="space-y-2">
//             <Label htmlFor="name" className="text-[#5D4037]">
//               Nama Anak <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Masukkan nama lengkap anak"
//               className={`border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B] ${
//                 errors.name ? "border-red-500" : ""
//               }`}
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//             )}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="parentName" className="text-[#5D4037]">
//               Nama Orang Tua <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="parentName"
//               name="parentName"
//               value={formData.parentName}
//               onChange={handleChange}
//               placeholder="Masukkan nama lengkap orang tua"
//               className={`border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B] ${
//                 errors.parentName ? "border-red-500" : ""
//               }`}
//             />
//             {errors.parentName && (
//               <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>
//             )}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="phone" className="text-[#5D4037]">
//               Nomor Telepon <span className="text-red-500">*</span>
//             </Label>
//             <Input
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Contoh: 08123456789"
//               className={`border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B] ${
//                 errors.phone ? "border-red-500" : ""
//               }`}
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//             )}
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-[#5D4037]">
//               Email
//             </Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Masukkan alamat email (opsional)"
//               className={`border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B] ${
//                 errors.email ? "border-red-500" : ""
//               }`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="childAge" className="text-[#5D4037]">
//                 Usia Anak <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="childAge"
//                 name="childAge"
//                 type="number"
//                 min="5"
//                 max="12"
//                 value={formData.childAge}
//                 onChange={handleChange}
//                 placeholder="Contoh: 6"
//                 className={`border-[#8B5A2B]/20 focus-visible:ring-[#8B5A2B] ${
//                   errors.childAge ? "border-red-500" : ""
//                 }`}
//               />
//               {errors.childAge && (
//                 <p className="text-red-500 text-xs mt-1">{errors.childAge}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label className="text-[#5D4037]">
//                 Jenis Kelamin <span className="text-red-500">*</span>
//               </Label>
//               <RadioGroup
//                 value={formData.gender}
//                 onValueChange={handleRadioChange}
//                 className="flex gap-4"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="laki-laki" id="laki-laki" />
//                   <Label htmlFor="laki-laki">Laki-laki</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="perempuan" id="perempuan" />
//                   <Label htmlFor="perempuan">Perempuan</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           </div>

//           <div className="flex items-start space-x-2 pt-2">
//             <Checkbox
//               id="agreeToTerms"
//               checked={formData.agreeToTerms}
//               onCheckedChange={handleCheckboxChange}
//               className={errors.agreeToTerms ? "border-red-500" : ""}
//             />
//             <div className="grid gap-1.5 leading-none">
//               <Label
//                 htmlFor="agreeToTerms"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Saya menyetujui syarat dan ketentuan pendaftaran santri baru
//                 Maquro Al Kisai
//               </Label>
//               {errors.agreeToTerms && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.agreeToTerms}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className="bg-[#F5EFE7] p-4 rounded-lg flex items-start gap-2">
//             <AlertCircle className="h-5 w-5 text-[#8B5A2B] mt-0.5 flex-shrink-0" />
//             <p className="text-sm text-[#5D4037]">
//               Setelah mengisi formulir ini, Anda akan diarahkan ke halaman
//               pendaftaran lengkap untuk melanjutkan proses pendaftaran.
//             </p>
//           </div>

//           <DialogFooter>
//             <Button
//               type="submit"
//               className="w-full bg-[#8B5A2B] hover:bg-[#6A4423] text-white"
//             >
//               Lanjutkan Pendaftaran <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }
