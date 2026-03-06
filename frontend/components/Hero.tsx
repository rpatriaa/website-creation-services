'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const buttonContainerRef = useRef(null)
  const buttonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    // Delay animation until after first paint to avoid forced reflow during initial layout
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.3,
            ease: 'back.out',
          }
        )
      })
    })
    return () => cancelAnimationFrame(id)
  }, [])

  const handleButtonHover = (index: number, isHovering: boolean) => {
    gsap.to(buttonsRef.current[index], {
      scale: isHovering ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Background decorative blobs + dot grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/2 -left-60 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/3 w-[420px] h-[420px] rounded-full bg-sky-300/15 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#4f46e5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-12 lg:py-20">

          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 lg:max-w-xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 shadow-sm border border-indigo-100 w-fit text-xs md:text-sm text-gray-100 font-medium"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="size-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Bantu wujudkan kebutuhan digital bisnis Anda</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8 }}
            >
              Website Bagus Itu Investasi yang membantu dalam penghasilan.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Kami bantu selesaikan kebutuhan website Anda—dari yang sederhana sampai custom—dengan hasil rapi, cepat diakses, dan siap dikembangkan seiring pertumbuhan bisnis.
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-600 font-semibold italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Karena di dunia digital, kesan pertama bukan cuma penting — tapi menentukan.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4" ref={buttonContainerRef}>
              <button
                ref={(el) => { buttonsRef.current[0] = el }}
                className="btn btn-primary btn-lg shadow-lg hover:shadow-xl"
                onMouseEnter={() => handleButtonHover(0, true)}
                onMouseLeave={() => handleButtonHover(0, false)}
              >
                Mulai Sekarang
              </button>
              <a
                href="#services"
                ref={(el) => { buttonsRef.current[1] = el }}
                className="btn btn-outline btn-primary btn-lg"
                onMouseEnter={() => handleButtonHover(1, true)}
                onMouseLeave={() => handleButtonHover(1, false)}
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span>Clean code, gampang dikembangkan lagi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-indigo-500" />
                <span>Free konsultasi sebelum mulai</span>
              </div>
            </div>
          </div>

          {/* Right Image — no card, with glow + floating badges */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          >
            {/* Padded wrapper so floating badges don't clip */}
            <div className="relative mx-auto w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] my-8 mx-10">

              {/* Multi-layer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400/30 via-sky-300/20 to-blue-500/15 blur-3xl scale-110" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-violet-400/15 to-indigo-300/10 blur-2xl" />

              {/* Decorative animated rings */}
              <motion.div
                className="absolute inset-[-6%] rounded-full border border-indigo-300/30"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-[-16%] rounded-full border border-dashed border-indigo-200/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              />

              {/* Image — floating animation, no card */}
              <motion.div
                className="relative w-full h-full"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/hero/computer_3D.png"
                  alt="Ilustrasi website profesional"
                  fill
                  sizes="(max-width: 640px) 360px, (max-width: 768px) 440px, 520px"
                  className="object-contain"
                  style={{ filter: 'drop-shadow(0 24px 40px rgba(79, 70, 229, 0.28))' }}
                  priority
                />
              </motion.div>

              {/* Floating badge: Responsive — top left */}
              <motion.div
                className="absolute -top-5 -left-6 sm:-left-12 flex items-center gap-2 pl-2 pr-3 py-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white text-xs font-semibold text-gray-700 whitespace-nowrap z-10"
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: 'backOut' }}
              >
                <span className="size-7 flex items-center justify-center rounded-lg bg-blue-100 text-sm">📱</span>
                Responsive
              </motion.div>

              {/* Floating badge: Fast — right middle */}
              <motion.div
                className="absolute top-1/3 -right-6 sm:-right-14 -translate-y-1/2 flex items-center gap-2 pl-2 pr-3 py-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white text-xs font-semibold text-gray-700 whitespace-nowrap z-10"
                initial={{ opacity: 0, x: 10, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: 'backOut' }}
              >
                <span className="size-7 flex items-center justify-center rounded-lg bg-amber-100 text-sm">⚡</span>
                Fast & Optimized
              </motion.div>

              {/* Floating badge: SEO — bottom left */}
              <motion.div
                className="absolute -bottom-5 left-4 sm:left-0 flex items-center gap-2 pl-2 pr-3 py-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white text-xs font-semibold text-gray-700 whitespace-nowrap z-10"
                initial={{ opacity: 0, y: -10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, ease: 'backOut' }}
              >
                <span className="size-7 flex items-center justify-center rounded-lg bg-emerald-100 text-sm">🔍</span>
                SEO Ready
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
