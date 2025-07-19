import { ShieldCheck, Eye, Lock, Users } from 'lucide-react';
import data from '../../data.json';

const iconMap: { [key: string]: JSX.Element } = {
  ShieldCheck: <ShieldCheck className="w-10 h-10 text-[var(--color-accent)]" />,
  Eye: <Eye className="w-10 h-10 text-[var(--color-accent)]" />,
  Lock: <Lock className="w-10 h-10 text-[var(--color-accent)]" />,
  Users: <Users className="w-10 h-10 text-[var(--color-accent)]" />,
};
const governance = data.governance;

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-20 relative overflow-hidden section-transparent">
      {/* Removed global animated background class */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-10 text-[var(--color-white)] drop-shadow-lg">Our Commitment to Trustworthy AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {governance.map((item) => (
            <div
              key={item.title}
              className="group bg-[var(--color-black)]/80 border-2 border-[var(--color-accent)] rounded-xl shadow-2xl p-8 flex flex-col items-center text-center glass-effect focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-accent)]/60 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(29,185,84,0.18)]"
              tabIndex={0}
              aria-label={item.title + ' principle card'}
              role="region"
            >
              <span className="transition-transform duration-300 group-hover:scale-110 group-focus:scale-110 drop-shadow-lg">
                {iconMap[item.icon as keyof typeof iconMap]}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)] drop-shadow">{item.title}</h3>
              <p className="text-[var(--color-white)]/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll indicator for next section */}
      <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 animate-bounce text-[var(--color-accent)]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6v20M16 26l-7-7M16 26l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="sr-only">Scroll for more</span>
        </div>
      </div>
    </section>
  );
} 