"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { CustomConnectWallet } from './CustomConnectWallet';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Cultures", href: "/explorecultures" },
  { name: "About", href: "/about" },
  { name: "Collections", href: "/explorecollections" },
];

// Animation variants for staggered children
const menuVariants = {
  open: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
  closed: {},
};
const itemVariants = {
  open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
  closed: { opacity: 0, y: 40, transition: { duration: 0.2 } },
};

function NavbarContent() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentAccount = useCurrentAccount();
  const [isConnected, setIsConnected] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (currentAccount) {
      setIsConnected(true);
    }
  }, [currentAccount]);

  const NavTag = isHome ? motion.nav : "nav";

  return (
    <NavTag
      className="navbar-container"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="desktop-navbar">
        <div className="left">
          <div className="navbar-logo-row" style={{ gap: '0.7rem' }}>
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-logo" aria-label="Afri Mosaic logo" tabIndex={0}>
                <span className="navbar-logo-icon">A</span>
              </a>
            </Link>
            <span className="navbar-brand-title">Afri Mosaic</span>
          </div>
          <div className="links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="searchContainer">
            <input
              className="searchInput"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <CustomConnectWallet />
        </div>
      </div>
      <div className="mobileMenu">
        <div className="mobileMenu-container">
          <div className="navbar-logo-row" style={{ gap: '0.7rem' }}>
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-logo" aria-label="Afri Mosaic logo" tabIndex={0}>
                <span className="navbar-logo-icon">A</span>
              </a>
            </Link>
            <span className="footer-brand-title">Afri Mosaic</span>
          </div>
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
        {/* Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`mobileMenu-overlay open`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <FaTimes className="close-btn" onClick={() => setIsMenuOpen(false)} />
              <motion.div
                className="mobileMenu-links"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.div className="searchContainer" variants={itemVariants}>
                  <input
                    className="searchInput"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* Suggestions */}
                  {search && (
                    <div className="searchSuggestions">
                      {/* Will be replaced with real suggestions logic */}
                      <div className="suggestion">
                        Suggestion 1 for &quot;{search}&quot;
                      </div>
                      <div className="suggestion">
                        Suggestion 2 for &quot;{search}&quot;
                      </div>
                    </div>
                  )}
                </motion.div>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="link"
                    variants={itemVariants}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div variants={itemVariants}>
                  <CustomConnectWallet />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Overlay background for click-away (optional) */}
        {isMenuOpen && (
          <div
            className="mobileMenu-backdrop"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </NavTag>
  );
}

export default function Navbar() {
  return <NavbarContent />;
}
