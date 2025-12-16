import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const markets = [
  {
    title: 'Government Healthcare IT',
    description: 'Agile development and digital solutions deliver user-friendly, cost-effective government systems',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Government Telecom',
    description: 'Delivering advanced telecommunications management services to support the infrastructure and operations of government agencies',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Commercial Services',
    description: 'Offering tailored IT and business solutions to drive success and growth for commercial enterprises',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80',
  },
];

const Markets = () => {
  return (
    <section id="markets" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Markets We Serve</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={market.image}
                  alt={market.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{market.title}</h3>
                <p className="text-muted-foreground">{market.description}</p>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;
