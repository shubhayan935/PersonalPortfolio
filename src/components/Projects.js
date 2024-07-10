import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProjectCard from './ProjectCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Projects = () => {
  const moreProjects = [
    { title: 'Project 1', image: 'project1.png', description: 'Description 1', tech: ['Tech1', 'Tech2'], link: 'https://link1.com' },
    { title: 'Project 2', image: 'project2.png', description: 'Description 2', tech: ['Tech1', 'Tech2'], link: 'https://link2.com' },
    { title: 'Project 3', image: 'project3.png', description: 'Description 3', tech: ['Tech1', 'Tech2'], link: 'https://link3.com' },
    { title: 'Project 4', image: 'project4.png', description: 'Description 4', tech: ['Tech1', 'Tech2'], link: 'https://link4.com' },
  ];

  return (
    <div id="projects">
      <h1>Recent Projects.</h1>
      <div className="projects" id="project_section">
        <ProjectCard 
          title="Hera | FullStack AI Web Application"
          image="hera_screenshot.png"
          description="Search-driven air pollution analytics tool. I built an AI analytics agent that users can chat with to analyze and simulate potential solutions to air pollution, thus finding the optimal solution before wasting any resources in the traditional 'hit and trial' methods."
          highlight="Currently used by local governments across 15 cities."
          tech={['React.js', 'OpenAI', 'Docker', 'Flask', 'LangChain', 'Firebase']}
          link="https://heradashboard.vercel.app"
        />
        <ProjectCard 
          title="Personal Empathetic AI Assistant App | FullStack AI iOS Application"
          image="tone_screenshot.png"
          description="Tone is an innovative iOS app that enhances productivity and emotional well-being by utilizing a sophisticated AI bot with long-term memory capabilities, developed using SwiftUI and OpenAI's RAG model. It integrates seamlessly with Google Calendar to manage schedules and set reminders automatically, fostering an organized and efficient daily routine. Through continuous user feedback and data-driven refinements, Tone provides a personalized and empathetic user experience, making it more than just a tool but a companion in daily life."
          highlight="Currently used by local governments across 15 cities."
          tech={['SwiftUI', 'OpenAI', 'Pinecone', 'Flask', 'Python', 'Firebase']}
          link="https://github.com/shubhayan935/PersonalAssistant-iOS/"
        />
      </div>
      {/* <h2>More Projects...</h2>
      <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={5000} 
        swipeable={true} 
        emulateTouch={true}
        showStatus={false} // Remove the "1 of 4" indicator
        centerMode={true} // Adjust for 2 cards
        centerSlidePercentage={50} // Each card takes 50% width
        showIndicators={true} // Optionally show the dot indicators as well
      >
        {moreProjects.map((project, index) => (
          <div key={index} style={{ padding: '0 15px' }}>
            <ProjectCard 
              title={project.title}
              image={project.image}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default Projects;
