import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Mail,
  Code, 
  Palette, 
  Layers, 
  Smartphone,
  Menu,
  X,
  Monitor
} from 'lucide-react';
import aboutPhoto from './assets/WhatsApp Image 2026-04-15 at 7.16.28 PM.jpeg';

// Color Palette Constants
const COLORS = {
  bg: '#F5F5F0', // Creamy Beige
  brandRed: '#C02626', // Brand Red from logo
  brandBlack: '#121212', // Brand Black
  whiteSmoke: '#FFFFFF',
  softCream: '#EBEBE6'
};

const revealVariants = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 }
  }
};

const ScrollReveal = ({ children, direction = 'left', delay = 0 }) => (
  <motion.div
    variants={revealVariants[direction]}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-2xl font-black tracking-tighter uppercase italic"
      >
        Boyishspike
      </button>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 font-medium text-sm tracking-widest uppercase">
        <a href="#work" className="hover:line-through transition-all">Work</a>
        <a href="#services" className="hover:line-through transition-all">Services</a>
        <a href="#about" className="hover:line-through transition-all">About</a>
        <a href="#contact" className="hover:line-through transition-all">Contact</a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#121212] flex flex-col items-center justify-center gap-8 text-3xl font-bold uppercase tracking-widest"
          >
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

const Marquee = ({ text, reverse = false }) => {
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

const ProjectCard = ({ title, category, image }) => {
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

const ServiceItem = ({ icon: Icon, title, description, bgImg }) => (
  <div
    className="relative overflow-hidden p-10 border-r-2 border-[#121212] last:border-r-0 hover:text-white transition-all group min-h-[400px]"
  >
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
    <div className="min-h-screen bg-[#F5F5F0] text-[#121212] font-sans overflow-x-hidden selection:bg-[#C02626] selection:text-white scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Logo Background Images (fading in and out) */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('libas.jpg')" }} />
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('darl red.jpg')" }} />
          <div className="w-1/3 h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('Libas tennis.jpg')" }} />
        </div>

        <div className="text-center z-10">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[20vw] sm:text-[15vw] leading-[0.8] font-black italic tracking-tighter uppercase"
          >
            Boyish<br/><span className="text-[#C02626]">Spike</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="max-w-xl text-lg md:text-2xl font-medium leading-tight px-2">
              A high-end web architecture studio. We design, build, and scale digital products that define industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:px-0">
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
              Selected<br/><span className="text-[#C02626]">Works</span>
            </h2>
            <div className="max-w-md text-right">
              <p className="text-xl font-medium opacity-70 uppercase tracking-widest">
                Deployments that set the standard for 2026 and beyond.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard title="Quantum Fin" category="Fintech • System Architecture" />
            <ProjectCard title="Nova Studio" category="E-Commerce • Headless" />
            <ProjectCard title="Aetheric" category="SaaS • UI/UX Strategy" />
            <ProjectCard title="Luxe Living" category="Real Estate • Branding" />
            <ProjectCard title="Pulse" category="Healthtech • Mobile App" />
            <ProjectCard title="The Vault" category="Security • Web3" />
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
            bgImg="darl red.jpg"
            description="Bold aesthetics that command authority. We create identities that don't just look good, but perform."
          />
          <ServiceItem 
            icon={Code} 
            title="Engineering" 
            bgImg="Libas tennis.jpg"
            description="The best code is invisible but powerful. Clean, scalable, and built for high-performance scale."
          />
          <ServiceItem 
            icon={Smartphone} 
            title="Mobile First" 
            bgImg="libas.jpg"
            description="Seamless experiences on every screen. We architect for the modern mobile-centric world."
          />
        </div>
      </section>

      {/* About Me Section */}
      <ScrollReveal direction="left">
      <section id="about" className="py-24 md:py-32 px-6 bg-white border-b-2 border-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
      </ScrollReveal>

      {/* Philosophy Section */}
      <ScrollReveal direction="right">
      <section className="py-24 md:py-32 px-6 bg-white border-y-2 border-[#121212]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.5em] text-[#C02626] mb-6 block">Our philosophy</span>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase mb-8 leading-tight">
              Architecture over <br/>Aesthetics alone
            </h2>
            <p className="text-xl font-medium leading-relaxed opacity-80 mb-8">
              We believe a beautiful site that fails to scale is a failure of imagination. At Boyishspike, we build with the future in mind. Every pixel and line of code is part of a larger ecosystem designed to grow with your brand. We don't just launch sites; we launch businesses into the next decade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter">Fast</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Loads quickly</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter">Responsive</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Works on all screens</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black italic tracking-tighter">ROI</p>
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
      </ScrollReveal>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#121212] text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-[12vw] md:text-[8vw] font-black italic tracking-tighter uppercase leading-[0.8] mb-12">
              Ready to create an<br/><span className="text-[#C02626]">awesome website?</span>
            </h2>
            <div className="flex flex-col items-center gap-6">
              <button
                onClick={() => window.open('https://forms.gle/kRLz3wktyXg8ajANA', '_blank')}
                className="inline-flex items-center justify-center bg-[#C02626] text-white px-10 py-5 rounded-full font-black italic uppercase tracking-[0.15em] text-sm sm:text-base hover:bg-white hover:text-[#121212] transition-colors border-2 border-[#C02626]"
              >
                Book a Call
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 gap-8">
            <div className="text-sm font-medium opacity-40 uppercase tracking-widest">
              © 2026 Boyishspike Studio. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/boyishspike/" target="_blank" rel="noreferrer" className="hover:text-[#C02626] transition-colors"><ExternalLink size={24} /></a>
              <a href="#" className="hover:text-[#C02626] transition-colors"><Layers size={24} /></a>
              <a href="#" className="hover:text-[#C02626] transition-colors"><Code size={24} /></a>
              <a href="mailto:boyishspike@gmail.com" className="hover:text-[#C02626] transition-colors" aria-label="Email Boyishspike"><Mail size={24} /></a>
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