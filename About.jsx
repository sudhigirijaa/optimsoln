import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Award, Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const values = [
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs and work collaboratively to deliver solutions that exceed expectations."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every project is measured by the tangible results and value we deliver to our clients."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-[#e67e22]">O</span>
                <span className="text-[#1e3a5f]">S</span>
              </div>
              <span className="text-[#1e3a5f] font-semibold text-lg hidden sm:block">Optimized Solutions</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to={createPageUrl('Home')} className="text-gray-600 hover:text-[#1e3a5f] transition-colors">HOME</Link>
              <Link to={createPageUrl('AboutUs')} className="text-[#1e3a5f] font-medium border-b-2 border-[#e67e22] pb-1">ABOUT US</Link>
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
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Learn about our journey, mission, and the values that drive us to deliver exceptional IT solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white" id="WhoWeAre">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Optimized Solutions is a certified leading IT Consulting firm and a Solution Provider to public and private clients headquartered in Herndon, Virginia. Our Firm has been providing an extensive range of technology solutions offering competencies in Software Application Development, IT Infrastructure, Cybersecurity, Cloud Computing, and Data Analytics.
                </p>
                <p>
                  With a team of highly skilled professionals and over 20 years of combined industry experience, we have established ourselves as a trusted partner for organizations seeking to leverage technology for business growth and operational excellence.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction has earned us recognition as an industry leader and a preferred vendor for numerous government and commercial clients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2c5282] rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e67e22] mb-2">20+</div>
                    <div className="text-gray-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e67e22] mb-2">500+</div>
                    <div className="text-gray-200">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e67e22] mb-2">100+</div>
                    <div className="text-gray-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#e67e22] mb-2">50+</div>
                    <div className="text-gray-200">Expert Team</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What and How We Do Section */}
      <section className="py-20 bg-gray-50" id="WhatandHowWeDo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">What We Do</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We focus on providing the solutions and custom application product development which offers a Single Software Platform that integrates the various modules and full functionality of mid and large size organizations.
                </p>
                <p>
                  Optimized Solutions also specializes in technology staffing services, providing clients with highly qualified IT professionals who can seamlessly integrate with existing teams and contribute to project success from day one.
                </p>
                <p>
                  Our service offerings include Software Development, System Integration, Cloud Migration, Cybersecurity Solutions, IT Consulting, and Managed Services.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How We Do It</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our unique model makes agile business a reality by helping our customers deliver Products more timely, effectively and efficiently through Key Performance Indicators (KPI's).
                </p>
                <p>
                  We ensure cost effective IT solutions, innovate and implement through cutting edge technologies while maintaining the highest standards of quality and security.
                </p>
                <p>
                  Our DevOps integration and efficient delivery processes ensure seamless project execution from inception to deployment and beyond.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#e67e22]/10 flex items-center justify-center">
                      <value.icon className="w-7 h-7 text-[#e67e22]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
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
              Partner With Us
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to transform your business with innovative technology solutions.
            </p>
            <Button asChild className="bg-[#e67e22] hover:bg-[#d35400] text-white px-10 py-6 text-lg">
              <Link to={createPageUrl('Contact')}>Contact Us</Link>
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