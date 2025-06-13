'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ onBrowseClick, onBgAnimationComplete }) {
    const [bgDone, setBgDone] = useState(false);
    const [textDone, setTextDone] = useState(false);

    return (
        <section className="hero-section">
            <motion.div
                className="hero-bg-single"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onAnimationComplete={() => setBgDone(true)}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
            />
            {bgDone && (
                <div className="hero-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 900, padding: '0 1rem', textAlign: 'center' }}>
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    >
                        Discover Africa's Rich Mosaic
                    </motion.h1>
                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                    >
                        Explore, collect, and celebrate the vibrant cultures and art of Africa.
                    </motion.p>
                    <motion.button
                        className="browse-btn"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
                        onAnimationComplete={() => {
                            if (onBgAnimationComplete) onBgAnimationComplete();
                        }}
                        onClick={onBrowseClick}
                        whileHover={{ scale: 1.05 }}
                        style={{ cursor: "pointer" }}
                    >
                        Browse Collection
                    </motion.button>
                </div>
            )}
        </section>
    );
}
