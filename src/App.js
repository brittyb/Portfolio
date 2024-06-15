import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './App.css';





const SectionTitle = (props) => {
  // State to track whether the scroll position has reached the target point
  const [scrolledToTarget, setScrolledToTarget] = useState(false);

  const sectionRef = useRef(null);

  // the position of the div on the screen
  const [sectionPosition, setSectionPosition] = useState(0);


  // get the scroll Y position of div
  const getElementTopPosition = (element) => {
    let offsetTop = 0;
    while (element) {
      offsetTop += element.offsetTop;
      element = element.offsetParent;
    }
    return offsetTop - window.scrollY; // Adjust for current scroll position
  };

  // Function to handle scroll events
  const handleScroll = () => {
    console.log(sectionPosition);
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // Change the target scroll position as needed (if it is scrolled to)

    if (scrollY >= sectionPosition) {
      setScrolledToTarget(true);
      
    } else {
      setScrolledToTarget(false);
      
    }
  };


  // Effect to update the section position after the component mounts
  useEffect(() => {
    if (sectionRef.current) {
      const elementTop = getElementTopPosition(sectionRef.current);
      setSectionPosition(elementTop);
    }
  }, []); 

  // Effect to add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionPosition]); // Adding sectionPosition to ensure handleScroll uses the updated position

  return (
    <div ref={sectionRef} id="about" className={`my-div ${scrolledToTarget ? 'target-color' : 'default-color'}`}>
      <h3 className="about">{props.name}</h3>
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
      <SectionTitle name="About" position="600"/>
      <div id="projects" className="projects">
      <p>about</p>
      </div>
      <SectionTitle name="Projects" position="700"/>

      <div id="projects" className="projects">
      <p>projects</p>
      </div>
      <SectionTitle name="Contact" position="800"/>
      <div id="contact" className="contact">
      <p>contact</p>
      </div>

    </main>
  )
}