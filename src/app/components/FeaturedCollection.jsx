'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Featured1 from '../../../public/Image/Featured1.jpg';
import Featured2 from '../../../public/Image/Featured2.jpg';
import Featured3 from '../../../public/Image/Featured3.jpg';
export default function FeaturedCollection() {
    const featuredCollections = [
        {
            id: "1",
            title: "Traditional Beadwork Collection",
            shortDesc: "Vibrant beadwork and textiles from Igbo culture.",
            image: Featured1,
        },
        {
            id: "2",
            title: "Royal Textile Collection",
            shortDesc: "Vibrant beadwork and textiles from Yoruba culture.",
            image: Featured2,
        },
        {
            id: "3",
            title: "Warrior Adornments",
            shortDesc: "Vibrant beadwork and textiles from Maasai culture.",
            image: Featured3,
        },
        {
            id: "4",
            title: "Ceremonial Artifacts",
            shortDesc: "Vibrant beadwork and textiles from Maasai culture.",
            image: Featured2,
        },
    ];
    const router = useRouter();

    return (
        <section className="featured-section" id="featured">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title"
            >
                Featured Collections
            </motion.h2>
            <div className="featured-grid">
                {featuredCollections.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        className="featured-card"
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <img src={item.image.src} alt={item.title} className="featured-img" />
                        <div className="featured-info">
                            <h3>{item.title}</h3>
                            <p>{item.shortDesc}</p>
                        </div>
                        <div className="card-link-icon" onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/collection/${item.id}`);
                        }}>
                            <FaExternalLinkAlt />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
