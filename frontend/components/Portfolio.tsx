'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Casa Aisha',
    category: 'Landing Page · Properti',
    description:
      'Landing page perumahan dengan section fasilitas, lokasi strategis, galeri, denah tipe unit, dan CTA hubungi kami.',
    url: 'https://casaaisha.com/',
    image: '/images/portfolio/casaaisha.png',
    tags: ['Landing Page', 'Properti', 'Responsive'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-base-200/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contoh project yang sudah dikerjakan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Card project nyata - dengan thumbnail area */}
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="card bg-base-100 shadow-sm hover:shadow-md border border-base-200/80 rounded-2xl overflow-hidden transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Thumbnail / preview area */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-base-200/50 overflow-hidden"
              >
                {'image' in project && project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-50 to-indigo-50">
                    <span className="size-16 md:size-20 icon-[tabler--layout] text-indigo-400/60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 rounded-lg bg-white/90 px-2 py-1 text-xs font-medium text-indigo-600 shadow-sm">
                  {project.category}
                </div>
              </a>
              <div className="card-body p-5 md:p-6">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="card-title text-lg text-base-content">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-white border-0 text-primary"
                    aria-label={`Buka ${project.title}`}
                  >
                    <span className="size-5 icon-[tabler--external-link]" />
                  </a>
                </div>
                <p className="text-sm text-base-content/70 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge badge-soft badge-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm w-fit"
                >
                  Lihat website
                </a>
              </div>
            </motion.article>
          ))}

          {/* Placeholder "Coming soon" - 2 kartu agar grid tidak kosong */}
          {[1, 2].map((i) => (
            <motion.div
              key={`coming-soon-${i}`}
              className="card bg-base-100/50 border-2 border-dashed border-base-300 rounded-2xl overflow-hidden min-h-[280px] flex flex-col items-center justify-center p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video w-full max-w-[200px] rounded-xl bg-base-200/60 flex items-center justify-center mb-4">
                <span className="size-12 icon-[tabler--code-plus] text-base-content/30" />
              </div>
              <p className="font-medium text-base-content/70 mb-1">Project berikutnya</p>
              <p className="text-sm text-base-content/50">Segera hadir</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
