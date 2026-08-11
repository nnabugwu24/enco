"use client";
  
  import React from "react"
  import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppButton() {
    const phoneNumber= "+2348037028669";
    const message = encodeURIComponent("Hell0! I have a question about your  agro export business.");
    const url = `https://wa.me{phoneNumber}?text=${message}`;
     return(
        <a href={url} 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50  flex items-center justify-center w-14 h-14 
        bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300
        ease-in-out"
        arial-label="Chat on WhatsApp">
          <FaWhatsapp className="h-8 w-8"/>
        </a>
     )

}
