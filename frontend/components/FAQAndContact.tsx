'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: 'Apa itu MazeCode?',
    answer:
      'MazeCode adalah layanan yang membantu Anda menyelesaikan kebutuhan website sesuai permasalahan dan kondisi bisnis Anda. Kami fokus pada hasil rapi, kode terstruktur, dan komunikasi yang jelas—dengan solusi dan harga yang disesuaikan situasi Anda.',
  },
  {
    question: 'Berapa lama pengerjaan project?',
    answer:
      'Tergantung jenis project: landing page sekitar 1–2 minggu, web app 2–4 minggu, fullstack custom sesuai scope. Setelah konsultasi, kami beri estimasi yang lebih pasti.',
  },
  {
    question: 'Apakah ada garansi revisi?',
    answer:
      'Ya. Setiap project dilengkapi revisi minor gratis agar hasil sesuai harapan. Detail jumlah revisi dan cakupannya bisa didiskusikan saat konsultasi.',
  },
  {
    question: 'Bagaimana sistem pembayaran?',
    answer:
      'Biasanya DP di awal dan pelunasan setelah project selesai. Untuk project dengan nilai kecil bisa disepakati pembayaran penuh di depan. Detail bisa disesuaikan saat konsultasi.',
  },
  {
    question: 'Apakah bisa konsultasi gratis dulu?',
    answer:
      'Bisa. Kami selalu mengajak konsultasi dulu—gratis—agar kebutuhan dan budget Anda sesuai. Tidak ada biaya dan tidak ada paksaan untuk langsung order.',
  },
]

function SectionWaveBottom() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg
        className="absolute bottom-0 left-0 w-full h-1/2 min-h-[200px] text-primary/[0.06]"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 120 Q 300 40, 600 120 T 1200 120 V 200 H 0 Z"
          className="opacity-80"
        />
        <path
          fill="currentColor"
          d="M0 140 Q 300 80, 600 140 T 1200 140 V 200 H 0 Z"
          className="opacity-50"
        />
        <path
          fill="currentColor"
          d="M0 160 Q 300 120, 600 160 T 1200 160 V 200 H 0 Z"
          className="opacity-30"
        />
      </svg>
    </div>
  )
}

export default function FAQAndContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-base-200/30 overflow-hidden">
      <SectionWaveBottom />
      <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* FAQ - kiri */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-6">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="space-y-3">
              {faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-base-200/50 border border-base-200 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left bg-base-200/50 hover:bg-base-200/30 transition-colors"
                    aria-expanded={openIndex === idx}
                  >
                    <span className="font-semibold text-base-content">{item.question}</span>
                    <span
                      className={`flex-shrink-0 size-8 flex items-center justify-center rounded-lg bg-primary/10 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                    >
                      <span className="size-5 icon-[tabler--chevron-down] text-base-content/70" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 text-base-content/80 text-sm leading-relaxed border-t border-base-200/80">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Hubungi Kami - kanan, hanya WhatsApp */}
          <div className="rounded-2xl bg-base-200/50 border border-base-200 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
              Hubungi Kami
            </h2>
            <p className="text-base-content/70 text-sm md:text-base mb-6">
              Pilih platform favorit untuk konsultasi gratis
            </p>

            <a
              href="https://wa.me/628134567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-base-100 border border-base-200 hover:bg-base-200/50 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 size-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center">
                <span className="size-7 icon-[ic--sharp-whatsapp] text-[#25D366]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-base-content">WhatsApp</p>
                <p className="text-sm text-base-content/70">Chat langsung</p>
              </div>
              <span className="flex-shrink-0 size-8 flex items-center justify-center rounded-lg bg-base-200/80 group-hover:bg-primary/10 text-base-content/60 group-hover:text-primary transition-colors">
                <span className="size-5 icon-[tabler--chevron-right]" />
              </span>
            </a>

            <div className="mt-6 pt-6 border-t border-base-200 flex flex-wrap items-center gap-4 text-sm text-base-content/70">
              <span className="inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                Response dalam 24 jam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
