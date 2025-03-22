
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  field: string;
  startDate: string;
  endDate: string;
  location?: string;
}

const educations: Education[] = [
  {
    degree: "Master of Science - MS, Computer Science",
    institution: "Pace University - Seidenberg School of Computer Science and Information Systems",
    field: "Software Development",
    startDate: "Sep 2023",
    endDate: "Dec 2024"
  },
  {
    degree: "Bachelor of Technology - BTech, Computer Science",
    institution: "INSTITUTE OF AERONAUTICAL ENGINEERING",
    field: "Software Development",
    startDate: "2015",
    endDate: "2019"
  }
];

const EducationSection: React.FC = () => {
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

    // Observe each education item
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
    <section id="education" className="section bg-secondary/30">
      <div className="container-content">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="section-title">Academic History</p>
          <h2 className="section-heading">Educational Background</h2>
          <p className="text-muted-foreground text-lg">
            My academic journey and qualifications that have shaped my expertise in computer science and software development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education, index) => (
            <div 
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className={cn(
                "bg-white dark:bg-black/40 rounded-xl p-6 shadow-sm border border-border",
                "opacity-0 translate-y-10 transition-all duration-700 ease-out card-hover"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fintech-100 text-fintech-600 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{education.degree}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>{education.startDate} - {education.endDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="ml-16">
                <p className="text-foreground font-medium">{education.institution}</p>
                <p className="text-muted-foreground mt-1">Field of Study: {education.field}</p>
                {education.location && (
                  <p className="text-sm text-muted-foreground mt-1">{education.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;