
const Skills = () => {
    const skillCategories = [
        {
            title: 'Flutter & Core Technologies',
            skills: [
                { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
                { name: 'Dart', icon: 'devicon-dart-plain colored' },
                { name: 'Riverpod' },
                { name: 'BLoC' },
                { name: 'Clean Architecture' },
                { name: 'Local DB - SharedPreferences, Hive, SQLite' },
                { name: 'Animations' },
                { name: 'Localization - LTR & RTL' },
                { name: 'Responsive UI' },
                { name: 'http/dio' },
                { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
                { name: 'Firebase Crashlytics', icon: 'devicon-firebase-plain colored' },
                { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
                { name: 'Push Notification' },
                { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
                { name: 'Android App', icon: 'devicon-android-plain colored' },
                { name: 'iOS App', icon: 'devicon-apple-original colored' },
            ],
        },
        {
            title: 'Third Party Packages',
            skills: [
                { name: 'Sentry' },
                { name: 'Amplitude Event Tracking' },
                { name: 'Google Ads', icon: 'devicon-google-plain colored' },
                { name: 'Biometric/FaceID' },
                { name: 'Stepcounter/Pedometer' },
                { name: 'POS/Invoice Printing' },
                { name: 'Video Call (100ms, Zoom, Agora)' },
                { name: 'Phrase Localization' },
                { name: 'Google Health Connect', icon: 'devicon-google-plain colored' },
            ],
        },
        {
            title: 'Version Control',
            skills: [
                { name: 'GitHub', icon: 'devicon-github-original colored' },
                { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
                { name: 'BitBucket', icon: 'devicon-bitbucket-original colored' },
            ],
        },
        {
            title: 'Task Management & Design Tools',
            skills: [
                { name: 'Jira', icon: 'devicon-jira-plain colored' },
                { name: 'Linear' },
                { name: 'ZOHO' },
                { name: 'Clickup' },
                { name: 'Figma', icon: 'devicon-figma-plain colored' },
                { name: 'AdobeXD', icon: 'devicon-xd-plain colored' },
            ],
        },
        {
            title: 'Additional Technical Exposure (Basic Understanding)',
            skills: [
                { name: 'Python', icon: 'devicon-python-plain colored' },
                { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
                { name: 'GoLang', icon: 'devicon-go-original-wordmark colored' },
                { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
                { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
                { name: 'SQL', icon: 'devicon-mysql-plain colored' },
                { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
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
                                <span className="skill-tag" key={skillIndex}>
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
