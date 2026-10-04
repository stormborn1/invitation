import React, { useState, useEffect } from 'react';
import { Menu, X, Music, VolumeX, Heart } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function Navbar({ visible = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    // Optional gentle ambient background music instrument
    const a = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    a.loop = true;
    a.volume = 0.3;
    return a;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Bride', href: '#bride' },
    { name: 'Groom', href: '#groom' },
    { name: 'Our Story', href: '#union' },
    { name: 'Du\'a', href: '#dua' },
    { name: 'Events', href: '#events' },
    { name: 'Countdown', href: '#countdown' },
    { name: 'Blessings', href: '#greetings' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (window.__weddingScrollToStory) {
      window.__weddingScrollToStory(href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!visible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3 md:py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Monogram Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="glass-pill px-4 py-2 rounded-full flex items-center gap-2 border border-[#E9B8C4]/40 hover:border-[#5E705B]/50 transition-all"
        >
          <span className="font-editorial text-lg md:text-xl font-bold tracking-wider text-[#4B403B]">
            {weddingData.couple.brideInitial} <span className="text-[#C98F9D] text-sm">♥</span> {weddingData.couple.groomInitial}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-sans tracking-widest text-[#8B7668] uppercase">
            Wedding
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-5 py-2 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider text-[#4B403B] hover:text-[#5E705B] hover:bg-[#F4DCE2]/40 transition-colors uppercase font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions (Audio Toggle & Mobile Menu Trigger) */}
        <div className="flex items-center gap-2">
          {/* Audio Music Toggle Button */}
          <button
            onClick={toggleMusic}
            title={isPlaying ? "Mute Background Music" : "Play Gentle Ambient Music"}
            className="glass-pill p-2.5 rounded-full text-[#8B7668] hover:text-[#5E705B] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C98F9D]"
          >
            {isPlaying ? <Music className="w-4 h-4 text-[#C98F9D] animate-bounce" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-pill p-2.5 rounded-full text-[#4B403B] hover:text-[#5E705B] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-16 z-50 glass-card rounded-2xl p-6 border border-[#E9B8C4]/40 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-sans tracking-wider text-[#4B403B] hover:text-[#5E705B] hover:bg-[#F4DCE2]/50 transition-colors font-medium text-center uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
