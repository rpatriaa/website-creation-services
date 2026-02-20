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

export default function Services() {
  const services: ServiceCardProps[] = [
    {
      icon: '💻',
      title: 'Tugas Coding',
      description:
        'Bantu kerjain tugas kuliah, debug error, grok bikin project kecil untuk mata kuliah pemrograman.',
      features: ['Debug Error', 'Tugas Kuliah', 'Project Kecil'],
      price: 'Rp50.000',
      priceLabel: 'Mulai dari',
      accentColor: 'blue',
      delay: 0,
    },
    {
      icon: '🎨',
      title: 'Landing Page',
      description:
        'Website satu halaman dengan tampilan clean dan modern, cocok untuk tugas, portfolio, atau event.',
      features: ['Responsive', 'Modern UI', 'Fast Loading'],
      price: 'Rp300.000',
      priceLabel: 'Mulai dari',
      accentColor: 'red',
      delay: 0.1,
    },
    {
      icon: '🗄️',
      title: 'Web App CRUD',
      description:
        'Sistem login, dashboard, dan database lengkap – cocok buat project akhir atau mini project kuliah.',
      features: ['Login System', 'Dashboard', 'Database'],
      price: 'Rp500.000',
      priceLabel: 'Mulai dari',
      accentColor: 'blue',
      delay: 0.2,
    },
    {
      icon: '🚀',
      title: 'Fullstack Custom',
      description:
        'Project besar dan custom sesuai kebutuhmu. Gratis konsultasi dulu via WhatsApp sebelum mulai.',
      features: ['Full Custom', 'Konsultasi', 'Scalable'],
      price: 'Konsultasi Gratis',
      priceLabel: 'Harga',
      accentColor: 'red',
      delay: 0.3,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pilih <span className="text-indigo-600">Layanan</span> yang Kamu Butuh
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dari tugas kuliah sampai project fullstack, semua bisa diselesaikan dengan harga yang
            ramah kantong mahasiswa.
          </p>
        </motion.div>

        {/* Service Cards Grid - Flyonui card-group optional; using grid for 4 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
