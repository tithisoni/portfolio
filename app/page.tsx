'use client';
import Navbar from "./navbar";
import { ReactTyped } from "react-typed";
import styles from './styles/index.module.css'
import { Button, Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";
import MyCard from "./card";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import ThreeScene from "./stars";
import MainNavbar from "./navbar";

export default function Home() {
  
  const projects = [
  { name: 'Girls in Tech Website', desc: 'Developed a website for the Girls in Tech Club that showcases events, goals, resources, and opportunites for students interested in tech at UBCO.', link: 'https://gitsuo.vercel.app', linkdesc: 'View Website', stack: 'ReactJS | NextJS | React Bootstrap', index: 0 },

  { name: 'Sprint Reviews', desc: 'Developed a web application that streamlines the process of creating and assigning reviews for instructors, and simplifies the process of submitting and providing peer reviews for students.', link: 'https://github.com/yatharth711/SprintReviewsTool', linkdesc: 'View Source Code', stack: 'ReactJS | NextJS | NextUI | MySQL', index: 1 },

  { name: 'Canvas Clone', desc: 'Developed an E-learning platform similar to Canvas. It provides the same functionalities to users as Canvas, including assignment creation, submission, grading, and course management.', link: 'https://github.com/gaurangbharti1/Vocode', linkdesc: 'View Source Code', stack: 'HTML | CSS | Javascript | Flask', index: 2 },

  { name: 'Discussion Forum', desc: 'Developed full-stack discussion forum similar to Reddit using LAMP stack. It provides users with the ability to join and create communities, create and like posts, and following and commenting abilities.', link: 'https://github.com/yatharth711/myDiscussionForum', linkdesc: 'View Source Code', stack: 'HTML | CSS | PHP | Javascript', index: 3 },

  { name: 'Design Portfolio', desc: 'Created UI designs as a course project using Figma and following the UI/UX principles', link: 'https://linktr.ee/tithi_soni', linkdesc: 'View Portfolio', stack: 'Figma', index: 4 },
];
  return (
    <div>
      <div className=" w-[100%] fixed z-10">
        <MainNavbar/>
        {/* <Navbar /> */}
      </div>
      <div id="aboutme" className={`${styles.section} ${styles.about}`}>        
        <h1><ReactTyped strings={['About Me']} typeSpeed={50} loop /></h1>
        <div className='flex flex-row flex-wrap justify-center'>
        <CldImage src="mypic" width="250" height="250" crop={{ type: 'fill', source: true }} radius="max"  alt={"sample"}/>
        <p>As a dedicated Computer Science major from the University of British Columbia, I possess a robust foundation in programming languages such as Java, Python, and JavaScript. My technical proficiency is further endorsed by my role as a software developer for the Girls in Tech Club, where I focus on full stack app development with an emphasis on UI/UX design. Demonstrating leadership, I have successfully hosted two hackathons and actively engaged in tech-related events. With a passion for creating user-centered applications, I am keen to leverage these interdisciplinary skills within forward-thinking organizations. My ambition is to continuously broaden my expertise in Computer Science, contribute meaningfully to innovative projects, and explore the possibility of a progressive career within this vibrant industry.</p>
       
        </div>
        
      </div>
      <div id="experience" className={`${styles.section} ${styles.exp}`}>
        <h1><ReactTyped strings={['Experience']} typeSpeed={50} loop /></h1>
        <div className={styles.job}>
          <h3>Girls in Tech </h3>
          <div className="flex justify-between">
            <p>Software Developer</p> <i>Aug 2024 - Present</i>
          </div>
          <div className="flex flex-wrap  justify-between">
            <p>Outreach and Media Coordinator </p><i>Sept 2023 - Aug 2024</i>
          </div>
          <div className="flex justify-between">
            <p>Head of Operations- Internal</p><i>Jan 2023 - Aug 2023</i>
          </div>
          <div><p>I successfully planned and hosted two hackathons, each attracting 50-60 participants, resulting in a total of over 100 attendees. I developed a Next.js application that provided essential information about the events, which received over 100 unique visits. Additionally, I coordinated logistics, ensuring all necessary materials were prepared, and created various promotional and informational materials, including social media posts and websites, which reached an audience of over 2000 people.</p> </div>
        </div>
        <br />
        <div className={styles.job}>
          <h3>Fort Mcmurray Boys and Girls Club </h3>
          <div className="flex justify-between"><p>Summer Camp Counsellor</p><i>May 2022 - Aug 2022</i></div>
          <div><p>I led engaging activities for campers, providing entertainment and ensuring smooth transitions between activities, benefiting over 50 campers. I administered first aid and comforted injured campers. Additionally, I supervised and played with campers during activities, creating a safe and comfortable environment for all participants.</p> </div>
        </div>
        <br />
        <div className={styles.job}>
          <h3>Girls Inc. of Northern Alberta</h3>
          <div className="flex justify-between">
            <p>Volunteer</p><i>Sep 2021 - Jan 2022</i>
          </div>
          <div className="flex justify-between">
            <p>Program Assistant</p> <i>July 2020 - Aug 2021</i>
          </div>
          <div><p>I assisted in facilitating programs that empower young girls, impacting over 200 participants. I helped prepare program activities and materials, ensuring timely delivery of packed kits and availability of all necessary resources for seamless execution. Additionally, I ensured events were smoothly implemented and ran on schedule. I also tracked analytics by gathering participant data, contributing to the continuous improvement of the programs.</p> </div>
        </div>
        <br />
        <div className={styles.job}>
          <h3>Mayor&apos;s Advisory Council on Youth</h3>
          <div className="flex justify-between">
            <p>General Assembly Member</p> <i>Sep 2020 - June 2021</i>
          </div>
          <div className="flex justify-between">
            <p>Committee Member</p> <i>Sep 2019 - June 2020</i>
          </div>
          <div>
            <p>I planned and executed an event celebrating the diverse arts and cultures in Fort McMurray, attracting over 100 attendees. Additionally, I collaborated with other students in the General Assembly to plan and execute the Top 20 Under 20 event, where I wrote an article highlighting the achievements of one of the recognized students, which was read by over 100 people.</p>
          </div>

        </div>
        
        
      </div>
      
      <div id="projects" className={`${styles.section} ${styles.proj}`}>
        <h1><ReactTyped strings={['Projects']} typeSpeed={50} loop /></h1>

        <div className='flex flex-row flex-wrap justify-center items-center'>
          {projects.map((project, index) => (
          <MyCard key={index} name={project.name} desc={project.desc} link={project.link} linkdesc={project.linkdesc} stack={project.stack} index={index} />
        ))}
        </div>


        {/* <Card className={styles.card}>
          <CardHeader>
            <h3>Sprint Reviews</h3>
          </CardHeader>
          <CardBody>
            <p>Developed a web application that streamlines the process of creating and assigning reviews for instructors, and simplifies the process of submitting and providing peer reviews for students.</p>
            <Button size="sm" href="https://github.com/yatharth711/SprintReviewsTool">View Source Code</Button>
          </CardBody>
          <CardFooter>
            <p>ReactJS | NextJS | NextUI | MySQL</p>
          </CardFooter>
        </Card> */}

        {/* <Card className={styles.card}>
          <CardHeader>
            <h3>Canvas Clone</h3>
          </CardHeader>
          <CardBody>
            <p>Developed an E-learning platform similar to Canvas. It provides the same functionalities to users as Canvas, including assignment creation, submission, grading, and course management.</p>
            <Button size="sm" href="https://github.com/gaurangbharti1/Vocode">View Source Code</Button>
          </CardBody>
          <CardFooter>
            <p>HTML | CSS | Javascript | Flask</p>
          </CardFooter>
        </Card> */}

        {/* <Card className={styles.card}>
          <CardHeader>
            <h3>Discussion Forum</h3>
          </CardHeader>
          <CardBody>
            <p>Developed full-stack discussion forum similar to Reddit. It provides users with the ability to join and create communities, create and like posts, and following and commenting abilities.</p>
            <Button size="sm" href="https://github.com/yatharth711/myDiscussionForum">View Source Code</Button>
          </CardBody>
          <CardFooter>
            <p>HTML | CSS | PHP | LAMP</p>
          </CardFooter>
        </Card> */}

        {/* <Card className={styles.card}>
          <CardHeader>
            <h3>Discussion Forum</h3>
          </CardHeader>
          <CardBody>
            <p>Created UI designs as a course project using Figma and following the UI/UX principles</p>
            <Button size="sm" href="https://linktr.ee/tithi_soni">View Links to Designs</Button>
          </CardBody>
          <CardFooter>
            <p>Figma</p>
          </CardFooter>
        </Card> */}

      </div>
      <div id="skills" className={`${styles.section} ${styles.skills}`}>
        <h1><ReactTyped strings={['Skills']} typeSpeed={50} loop /></h1>
        <div className={styles.job}>
          <div className="flex justify-between">
            <b>Web Development</b>
            <p>HTML, CSS, APIs, PHP, Javascript, Tailwind CSS</p>
          </div>
          <div className="flex justify-between">
            <b>Databases</b>
            <p>MySQL, DBMS</p>
          </div>
          <div className="flex justify-between">
            <b>Programming Languages</b>
            <p>Python, Java, R, Assembly, Processing</p>
          </div>
          <div className="flex justify-between">
            <b>Frameworks</b>
            <p>ReactJS, NextJS, Flask</p>
          </div>
          <div className="flex justify-between">
            <b>Design</b>
            <p>Figma, Sketchbook</p>
          </div>
          <div className="flex justify-between">
            <b>Miscellaneous</b>
            <p>Agile Methodologies, Event Management, SDLC, Project Management, Photo/Video Editing</p>
          </div>
        </div>




      </div>
      <div id="awards" className={`${styles.section} ${styles.awards}`}>
        <h1><ReactTyped strings={['Awards']} typeSpeed={50} loop /></h1>
        <div className={styles.job}>
          <div className="flex justify-between">
            <h3>Go Global International Learning Programs Award</h3>
            <p>University of British Columbia- Okanagan</p>
          </div>
          <div className="flex justify-between">
            <h3>Dean&apos;s Entrance Scholarship</h3>
            <p>Macewan University</p>
          </div>
        </div>

        

      </div>
      <div className={`${styles.section} ${styles.contact}`}>
        <h2><ReactTyped strings={['Contact Information']} typeSpeed={50} loop /></h2>
        <p>Email: tithi2k3@gmail.com</p>
        <Link href="https://github.com/tithisoni">Github</Link>
        <Link href="https://linkedin.com/in/tithi-soni">Linkedin</Link>
        
        </div>
      
    </div>
  );
}
