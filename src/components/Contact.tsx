'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import data from '../../data.json';
import Image from 'next/image';

type ContactData = {
  heading: string;
  description: string;
};
const contact: ContactData = (data as { contact?: ContactData }).contact || { heading: 'Contact Us', description: 'Have questions or want to collaborate? Reach out to us!' };

export default function Contact() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-lg border-2 bg-background/50 backdrop-blur-sm
    text-foreground placeholder:text-foreground/50
    focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50
    transition-all duration-300
    ${focusedField === fieldName ? 'border-[var(--color-accent)]/70 shadow-lg shadow-[var(--color-accent)]/20' : 'border-accent/20'}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    } 
    setError('');
    setSubmitted(true);
    // Here you would handle sending the form data
  };

  return (
    <motion.section
      id="contact"
      className="py-20  relative overflow-hidden section-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background image and overlay */}
      <Image
        src="/images/gabriele-malaspina-CjWsslYVnPI-unsplash.jpg"
        alt="Contact background"
        fill
        className="object-cover opacity-10 z-0"
        priority
      />
      <div className="absolute inset-0  z-0" />
      {/* Floating accent orb */}
      <motion.div
        className="absolute left-1/4 top-12 w-24 h-24 rounded-full bg-accent/30 blur-3xl z-0"
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ y }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {contact.heading}
          </motion.h2>
          <motion.p
            className="text-lg text-[var(--color-white)]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {contact.description.replace("'", "&apos;")}
          </motion.p>
        </motion.div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className=" rounded-xl shadow-lg p-8 flex flex-col gap-6 backdrop-blur-md border border-accent/20">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={inputClasses('name')}
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={inputClasses('email')}
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={inputClasses('message') + ' min-h-[120px] resize-vertical'}
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
          />
          {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
          {submitted && <div className="text-green-500 text-sm font-medium">Thank you for reaching out! We&apos;ll get back to you soon.</div>}
          <Button type="submit" className="w-full mt-2" variant="default" aria-label="Send Message">
            Send Message
          </Button>
        </form>
      </div>
    </motion.section>
  );
}