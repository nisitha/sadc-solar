import React from 'react';
import { Check } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  items: string[];
  icon?: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, items, icon: Icon }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full w-full overflow-hidden">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        {Icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
            <Icon size={20} />
          </div>
        )}
        <h4 className="text-lg font-bold text-brand-navy truncate">{title}</h4>
      </div>
      <ul className="space-y-3 mt-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed min-w-0">
            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
            </div>
            <span className="flex-1 min-w-0 break-words whitespace-normal text-wrap">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
