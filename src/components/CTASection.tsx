import data from '../../data.json';

export default function CTASection() {
  const cta = data.cta;
  return (
    <section className="py-16 text-[var(--color-white)] text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your AI Journey?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join innovators across Morocco and beyond. Discover how our platform can help you unlock new insights, drive productivity, and deliver better experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-[var(--color-accent)] text-[var(--color-black)] font-semibold px-8 py-3 rounded-lg shadow hover:bg-[var(--color-dark-green)] hover:text-[var(--color-white)] transition">
            Contact Us
          </a>
          <a href="#ideas" className="bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold px-8 py-3 rounded-lg hover:bg-[var(--color-accent)] hover:text-[var(--color-black)] transition">
            Explore AI Ideas
          </a>
        </div>
      </div>
    </section>
  );
} 