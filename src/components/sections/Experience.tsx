import * as React from 'react';

import ExperienceSubsection from './ExperienceSubsection';

export default () => (
  <React.Fragment>
    <ExperienceSubsection
      title="Team Lead | Associate Senior Software Engineer"
      company="Cerner Corporation - HealtheIntent - Consumer"
      range="September 2018 - Present"
    >
      <ul>
        <li>
          Managed and onboarded a team of 5 engineers
        </li>
        <li>
          Led team to fix incoming defects in Patient Portal to improve client satisfaction
        </li>
        <li>
          Triaged and handled client escalations
        <li>
        </li>
        <li>
          Filtered and investigated incoming defects for Patient Portal
        </li>
        <li>
          Designed, drafted, and proposed workarounds for large client requests
        </li>
          Streamlined release processes: pushed for removal of redundant forms and optimized time spent creating artifacts
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Associate Senior Software Engineer"
      company="Cerner Corporation - HealtheIntent - Consumer"
      range="June 2016 - September 2018"
    >
      <ul>
        <li>
          Developed and maintained HealtheLife (<a href="http://www.cerner.com/page.aspx?pageid=2147485133">Patient Portal</a>), a Django web portal for patient self-service
        </li>
        <li>
          Designed and developed pageletized versions of existing pages in Patient Portal
        </li>
        <li>
          Created and executed Gatling tests for DEx, Cerner's client-configurable and extensible healthecare framework
        </li>
        <li>
          Converted Clipboards, a set of configurable online forms that can be filled out prior to visiting a doctor's office, from Django forms to React
        </li>
        <li>
          Deployed and containerized Patient Portal to EC2 using Spinnaker and Chef
        </li>
        <li>
          Developed a React profile page with redux-form that allows users (patients and family) to update their information in one spot
        </li>
        <li>
          Mentored 12 people in DevAcademy, Cerner's multi-month Software Engineer onboarding program where mentors act as both mentors and quasimanagers
        </li>
        <li>
          Wrote documentation for Django unit testing best practices that cover performance, reusability, and antipatterns
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Grader"
      company="Missouri S&T – CS5201 / CS328"
      range="January 2016 – May 2016"
    >
      <ul>
        <li>
          Graded homework assignments for Object Oriented Numerical Modeling
        </li>
        <li>
          Served as sole point of contact for all programming questions
        </li>
        <li>
          Held office hours to answer questions
        </li>
        <li>
          Lectured on a few topics, including CRTP / static polymorphism, virtual memory management, and C++11/C++14 features
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Lab Assistant"
      company="Missouri S&T – CS1570 / CS53"
      range="August 2015 – December 2015"
    >
      <ul>
        <li>Assisted students with completing programming assignments</li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Grader"
      company="Missouri S&T – CS1570 / CS53"
      range="August 2015 – December 2015"
    >
      <ul>
        <li>Graded programming assignments for the Intro to C++ course</li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Software Development Consultant"
      company="batee.com"
      range="May 2015 - July 2015"
    >
      <p className="experience-blockquote">
        Developed a closed-source program in C for testing Corvette instrument panels. The program manually handled a display with features such as menu navigation, test feedback, and clean state transition. This program ran on a PIC16F1789 with 28 KB of memory, 2 KB of RAM, a 160×128 display, and 4 buttons.
      </p>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Student Lead"
      company="Missouri S&T - IT - Desktop Infrastructure"
      range="December 2014 - November 2015"
    >
      <ul>
        <li>
          Delegated and assigned work to students
        </li>
        <li>
          Trained incoming and senior students
        </li>
        <li>
          Set up and interviewed new student candidates
        </li>
        <li>
          Served as a point of contact for DI
        </li>
        <li>
          Created new policy which puts all new packages and code on Git
        </li>
        <li>
          Managed campus SCCM site as a primary administrator
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Service Performance and Reliability Co-op"
      company="Monsanto - IT - Global Infrastructure"
      range="June 2014 - December 2014"
    >
      <ul>
        <li>
          Developed <a href="https://github.com/brhoades/selenium_wrapper">Selenium Wrapper</a> for performance testing internal sites
        </li>
        <li>
          Collaborated with a hackathon team to make a web-based idea board
        </li>
        <li>
          Created a dashing-based dashboard to monitor SalesForce and AWS cloud status
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Desktop Engineer"
      company="Missouri S&T - IT - Desktop Infrastructure"
      range="May 2013 - June 2014"
    >
      <ul>
        <li>
          Packaged and maintained Perl applications 
        </li>
        <li>
          Used Microsoft SCCM for software and OS deployments to over 4,000 machines
        </li>
        <li>
          Created custom Windows 7 builds for campus hardware
        </li>
        <li>
          Maintained license servers for academic applications
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Student Lead / Mentor"
      company="Missouri S&T - IT - Campus Tech Support"
      range="Feburary 2013 - May 2013"
    >
      <ul>
        <li>
          Coordinated and conducted meetings for more than 20 CTS students
        </li>
        <li>
          Made and maintained procedural reference material
        </li>
        <li>
          Trained, supervised, and coordinated time off for service desk student workers
        </li>
        <li>
          Kept and recorded CTS student schedules across all teams
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Student Support Analyst"
      company="Missouri S&T - IT - Help Desk"
      range="Feburary 2011 - May 2013"
    >
      <ul>
        <li>
          Responsible for coordinating and scheduling appointments with customers
        </li>
        <li>
          Called on to assist professors as a first contact
        </li>
        <li>
          Tasked with assisting staff and faculty remotely and in person
        </li>
      </ul>
    </ExperienceSubsection>
  </React.Fragment>
);
