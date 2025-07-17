"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import data from "../../data.json";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="text-gray-400 hover:text-white flex items-center gap-2 group w-fit transition-all duration-300"
    whileHover={{ x: 4, color: "#3b82f6" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <span>{children}</span>
    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
  </motion.a>
);

const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <motion.a
    href={href}
    aria-label={label}
    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default function Footer() {
  const footer = data.footer || {
    brand: "The Bridger",
    description:
      "Connecting Morocco with AI-powered solutions for a better tomorrow.",
    links: [
      { label: "About", href: "#about" },
      { label: "AI Ideas", href: "#ideas" },
      { label: "Contact", href: "#contact" },
    ],
    contact: {
      email: "contact@thebridger.ma",
      location: "Casablanca, Morocco",
    },
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Top gradient border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand section */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:col-span-2"
          >
            <motion.div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {footer.brand}
              </h3>
            </motion.div>

            <p className="text-gray-300 leading-relaxed text-lg max-w-md">
              {footer.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <SocialIcon
                href="#"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialIcon
                href="#"
                icon={<Twitter className="w-5 h-5" />}
                label="Twitter"
              />
              <SocialIcon
                href="#"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              Quick Links
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </h3>
            <ul className="space-y-4">
              {footer.links.map(
                (link: { label: string; href: string }, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <LinkItem href={link.href}>{link.label}</LinkItem>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              Get in Touch
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💫
              </motion.div>
            </h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href={`mailto:${footer.contact.email}`}
                  className="text-gray-300 hover:text-blue-400 flex items-center gap-3 group transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span>{footer.contact.email}</span>
                </motion.a>
              </li>
              <li>
                <motion.div
                  className="text-gray-300 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{footer.contact.location}</span>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl border border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest AI insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} The Bridger. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            in Morocco
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </motion.footer>
  );
}
