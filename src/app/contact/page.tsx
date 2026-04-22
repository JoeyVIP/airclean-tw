"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contact } from "@/lib/content";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const subjectOptions = [
  "申請成為會員",
  "捐款相關詢問",
  "志工報名",
  "企業／學校合作",
  "媒體採訪",
  "其他",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <div
          className="py-14 text-center"
          style={{ backgroundColor: "oklch(0.96 0.02 230)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "oklch(0.48 0.12 230)" }}
          >
            Contact
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "oklch(0.13 0.02 230)" }}
          >
            {contact.title}
          </h1>
          <p className="text-sm mt-2" style={{ color: "oklch(0.45 0.03 230)" }}>
            {contact.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <h2
              className="font-bold text-lg"
              style={{ color: "oklch(0.13 0.02 230)" }}
            >
              聯絡資訊
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
                >
                  <MapPin size={14} style={{ color: "oklch(0.55 0.12 230)" }} />
                </div>
                <p className="text-sm" style={{ color: "oklch(0.25 0.03 145)" }}>
                  {contact.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
                >
                  <Phone size={14} style={{ color: "oklch(0.55 0.12 230)" }} />
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.25 0.03 145)" }}
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
                >
                  <Mail size={14} style={{ color: "oklch(0.55 0.12 230)" }} />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm transition-colors"
                  style={{ color: "oklch(0.25 0.03 145)" }}
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
                >
                  <Clock size={14} style={{ color: "oklch(0.55 0.12 230)" }} />
                </div>
                <p className="text-sm" style={{ color: "oklch(0.25 0.03 145)" }}>
                  {contact.hours}
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.55 0.04 145)" }}
              >
                社群媒體
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-md border flex items-center justify-center transition-colors hover:border-forest"
                  style={{ borderColor: "oklch(0.88 0.04 145)", color: "oklch(0.55 0.12 230)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-md border flex items-center justify-center transition-colors"
                  style={{ borderColor: "oklch(0.88 0.04 145)", color: "oklch(0.55 0.12 230)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-md border flex items-center justify-center transition-colors"
                  style={{ borderColor: "oklch(0.88 0.04 145)", color: "oklch(0.55 0.12 230)" }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div
                className="rounded-lg p-8 text-center"
                style={{ backgroundColor: "oklch(0.92 0.06 145)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-bold text-lg mb-2" style={{ color: "oklch(0.13 0.02 230)" }}>
                  訊息已送出
                </h2>
                <p className="text-sm" style={{ color: "oklch(0.35 0.04 145)" }}>
                  感謝您的來信。我們將在 2 個工作天內與您聯繫。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border bg-white p-6 flex flex-col gap-5"
                style={{ borderColor: "oklch(0.90 0.02 230)" }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-900"
                    >
                      姓名 <span style={{ color: "oklch(0.55 0.20 30)" }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 focus:ring-offset-1 transition"
                      style={{
                        borderColor: "oklch(0.88 0.02 145)",
                      }}
                      placeholder="王小明"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900"
                    >
                      電子郵件 <span style={{ color: "oklch(0.55 0.20 30)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="px-3 py-2 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 transition"
                      style={{ borderColor: "oklch(0.88 0.02 145)" }}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-900"
                  >
                    聯絡電話（選填）
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="px-3 py-2 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 transition"
                    style={{ borderColor: "oklch(0.88 0.02 145)" }}
                    placeholder="0912-345-678"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-900"
                  >
                    主旨 <span style={{ color: "oklch(0.55 0.20 30)" }}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="px-3 py-2 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 transition bg-white"
                    style={{ borderColor: "oklch(0.88 0.02 145)" }}
                  >
                    <option value="" disabled>
                      請選擇主旨
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-900"
                  >
                    訊息內容 <span style={{ color: "oklch(0.55 0.20 30)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="px-3 py-2 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 transition resize-none"
                    style={{ borderColor: "oklch(0.88 0.02 145)" }}
                    placeholder="請輸入您的訊息..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.55 0.12 230)" }}
                >
                  送出訊息
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
