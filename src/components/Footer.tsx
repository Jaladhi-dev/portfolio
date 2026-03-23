
import { trackEvent } from '../utils/analytics';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="copyright">© 2024 Jaladhi Patel. All rights reserved.</p>
                    <div className="social-links">
                        <a
                            href="https://github.com/Jaladhi-dev/"
                            target="_blank"
                            rel="noopener"
                            aria-label="GitHub"
                            onClick={() => trackEvent({ action: 'GitHub Clicked', category: 'Footer Section', label: 'GitHub' })}
                        >GitHub</a>
                        <a
                            href="https://www.linkedin.com/in/jd-patel"
                            target="_blank"
                            rel="noopener"
                            aria-label="LinkedIn"
                            onClick={() => trackEvent({ action: 'LinkedIn Clicked', category: 'Footer Section', label: 'LinkedIn' })}
                        >LinkedIn</a>
                        <a
                            href="mailto:jaladhi.dev@gmail.com"
                            aria-label="Email"
                            onClick={() => trackEvent({ action: 'Email Clicked', category: 'Footer Section', label: 'Email' })}
                        >Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
