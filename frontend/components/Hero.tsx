'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const buttonContainerRef = useRef(null)
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
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
              Kami membangun website modern dengan struktur clean, performa cepat, dan desain elegan yang membuat bisnis Anda terlihat profesional, dipercaya, dan siap berkembang.
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
              <button
                ref={(el) => {
                  buttonsRef.current[1] = el
                }}
                className="btn btn-outline btn-primary btn-lg"
                onMouseEnter={() => handleButtonHover(1, true)}
                onMouseLeave={() => handleButtonHover(1, false)}
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/hero/computer_3D.png"
                alt="Computer 3D"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
