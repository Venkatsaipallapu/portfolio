
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Mail, MessageCircle, Send, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
    
    setIsSubmitting(true);
    
    try {
      // This could be replaced with an actual form submission to your backend
      // For now we're simulating sending the form data
      console.log('Sending message to: venkatsaipallapu@gmail.com');
      console.log('Form data:', { name, email, message });

      // Note: In a real implementation, you would send this data to a server
      // that would then forward it to your email address

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "Message Sent!",
        description: "Your message has been sent to Venkat's email.",
      });
      
      // Reset success message after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container-content">
        <div 
          ref={contentRef} 
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="text-center mb-12">
            <p className="section-title">Get In Touch</p>
            <h2 className="section-heading">Contact Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have an opportunity or want to connect? Feel free to reach out through the form below or directly via email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white dark:bg-black/40 rounded-xl p-8 shadow-sm border border-border h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fintech-100 text-fintech-600 mr-4">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Let's Talk</h3>
                </div>
                
                <p className="mb-8 text-muted-foreground">
                  I'm always open to discussing new projects, opportunities, or partnerships.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-fintech-50 text-fintech-600 mr-4">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">venkatsaipallapu@gmail.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/venkat-sai-pallapu-832902176" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-fintech-600 text-white hover:bg-fintech-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground text-white hover:bg-foreground/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white dark:bg-black/40 rounded-xl p-8 shadow-sm border border-border">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError && validateEmail(e.target.value)) {
                        setEmailError('');
                      }
                    }}
                    className={cn(
                      "w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
                      emailError && "border-red-500 focus:ring-red-500"
                    )}
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Message</label>
                  <textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "w-full button-primary flex items-center justify-center",
                    (isSubmitting || isSubmitted) && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center">
                      <svg className="mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;