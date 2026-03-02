'use client'

import { motion } from 'framer-motion'

export default function TentangKami() {
  return (
    <section id="about" className="relative bg-base-200/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-24">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-4">
            Tentang <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Siapa kami, nilai yang kami pegang, dan apa yang bisa Anda dapatkan.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 text-base-content/85 leading-relaxed text-left">
            <p className="text-lg">
              <strong className="text-base-content">MazeCode</strong> hadir untuk membantu Anda
              mengatasi kebutuhan website sesuai <strong className="text-base-content">kondisi dan
              permasalahan bisnis Anda</strong>—apapun skalanya. Kami percaya solusi yang baik
              itu yang rapi, terstruktur, dan bisa dipelihara ke depan, bukan sekadar “sudah jadi”.
            </p>

            <p>
              Supaya solusinya pas, kami mengajak <strong className="text-base-content">konsultasi
              dulu—gratis</strong>. Ceritakan kebutuhan, kendala, dan budget; kami bantu rangkai
              opsi yang masuk akal. Tidak ada paksaan untuk langsung order; yang penting Anda
              dapat gambaran jelas sebelum memutuskan.
            </p>

            <div className="pl-4 border-l-4 border-primary/30 my-8">
              <p className="text-base-content/90 italic">
                Mulai dari satu halaman untuk promosi, sistem dengan login & database, sampai
                project custom—kami sesuaikan dengan situasi Anda. Setiap project dilengkapi{' '}
                <strong className="text-base-content">revisi minor gratis</strong> agar hasilnya
                betul-betul sesuai harapan.
              </p>
            </div>

            <p>
              Jika Anda butuh partner yang responsif, komunikasinya jelas, dan hasil kodenya rapi,
              silakan diskusi dulu lewat WhatsApp—tanpa biaya dan tanpa paksaan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
