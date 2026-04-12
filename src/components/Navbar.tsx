"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Product",
    href: "#",
    hasDropdown: true,
  },
  {
    label: "Pricing",
    href: "#",
    hasDropdown: false,
  },
  {
    label: "Case Studies",
    href: "#",
    hasDropdown: false,
  },
  {
    label: "Blog",
    href: "#",
    hasDropdown: false,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Creatify AI logo"
            width={130}
            height={24}
            className="h-7 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-0.5 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={{
                color: scrolled ? "rgb(20,20,20)" : "rgba(255,255,255,0.9)",
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown
                  size={14}
                  className="opacity-60 mt-px"
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors"
            style={{
              color: scrolled ? "rgb(20,20,20)" : "rgba(255,255,255,0.9)",
            }}
          >
            Log in
          </a>
          <a
            href="#"
            className="px-5 py-2 text-sm font-semibold rounded-full text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "rgb(87, 60, 255)" }}
          >
            Start for free
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: scrolled ? "rgb(20,20,20)" : "white" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-sm font-medium text-gray-800 border-b border-gray-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#"
              className="py-2.5 text-center text-sm font-medium text-gray-800 border border-gray-200 rounded-full"
            >
              Log in
            </a>
            <a
              href="#"
              className="py-2.5 text-center text-sm font-semibold text-white rounded-full"
              style={{ backgroundColor: "rgb(87, 60, 255)" }}
            >
              Start for free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
