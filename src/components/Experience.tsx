
import { trackEvent } from '../utils/analytics';

const Experience = () => {
    const experiences = [
        {
            title: 'Team Lead – Mobile Developer',
            company: 'Witness Manera',
            period: 'August 2026 – Present',
            location: 'Mumbai, Maharashtra, Remote',
            description: 'Leading the mobile engineering team in architecting and building Zency, a hyperlocal quick-commerce platform delivering fashion, lifestyle, beauty, and home essentials in 15 minutes. Driving core application development with Flutter and BLoC state management. Managing end-to-end mobile build pipelines and deployment lifecycles across Google Play Console (Android) and Apple App Store Connect (iOS). Implementing AI-accelerated engineering workflows to optimize code quality, streamline testing, and maximize sprint delivery velocity.',
        },
        {
            title: 'Mobile Developer',
            company: 'EngagelyAI',
            period: 'October 2025 – April 2026',
            location: 'Mumbai, Maharashtra, Remote',
            description: 'Worked as a Flutter Developer building enterprise mobile applications and conversational AI interfaces, including the Behtar Broker application with chatbot capabilities, clean architecture, and modular package integrations.',
        },
        {
            title: 'Flutter Developer',
            company: 'Paiteq Private Limited',
            period: 'April 2024 – April 2025',
            location: 'Bangalore, Karnataka, Remote',
            description: 'Maintained and enhanced mobile applications by fixing bugs, improving performance, and adding new features. Collaborated with product and design teams to ensure smooth, up-to-date, and user-friendly experiences.',
        },
        {
            title: 'Flutter Developer',
            company: 'Ebizz Infotech',
            period: 'August 2021 – March 2024',
            location: 'Surat, Gujarat',
            description: 'Worked on multiple mobile applications across wellness, fitness, finance, and enterprise domains, utilizing a variety of technologies and third-party packages. Focused on delivering seamless user experiences, implementing core functionalities, and maintaining app performance and stability across projects.',
        },
    ];

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <h2 className="section-title fade-in visible">Professional Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            className="timeline-item fade-in visible"
                            key={index}
                            onClick={() => trackEvent({ action: 'click_experience', category: 'Experience Section', label: exp.company })}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3 className="timeline-title">{exp.title}</h3>
                                    <span className="timeline-company">{exp.company}</span>
                                </div>
                                <p className="timeline-period">{exp.period}</p>
                                <p className="timeline-location">{exp.location}</p>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
