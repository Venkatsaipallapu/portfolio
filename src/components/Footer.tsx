import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container-content">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Avatar className="w-12 h-12 mr-4 border-2 border-fintech-100">
              <AvatarImage src="/profile.jpeg" alt="Venkat Sai Pallapu" />
              <AvatarFallback className="bg-fintech-100 text-fintech-800">VP</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold">
                <span className="text-fintech-600">V</span>enkat Sai Pallapu
              </p>
              <p className="text-sm text-muted-foreground">
                Software Engineer | FinTech Innovator
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-3 mb-4">
              <a 
                href="https://linkedin.com/in/venkat-sai-pallapu-832902176" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-fintech-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="text-foreground/70 hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:venkatsaipallapu@gmail.com" 
                className="text-foreground/70 hover:text-fintech-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="mb-3 text-xs border-fintech-600 text-fintech-600 hover:bg-fintech-50"
              asChild
            >
              <a href="/resume-venkat-sai-pallapu.pdf" download="VenkatSaiPallapu_Resume.pdf">
                <Download size={14} className="mr-1" />
                Download Resume
              </a>
            </Button>
            
            <div className="text-sm text-muted-foreground">
              &copy; {currentYear} Venkat Sai Pallapu. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
