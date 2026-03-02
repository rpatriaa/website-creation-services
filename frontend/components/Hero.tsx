'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const buttonContainerRef = useRef(null)
  const buttonsRef = useRef<(HTMLButtonElement | HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    // Animate buttons on mount
    gsap.fromTo(
      buttonsRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 1,
        ease: 'back.out',
      }
    )
  }, [])

  const handleButtonHover = (index: number, isHovering: boolean) => {
    gsap.to(buttonsRef.current[index], {
      scale: isHovering ? 1.05 : 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center py-12 md:py-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 max-w-xl">
            {/* Eyebrow / badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 shadow-sm border border-indigo-100 w-fit text-xs md:text-sm text-gray-100 font-medium"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="size-2 rounded-full bg-indigo-500" />
              <span>Bantu wujudkan kebutuhan digital bisnis Anda</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
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

            {/* CTA Button - Flyonui btn */}
            <div className="flex flex-wrap gap-4 pt-4" ref={buttonContainerRef}>
              <button
                ref={(el) => {
                  buttonsRef.current[0] = el
                }}
                className="btn btn-primary btn-lg shadow-lg hover:shadow-xl"
                onMouseEnter={() => handleButtonHover(0, true)}
                onMouseLeave={() => handleButtonHover(0, false)}
              >
                Mulai Sekarang
              </button>
              <a
                href="#services"
                ref={(el) => {
                  buttonsRef.current[1] = el
                }}
                className="btn btn-outline btn-primary btn-lg"
                onMouseEnter={() => handleButtonHover(1, true)}
                onMouseLeave={() => handleButtonHover(1, false)}
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Small trust indicators */}
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

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow / blob background */}
              <div className="absolute inset-6 rounded-[2.5rem] bg-linear-to-br from-indigo-500/15 via-sky-400/10 to-emerald-300/10 blur-2xl" />
              {/* Card frame */}
              <div className="relative w-full h-full rounded-[2.5rem] bg-white/80 border border-indigo-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/40 via-transparent to-indigo-50/60" />
                <Image
                  src="/images/hero/computer_3D.png"
                  alt="Computer 3D"
                  fill
                  className="object-contain p-6 md:p-8"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
