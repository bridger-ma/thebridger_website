'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      setShow(curr < 10 || curr < lastScroll);
      setLastScroll(curr);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(target);
    }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 border-b shadow-lg shadow-accent/10 relative transition-all duration-500"
      style={{
        background: 'var(--color-navbar-bg)',
        color: 'var(--color-foreground)',
        borderBottom: '1px solid var(--color-accent)',
      }}
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating glowing orb next to logo */}
      <motion.div
        className="absolute top-2 left-8 w-8 h-8 rounded-full blur-2xl z-0"
        style={{ background: 'var(--color-accent)', opacity: 0.5 }}
        animate={{ y: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
              The Bridger
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" scroll={false} className="navbar-link" onClick={e => handleSmoothScroll(e, '#about')}>
              About
            </Link>
            <Link href="#ideas" scroll={false} className="navbar-link" onClick={e => handleSmoothScroll(e, '#ideas')}>
              AI Ideas
            </Link>
            <Link href="#contact" scroll={false} className="navbar-link" onClick={e => handleSmoothScroll(e, '#contact')}>
              Contact
            </Link>
            <Link href="#blog" scroll={false} className="navbar-link" onClick={e => handleSmoothScroll(e, '#blog')}>
              Blog
            </Link>
            <Link href="#careers" scroll={false} className="navbar-link" onClick={e => handleSmoothScroll(e, '#careers')}>
              Careers
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{ color: 'var(--color-accent)' }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'var(--color-accent)' }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                onClick={e => handleSmoothScroll(e, '#about')}
              >
                About
              </Link>
              <Link
                href="#ideas"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={e => handleSmoothScroll(e, '#ideas')}
              >
                AI Ideas
              </Link>
              <Link
                href="#contact"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={e => handleSmoothScroll(e, '#contact')}
              >
                Contact
              </Link>
              <Link
                href="#blog"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={e => handleSmoothScroll(e, '#blog')}
              >
                Blog
              </Link>
              <Link
                href="#careers"
                scroll={false}
                className="block px-3 py-2 rounded-md navbar-link"
                onClick={e => handleSmoothScroll(e, '#careers')}
              >
                Careers
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full justify-start px-3 py-2"
                style={{ color: 'var(--color-accent)' }}
              >
                {theme === 'dark' ? (
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