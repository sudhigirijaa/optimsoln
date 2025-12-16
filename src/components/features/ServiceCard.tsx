import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
      <CardContent className="p-8 space-y-4">
        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="link" className="p-0 h-auto text-primary">
          Learn More →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
