import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code2, 
  Cloud, 
  Shield, 
  Database, 
  Users, 
  Settings,
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Youtube, 
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom application development tailored to your business needs. We deliver scalable, secure, and user-friendly software solutions using the latest technologies and best practices.",
      features: ["Custom Web Applications", "Mobile App Development", "API Development & Integration", "Legacy System Modernization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services to help you migrate, optimize, and manage your cloud infrastructure. We work with AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Migration", "Cloud Architecture Design", "DevOps Implementation", "Cloud Security & Compliance"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your organization with our comprehensive cybersecurity services. We help identify vulnerabilities and implement robust security measures.",
      features: ["Security Assessment", "Threat Detection & Response", "Compliance Management", "Security Training"]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our analytics solutions. We help you make data-driven decisions that drive business growth.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Big Data Solutions"]
    },
    {
      icon: Users,
      title: "IT Staffing",
      description: "Access top IT talent through our staffing services. We provide skilled professionals who can seamlessly integrate with your team.",
      features: ["Contract Staffing", "Direct Hire", "Staff Augmentation", "Managed Teams"]
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT consulting to help you align technology with your business goals. We provide expert guidance on technology decisions and implementations.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Vendor Management"]
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
              <Link to={createPageUrl('AboutUs')} className="text-gray-600 hover:text-[#1e3a5f] transition-colors">ABOUT US</Link>
              <Link to={createPageUrl('Services')} className="text-[#1e3a5f] font-medium border-b-2 border-[#e67e22] pb-1">SERVICES</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto">
              Comprehensive IT solutions designed to help your business thrive in the digital age. From software development to cybersecurity, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#e67e22]/10 flex items-center justify-center mb-4 group-hover:bg-[#e67e22] transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-[#e67e22] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl text-[#1e3a5f]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 text-[#e67e22]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { step: "02", title: "Planning", description: "Developing a comprehensive strategy and roadmap" },
              { step: "03", title: "Execution", description: "Implementing solutions with precision and agility" },
              { step: "04", title: "Delivery", description: "Deploying and supporting your success" }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#e67e22]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Button asChild className="bg-[#e67e22] hover:bg-[#d35400] text-white px-10 py-6 text-lg">
              <Link to={createPageUrl('Contact')}>Request a Consultation</Link>
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