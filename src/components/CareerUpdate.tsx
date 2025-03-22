
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Award, TrendingUp, Briefcase, Target } from 'lucide-react';

const CareerUpdate: React.FC = () => {
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
    <section id="career-update" ref={sectionRef} className="section">
      <div className="container-content">
        <div 
          ref={contentRef} 
          className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <p className="section-title">Latest News</p>
          <h2 className="section-heading">Career Update</h2>
          
          <div className="bg-white dark:bg-black/40 rounded-xl p-6 md:p-8 shadow-sm border border-border mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fintech-100 text-fintech-600 mr-4">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full-time Role at FinMkt</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                🎉 I'm excited to announce that I have started my full-time role as a Software Engineer at FinMkt! 🎉
              </p>
              
              <p>
                FinMkt is changing the way financial services work by offering cloud-based solutions for consumer 
                lending, point-of-sale financing, and payment solutions for businesses of all sizes.
              </p>
              
              <p>
                I'm proud to share that FinMkt now helps facilitate over 🚀$1 billion annually in home improvement 
                and dental Point of Sale loans! This milestone shows the hard work and innovation FinMkt brings to 
                improving financial solutions for both consumers and businesses.
              </p>
              
              <p>
                FinMkt's technology helps banks and credit unions modernize, stay competitive, and meet customer 
                needs with minimal effort. We also empower enterprise partners to offer customized financing and 
                payment solutions under their brand, giving customers easy access to real-time financing and payment 
                options without extra hardware. With fast, reliable solutions and exceptional service, FinMkt is 
                making a significant impact in the financial technology space.
              </p>
              
              <p>
                A huge thank you to Srikanth Goteti, Luan Cox, and Dheeraj Medikonda for all the support and guidance. 
                Your mentorship has been key to my growth, and I'm excited to keep learning from you.
              </p>
              
              <p>
                I can't wait to work alongside the talented team at FinMkt to continue creating innovative 
                solutions and reach new heights together!
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #FinFam
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #CareerGrowth
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #TechInnovation
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #EmbeddedFinance
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #FinancialServices
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #NewBeginnings
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #Gratitude
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-fintech-100 text-fintech-800">
                  #Milestone
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerUpdate;