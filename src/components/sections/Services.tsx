import { Network, Users, Server, Phone, Settings, Cloud, Smartphone } from 'lucide-react';
import ServiceCard from '../features/ServiceCard';

const services = [
  {
    icon: Network,
    title: 'Systems Integration',
    description: 'Seamlessly integrating diverse IT systems to enhance efficiency and drive innovation',
  },
  {
    icon: Users,
    title: 'IT Professional Services',
    description: 'Solve complex challenges and efficiently achieve mission-critical objectives',
  },
  {
    icon: Server,
    title: 'EIS Operations',
    description: 'Reduce cost and drive efficiency with best-in-class support for the GSA EIS contract including transition and ongoing operations',
  },
  {
    icon: Phone,
    title: 'Telecom Expense Management',
    description: 'Helping government reduce spending and eliminate waste by optimizing wired and wireless telecom programs',
  },
  {
    icon: Settings,
    title: 'IT Managed Services',
    description: 'Improve customer satisfaction with tailored IT and business solutions',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leverage cutting edge cloud technologies for scalable, secure, and cost-effective infrastructure',
  },
  {
    icon: Smartphone,
    title: 'O2CI - Number Portability',
    description: 'Streamline operations and increase revenue with our AI Powered Platform',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive IT solutions tailored to meet your unique business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
