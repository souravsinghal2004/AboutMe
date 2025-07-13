// src/components/Projects.jsx
import { profile } from "@/constants/data";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-black">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((project, idx) => (
            <div key={idx} className="bg-zinc-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-4 space-x-4">
                <Link href={project.link} className="text-blue-400 hover:underline">Live</Link>
                <Link href={project.github} className="text-blue-400 hover:underline">GitHub</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
