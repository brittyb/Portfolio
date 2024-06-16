import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './App.css';





const SectionTitle = (props) => {
  // State to track whether the scroll position has reached the target point
  const [scrolledToTarget, setScrolledToTarget] = useState(false);

  const sectionRef = useRef(null);



  const handleScroll = () => {
    if (!sectionRef.current) return;
  
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const sectionRect = sectionRef.current.getBoundingClientRect();
    
    // Compare scrollY with sectionRect.top
    if (scrollY >= sectionRect.top) {
      setScrolledToTarget(true);
    } else {
      setScrolledToTarget(false);
    }
  };


  // Effect to update the section position after the component mounts



  // Effect to add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Adding sectionPosition to ensure handleScroll uses the updated position

  return (
    <div ref={sectionRef} id={`${props.name}Heading`}  className={`sectionTitleDiv ${scrolledToTarget ? 'target-color' : 'default-color'}`}>
      <h3 className={`${props.name}Title`}>{props.name}</h3>
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

export default function App() {
  return (
    <main>

      <div id="skills" className="skills sectionDiv">
      <SectionTitle name="Skills" position="700"/>
      <p>skills</p>
      </div>
      
      <div id="projects" className="projects sectionDiv">
      <SectionTitle name="Projects" position="700"/>
      <p>projects</p>
      </div>
      

      
      <div id="contact" className="contact sectionDiv">
      <SectionTitle name="Contact" position="800"/>
      <p>contact</p>
      </div>

    </main>
  )
}