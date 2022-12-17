import React, { useState } from 'react';

function Nav({ onViewChange }) {
  const [currentView, setCurrentView] = useState('about');

  const handleClick = (event, view) => {
    event.preventDefault();
    setCurrentView(view);
    onViewChange(view);
  };

  return (
    <nav style={{backgroundColor: '#1C2833' }}>
      <ul style={{ display: 'flex', flexWrap: 'nowrap', listStyle: 'none', justifyContent: 'center' }}>
        <li style={{ marginRight: '20px' }}>
          <a
            style={{ 
                color: currentView === 'about' ? 'silver' : 'gold' ,
                fontWeight: 'bold',
                fontSize: 'large',
                textDecoration: 'none',
            }}
            href="#Aboutme"
            onClick={(event) => handleClick(event, 'about')}
          >
            About Me
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            style={{ color: currentView === 'projects' ? 'silver' : 'gold',
            fontWeight: 'bold',
            fontSize: 'large',
            textDecoration: 'none',
         }}
            href="#projects"
            onClick={(event) => handleClick(event, 'projects')}
          >
            Projects
          </a>
        </li>
        <li style={{ marginRight: '20px' }}>
          <a
            style={{ color: currentView === 'contact' ? 'silver' : 'gold',
            fontWeight: 'bold',
            fontSize: 'large',
            textDecoration: 'none',
         }}
            href="#contact"
            onClick={(event) => handleClick(event, 'contact')}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
