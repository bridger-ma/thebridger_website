"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  Heart,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import data from "../../data.json";
import { useEffect, useState } from "react";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LinkItem = ({
  href,
  children,
  onClick,
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) => (
  <motion.a
    href={href}
    className="text-[var(--color-white)]/80 hover:text-[var(--color-accent)] flex items-center gap-2 group w-fit transition-all duration-300"
    whileHover={{ x: 4, color: "[var(--color-accent)]" }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    onClick={onClick}
    target={target}
    rel={rel}
    aria-label={ariaLabel}
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
    className="w-10 h-10 bg-[var(--color-black)] hover:bg-[var(--color-dark-green)] rounded-full flex items-center justify-center text-[var(--color-white)] hover:text-[var(--color-accent)] transition-all duration-300"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default function Footer() {
  const [orbs, setOrbs] = useState<
    { width: number; height: number; left: number; top: number }[]
  >([]);

  useEffect(() => {
    setOrbs(
      Array.from({ length: 6 }, (_, i) => ({
        width: 100 + i * 50,
        height: 100 + i * 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

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
      location: "Tangier, Morocco",
    },
  };

  return (
    <motion.footer
      className="relative text-white overflow-hidden glass border-t border-white/10 section-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--color-dark-green)]/20 blur-xl"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
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
        {/* Removed custom background image and overlay, now using global animated background */}
      </div>
      {/* Remove top accent border for a cleaner look */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
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
                className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden bg-[var(--color-dark-green)]"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {/* If you have a logo, use <img src="/images/logo.png" alt="The Bridger Logo" className="w-10 h-10 object-contain" /> */}
                <span className="text-white text-2xl font-bold">B</span>
              </motion.div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text tracking-tight">
                {footer.brand}
              </span>
            </motion.div>
            <p className="text-[var(--color-white)]/80 leading-relaxed text-lg max-w-md">
              {footer.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <SocialIcon
                href="https://github.com/bridger-ma"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialIcon
                href="#"
                icon={<Twitter className="w-5 h-5" />}
                label="Twitter"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/thebridger-ma"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialIcon
                href="#"
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialIcon
                href="#"
                icon={<Facebook className="w-5 h-5" />}
                label="Facebook"
              />
              <SocialIcon
                href="#"
                icon={<Youtube className="w-5 h-5" />}
                label="YouTube"
              />
            </div>
          </motion.div>
          {/* Quick links */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--color-white)] flex items-center gap-2">
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
                    <LinkItem
                      href={link.href}
                      ariaLabel={link.label}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          document
                            .querySelector(link.href)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </LinkItem>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
          {/* Contact info */}
          <motion.div
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[var(--color-white)] flex items-center gap-2">
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
                  className="text-[var(--color-white)]/80 hover:text-[var(--color-accent)] flex items-center gap-3 group transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-[var(--color-dark-green)]/40 rounded-lg flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(1, 68, 33, 0.6)" }}
                  >
                    <Mail className="w-4 h-4" />
                  </motion.div>
                  <span>{footer.contact.email}</span>
                </motion.a>
              </li>
              <li>
                <motion.div
                  className="text-[var(--color-white)]/80 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-[var(--color-dark-green)]/40 rounded-lg flex items-center justify-center">
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
          className="mt-16 p-8 bg-[var(--color-dark-green)]/20 rounded-2xl border-2 border-[var(--color-dark-green)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[var(--color-white)]">
              Stay Updated
            </h3>
            <p className="text-[var(--color-white)]/80 mb-6">
              Get the latest AI insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[var(--color-black)]/80 border-2 border-[var(--color-dark-green)] rounded-lg text-[var(--color-white)] placeholder-[var(--color-white)]/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
              <motion.button
                className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-black)] rounded-lg font-semibold hover:bg-[var(--color-dark-green)] hover:text-[var(--color-white)] border-2 border-[var(--color-accent)] transition-all duration-200"
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
          className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-white/70 text-xs sm:text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold gradient-text">{footer.brand}</span>.
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            in Morocco
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--color-white)]/60">
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[var(--color-accent)]/40" />
    </motion.footer>
  );
}
