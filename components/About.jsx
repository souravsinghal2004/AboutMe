// src/components/About.jsx
import { profile } from '@/constants/data';

const About = () => {
  return (
    <section id="about" className="py-16 bg-zinc-900">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          A Computer Science graduate who loves building beautiful and functional full-stack applications.
          I'm self-taught, driven, and passionate about continuous learning. I enjoy working with modern frameworks
          and building real-world tools that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default About;
