import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  // Declare a state variable for the current view
  const [currentView, setCurrentView] = useState('about');

  // Define a callback function to update the current view
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  // Render the appropriate component based on the current view
  let view;
  switch (currentView) {
    case 'about':
      view = <About />;
      break;
    case 'projects':
      view = <Projects />;
      break;
    case 'contact':
      view = <Contact />;
      break;
    default:
      view = <About />;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      height: '100%',
      width: '100%',
      backgroundColor: '#213d3d',
      textAlign: 'center',
      position: 'relative'
    }}>
      <Header />
      <Nav onViewChange={handleViewChange} />
      <main style={{ flex: 1 }}>
        {view}
      </main>
      <Footer />
    </div>
  );
}

export default App; 