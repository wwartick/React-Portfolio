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
            <p style={{ color: 'silver', textAlign: 'left', fontSize: '20px', letterSpacing: '2px', lineHeight: '1.5' }}>
              I am currently searching for employment as a <strong>web developer</strong> with my newly learned skills. In the projects tab, you can find the group projects
              that I built with my classmates. Our course gave us no direction on these, other than a requirement on the technologies used. <strong>'Weeb Army'</strong> was the first project 
              given, and in less than a month, my skills had advanced to creating <strong>'Movie-App'</strong>. For our final project, my group and I used all of the knowledge we had learned, and built
              a full stack e-commerce dummy site: <strong>'Music Market'</strong>
            </p>
            <p style={{ color: 'silver', textAlign: 'left', fontSize: '20px', letterSpacing: '2px', lineHeight: '1.5' }}>
              I have spent the last 10 years in and out of college at San Francisco State University and various community colleges to further my education.
              In the meantime, I have been serving at local restaurants for employment and helping my friends and family with computer issues in my free time. I'm passionate in my 
              journey to continue learning, as this recent boot camp opened my eyes to how in-depth coding can be, and the infinite capabilities with these skills. In my free time,
              I play sports with my friends like basketball or football. If I'm not playing sports, I'm watching my favorite teams: Green Bay Packers, St. Louis Cardinals, Golden State Warriors, and Manchester City.
              Other than that, I play a lot of video games and spend time with my dogs. If you read all this text I thank you, please reach out with any questions you might have!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;