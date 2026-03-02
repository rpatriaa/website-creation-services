'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

const valueProps = [
  {
    title: 'Fast response & komunikasi jelas',
    description: 'Balas cepat, update berkala, dan bahasa yang mudah dipahami.',
    image: '/images/why-choose-us/message.png',
    imageAlt: 'Ilustrasi komunikasi responsif',
  },
  {
    title: 'Clean code & struktur scalable',
    description: 'Kode rapi, terdokumentasi, dan siap dikembangkan ke tahap berikutnya.',
    image: '/images/why-choose-us/scalable.png',
    imageAlt: 'Ilustrasi kode scalable',
  },
  {
    title: 'SEO friendly & mobile optimized',
    description: 'Website ramah mesin pencari dan nyaman dipakai di HP.',
    image: '/images/why-choose-us/seo.png',
    imageAlt: 'Ilustrasi SEO dan mobile',
  },
  {
    title: 'Gratis revisi minor',
    description: 'Perbaikan kecil tanpa biaya tambahan agar hasil sesuai harapan.',
    image: '/images/why-choose-us/revision.png',
    imageAlt: 'Ilustrasi revisi dokumen',
  },
  {
    title: 'Konsultasi sebelum mulai',
    description: 'Diskusi dulu kebutuhan dan budget, baru eksekusi—tanpa tekanan.',
    image: '/images/why-choose-us/discusion.png',
    imageAlt: 'Ilustrasi konsultasi tim',
  },
]

function IconWaveBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full text-primary/[0.06]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M0 50 C 25 20, 75 20, 100 50 L 100 100 L 0 100 Z"
        className="opacity-70"
      />
      <path
        fill="currentColor"
        d="M0 65 C 25 40, 75 40, 100 65 L 100 100 L 0 100 Z"
        className="opacity-40"
      />
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function WhyChooseUs() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="why-us"
      className="relative md:pb-16 pt-12 md:pt-16 bg-base-200/30 overflow-hidden"
    >
      <div className="container relative mx-auto px-4 md:px-24">
        {/* Header */}
        <motion.div
          className="text-left mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4">
            Mengapa <span className="text-primary">Pilih Kami?</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl ml-0 mr-auto">
            Alasan rasional kenapa layanan kami layak dipertimbangkan—bahkan sebelum Anda punya
            testimoni dari klien lain.
          </p>
        </motion.div>

        {/* Cards: gambar di kiri (lebih besar), judul + deskripsi di kanan */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {valueProps.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.2 } }
              }
              className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200/80 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300"
            >
              <div className="card-body p-5 md:p-6 flex flex-row flex-1 gap-4 md:gap-5 items-start text-left">
                {/* Gambar di kiri - lebih besar, dengan wave */}
                <div
                  className="relative flex-shrink-0 size-24 md:size-28 rounded-2xl overflow-hidden flex items-center justify-center bg-base-200/70"
                  aria-hidden
                >
                  <IconWaveBg />
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={112}
                    height={112}
                    className="relative z-10 object-contain w-full h-full p-2"
                    sizes="(max-width: 768px) 96px, 112px"
                  />
                </div>
                {/* Judul + deskripsi di kanan */}
                <div className="min-w-0 flex-1 flex flex-col">
                  <h3 className="font-bold text-base-content text-base md:text-lg leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
