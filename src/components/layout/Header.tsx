"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Architecture", href: "/architecture" },
    { name: "Constructions", href: "/constructions" },
    { name: "Interiors", href: "/interiors" },
    { name: "Finishing Details", href: "/finishing-details" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.jpeg" alt="Visionaire Logo" width={48} height={48} className="rounded-full object-cover shadow-sm" />
          <span className="font-serif text-xl md:text-2xl tracking-widest uppercase font-bold text-primary">
            Visionaire
            <span className="block text-[8px] md:text-[10px] font-sans tracking-[0.2em] font-normal text-supporting mt-1">
              ENGINEERING & INTERIORS
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-primary hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact Icons */}
          <div className="flex items-center gap-5 ml-2 border-l border-gray-300 pl-8">
            <a 
              href="tel:+919502656037" 
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300" 
              title="Call Us"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold tracking-wider">+91 95026 56037</span>
            </a>
            <a 
              href="https://wa.me/919502656037" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#25D366] hover:opacity-80 transition-opacity duration-300" 
              title="WhatsApp Us"
            >
              <WhatsAppIcon size={22} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-secondary shadow-lg py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-primary hover:text-accent transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
