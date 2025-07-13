// src/components/TechStack.jsx
import { profile } from "@/constants/data";

const TechStack = () => {
  return (
    <section id="stack" className="py-16 bg-zinc-900 text-center">
      <h3 className="text-3xl font-semibold mb-6">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {profile.techStack.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
