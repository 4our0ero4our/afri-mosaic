import { motion } from 'framer-motion';

const shatterVariants = {
    initial: { opacity: 1, y: 0, x: 0, rotate: 0 },
    shatter: i => ({
        opacity: 0,
        y: [-5, (Math.random() - 0.5) * 200],
        x: [(Math.random() - 0.5) * 200],
        rotate: (Math.random() - 0.5) * 180,
        transition: { duration: 0.8, delay: i * 0.04 }
    }),
};

export function Loader({ shatter, onShatterComplete }) {
    const text = "Representing Africans on chain";
    return (
        <motion.div
            className="hero-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: shatter ? 0 : 1 }}
            transition={{ duration: 0.5, delay: shatter ? 0.8 : 0 }}
            onAnimationComplete={() => shatter && onShatterComplete()}
            style={{ zIndex: 2000 }}
        >
            <span className="loader-text">
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={shatterVariants}
                        initial="initial"
                        animate={shatter ? "shatter" : "initial"}
                        style={{ display: "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        </motion.div>
    );
}