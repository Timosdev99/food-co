'use client';

import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [menuPopover, setMenuPopover] = useState(false);
  const [giftCardPopover, setGiftCardPopover] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    "Prime Menu",
    "Lunch Menu",
    "Holiday Menu",
    "Sunday Brunch",
    "Happy Hour",
    "Wine List",
    "Dessert",
    "Kids",
  ];

  const giftCardItems = ["Checkout", "Cart", "My Account"];

  const contentVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const containerVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const popoverVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 justify-between items-center h-20">

          <motion.div
            whileHover={{ scale: 1.1, rotate: -15 }}
            className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center transform -rotate-12">
              <div className="w-8 h-8 border-4 border-black rounded"></div>
            </div>
            <span className="text-xl font-bold text-white">SEA FOOD.</span>
          </motion.div>

          <div className="hidden text-sm md:flex mr-20 space-x-8">
            <div className="relative" onMouseEnter={() => setMenuPopover(true)} onMouseLeave={() => setMenuPopover(false)}>
              <motion.a
                href="#"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                MENUS
              </motion.a>
              <AnimatePresence>
                {menuPopover && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={popoverVariants}
                    className="absolute mt-2 w-48 bg-white rounded-md shadow-lg"
                  >
                    <ul className="py-1">
                      {menuItems.map((item) => (
                        <li key={item} onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-0.5 bg-gray-500"
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#D1D5DB' }}
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              RESERVE A TABLE
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#D1D5DB' }}
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              EVENTS
            </motion.a>
            <div className="relative" onMouseEnter={() => setGiftCardPopover(true)} onMouseLeave={() => setGiftCardPopover(false)}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#D1D5DB' }}
                className="text-white hover:text-gray-400 transition-colors duration-200"
              >
                GIFTS CARDS
              </motion.a>
              <AnimatePresence>
                {giftCardPopover && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={popoverVariants}
                    className="absolute mt-2 w-48 bg-white rounded-md shadow-lg"
                  >
                    <ul className="py-1">
                      {giftCardItems.map((item) => (
                        <li key={item} onMouseEnter={() => setHoveredItem(item)} onMouseLeave={() => setHoveredItem(null)}>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{item}</a>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredItem === item ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="h-0.5 bg-gray-500"
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#D1D5DB' }}
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              PRIVATE DINNING
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#D1D5DB' }}
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              SPECIAL OCCASIONS
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: '#D1D5DB' }}
              className="text-white hover:text-gray-400 transition-colors duration-200"
            >
              OUR BRANDS
            </motion.a>



          </div>


          <button
            className="md:hidden text-white hover:text-gray-400 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="md:hidden bg-gray-500 border-t border-gray-800">
        <div className="px-4 py-4 space-y-4">
          <a
            href="#"
            className="block text-gray-400 hover:text-gray-300 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-400 transition-colors duration-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-400 transition-colors duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-400 transition-colors duration-200"
          >
            Pages
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-400 transition-colors duration-200"
          >
            Contact Us
          </a>

          <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
