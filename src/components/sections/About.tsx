import { Award, Code, TrendingUp, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
  {
    icon: Award,
    title: 'Industry Best Practices',
    description: 'We consistently deliver superior, measurable outcomes by adhering to industry-leading standards like ITIL, ISO, CMMI, EVM and PMBOK.',
  },
  {
    icon: Code,
    title: 'CMMI Maturity Level 5',
    description: 'We deliver seamless system integration on time and on budget using our standardized, repeatable software development approach.',
  },
  {
    icon: TrendingUp,
    title: 'Project Management Rigor',
    description: 'We help you streamline business operations, delivering transparent project management aligned with DCAA principles and PMBOK best practices.',
  },
  {
    icon: Shield,
    title: 'Digital Services Playbook',
    description: 'We deliver exceptional customer satisfaction through our commitment to industry best practices and the USDS Digital Services Playbook.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-foreground">Over Two Decades of Excellence</h2>
            <p className="text-muted-foreground text-lg">
              With more than two decades of experience providing innovative IT solutions to government and commercial customers, we leverage cutting edge technologies such as AI, machine learning and advanced data analytics to provide forward-thinking solutions that drive efficiency and security while improving overall performance.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
