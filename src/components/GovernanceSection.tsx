import { ShieldCheck, Eye, Lock, Users } from 'lucide-react';

const governance = [
  {
    title: 'Security',
    description: 'We prioritize robust security and data protection in all our AI systems.',
    icon: <ShieldCheck className="w-10 h-10 text-[var(--color-accent)]" />,
  },
  {
    title: 'Transparency',
    description: 'Our models and decisions are explainable and open to scrutiny.',
    icon: <Eye className="w-10 h-10 text-[var(--color-dark-green)]" />,
  },
  {
    title: 'Privacy',
    description: 'User privacy is at the core of our platform, with strict controls and encryption.',
    icon: <Lock className="w-10 h-10 text-[var(--color-accent)]" />,
  },
  {
    title: 'Inclusivity',
    description: 'We design AI for everyone, ensuring fairness and accessibility.',
    icon: <Users className="w-10 h-10 text-[var(--color-dark-green)]" />,
  },
];

export default function GovernanceSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Removed global animated background class */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--color-white)] drop-shadow-lg">Our Commitment to Trustworthy AI</h2>
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
                {item.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)] drop-shadow">{item.title}</h3>
              <p className="text-[var(--color-white)]/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 