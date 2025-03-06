
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-soft border border-gray-100 transition-all-300 hover:shadow-md group",
      className
    )}>
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center gap-1 text-brand-blue font-medium transition-all-200 group-hover:gap-2"
      >
        Learn More
        <ArrowRight size={16} className="transition-all-200" />
      </Link>
    </div>
  );
};

export default ServiceCard;
