import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Layers, 
  Smartphone,
  ChevronRight,
  Menu,
  X,
  Monitor,
  Phone,
  type LucideIcon
} from 'lucide-react';
import aboutPhoto from './assets/WhatsApp Image 2026-04-15 at 7.16.28 PM.jpeg';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const STOCK_IMAGES = {
  hero1:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  hero2:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
  hero3:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  servicesDesign:
    'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=1200&q=80',
  servicesEngineering:
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
  servicesMobile:
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
  project1:
    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
  project2:
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  project3:
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
  project4:
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
  project5:
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
  project6:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80'
};

type MarqueeProps = {
  text: string;
  reverse?: boolean;
};

type ProjectCardProps = {
  title: string;
  category: string;
  image?: string;
};

type ServiceItemProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  bgImg: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-6 mix-blend-difference text-white">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="hidden w-1/3 md:flex gap-8 font-medium text-xs tracking-widest uppercase">
          <a href="#work" className="hover:line-through transition-all">Work</a>
          <a href="#services" className="hover:line-through transition-all">Services</a>
          <a href="#about" className="hover:line-through transition-all">About</a>
          <a href="#contact" className="hover:line-through transition-all">Contact</a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="absolute left-1/2 -translate-x-1/2 text-lg md:text-2xl font-black tracking-tighter uppercase italic"
          aria-label="Scroll to top"
        >
          Boyishspike
        </button>

        <div className="flex w-full justify-end md:w-1/3">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center gap-8 text-3xl font-bold uppercase tracking-widest"
          >
            <button type="button" onClick={() => { scrollToTop(); setIsOpen(false); }}>Boyishspike</button>
            <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
            <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Marquee = ({ text, reverse = false }: MarqueeProps) => {
  return (
    <div className="relative flex overflow-x-hidden border-y-2 border-[#121212] py-4 bg-[#C02626] text-white overflow-hidden">
      <motion.div 
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-8"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-2xl font-black uppercase italic tracking-tighter">
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, category, image }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative aspect-[4/5] bg-white overflow-hidden border-2 border-[#121212] rounded-3xl"
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="bg-white p-4 rounded-full">
          <ArrowUpRight color="#121212" size={32} />
        </div>
      </div>
      <div className="h-[75%] bg-[#EBEBE6] overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black/10">
            <Monitor size={120} />
          </div>
        )}
      </div>
      <div className="p-6 bg-white h-[25%] border-t-2 border-[#121212]">
        <h3 className="text-2xl font-black tracking-tighter leading-none mb-2 uppercase italic">{title}</h3>
        <p className="text-sm font-medium opacity-60 uppercase tracking-widest">{category}</p>
      </div>
    </motion.div>
  );
};

