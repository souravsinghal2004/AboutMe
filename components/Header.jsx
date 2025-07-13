// src/components/Header.jsx
'use client'

import Link from 'next/link';
import { profile } from '@/constants/data';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#stack" className="hover:text-blue-400">Tech</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
