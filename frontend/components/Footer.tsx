'use client'

const footerLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Layanan', href: '#services' },
  { label: 'Mengapa Kami', href: '#why-us' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Kontak', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-indigo-950 text-indigo-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-xl font-bold bg-gradient-to-br from-indigo-300 to-blue-400 bg-clip-text text-transparent"
            >
              MazeCode
            </a>
            <p className="mt-2 text-sm text-indigo-200/90 max-w-xs">
              Bantu wujudkan kebutuhan digital bisnis Anda—terjangkau dan siap berkembang.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-indigo-100 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact & Copyright */}
        <div className="mt-10 pt-8 border-t border-indigo-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="https://wa.me/628134567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white transition-colors"
            >
              <span className="size-5 icon-[ic--sharp-whatsapp]" />
              WhatsApp
            </a>
          </div>
          <p className="text-sm text-indigo-300/80">
            © {year} MazeCode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
