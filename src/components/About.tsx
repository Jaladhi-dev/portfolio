import { useEffect, useState, useRef } from 'react';

const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return { count, elementRef };
};

const About = () => {
    const yearsExp = useCountUp(5);
    const projectsDelivered = useCountUp(10);

    return (
        <section className="section about" id="about">
            <div className="container">
                <h2 className="section-title fade-in visible">About Me</h2>
                <div className="about-content">
                    <div className="about-text fade-in visible">
                        <p className="about-intro">
                            Mobile Application Developer with <strong>5+ years of experience</strong> in Flutter,
                            specializing in building scalable, high-quality applications with clean architecture and
                            seamless user experiences.
                        </p>
                        <p className="about-description">
                            Skilled in integrating codebases and optimizing app performance.
                            Proficient in Firebase integration, API development, and cross-platform development.
                            I enjoy staying current with emerging technologies and collaborating with product and design
                            teams to deliver impactful digital solutions.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-item">
                                <span className="highlight-number" ref={yearsExp.elementRef}>
                                    {yearsExp.count}+
                                </span>
                                <span className="highlight-label">Years Experience</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-number" ref={projectsDelivered.elementRef}>
                                    {projectsDelivered.count}+
                                </span>
                                <span className="highlight-label">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
