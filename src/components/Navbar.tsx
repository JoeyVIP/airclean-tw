"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ActLogo } from "@/components/ActLogo";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isTransparent ? "transparent" : "rgba(255,255,255,0.97)",
        backdropFilter: isTransparent ? "none" : "blur(12px)",
        boxShadow: isTransparent ? "none" : "0 1px 0 oklch(0.90 0.02 230)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <ActLogo variant={isTransparent ? "light" : "dark"} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: isTransparent
                    ? "rgba(255,255,255,0.9)"
                    : active
                    ? "oklch(0.55 0.12 230)"
                    : "oklch(0.25 0.04 230)",
                  backgroundColor:
                    active && !isTransparent
                      ? "oklch(0.92 0.04 230)"
                      : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-md text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
          >
            加入行動
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切換選單"
          style={{
            color: isTransparent ? "white" : "oklch(0.25 0.04 230)",
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-5 py-4 flex flex-col gap-1"
          style={{ borderColor: "oklch(0.90 0.02 230)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-sm font-medium border-b last:border-0"
              style={{
                color: "oklch(0.20 0.06 230)",
                borderColor: "oklch(0.94 0.02 230)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              className="block py-2.5 text-center text-sm font-semibold text-white rounded-md"
              style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
              onClick={() => setMobileOpen(false)}
            >
              加入行動
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
