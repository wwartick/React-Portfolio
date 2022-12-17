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
        <li style={{ marginRight: '50px' }}>
          <a
            style={{ 
                color: currentView === 'about' ? 'gold' : 'silver' ,
                fontWeight: 'bold',
                fontSize: '30px',
                textDecoration: 'none',
            }}
            href="#About"
            onClick={(event) => handleClick(event, 'about')}
          >
            About Me
          </a>
        </li>
        <li style={{ marginRight: '50px' }}>
          <a
            style={{ 
            color: currentView === 'projects' ? 'gold' : 'silver' ,
            fontWeight: 'bold',
            fontSize: '30px',
            textDecoration: 'none',
         }}
            href="#projects"
            onClick={(event) => handleClick(event, 'projects')}
          >
            Projects
          </a>
        </li>
        <li style={{ marginRight: '50px' }}>
          <a
            style={{ 
            color: currentView === 'resume' ? 'gold' : 'silver' ,
            fontWeight: 'bold',
            fontSize: '30px',
            textDecoration: 'none',
         }}
            href="#resume"
            onClick={(event) => handleClick(event, 'resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
