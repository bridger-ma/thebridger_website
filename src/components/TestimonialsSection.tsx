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



export default function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Removed global animated background class */}
      {/* Glowing accent orb */}
      <div className="absolute left-1/4 top-10 w-32 h-32 rounded-full bg-[var(--color-accent)]/30 blur-3xl z-0" />
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-white)] drop-shadow-lg">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-black)]/80 border-2 border-[var(--color-accent)] rounded-xl shadow-2xl p-8 flex flex-col items-center text-center glass-effect transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(29,185,84,0.18)] hover:border-[var(--color-dark-green)]"
            >
              <p className="text-lg italic text-[var(--color-white)]/90 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-[var(--color-accent)]">{t.name}</div>
              <div className="text-[var(--color-white)]/60 text-sm">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 