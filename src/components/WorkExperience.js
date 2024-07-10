import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "ThoughtMinds",
      role: "Software Engineer Intern",
      period: "May 2024 – August 2024",
      logo: "thoughtminds_logo.png"
    },
    {
      company: "USC Information Sciences Institute",
      role: "Research Assistant",
      period: "Jan 2024 – May 2023",
      logo: "usc_isi_logo.jpeg"
    },
    {
      company: "Blitznotes.org",
      role: "Software Engineer",
      period: "Oct 2021 – Aug 2022",
      logo: "blitznotes_logo.png"
    },
    {
      company: "Thoughtworks",
      role: "Data Science Intern",
      period: "Jan 2022 – Mar 2022",
      logo: "thoughtworks_logo.jpeg"
    }
  ];

  return (
    <div className="work-experience-container">
      <h2><i className="fas fa-briefcase"></i> Work Experience</h2>
      <ul className="work-experience-list">
        {experiences.map((experience, index) => (
          <li className="work-experience" key={index}>
            <div className="logo">
              <img src={experience.logo} alt={`${experience.company} logo`} />
            </div>
            <div className="details">
              <div className="main-details">
                <h3>{experience.company}</h3>
                <p className="role">{experience.role}</p>
              </div>
              <p className="period">{experience.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
