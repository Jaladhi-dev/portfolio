import React from 'react';
import heroAvatar from '../assets/images/hero-avatar.png';

interface FloatingBadgeProps {
    className: string;
    icon?: string;
    emoji?: string;
    text: string;
}

const FloatingBadge: React.FC<FloatingBadgeProps> = ({ className, icon, emoji, text }) => (
    <div className={`floating-badge ${className}`}>
        {icon ? <i className={`${icon} badge-icon`}></i> : <span className="badge-icon">{emoji}</span>}
        <span className="badge-text">{text}</span>
    </div>
);

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background-shapes">
                {/* User requested removal of glow effects from top left and bottom right */}
                {/* <div className="shape shape-1"></div> */}
                {/* <div className="shape shape-2"></div> */}
            </div>
            <div className="container">
                <div className="hero-content-split">
                    <div className="hero-text">
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1 className="hero-name">Jaladhi Patel</h1>
                        <h2 className="hero-title">Flutter Developer</h2>
                        <p className="hero-description">
                            5+ years of experience in designing, developing, and maintaining mobile applications. Skilled in
                            writing clean, efficient code and delivering seamless user experiences.
                        </p>

                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">View Work</a>
                            <a href="#contact" className="btn btn-secondary">Contact Me</a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-avatar-container">
                            <div className="fog-container">
                                <div className="fog fog-1"></div>
                                <div className="fog fog-2"></div>
                                <div className="fog fog-3"></div>
                            </div>
                            <img src={heroAvatar} alt="Jaladhi Patel 3D Avatar" className="hero-avatar" />

                            <FloatingBadge className="badge-1" icon="devicon-flutter-plain colored" text="Flutter" />
                            <FloatingBadge className="badge-2" emoji="⚡" text="5+ Years" />
                            <FloatingBadge className="badge-3" icon="devicon-android-plain colored" text="Android" />
                            <FloatingBadge className="badge-4" icon="devicon-apple-original colored" text="iOS" />
                            <FloatingBadge className="badge-5" emoji="📱" text="Mobile Dev" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
