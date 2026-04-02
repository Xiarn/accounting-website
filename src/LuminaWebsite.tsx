import { motion } from "motion/react";
import { 
  Calculator, 
  BarChart3, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  PieChart,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-navy-950/80 backdrop-blur-lg py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Calculator className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">Lumina<span className="text-teal-500">Financial</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white/80 hover:text-teal-400 font-medium transition-colors text-sm uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-teal-500 hover:bg-teal-400 text-white px-6 py-2.5 rounded-full font-semibold transition-all glow-button text-sm">
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-navy-900 border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-teal-400 font-medium py-2">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold text-center">
            Book Consultation
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-teal-950">
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>
      
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted by 500+ Modern Enterprises</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
            Financial Clarity for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-300">Modern Economy</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
            We combine high-end fintech precision with personalized advisory to scale your business and protect your wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-bold text-lg transition-all glow-button flex items-center justify-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all backdrop-blur-sm flex items-center justify-center">
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-white/40 text-sm mb-1 uppercase tracking-widest">Portfolio Growth</p>
                <h3 className="text-3xl font-display font-bold text-white">+24.8%</h3>
              </div>
              <div className="flex gap-1 h-12 items-end">
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="w-2 bg-teal-500/50 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                  <TrendingUp className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Tax Optimization</p>
                  <p className="text-white/40 text-xs">Strategy Implemented</p>
                </div>
                <div className="ml-auto text-teal-400 font-bold">Active</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <PieChart className="text-teal-400 w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Wealth Management</p>
                  <p className="text-white/40 text-xs">Quarterly Review</p>
                </div>
                <div className="ml-auto text-white/40 font-bold">Pending</div>
              </div>
            </div>
          </div>
          {/* Decorative rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-teal-500/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Strategic Tax Planning",
      desc: "Advanced tax strategies designed to minimize liabilities and maximize your bottom line.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-teal-500/10 text-teal-500"
    },
    {
      title: "Business Advisory",
      desc: "Data-driven insights to help you navigate complex market shifts and scale efficiently.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Wealth Management",
      desc: "Holistic financial planning to preserve and grow your personal and professional assets.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-gold-500/10 text-gold-500"
    },
    {
      title: "Audit & Assurance",
      desc: "Rigorous financial reporting that builds trust with stakeholders and investors.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-emerald-500/10 text-emerald-500"
    },
    {
      title: "Fintech Integration",
      desc: "Modernizing your accounting stack with AI-driven tools and real-time reporting.",
      icon: <PieChart className="w-8 h-8" />,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Global Compliance",
      desc: "Expert navigation of international tax laws and regulatory requirements.",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-rose-500/10 text-rose-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4"
          >
            Our Expertise
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy-950 mb-6"
          >
            Comprehensive Financial Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy-900/60 max-w-2xl mx-auto text-lg"
          >
            We provide the tools and intelligence you need to make confident financial decisions in an ever-changing landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-500/30 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-navy-950 mb-4">{s.title}</h3>
              <p className="text-navy-900/60 leading-relaxed mb-6">
                {s.desc}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow Systems",
      content: "Lumina Financial transformed our messy books into a strategic asset. Their tax planning saved us six figures in our first year alone.",
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, Thorne Logistics",
      content: "The level of fintech expertise they bring is unmatched. Real-time reporting has given me the confidence to scale faster than ever.",
      image: "https://picsum.photos/seed/person2/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Director, Global Ventures",
      content: "Professional, calm, and incredibly sharp. They handle our international compliance with such ease that I never have to worry.",
      image: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-navy-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full geometric-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Trusted by Industry Leaders</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here's what our partners have to say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-teal-500/10" />
              <p className="text-white/80 text-lg italic mb-8 relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-teal-500" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    {
      name: "Jonathan Lumina",
      role: "Managing Partner",
      bio: "20+ years in corporate finance and strategic tax planning.",
      image: "https://picsum.photos/seed/man1/400/500"
    },
    {
      name: "Sophia Chen",
      role: "Head of Advisory",
      bio: "Expert in fintech integration and high-growth business scaling.",
      image: "https://picsum.photos/seed/woman1/400/500"
    },
    {
      name: "David Miller",
      role: "Tax Specialist",
      bio: "Former IRS consultant specializing in international compliance.",
      image: "https://picsum.photos/seed/man2/400/500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-950">Led by Visionary Experts</h2>
          </div>
          <p className="text-navy-900/60 max-w-md text-lg">Our partners bring decades of experience from the world's leading financial institutions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5]">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-teal-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-teal-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-navy-950 mb-1">{m.name}</h3>
              <p className="text-teal-600 font-bold text-sm mb-3 uppercase tracking-wider">{m.role}</p>
              <p className="text-navy-900/60">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you differ from traditional accounting firms?",
      a: "We focus on proactive strategy rather than just reactive reporting. By leveraging modern fintech tools, we provide real-time insights and forward-looking tax planning that traditional firms often overlook."
    },
    {
      q: "What industries do you specialize in?",
      a: "While we serve a diverse range of clients, we have deep expertise in technology, logistics, professional services, and high-net-worth individual wealth management."
    },
    {
      q: "Can you help with international tax compliance?",
      a: "Yes, we have specialists dedicated to global tax laws, helping businesses navigate cross-border regulations and optimize their international operations."
    },
    {
      q: "How does the onboarding process work?",
      a: "It starts with a deep-dive consultation to understand your goals. From there, we perform a financial health check and design a custom roadmap for your accounting and advisory needs."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-navy-950 mb-4">Frequently Asked Questions</h2>
          <p className="text-navy-900/60">Everything you need to know about partnering with Lumina Financial.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-navy-950">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-navy-900/60 leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full geometric-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to Secure Your Financial Future?</h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Schedule a confidential consultation with our partners today. Let's discuss how we can optimize your strategy and scale your business.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Email Us</p>
                  <p className="text-white text-xl font-medium">hello@luminafinancial.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Call Us</p>
                  <p className="text-white text-xl font-medium">+1 (555) 888-2400</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest">Visit Us</p>
                  <p className="text-white text-xl font-medium">Financial District, New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/60 text-sm font-medium ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-sm font-medium ml-1">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-sm font-medium ml-1">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:outline-none transition-colors appearance-none">
                  <option className="bg-navy-900">Strategic Tax Planning</option>
                  <option className="bg-navy-900">Business Advisory</option>
                  <option className="bg-navy-900">Wealth Management</option>
                  <option className="bg-navy-900">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-white/60 text-sm font-medium ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-teal-500 focus:outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-bold text-lg transition-all glow-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
              <Calculator className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">Lumina<span className="text-teal-500">Financial</span></span>
          </a>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-white/20 text-sm">© 2026 Lumina Financial Advisory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/20 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function LuminaWebsite() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
