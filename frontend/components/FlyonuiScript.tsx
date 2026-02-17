'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function FlyonuiScript() {
  const path = usePathname()

  useEffect(() => {
    // Impor FlyonUI hanya di sisi klien
    import('flyonui/flyonui')
  }, [])

  useEffect(() => {
    // Inisialisasi ulang komponen saat rute berubah (untuk navigasi SPA)
    setTimeout(() => {
      if (window.HSStaticMethods && typeof window.HSStaticMethods.autoInit === 'function') {
        window.HSStaticMethods.autoInit()
      }
    }, 100)
  }, [path])

  return null
}
