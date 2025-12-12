import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Trophy, TrendingUp, Shield, ArrowRight, Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: Trophy,
      title: "Industry Leader",
      description: "With over 20 years of combined IT business experience, Optimized Solutions has attained the level of 'best in class' and has maintained a leading role in the IT field ever since. We take pride in sharing our experience and expertise we've acquired throughout the years."
    },
    {
      icon: TrendingUp,
      title: "High Expectations",
      description: "'Aim for perfection and you'll deliver excellence'. That's our motto, and our experience. We're extremely diligent towards meeting challenging goals, every time everywhere!"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "At Optimized Solutions, we aspire to maintain accuracy and efficiency while meeting project deadlines simultaneously providing our renowned user-friendly experience. We implement cutting edge technologies that produce cost effective results."
    }
  ];

  const sections = [
    {
      title: "Who We Are",
      description: "Optimized Solutions is a certified leading IT Consulting firm and a Solution Provider to public and private clients headquartered in Herndon, Virginia. Our Firm has been providing an extensive range of technology solutions offering competencies in Software Applications...",
      link: createPageUrl('AboutUs')
    },
    {
      title: "What We Do",
      description: "We focus on providing the solutions and custom application product development which offers a Single Software Platform that integrates the various modules and full functionality of mid and large size organizations. We also specialize in technology staffing services...",
      link: createPageUrl('Services')
    },
    {
      title: "How We Do It",
      description: "Our unique model makes agile business a reality by helping our customers deliver Products more timely, effectively and efficiently through Key Performance Indicators (KPI's). We ensure cost effective IT solutions, innovate and implement through cutting edge technologies...",
      link: createPageUrl('AboutUs')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-[#e67e22]">O</span>
                <span className="text-[#1e3a5f]">S</span>
              </div>
              <span className="text-[#1e3a5f] font-semibold text-lg hidden sm:block">Optimized Solutions</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl('Home')} className="text-[#1e3a5f] font-medium border-b-2 border-[#e67e22] pb-1">HOME</Link>
              <Link to={createPageUrl('AboutUs')} className="text-gray-600 hover:text-[#1e3a5f] transition-colors">ABOUT US</Link>
              <Link to={createPageUrl('Services')} className="text-gray-600 hover:text-[#1e3a5f] transition-colors">SERVICES</Link>
              <Link to={createPageUrl('Contact')} className="text-gray-600 hover:text-[#1e3a5f] transition-colors">CONTACT</Link>
            </div>

            <Button className="bg-[#e67e22] hover:bg-[#d35400] text-white">
              CAPABILITIES
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-white/30 rounded-full" />
          <div className="absolute top-40 right-40 w-48 h-48 border-4 border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/25 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[#e67e22] italic text-xl mb-4 font-light">
              Using the best practice tools for a better business...!!
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in <span className="text-[#e67e22]">IT Solutions</span>
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Delivering excellence through innovative technology solutions and expert consulting services.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-6 text-lg">
                <Link to={createPageUrl('Services')}>Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to={createPageUrl('Contact')}>Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-[#e67e22]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 italic">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose max-w-none text-gray-600 text-lg leading-relaxed mb-16"
          >
            <p>
              Optimized Solutions Management Plan, Software Development Technology and Methodologies, Quality Control, Integration (DevOps) and efficient Delivery makes us unique. At Optimized Solutions, we understand that every company needs a better process, technology upgrade and enhanced capabilities as we grow. Our performance model is both versatile and effective. It is specifically designed to exceed expectation levels, whether we are augmenting an existing client's team or providing our in-house 'best in class' development services. Our model provides our customers skilled employees who know what performance level software is, and more importantly how to deliver it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <h4 className="text-lg font-bold text-[#1e3a5f] mb-4">{section.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{section.description}</p>
                <Link 
                  to={section.link} 
                  className="inline-flex items-center text-[#e67e22] hover:text-[#d35400] font-medium group-hover:gap-2 transition-all"
                >
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Optimized Solutions can help you achieve your technology goals.
            </p>
            <Button asChild className="bg-[#e67e22] hover:bg-[#d35400] text-white px-10 py-6 text-lg">
              <Link to={createPageUrl('Contact')}>Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="text-3xl font-bold">
                  <span className="text-[#e67e22]">O</span>
                  <span className="text-white">S</span>
                </div>
                <span className="text-white font-semibold text-lg">Optimized Solutions</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in IT consulting and software development solutions.
              </p>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-6">Headquarters</h5>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#e67e22] mt-0.5" />
                  <span>13873 Park Center Road, Suite 375<br />Herndon, VA 20171</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#e67e22]" />
                  <span>301-540-8400</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#e67e22]" />
                  <span>info@optimizedsolutions.com</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-6">Stay Connected</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e67e22] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e67e22] transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#e67e22] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© {new Date().getFullYear()} Optimized Solutions LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}