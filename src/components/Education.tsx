

const Education = () => {
    const education = [
        {
            degree: 'B. Tech in Information Technology',
            institution: 'Birla Vishvakarma Mahavidyalaya',
            location: 'V.V.Nagar, Anand, Gujarat',
            period: '2016 – 2019',
            icon: '🎓',
        },
        {
            degree: 'Diploma Engineering in IT',
            institution: 'Parul Polytechnic Institute',
            location: 'Vadodara, Gujarat',
            period: '2012 – 2016',
            icon: '📚',
        },
    ];

    return (
        <section className="section education" id="education">
            <div className="container">
                <h2 className="section-title fade-in visible">Education</h2>
                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div className="education-card fade-in visible" key={index}>
                            <div className="education-icon">{edu.icon}</div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-institution">{edu.institution}</p>
                            <p className="education-location">{edu.location}</p>
                            <p className="education-period">{edu.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
