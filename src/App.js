import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './App.css';


const useScrollToTarget = () => {
  const [scrolledToTarget, setScrolledToTarget] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (!sectionRef.current) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    
    // Compare scrollY with component scrollY
    if (scrollY >= sectionRect.top && scrollY <= sectionRect.top + scrollY) {
      setScrolledToTarget(true);
    } else {
      setScrolledToTarget(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [scrolledToTarget, sectionRef];
};



const SectionTitle = (props) => {
  // State to track whether the scroll position has reached the target point
  const [scrolledToTarget, sectionRef] = useScrollToTarget();

  return (
    <div ref={sectionRef} id={`${props.name}Heading`}  className={`section-title-div ${scrolledToTarget ? 'section-color' : 'background-color'}`}>
      <h3 className={`${props.name}Title section-title`}>{props.name}</h3>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<SectionTitle />);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function Skill(props){
  const [scrolledToTarget, sectionRef] = useScrollToTarget();
  return (
    <>
      <div ref={sectionRef} className={`skill-div ${scrolledToTarget ? 'skill-color' : 'background-color'}`}>
        <img className="skill-image" src={props.link}></img>
        <h3 className="skill-name" >{props.name}</h3>
      </div>
    </>
  );
  
}

function Project(props){
  return (
    <>
      <div className="project-div">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-description">{props.description}</p>
      </div>
    </>
  );
  
}

export default function App() {
  return (
    <main>

      <div id="skills" className="skills section-div">
      <SectionTitle name="Skills" position="700"/>
      </div>
      <div className="row">
      <Skill name="React" link="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></Skill>
      <Skill name="Java" link="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"></Skill>
      <Skill name="Firebase" link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png"></Skill>
      </div>
      <div className="row">
      <Skill name="SQL" link="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"></Skill>
      <Skill name="C" link="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"></Skill>
      <Skill name="Kotlin" link="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png"></Skill>

      </div>

      <div className="row">
        <Skill name="Git" link="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"></Skill>
        <Skill name="Python" link="https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png"></Skill>
        <Skill name="MIPS" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZxkoYfqOY6Jbr90GI-u9CxuBv9NxtQA3fjG5H8gNFjrJbdPTxWUeVmIUjBC92CTkZzA&usqp=CAU"></Skill>
      </div>
      

      <div id="projects" className="projects section-div">
      <SectionTitle name="Projects" position="700"/>
      
      </div>
      
      <div className="row">
        <Project name="Scrapbook" description="some stuff"></Project>
        <Project name="Escape from the Zeller Cellar" description="aaaaa"></Project>
        
      </div>

      <div className="row">
        <Project name="Creative Commissions" description="aaaaaaaa"></Project>
        <Project name="OpenGL Room" description="aaaaaaaa"></Project>
      </div>

      
      <div id="contact" className="contact section-div">
      <SectionTitle name="Contact" position="800"/>
      
      </div>

    </main>
  )
}