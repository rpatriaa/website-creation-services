'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <motion.div
          className="text-center py-12 md:py-16 px-6 md:px-10 bg-indigo-950 rounded-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Belum Nemu yang Cocok?</h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis. Ceritakan kebutuhan dan kondisi Anda, kami bantu cari solusinya.
          </p>

          {/* WhatsApp Button - Flyonui btn */}
          <motion.a
            href="https://wa.me/628134567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-white text-indigo-900 border-0 hover:bg-base-100 hover:shadow-xl gap-3 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="size-6 icon-[ic--sharp-whatsapp]" />
            Hubungi via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
