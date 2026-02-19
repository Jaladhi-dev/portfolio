import React, { useRef } from 'react';

const ProjectCard = ({ project }: { project: any }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    };

    return (
        <div
            className="project-card fade-in visible"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.badge && <span className="project-badge">{project.badge}</span>}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
                {project.tech.map((tag: string, i: number) => (
                    <span className="tech-tag" key={i}>{tag}</span>
                ))}
            </div>
            <div className="project-links">
                {project.links && project.links.map((link: any, i: number) => (
                    <a href={link.url} target="_blank" rel="noopener" className="project-link" key={i}>
                        {link.icon === 'apple' ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                            </svg>
                        )}
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Superbrains',
            badge: 'Live',
            description: 'Worked on Superbrains, a mental fitness and brain training app. Responsible for developing new features such as audio/video calling and Google Fit & Apple Health Connect integration.',
            tech: ['100ms Video/Audio Call', 'Google & Apple Health Connect', 'Riverpod'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/superbrains/id1190092626', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.angrynerds.superbrains&hl=en_IN', icon: 'play' },
            ],
        },
        {
            title: 'OneBreath',
            badge: 'Live',
            description: 'WellnessCare App with breathing and stress tests. Engage in tailored breath exercises and access guided video and audio content.',
            tech: ['Video/Audio Player', 'InApp Purchase', 'Riverpod'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/onebreath-breathwork-sleep/id6476624695', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=app.onebreath&pcampaignid=web_share', icon: 'play' },
            ],
        },
        {
            title: 'EEA Group',
            badge: 'Live',
            description: 'Streamline machinery maintenance. Easily order parts and schedule services through dynamic forms.',
            tech: ['Dynamic Forms', 'REST API', 'Riverpod'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/eeau/id6449926966', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.earthmovingequipment.australia&hl=en', icon: 'play' },
            ],
        },
        {
            title: 'Mindscape',
            badge: 'Live',
            description: 'Therapy and Wellness App with service booking for therapy sessions. Utilizing Agora platform for immersive interactions.',
            tech: ['Agora Video/Audio Call', 'Global Appointment System', 'Riverpod'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/mindscape-therapy/id6446362496', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.mindscape.app&hl=en_IN&gl=US', icon: 'play' },
            ],
        },
        {
            title: 'Vedic Trivia',
            badge: 'Live',
            description: 'Interactive Quiz App enhanced with Google Ads for added convenience and support.',
            tech: ['Google Ads', 'Firebase', 'Riverpod'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/vedic-trivia/id6450727764', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.vedictrivia.app&hl=en&gl=US', icon: 'play' },
            ],
        },
        {
            title: 'Mandobk Store',
            badge: 'Live',
            description: 'Comprehensive restaurant management app with POS and invoice printing functionalities. Track delivery drivers via Google Maps.',
            tech: ['POS', 'Google Maps', 'BLoC'],
            links: [
                { label: 'App Store', url: 'https://apps.apple.com/in/app/mandobk-store/id6444818481', icon: 'apple' },
                { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.mandobk.restaurantapp&hl=en_IN&gl=US', icon: 'play' },
            ],
        },
        {
            title: 'Loackr Pay',
            description: 'Innovative Finance App featuring cutting-edge biometric authentication including FaceID for secure access.',
            tech: ['Biometric', 'FaceID', 'Riverpod'],
        },
        {
            title: 'Center Of Strength',
            description: 'Fitness App with step counter, extensive exercise video library, and personalized diet plans.',
            tech: ['Pedometer Steps Tracker', 'Video Player', 'Riverpod'],
        },
    ];

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <h2 className="section-title fade-in visible">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
