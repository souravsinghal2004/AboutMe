// src/components/Contact.jsx
import { profile } from '@/constants/data';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact Me</h3>
      <p className="text-gray-300 mb-2">Email: <a href={`mailto:${profile.email}`} className="text-blue-400 underline">{profile.email}</a></p>
      <p className="text-gray-300 mb-2">GitHub: <Link href={profile.github} className="text-blue-400 underline">{profile.github}</Link></p>
      <p className="text-gray-300">LinkedIn: <Link href={profile.linkedin} className="text-blue-400 underline">{profile.linkedin}</Link></p>
    </section>
  );
};

export default Contact;
