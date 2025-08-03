"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#ideas", label: "AI Ideas" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
  { href: "#careers", label: "Careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setShow(curr < 10 || curr < lastScroll);
      setLastScroll(curr);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio > 0.3)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        } else {
          setActiveSection(""); // No section in view
        }
      },
      {
        threshold: [0.3, 0.5, 0.7, 1],
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(target);
    }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 border-b shadow-lg shadow-accent/10 relative transition-all duration-500 bg-transparent"
      style={{
        background: show ? "rgba(10, 30, 20, 0.92)" : "transparent",
        color: "var(--color-foreground)",
        borderBottom: "1px solid var(--color-accent)",
        boxShadow: show
          ? "0 4px 24px 0 rgba(29, 185, 84, 0.12), 0 1.5px 0 0 var(--color-accent)"
          : "none",
        transition: "background 0.4s, box-shadow 0.4s",
      }}
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating glowing orb next to logo */}
      <motion.div
        className="absolute top-2 left-8 w-8 h-8 rounded-full blur-2xl z-0"
        style={{ background: "var(--color-accent)", opacity: 0.5 }}
        animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold"
              style={{ color: "var(--color-accent)", textDecoration: "none" }}
            >
              The Bridger
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-6 py-2 text-base rounded-full font-medium transition-all duration-200 group focus:outline-none
                    text-white
                    ${
                      show
                        ? `hover:bg-[#1db954] hover:text-white focus:bg-[#1db954] focus:text-white
                      hover:shadow-[0_0_16px_4px_rgba(29,185,84,0.35)] focus:shadow-[0_0_16px_4px_rgba(29,185,84,0.35)]
                      hover:scale-105 focus:scale-105`
                        : ""
                    }
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#1db954] to-[#158443] text-white shadow-[0_0_16px_4px_rgba(29,185,84,0.35)] scale-105 font-bold"
                        : ""
                    }
                  `}
                  style={{
                    textShadow: isActive
                      ? "0 2px 8px rgba(29,185,84,0.18)"
                      : "0 1px 4px rgba(0,0,0,0.18)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}

                  <span
                    className={`absolute left-0 -bottom-1 w-full bg-[#1db954] transition-transform duration-300 origin-left
                      ${
                        isActive
                          ? "scale-x-100 h-1 shadow-[0_0_8px_2px_rgba(29,185,84,0.25)]"
                          : "scale-x-0 h-1"
                      }
                      ${
                        show
                          ? "group-hover:scale-x-100 group-focus:scale-x-100"
                          : ""
                      }
                    `}
                  />
                </a>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 text-[var(--color-accent)] hover:bg-[#1db954] hover:text-white focus:bg-[#1db954] focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] transition-all duration-200"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-accent)] hover:bg-[var(--color-dark-green)] hover:text-[var(--color-white)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#about"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={(e) => handleSmoothScroll(e, "#about")}
              >
                About
              </Link>
              <Link
                href="#ideas"
                scroll={false}
                className="block px-3  navbar-link"
                onClick={(e) => handleSmoothScroll(e, "#ideas")}
              >
                AI Ideas
              </Link>
              <Link
                href="#contact"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </Link>
              <Link
                href="#blog"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={(e) => handleSmoothScroll(e, "#blog")}
              >
                Blog
              </Link>
              <Link
                href="#careers"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={(e) => handleSmoothScroll(e, "#careers")}
              >
                Careers
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start px-3 py-2"
                style={{ color: "var(--color-accent)" }}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
