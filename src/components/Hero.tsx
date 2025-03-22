
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-fintech-400/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-fintech-500/20 rounded-full filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-content relative z-10 pt-20 text-center">
        <div className={cn(
          'space-y-6 max-w-3xl mx-auto transition-all duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'
        )}>
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32 border-4 border-fintech-100 shadow-lg">
              <AvatarImage src="/public/profile.jpeg" alt="Venkat Sai Pallapu" />
              <AvatarFallback className="text-3xl font-bold bg-fintech-100 text-fintech-800">VP</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-fintech-100 text-fintech-800 text-sm font-medium mb-2">
            <span>Software Engineer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-fintech-600">V</span>enkat Sai Pallapu
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            FinTech Innovator | SaaS Solutions Expert
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building scalable and efficient FinTech solutions that simplify complex financial processes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#contact" className="button-primary">
              Get in touch
            </a>
            <a href="#career-update" className="button-secondary">
              Latest Update
            </a>
          </div>
        </div>
        
        <div className={cn(
          'absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}>
          <a 
            href="#about" 
            className="flex flex-col items-center text-foreground/70 hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-sm mb-2">Learn more</span>
            <ArrowDown size={8} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
