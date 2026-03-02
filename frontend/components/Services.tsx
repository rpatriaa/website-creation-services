'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  priceLabel: string
  buttonText?: string
  accentColor: 'blue' | 'red'
  delay: number
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  price,
  priceLabel,
  buttonText = 'Pesan Sekarang',
  accentColor,
  delay,
}: ServiceCardProps) => {
  const accentBarClass = accentColor === 'blue' ? 'bg-primary' : 'bg-error'
  const priceClass = accentColor === 'blue' ? 'text-primary' : 'text-error'
  const btnVariant = accentColor === 'blue' ? 'btn-primary' : 'btn-error'
  const cardBgClass = accentColor === 'blue' ? 'bg-primary/5' : 'bg-error/5'

  return (
    <motion.div
      className={`card card-border overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${cardBgClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Accent Bar - Flyonui semantic */}
      <div className={`h-1 ${accentBarClass}`} />

      <div className="card-body">
        {/* Title - Flyonui card-title */}
        <h3 className="card-title text-xl">{title}</h3>

        {/* Description */}
        <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features - Flyonui badge */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="badge badge-soft rounded-full badge-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <p className="text-sm text-base-content/70 mb-1">{priceLabel}</p>
          <p className={`text-2xl font-bold ${priceClass}`}>{price}</p>
        </div>

        {/* Button - Flyonui btn btn-block */}
        <button className={`btn ${btnVariant} btn-block`}>{buttonText}</button>
      </div>
    </motion.div>
  )
}

/** Wave background di atas section Pilih Layanan */
function SectionWaveTop() {
  return (
    <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg
        className="block w-full h-[180px] md:h-[220px] text-primary/[0.06] rotate-180"
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

export default function Services() {
  const services: ServiceCardProps[] = [
    {
      icon: '🎨',
      title: 'Landing Page',
      description:
        'Saat Anda butuh tampil profesional di internet—promosi, profil, atau satu halaman yang to the point. Tampilan modern, responsive, dan ramah di mesin pencari.',
      features: ['Responsive', 'Modern UI', 'SEO Friendly'],
      price: 'Rp 2.000.000',
      priceLabel: 'Mulai dari',
      accentColor: 'blue',
      delay: 0,
    },
    {
      icon: '🗄️',
      title: 'Web App',
      description:
        'Saat Anda butuh sistem yang terstruktur—login, dashboard, data tersimpan rapi. Cocok untuk mengelola operasional atau akses yang berbeda per peran.',
      features: ['Login System', 'Dashboard', 'Database'],
      price: 'Rp 3.500.000',
      priceLabel: 'Mulai dari',
      accentColor: 'red',
      delay: 0.1,
    },
    {
      icon: '🚀',
      title: 'Fullstack Custom',
      description:
        'Kebutuhan lebih spesifik atau skala besar? Kita diskusi dulu—gratis—lalu rangkai scope dan solusi yang sesuai kondisi dan budget Anda.',
      features: ['Full Custom', 'Konsultasi Gratis', 'Scalable'],
      price: 'Konsultasi Gratis',
      priceLabel: 'Harga',
      accentColor: 'blue',
      delay: 0.2,
    },
  ]

  return (
    <section id="services" className="relative py-16 md:py-24 bg-base-200/30 overflow-hidden">
      <SectionWaveTop />
      <div className="container relative mx-auto px-4 md:px-24">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih <span className="text-indigo-600">Layanan</span> yang Anda Butuh
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solusi sesuai kebutuhan dan kondisi bisnis Anda—dari yang sederhana sampai yang custom.
          </p>
        </motion.div>

        {/* Service Cards Grid - 3 layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