const ServiceItem = ({ icon: Icon, title, description, bgImg }: ServiceItemProps) => (
  <div className="relative overflow-hidden p-10 border-r-2 border-[#121212] last:border-r-0 hover:text-white transition-all group min-h-[400px]">
    <div 
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-center bg-cover"
      style={{ backgroundImage: `url('${bgImg}')` }}
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      <div className="bg-[#121212] w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-white transition-colors">
        <Icon size={32} className="text-white group-hover:text-[#121212] transition-colors" />
      </div>
      <h3 className="text-3xl font-black italic tracking-tighter uppercase mb-4">{title}</h3>
      <p className="text-lg leading-tight font-medium opacity-70 group-hover:opacity-100">{description}</p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#121212] font-sans overflow-x-hidden selection:bg-[#C02626] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Logo Background Images (fading in and out) */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${STOCK_IMAGES.hero1}')` }} />
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${STOCK_IMAGES.hero2}')` }} />
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: `url('${STOCK_IMAGES.hero3}')` }} />
        </div>

        <div className="text-center z-10">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[15vw] leading-[0.8] font-black italic tracking-tighter uppercase"
          >
            Boyish<br/><span className="text-[#C02626]">Spike</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="max-w-xl text-xl md:text-2xl font-medium leading-tight">
              A high-end web architecture studio. We design, build, and scale digital products that define industries.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#work" className="bg-[#121212] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C02626] transition-colors">View Projects</a>
              <button onClick={() => window.open('https://forms.gle/kRLz3wktyXg8ajANA', '_blank')} className="border-2 border-[#121212] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#121212] hover:text-white transition-all">Start Project</button>
            </div>
          </motion.div>
        </div>
      </header>

      <Marquee text="Engineered for the Digital Frontier" reverse />

      {/* Projects Section */}
      <section id="work" className="py-24 md:py-32 px-6 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
              Selected<br/><span className="text-[#C02626]">Works</span>
            </h2>
            <div className="max-w-md text-right">
              <p className="text-xl font-medium opacity-70 uppercase tracking-widest">
                Deployments that set the standard for 2026 and beyond.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Quantum Fin" category="Fintech • System Architecture" image={STOCK_IMAGES.project1} />
            <ProjectCard title="Nova Studio" category="E-Commerce • Headless" image={STOCK_IMAGES.project2} />
            <ProjectCard title="Aetheric" category="SaaS • UI/UX Strategy" image={STOCK_IMAGES.project3} />
            <ProjectCard title="Luxe Living" category="Real Estate • Branding" image={STOCK_IMAGES.project4} />
            <ProjectCard title="Pulse" category="Healthtech • Mobile App" image={STOCK_IMAGES.project5} />
            <ProjectCard title="The Vault" category="Security • Web3" image={STOCK_IMAGES.project6} />
          </div>
        </div>
      </section>

      <Marquee text="Digital Architecture • Full-Stack Development • UI/UX Engineering • Brand Identity • Systems Design" />

      {/* Services Grid */}
      <section id="services" className="border-b-2 border-[#121212]">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <ServiceItem 
            icon={Palette} 
            title="Visual Design" 
            bgImg={STOCK_IMAGES.servicesDesign}
            description="Bold aesthetics that command authority. We create identities that don't just look good, but perform."
          />
          <ServiceItem 
            icon={Code} 
            title="Engineering" 
            bgImg={STOCK_IMAGES.servicesEngineering}
            description="The best code is invisible but powerful. Clean, scalable, and built for high-performance scale."
          />
          <ServiceItem 
            icon={Smartphone} 
            title="Mobile First" 
            bgImg={STOCK_IMAGES.servicesMobile}
            description="Seamless experiences on every screen. We architect for the modern mobile-centric world."
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-white border-b-2 border-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative group max-w-md mx-auto w-full">
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border-2 border-[#121212]">
                <img 
                  src={aboutPhoto} 
                  alt="Boyishspike" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#C02626] rounded-full flex items-center justify-center p-6 text-white text-center font-black italic uppercase leading-none border-4 border-white rotate-12">
                Founder & Lead Architect
              </div>
            </div>
            <div>
              <span className="text-lg md:text-xl font-extrabold uppercase tracking-[0.65em] text-[#C02626] mb-6 block">THE MIND BEHIND THE STUDIO</span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-8 leading-tight">
                I AM SAIF
              </h2>
              <p className="text-xl font-medium leading-relaxed opacity-80 mb-6">
                I'm a 20 year old WEB DESIGNER and I build websites that make people trust your business the second they land on it. Fast, clean, mobile-ready - built to turn visitors into actual customers.
              </p>
              <p className="text-xl font-medium leading-relaxed opacity-80 mb-10">
                I work with restaurants, hotels, salons and businesses across Australia who are done being invisible online. No agency markup. Just one flat fee and a site that does its job.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-[#F5F5F0] border-2 border-[#121212] rounded-full font-bold uppercase text-xs tracking-widest">WEB DESIGNER</div>
                <div className="px-6 py-3 bg-[#F5F5F0] border-2 border-[#121212] rounded-full font-bold uppercase text-xs tracking-widest">VISUAL STRATEGIST</div>
                <div className="px-6 py-3 bg-[#F5F5F0] border-2 border-[#121212] rounded-full font-bold uppercase text-xs tracking-widest">BASED ONLINE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 bg-white border-y-2 border-[#121212]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.5em] text-[#C02626] mb-6 block">Our philosophy</span>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-tight">
              Architecture over <br/>Aesthetics alone
            </h2>
            <p className="text-xl font-medium leading-relaxed opacity-80 mb-8">
              We believe a beautiful site that fails to scale is a failure of imagination. At Boyishspike, we build with the future in mind. Every pixel and line of code is part of a larger ecosystem designed to grow with your brand. We don't just launch sites; we launch businesses into the next decade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none">Fast</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Loads quickly</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none">Responsive</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Works on all screens</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter leading-none">ROI-Focused</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Built to convert</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#EBEBE6] border-2 border-[#121212] rounded-[4rem] overflow-hidden flex items-center justify-center p-12">
               <div className="z-10 flex flex-col items-center">
                 <div className="w-48 h-48 bg-[#121212] rounded-full flex items-center justify-center mb-8 rotate-12 hover:bg-[#C02626] transition-colors duration-500">
                   <Monitor size={80} color="white" />
                 </div>
                 <h3 className="text-4xl font-black italic tracking-tighter uppercase">Built to Last</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#121212] text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-[clamp(2.4rem,8vw,6rem)] font-black italic tracking-tighter uppercase leading-[0.86] mb-12">
              Ready to create an<br/><span className="text-[#C02626]">awesome website?</span>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <LiquidButton
                variant="destructive"
                size="xxl"
                className="uppercase tracking-[0.2em] text-white font-black"
                onClick={() => window.open('https://forms.gle/kRLz3wktyXg8ajANA', '_blank')}
                aria-label="Book a call"
              >
                Book a Call
              </LiquidButton>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 place-items-center">
                <a
                  href="tel:+919500105451"
                  className="inline-flex items-center gap-3 text-lg md:text-2xl font-bold tracking-[0.08em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Phone size={20} />
                  <span className="uppercase text-xs tracking-[0.2em]">Phone</span>
                  +91 9500105451
                </a>
                <a
                  href="mailto:boyishspike@gmail.com"
                  className="inline-flex items-center gap-3 text-lg md:text-2xl font-bold tracking-[0.08em] opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail size={20} />
                  <span className="uppercase text-xs tracking-[0.2em]">Email</span>
                  boyishspike@gmail.com
                </a>
              </div>

              <a 
                href="tel:+919500105451" 
                className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={16} /> Available for calls Mon-Sat
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 gap-8">
            <div className="text-sm font-medium opacity-40 uppercase tracking-widest">
              © 2026 Boyishspike Studio. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/boyishspike/" target="_blank" rel="noreferrer" className="hover:text-[#C02626] transition-colors"><ExternalLink size={24} /></a>
              <a href="https://www.linkedin.com/in/mohammed-saif-b16081317/" target="_blank" rel="noreferrer" className="hover:text-[#C02626] transition-colors font-bold uppercase text-sm tracking-widest" aria-label="LinkedIn">in</a>
              <a href="#services" className="hover:text-[#C02626] transition-colors" aria-label="Services"><Layers size={24} /></a>
              <a href="#work" className="hover:text-[#C02626] transition-colors" aria-label="Work"><Code size={24} /></a>
              <a href="mailto:boyishspike@gmail.com" className="hover:text-[#C02626] transition-colors"><Mail size={24} /></a>
            </div>
            <div className="text-sm font-black italic tracking-tighter uppercase">
              Engineered for Excellence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}