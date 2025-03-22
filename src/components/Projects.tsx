import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory, payment processing, and order management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Data visualization dashboard displaying real-time metrics with interactive charts and filtering capabilities.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tech: ["Vue.js", "D3.js", "Firebase", "Websockets"],
    link: "#",
    github: "#"
  },
  {
    title: "AI-Powered Task Manager",
    description: "Task management application with AI-powered prioritization and smart scheduling features.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tech: ["React Native", "Python", "TensorFlow", "AWS"],
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 space-y-4">
          <span className="pill pill-primary animate-slide-up">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight animate-slide-up animate-delay-100">Selected Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up animate-delay-200">
            A showcase of my most significant projects from the last 5 years, reflecting my problem-solving approach and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card rounded-xl overflow-hidden bg-card border animate-slide-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="pill pill-secondary">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> View Project
                  </a>
                  <a 
                    href={project.github} 
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
