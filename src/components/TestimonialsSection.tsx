const testimonials = [
  {
    quote: "The Bridger’s AI solutions transformed our workflow and helped us reach new heights in efficiency.",
    name: "Fatima E.",
    title: "CEO, AgriMorocco"
  },
  {
    quote: "We’ve seen a 30% improvement in student engagement thanks to The Bridger’s personalized learning tools.",
    name: "Youssef B.",
    title: "Director, EduFuture"
  },
  {
    quote: "Their commitment to responsible AI and community collaboration is unmatched.",
    name: "Sara L.",
    title: "Innovation Lead, Health4All"
  }
];

const partnerLogos = [
  '/images/partner-ibm.svg',
  '/images/partner-university.svg',
  '/images/partner-agri.svg',
  '/images/partner-health.svg',
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background/95">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-background/80 rounded-xl shadow p-8 flex flex-col items-center text-center">
              <p className="text-lg italic text-foreground/90 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-accent">{t.name}</div>
              <div className="text-foreground/60 text-sm">{t.title}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          {partnerLogos.map((logo, idx) => (
            <img
              key={logo}
              src={logo}
              alt={`Partner logo ${idx + 1}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
} 