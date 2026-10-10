import { trackEvent } from '../utils/analytics';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Mobile & Core Architecture',
            skills: [
                { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
                { name: 'Dart', icon: 'devicon-dart-plain colored' },
                { name: 'BLoC' },
                { name: 'Riverpod' },
                { name: 'Clean Architecture' },
                { name: 'Reactive State Management' },
                { name: 'Responsive UI' },
                { name: 'Animations' },
                { name: 'Localization (LTR & RTL)' },
                { name: 'Local DB (Hive, SQLite, SharedPreferences)' },
                { name: 'Networking (Dio, HTTP, GraphQL)' },
                { name: 'Performance Optimization' },
            ],
        },
        {
            title: 'Deployment & Store Release Management',
            skills: [
                { name: 'Google Play Console', icon: 'devicon-google-plain colored' },
                { name: 'Apple App Store Connect', icon: 'devicon-apple-original colored' },
                { name: 'TestFlight' },
                { name: 'Internal/Closed Testing Tracks' },
                { name: 'Versioning & Release Management' },
                { name: 'Mobile CI/CD Pipelines' },
            ],
        },
        {
            title: 'AI-Accelerated Engineering',
            skills: [
                { name: 'AI-Assisted Software Development' },
                { name: 'Prompt-Driven Architecture & Refactoring' },
                { name: 'AI-Augmented Unit/Integration Testing' },
                { name: 'Rapid Feature Prototyping' },
            ],
        },
        {
            title: 'Backend, Cloud & APIs',
            skills: [
                { name: 'Firebase (Auth, Firestore, Cloud Messaging, Crashlytics)', icon: 'devicon-firebase-plain colored' },
                { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
                { name: 'RESTful APIs' },
                { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
            ],
        },
        {
            title: 'Integrations & Third-Party SDKs',
            skills: [
                { name: 'Sentry' },
                { name: 'Amplitude Analytics' },
                { name: 'Payment & POS / Invoice Printing' },
                { name: 'Biometric Auth (Fingerprint / FaceID)' },
                { name: 'Real-time Video/Audio (Agora, 100ms, Zoom)' },
                { name: 'Google Health Connect', icon: 'devicon-google-plain colored' },
                { name: 'Step Counter / Pedometer' },
                { name: 'Push Notifications' },
                { name: 'Google Ads', icon: 'devicon-google-plain colored' },
            ],
        },
        {
            title: 'Version Control & DevOps',
            skills: [
                { name: 'Git', icon: 'devicon-git-plain colored' },
                { name: 'GitHub', icon: 'devicon-github-original colored' },
                { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
                { name: 'Bitbucket', icon: 'devicon-bitbucket-original colored' },
                { name: 'Automated Build Pipelines' },
            ],
        },
        {
            title: 'Project Management & Collaboration',
            skills: [
                { name: 'Technical Team Leadership' },
                { name: 'Agile/Scrum Sprint Planning' },
                { name: 'Jira', icon: 'devicon-jira-plain colored' },
                { name: 'Linear' },
                { name: 'Zoho' },
                { name: 'ClickUp' },
                { name: 'Code Reviews & Mentorship' },
            ],
        },
        {
            title: 'Design Hand-off & UI Tools',
            skills: [
                { name: 'Figma', icon: 'devicon-figma-plain colored' },
                { name: 'Adobe XD', icon: 'devicon-xd-plain colored' },
            ],
        },
    ];

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title fade-in visible">Technical Skills</h2>

                {skillCategories.map((category, catIndex) => (
                    <div className="skills-category fade-in visible" key={catIndex}>
                        <h3 className="category-title">{category.title}</h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    className="skill-tag"
                                    key={skillIndex}
                                    onClick={() => trackEvent({ action: 'click_skill', category: 'Skills Section', label: skill.name })}
                                >
                                    {skill.icon && <i className={skill.icon}></i>} {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
