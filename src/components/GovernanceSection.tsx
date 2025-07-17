import { ShieldCheck, Eye, Lock, Users } from 'lucide-react';
import data from '../../data.json';

const governance = data.governance;

export default function GovernanceSection() {
  return (
    <section className="py-20 bg-background/90">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Our Commitment to Trustworthy AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {governance.map((item) => (
            <div
              key={item.title}
              className="group bg-white/80 dark:bg-background/80 rounded-xl shadow p-6 flex flex-col items-center text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60"
              tabIndex={0}
              aria-label={item.title + ' principle card'}
              role="region"
            >
              <span className="transition-transform duration-300 group-hover:rotate-12 group-focus:rotate-12">
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-accent">{item.title}</h3>
              <p className="text-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 