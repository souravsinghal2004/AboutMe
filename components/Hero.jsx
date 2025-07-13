// src/components/Hero.jsx
'use client'

import { profile } from '@/constants/data';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 text-center" id="home">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Image
          src={profile.photo}
          alt={profile.name}
          width={120}
          height={120}
          className="mx-auto rounded-full shadow-lg border border-white"
        />
        <h2 className="text-4xl font-bold mt-4">{profile.name}</h2>
        <p className="text-lg mt-2 text-gray-400">{profile.role}</p>
        <p className="max-w-xl mx-auto mt-4 text-gray-300">{profile.bio}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
