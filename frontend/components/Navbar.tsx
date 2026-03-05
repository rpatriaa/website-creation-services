'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, easeOut } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleNavClick = (href: string) => {
        if (href === '#' || href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setIsOpen(false)
            return
        }

        if (href.startsWith('#')) {
            const id = href.slice(1)
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            } else {
                router.push('/' + href)
            }
            setIsOpen(false)
            return
        }

        router.push(href)
        setIsOpen(false)
    }

    const menuVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: easeOut,
            },
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.3,
            },
        }),
    }

    const navLinks = [
        { label: 'Beranda', href: '#' },
        { label: 'Layanan', href: '#services' },
        { label: 'Mengapa Kami', href: '#why-us' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Tentang Kami', href: '#about' },
        { label: 'Kontak', href: '#contact' },
    ]

    return (
        <motion.nav
            className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <button
                        type="button"
                        onClick={() => handleNavClick('#')}
                        className="text-xl md:text-2xl font-bold bg-linear-to-br from-indigo-600 to-blue-600 bg-clip-text text-transparent text-left"
                    >
                        MazeCode
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-4 xl:gap-6">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    custom={i}
                                    initial="hidden"
                                    animate="visible"
                                    variants={itemVariants}
                                >
                                    <motion.button
                                        type="button"
                                        onClick={() => handleNavClick(link.href)}
                                        className="text-gray-700 font-medium relative group bg-transparent"
                                        whileHover={{ color: '#4f46e5' }}
                                    >
                                        {link.label}
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-br from-indigo-600 to-blue-600 group-hover:w-full transition-all duration-300"
                                        />
                                    </motion.button>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop CTA & Theme Toggle */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.button
                            className="px-6 py-2.5 bg-indigo-950 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Konsultasi Gratis
                        </motion.button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="lg:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            className="w-6 h-0.5 bg-gray-700 block"
                            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-gray-700 block"
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="w-6 h-0.5 bg-gray-700 block"
                            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="lg:hidden pb-4 border-t border-gray-200/50"
                        >
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.label}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <button
                                            type="button"
                                            className="block w-full text-left px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                                            onClick={() => handleNavClick(link.href)}
                                        >
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.div className="flex gap-3 pt-4 px-4">
                                <motion.button
                                    className="flex-1 px-4 py-2.5 bg-linear-to-br from-indigo-600 to-blue-600 text-white font-semibold rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Mulai
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar
