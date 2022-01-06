import * as React from 'react';

import ExperienceSubsection from './ExperienceSubsection';

export default () => (
  <React.Fragment>
    <ExperienceSubsection
      title="Senior Software Engineer - Team/Tech Lead"
      company="ngrok"
      range="October 2020 - Present"
    >
    <p>I'm currently leading the development of ngrok's next generation platform.</p>
    Past projects:
      <ul>
        <li>
          Rewrote and redesigned delicate atomic logic in Redis from Lua to Rust.
        </li>
        <li>
          Designed and implemented custom module loading system for loading and interfacing with a Redis Rust module from Go deployments.
        </li>
        <li>
          Prototyped, implemented, and migrated a mission critical, fragile, on-cluster Redis deployment to a custom Redis Sentinel system which fits within Kubernetes' API and can be deployed without downtime.
        </li>
        <li>
          Upgraded a year+ old on-premises distribution for a high value client, working closely with them throughout.
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Software Engineer"
      company="ngrok"
      range="October 2019 - October 2020"
    >
      <ul>
        <li>
          Architected and developed SSO OAuth integration for endpoint authentication that supported user-specified authentication parameters.
        </li>
        <li>
          Designed and implemented sweeping changes to existing static tunneling system to perform continuous updates in response to user configuration changes.
        </li>
        <li>
          Interviewed nearly all 30+ incoming engineering candidates and designed most interview problems ran.
        </li>
        <li>
          Developed webhook validation endpoint configurations.
        </li>
        <li>
          Greatly improved CI coverage by running integration tests against a per-job Kubernetes cluster with production-like ngrok deployment.
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Team Lead | Senior Software Engineer"
      company="Cerner Corporation - HealtheIntent - Consumer"
      range="September 2018 - October 2019"
    >
      <ul>
        <li>
          Managed and onboarded a team of 7 excusively new engineers in fixing defects and enhancing Patient Portal
        </li>
        <li>
          Triaged, prioritized, and handled client escalations for a product with 1,000+ clients while filtering and investigating incoming defects
        </li>
        <li>
          Designed, proposed, and led implementation of a mechanism to passively enforce uniqueness on a large, high volume Oracle DB table totaling over 2 billion rows
        </li>
        <li>
          Streamlined release processes: combined 7 redundant workplans signed more than twice a month by multiple people into 2 workplans; reduced time spent creating artifacts every release from 2 hours to 15 minutes
        </li>
        <li>
          Prototyped, estimated, and proposed a Python 2.7 to 3.4, Django 1.7 to 2.0 conversion of 5+ year old Django monolith
        </li>
        <li>
          Prototyped and proposed a Dockerized Patient Portal
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
          Developed and maintained Patient Portal, a Django web portal for patient self-service
        </li>
        <li>
          Designed and developed pageletized (iframe-embeddable) versions of existing pages in Patient Portal
        </li>
        <li>
          Created and executed Gatling tests for Consumer Portal, a client-configurable and extensible website framework
        </li>
        <li>
          Converted Clipboards from Django templates to React; Clipboards is a set of configurable online forms that can be filled out prior to visiting a doctor's office
        </li>
        <li>
          Deployed a containerized Patient Portal to EC2 using Spinnaker, Packer, and Chef
        </li>
        <li>
          Led team in using redux-form across multiple products to reduce time spent handling common form functionality
        </li>
        <li>
          Managed an intern that built a commonly used utility and returned full time
        </li>
        <li>
          Wrote documentation for Django unit testing best practices that cover performance, reusability, and antipatterns
        </li>
        <li>
          Mentored 12 people in DevAcademy, Cerner's multi-month Software Engineer onboarding program where mentors act as both mentors and quasimanagers
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
          Held regular office hours to answer student questions
        </li>
        <li>
          Lectured on CRTP / static polymorphism, virtual memory management, and C++11/C++14 features
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
        Developed a proprietary program in C for testing Corvette instrument panels. The program manually handled a display with features such as menu navigation, test feedback, and clean state transition. This program ran on a PIC16F1789 with 28 KB of memory, 2 KB of RAM, a 160×128 display, and 4 buttons.
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
