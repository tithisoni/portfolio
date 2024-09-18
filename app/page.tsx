import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div id="aboutme">
        <h1>About Me</h1>
        <p>As a dedicated Computer Science student at the University of British Columbia, I possess a robust foundation in programming languages such as Java, Python, and JavaScript. My technical proficiency is further endorsed by my role as a software developer for the Girls in Tech Club, where I focus on full stack app development with an emphasis on UI/UX design. Demonstrating leadership, I have successfully hosted two hackathons and actively engaged in tech-related events. With a passion for creating user-centered applications, I am keen to leverage these interdisciplinary skills within forward-thinking organizations. My ambition is to continuously broaden my expertise in Computer Science, contribute meaningfully to innovative projects, and explore the possibility of a progressive career within this vibrant industry.</p>
      </div>
      <div id="experience">
        <h1>Experience</h1>
        <div>
          <h3>Girls in Tech </h3>
          <p>Software Developer <i>August 2024 - Present</i></p>
          <p>Outreach and Media Coordinator <i>September 2023 - August 2024</i></p>
          <p>Head of Operations- Internal<i>January 2023 - August 2023</i></p>
        </div>
        <div>
          <h3>Fort Mcmurray Boys and Girls Club <i>May 2022 - August 2022</i></h3>
          <p>Summer Camp Counsellor</p>
        </div>
        <div>
          <h3>Girls Inc. of Northern Alberta</h3>
          <p>Volunteer <i>September 2021 - January 2022</i></p>
          <p>Program Assistant <i>July 2020 - August 2021</i></p>
        </div>
        <div>
          <h3>Mayor&apos;s Advisory Council on Youth</h3>
          <p>General Assembly Member <i>September 2020 - June 2021</i></p>
          <p>Committee Member <i>September 2019 - June 2020</i></p>
        </div>
      </div>
      <div id="projects">
        <h1>Projects</h1>
        <div>
          <h3>Club Website</h3>
        </div>
        <div>
          <h3>Sprint Reviews</h3>
        </div>
        <div>
          <h3>Canvas Clone</h3>
        </div>
        <div>
          <h3>Discussion Forum</h3>
        </div>
        <div>
          <h3>Figma Designs</h3>
        </div>
      </div>
      <div id="awards">
        <h1>Awards</h1>
        <div>
          <h3>Go Global International Learning Programs Award</h3>
          <p>University of British Columbia- Okanagan</p>
        </div>
        <div>
          <h3>Dean&apos;s Entrance Scholarship</h3>
        <p>Macewan University</p>
        </div>
      </div>
      <div id="skills">
        <h1>Skills</h1>
        <div>
          <b>Web Development</b>
          <p>HTML, CSS, APIs, PHP, Javascript, Tailwind CSS</p>
        </div>
        <div>
          <b>Databases</b>
          <p>MySQL, DBMS</p>
        </div>
        <div>
          <b>Programming Languages</b>
          <p>Python, Java, R, Assembly, Processing</p>
        </div>
        <div>
          <b>Frameworks</b>
          <p>ReactJS, NextJS, Flask</p>
        </div>
        <div>
          <b>Design</b>
          <p>Figma, Sketchbook</p>
        </div>
        <div>
          <b>Miscellaneous</b>
          <p>Agile Methodologies, Event Management, SDLC, Project Management, Photo/Video Editing</p>
        </div>
        
      </div>

    </div>
  );
}
