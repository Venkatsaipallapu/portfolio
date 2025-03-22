
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Award, GraduationCap, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  organization: string;
  issueDate: string;
  credentialId?: string;
  image?: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Master of Science",
    organization: "Pace University - Seidenberg School of Computer Science and Information Systems",
    issueDate: "Dec 2024",
    credentialId: "252Q-941G-V7UJ",
    link: "https://cedt.pace.edu/validate/",
    image: ""
  },
  {
    title: "INSPIRE (International Student Professional Readiness Education) Program Certification",
    organization: "Pace University - Seidenberg School of Computer Science and Information Systems",
    issueDate: "Mar 2024",
    link: "https://www.credly.com/badges/63f43a11-cdea-4a77-9ca4-8bf60b11d7a1/linked_in_profile",
    image: ""
  }
];

const Certifications: React.FC = () => {
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

    // Observe each certification item
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
    <section id="certifications" className="section bg-secondary/30">
      <div className="container-content">
        <div 
          ref={sectionRef} 
          className="text-center max-w-3xl mx-auto mb-12 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="section-title">Professional Development</p>
          <h2 className="section-heading">Licenses & Certifications</h2>
          <p className="text-muted-foreground text-lg">
            Credentials that validate my expertise and ongoing commitment to professional growth.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
          {certifications.map((certification, index) => (
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
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{certification.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>Issued {certification.issueDate}</span>
                  </div>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-foreground font-medium">{certification.organization}</p>
                {certification.credentialId && (
                  <p className="text-sm text-muted-foreground mt-1">Credential ID: {certification.credentialId}</p>
                )}
              </div>
              <div className="ml-16">
              <p className="text-foreground font-medium">
                <a href={certification.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Check the certificate out here
                </a>
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;