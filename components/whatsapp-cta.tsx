"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "+6281234567890"; // Ganti dengan nomor WhatsApp admin
  const defaultMessage =
    "Assalamualaikum, saya ingin bertanya tentang Maquro Al Kisai";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-4 p-4 bg-white rounded-lg shadow-xl max-w-xs"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-[#8B5A2B]">Hubungi Kami</h4>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 rounded-full hover:bg-[#8B5A2B]/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Ada pertanyaan tentang Maquro Al Kisai? Silakan hubungi admin kami
              melalui WhatsApp.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat via WhatsApp</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat dengan Admin"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
