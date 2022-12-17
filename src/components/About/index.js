import React from 'react';

function About() {
  return (
    <section style={{ height: '75vh', paddingLeft: '40px', paddingRight: '40px'}}>
      <div> 
      <h2 style={{fontSize: '50px', paddingTop: '30px', color: '#F5B041' }}>About Me</h2>
        <div>
          <div>
          <p style={{ color: 'silver', textAlign: 'left', fontSize: '30px', letterSpacing: '2px', lineHeight: '2' }}>
           Hey, thank  you for checking out my portfolio, I'm <strong>Will</strong>.
            </p>
            <p style={{ color: 'silver', textAlign: 'left', fontSize: '20px', letterSpacing: '2px', lineHeight: '4' }}>
             I am a <strong>Full-stack Web Developer</strong> that has recently graduated from <strong>UC Davis' full stack web development boot camp</strong>.
            </p>
            <p style={{ color: 'silver', textAlign: 'left', fontSize: '20px', letterSpacing: '2px', lineHeight: '2' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p style={{ color: 'silver', textAlign: 'left', fontSize: '20px', letterSpacing: '2px', lineHeight: '2' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
              qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;