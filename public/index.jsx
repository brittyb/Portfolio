import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './App.css';




/*
const hello = () => {
  const array = ['Zeller Cellar', 'Graphics', 'Scrapbook'];
  const combined = [...array, 'Creative Comms'];
  const projects = combined.map((item) => <p>{item}</p>)
  return projects;
}
  

class Test extends React.Component {
  render() {
    return <h2>Hi, I am a test function!</h2>;
  }
}
function Test2(props) {
  return <p>Test function 2!!! {props.color}</p>
}
*/



/*
root.render(hello());
root.render(<Test2 color="purple"/>);
*/



/*
class Project {
  constructor(name, description, image) {
    this.name = name;
    this.descripton = description;
    this.image = image;
  }

  show() {
    return "test function";
  }
}

const project1 = new Project("Project 1", "Description 1", "image1.jpg");
*/



/*
Smooth scroll to different parts of page
*/

// State to track whether the scroll position has reached the target point
const App = () => {
  // State to track whether the scroll position has reached the target point
  const [scrolledToTarget, setScrolledToTarget] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // Change the target scroll position as needed
    console.log(scrollY);
    if (scrollY >= 600) {
      setScrolledToTarget(true);
      
    } else {
      setScrolledToTarget(false);
      
    }
  };

  // Effect to add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div id="about" className={`my-div ${scrolledToTarget ? 'target-color' : 'default-color'}`}>
      <h3 className="about">About</h3>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<App />);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});