import { FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="footer-root">
            <div className="footer-main">
                <div className="footer-brand">
                    <div className="footer-logo-row">
                        <div className="footer-logo">{/* Replace with your logo image if needed */}
                            <span className="footer-logo-icon">A</span>
                        </div>
                        <span className="footer-brand-title">Afri Mosaic</span>
                    </div>
                    <p className="footer-desc">
                        Afri Mosaic is the NFT platform to discover, collect, and celebrate Africa's rich cultures and art on-chain. Empowering creators, collectors, and communities to preserve heritage in the digital age.
                    </p>
                    <div className="footer-socials">
                        <a href="#" aria-label="X" className="footer-social"><FaXTwitter /></a>
                        <a href="#" aria-label="Instagram" className="footer-social"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn" className="footer-social"><FaLinkedin /></a>
                        <a href="#" aria-label="GitHub" className="footer-social"><FaGithub /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-col">
                        <div className="footer-col-title">Marketplace</div>
                        <a href="#">Explore NFTs</a>
                        <a href="#">Featured Collections</a>
                        <a href="#">Create NFT</a>
                        <a href="#">Auctions</a>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-title">Resources</div>
                        <a href="#">How It Works</a>
                        <a href="#">Community</a>
                        <a href="#">Blog</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-title">About</div>
                        <a href="#">Our Story</a>
                        <a href="#">Artists</a>
                        <a href="#">Contact</a>
                        <a href="#">Partners</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span className="footer-copyright">© 2025 Afri Mosaic. All rights reserved.</span>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
} 