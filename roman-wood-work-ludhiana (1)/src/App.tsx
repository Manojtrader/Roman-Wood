import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin, Phone, Mail, Star, Quote, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { companyDetails, services, reviews } from './data';
import { Chatbot } from './components/Chatbot';

function PageLoader() {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[100] flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        className="w-1/2 h-full bg-[#0a0a0a] border-r border-[#c5a059]/30 flex items-center justify-end pr-4 sm:pr-8 shadow-[10px_0_30px_rgba(0,0,0,0.5)] relative z-10"
      >
        <div className="overflow-hidden">
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#c5a059] font-serif text-4xl sm:text-6xl font-bold tracking-tight block uppercase tracking-[0.2em]"
          >
            ROMAN
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
        className="w-1/2 h-full bg-[#0a0a0a] border-l border-[#c5a059]/30 flex items-center pl-4 sm:pl-8 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] relative z-10"
      >
        <div className="overflow-hidden">
          <motion.span 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-white/90 font-serif text-4xl sm:text-6xl font-light italic block tracking-tight"
          >
            Wood Work
          </motion.span>
        </div>
      </motion.div>
      
      {/* Central Line effect that expands and fades */}
      <motion.div
        initial={{ scaleY: 0, opacity: 1 }}
        animate={{ scaleY: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#c5a059] -translate-x-1/2 shadow-[0_0_15px_#c5a059] z-20"
      />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-2xl font-bold text-white tracking-tight">
              ROMAN <span className="italic font-light opacity-80 text-white/80">Wood Work</span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-white/70 hover:text-[#c5a059]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#c5a059] transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/10 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#c5a059] font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.15) 0%, transparent 70%)' }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[#c5a059] uppercase tracking-[0.4em] font-semibold text-xs mb-4 block">
            Ludhiana, Punjab
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] mb-6 tracking-tight">
            Mastering the Art of <span className="text-[#c5a059] italic font-light opacity-90">Wood & Space</span>
          </h1>
          <p className="text-sm text-white/60 mb-8 max-w-lg leading-relaxed">
            Elevate your living and working environments with bespoke interior design, custom cabinetry, and premium wood finishing tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-[#c5a059] text-black font-bold rounded transition-colors text-center flex items-center justify-center space-x-2 text-[10px] uppercase tracking-[0.2em]"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded backdrop-blur-sm transition-colors text-center border border-white/10 text-[10px] uppercase tracking-[0.2em]"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="aspect-[4/5] rounded-lg overflow-hidden border border-white/5"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
                alt="Craftsmanship and woodwork details"
                className="w-full h-full object-cover opacity-80"
                style={{ transform: "translateZ(0)" }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-[#c5a059] text-black p-8 rounded-lg shadow-xl hidden md:block max-w-xs"
              initial={{ translateZ: 50 }}
              whileHover={{ translateZ: 80, scale: 1.05 }}
            >
              <p className="font-serif text-2xl font-bold mb-2">Premium Quality</p>
              <p className="text-black/80 text-sm">Every piece crafted with unmatched precision and care.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">About Us</h2>
            <h3 className="text-4xl font-serif text-white tracking-tight mb-6">
              Bringing Architectural Excellence to Interiors
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              At Roman Wood Work, we believe that the soul of a home resides in its details. Located in the heart of Ludhiana, we specialize in high-end interior and architectural design, bringing a sophisticated touch to both residential and commercial spaces.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              From foundational space planning to bespoke cabinetry and final decor selection, our team combines traditional carpentry excellence with modern aesthetic visions. We pride ourselves on using the finest materials to ensure lasting durability and timeless beauty.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-3xl font-serif text-[#c5a059] mb-1">100%</p>
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#c5a059] mb-1">Premium</p>
                <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">Wood & Materials</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-24 border-y border-white/5 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620626011761-9ea018981c1d?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-fixed mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 perspective-1000">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">Our Expertise</h2>
          <h3 className="text-4xl font-serif text-white tracking-tight mb-6">Comprehensive Design Solutions</h3>
          <p className="text-white/60 text-sm">
            From single-room makeovers to complete commercial fit-outs, we offer end-to-end interior and woodworking services tailored to your aesthetic and functional needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45, z: -100 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                z: 50,
                boxShadow: "0 25px 50px -12px rgba(197, 160, 89, 0.15)"
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="flex items-start space-x-4 p-6 bg-[#111111]/80 backdrop-blur-md rounded-lg border border-white/10 hover:border-[#c5a059]/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1" style={{ transform: "translateZ(20px)" }}>
                <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              </div>
              <p className="text-white/90 text-[13px]" style={{ transform: "translateZ(30px)" }}>{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">Client Stories</h2>
          <h3 className="text-4xl font-serif tracking-tight mb-6">What People Say About Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a1a] p-8 md:p-10 rounded-lg border border-white/5 relative flex flex-col h-full justify-between"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
              <div>
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                  ))}
                </div>
                <p className="text-white/80 text-[13px] mb-8 italic leading-relaxed">"{review.text}"</p>
              </div>
              <div>
                <p className="font-semibold text-white/90 text-sm">{review.author}</p>
                <p className="text-[9px] text-[#c5a059] mt-1 uppercase tracking-widest">{review.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [message, setMessage] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  const handleEnhance = async () => {
    if (!message.trim()) return;
    setIsEnhancing(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Enhance this design inquiry message. Fix typos, make it sound extremely professional, clear, and concise. Only return the enhanced text, with no extra conversational filler, quotes, or markdown.",
          text: message
        })
      });
      const data = await response.json();
      if (data.text) {
        setMessage(data.text);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] mb-3 font-semibold">Get in Touch</h2>
            <h3 className="text-4xl font-serif text-white tracking-tight mb-6">Let's Discuss Your Project</h3>
            <p className="text-white/60 mb-10 leading-relaxed text-sm max-w-lg">
              Whether you are looking to restyle a single room or redesign your entire office, our team is ready to bring your ideas to life. Reach out below to schedule a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded border border-white/5 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm mb-1">Our Location</h4>
                  <p className="text-white/60 text-xs leading-relaxed md:max-w-xs">{companyDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded border border-white/5 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm mb-1">Phone Number</h4>
                  <a href={`tel:${companyDetails.phone}`} className="text-white/60 hover:text-[#c5a059] transition-colors text-xs">
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded border border-white/5 flex items-center justify-center flex-shrink-0 text-[#c5a059]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm mb-1">Email Us</h4>
                  <a href={`mailto:${companyDetails.email}`} className="text-white/60 hover:text-[#c5a059] transition-colors text-xs">
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-lg border border-white/5">
            <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-6 font-semibold">Consultation Request</h4>
            
            {status === 'success' ? (
              <div className="bg-[#111111] border border-green-500/30 text-green-400 rounded-lg p-6 text-center">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-green-500/80" />
                <h5 className="font-medium text-sm mb-2 text-white/90">Message Sent!</h5>
                <p className="text-xs text-white/60">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-medium text-white/60 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 p-3 text-xs rounded outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white transition-all placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-medium text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 p-3 text-xs rounded outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white transition-all placeholder:text-white/20"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest font-medium text-white/60 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-white/5 border border-white/10 p-3 text-xs rounded outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white transition-all placeholder:text-white/20"
                      placeholder="09592656009"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-[10px] uppercase tracking-widest font-medium text-white/60 mb-2">Service of Interest</label>
                  <select
                    id="interest"
                    className="w-full bg-white/5 border border-white/10 p-3 text-xs rounded outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white transition-all appearance-none"
                  >
                    <option value="" className="bg-[#111111] text-white">Select a service...</option>
                    <option value="wardrobe" className="bg-[#111111] text-white">Wardrobe Design</option>
                    <option value="interior" className="bg-[#111111] text-white">Interior Architectural Design</option>
                    <option value="kitchen" className="bg-[#111111] text-white">Kitchen Design</option>
                    <option value="office" className="bg-[#111111] text-white">Office Space Design</option>
                    <option value="other" className="bg-[#111111] text-white">Other / General Consultation</option>
                  </select>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-medium text-white/60">Additional Details</label>
                    <button
                      type="button"
                      onClick={handleEnhance}
                      disabled={isEnhancing || !message.trim()}
                      className="text-[#c5a059] text-[10px] uppercase tracking-widest hover:text-white transition-colors disabled:opacity-50 flex items-center space-x-1 border border-[#c5a059]/30 rounded px-2 py-1"
                    >
                      {isEnhancing ? <Loader2 className="w-3 h-3 animate-spin"/> : <Sparkles className="w-3 h-3" />}
                      <span>Enhance with AI</span>
                    </button>
                  </div>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-3 text-xs rounded outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] text-white transition-all resize-none placeholder:text-white/20"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold py-3 mt-4 rounded hover:bg-[#c5a059] transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/40 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-4 tracking-tight">ROMAN <span className="italic font-light opacity-80 text-white/80">Wood Work</span></h4>
            <p className="text-xs leading-relaxed max-w-xs text-white/50">
              Transforming spaces with masterful carpentry and exquisite interior design in Ludhiana, Punjab.
            </p>
          </div>
          <div>
            <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#c5a059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#c5a059] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#c5a059] transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#c5a059] text-[10px] uppercase tracking-widest mb-4 font-semibold">Business Hours</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between max-w-xs"><span>Monday - Saturday:</span> <span className="text-white/80">9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between max-w-xs"><span>Sunday:</span> <span className="text-[#c5a059]">Closed</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-[10px] uppercase tracking-widest text-center text-white/30">
          <p>&copy; {new Date().getFullYear()} Roman Wood Work. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const phoneNumber = companyDetails.phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/91${phoneNumber.replace(/^0/, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[88px] right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <PageLoader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}
