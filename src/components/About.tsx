
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add('animate-fade-up');
            contentRef.current?.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section bg-secondary/30">
      <div className="container-content">
        <div 
          ref={contentRef} 
          className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="section-title">About Me</p>
          <h2 className="section-heading">FinTech Professional</h2>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-4 text-lg">
              I am currently part of the dynamic team at FinMkt, a pioneering company in Financial Technology. 
              FinMkt is renowned for revolutionizing digital lending and payment solutions through API-driven 
              SaaS platforms designed to meet lenders, merchants, and enterprise partners' unique needs.
            </p>
            
            <p className="mb-4 text-lg">
              As a Senior Software Engineer, I focus on building scalable and efficient FinTech solutions 
              that simplify complex financial processes. My journey with FinMkt started in India, and I 
              transitioned to the U.S., progressing from a master's program and internship to a full-time role.
            </p>
            
            <p className="text-lg">
              I enjoy solving challenging problems, contributing to impactful projects, and leveraging 
              technology to drive innovation in FinTech.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={cn(
              "bg-white dark:bg-black/40 rounded-xl p-6 shadow-sm card-hover",
              "border border-border"
            )}>
              <h3 className="text-xl font-medium mb-2">FinTech Innovation</h3>
              <p className="text-muted-foreground">Developing cutting-edge financial technology solutions for modern banking and lending systems.</p>
            </div>
            
            <div className={cn(
              "bg-white dark:bg-black/40 rounded-xl p-6 shadow-sm card-hover",
              "border border-border"
            )}>
              <h3 className="text-xl font-medium mb-2">SaaS Architecture</h3>
              <p className="text-muted-foreground">Engineering robust and scalable software-as-a-service platforms for financial services.</p>
            </div>
            
            <div className={cn(
              "bg-white dark:bg-black/40 rounded-xl p-6 shadow-sm card-hover",
              "border border-border"
            )}>
              <h3 className="text-xl font-medium mb-2">API Development</h3>
              <p className="text-muted-foreground">Building secure and efficient APIs that power financial transactions and data integration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
