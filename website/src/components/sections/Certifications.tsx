import { Card, CardContent } from '../ui/card';
import { Award, Shield, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'CMMI Development',
    subtitle: 'Maturity Level 5',
    description: 'Highest level of process maturity in software development',
  },
  {
    icon: Award,
    title: 'CMMI Services',
    subtitle: 'Maturity Level 3',
    description: 'Excellence in service delivery and management',
  },
  {
    icon: Shield,
    title: 'ISO/IEC 27001:2013',
    subtitle: 'Information Security',
    description: 'International standard for information security management',
  },
  {
    icon: CheckCircle2,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management',
    description: 'Commitment to quality management systems',
  },
  {
    icon: Shield,
    title: 'ISO/IEC 20000-1:2018',
    subtitle: 'IT Service Management',
    description: 'Best practices in IT service management',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Certifications & Compliance</h2>
          <p className="text-muted-foreground text-lg">
            Industry-recognized certifications demonstrating our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground">{cert.title}</h3>
                  <p className="text-primary font-semibold text-sm">{cert.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Trusted by government agencies and commercial enterprises worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-4xl font-bold text-muted-foreground">20+</div>
            <div className="text-sm text-muted-foreground">Years of<br />Excellence</div>
            <div className="w-px h-12 bg-border" />
            <div className="text-4xl font-bold text-muted-foreground">500+</div>
            <div className="text-sm text-muted-foreground">Projects<br />Delivered</div>
            <div className="w-px h-12 bg-border" />
            <div className="text-4xl font-bold text-muted-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Customer<br />Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
