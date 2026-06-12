"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default function MobileContactBar() {
  const phoneNumber = "+917780594495";
  const whatsappNumber = "917780594495"; // without + for API link
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-secondary/95 backdrop-blur-md shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex border-t border-gray-200">
      <a 
        href={`tel:${phoneNumber}`} 
        className="flex-1 flex flex-col items-center justify-center py-3 text-primary hover:bg-gray-100 transition-colors"
      >
        <Phone size={24} className="mb-1" />
        <span className="text-xs font-semibold">Call Now</span>
      </a>
      <div className="w-[1px] bg-gray-200"></div>
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 text-[#25D366] hover:bg-green-50 transition-colors"
      >
        <WhatsAppIcon size={24} className="mb-1" />
        <span className="text-xs font-semibold text-[#25D366]">WhatsApp</span>
      </a>
    </div>
  );
}
