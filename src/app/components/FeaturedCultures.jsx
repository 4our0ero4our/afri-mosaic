'use client';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Featured1 from '../../../public/Image/Featured1.jpg';
import Featured2 from '../../../public/Image/Featured2.jpg';
import Featured3 from '../../../public/Image/Featured3.jpg';

export default function FeaturedCultures() {
    const router = useRouter();

    const cultures = [
        {
            id: "igbo",
            title: "Igbo",
            image: Featured3,
        },
        {
            id: "yoruba",
            title: "Yoruba",
            image: Featured2,
        },
        {
            id: "hausa",
            title: "Hausa",
            image: Featured1,
        },
        {
            id: "kongo",
            title: "Kongo",
            image: Featured1,
        },
    ];

    return (
        <section className="explore-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Featured Cultures
            </motion.h2>
            <div className="explore-grid">
                {cultures.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        className="explore-card"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <img src={item.image.src} alt={item.title} className="explore-img" />
                        <div className="explore-info">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="card-link-icon" onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/culture/${item.id}`);
                        }}>
                            <FaExternalLinkAlt />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
