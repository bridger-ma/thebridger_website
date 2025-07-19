import data from '../../data.json';

export default function CTASection() {
  const cta = data.cta;
  return (
    <section id="cta" className="py-16 text-[var(--color-white)] text-center section-transparent">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.headline}</h2>
        <p className="text-lg mb-8 opacity-90">{cta.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {cta.actions.map((action: { label: string; href: string }, idx: number) => (
            <a
              key={action.label}
              href={action.href}
              className={
                idx === 0
                  ? "bg-[var(--color-accent)] text-[var(--color-black)] font-semibold px-4 py-2 text-sm rounded-lg shadow transition"
                  : "bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold px-4 py-2 text-sm rounded-lg transition"
              }
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={action.label}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 