
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "FinMkt",
    location: "New York, New York, United States",
    type: "Full-time",
    startDate: "Dec 2024",
    endDate: "Present",
    description: "Working as a full-time Software Engineer at FinMkt, developing and maintaining API-driven SaaS platforms for digital lending and payment solutions."
  },
  {
    title: "Software Engineer",
    company: "FinMkt",
    location: "Kings County, New York, United States",
    type: "Internship",
    startDate: "May 2024",
    endDate: "Present",
    description: "Contributing to FinMkt's technology initiatives through a comprehensive internship program focused on financial technology solutions."
  },
  {
    title: "Software Developer",
    company: "Crowdnetic",
    location: "Hyderabad, Telangana, India",
    type: "Full-time",
    startDate: "Mar 2020",
    endDate: "Aug 2023",
    description: "Worked as a Software Developer at Crowdnetic for over 3 years, focusing on software development for financial services and crowdfunding platforms."
  },
  {
    title: "Software Developer",
    company: "KloudPortal",
    location: "Hyderabad Area, India",
    type: "Full-time",
    startDate: "Jun 2019",
    endDate: "Mar 2020",
    description: "Served as a Software Developer at KloudPortal, contributing to SaaS product development and marketing solutions."
  }
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe section heading
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each experience item
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container-content">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="section-title">My Journey</p>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            A chronological overview of my professional career, highlighting my growth and contributions in the software development industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className={cn(
                "timeline-item opacity-0 translate-y-10 transition-all duration-700 ease-out",
                { "delay-[100ms]": index === 0 },
                { "delay-[200ms]": index === 1 },
                { "delay-[300ms]": index === 2 },
                { "delay-[400ms]": index === 3 }
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center text-muted-foreground mb-1">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-1.5 text-fintech-600" />
                    <span className="mr-3">{experience.company}</span>
                  </div>
                  <div className="flex items-center mt-1 md:mt-0">
                    <Calendar size={16} className="mr-1.5 text-fintech-600" />
                    <span>{experience.startDate} - {experience.endDate}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800 mr-2">
                    {experience.type}
                  </span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <p className="text-foreground/80">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;