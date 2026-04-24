import * as React from 'react';

import ExperienceSubsection from './ExperienceSubsection';

export default () => (
  <React.Fragment>
    <ExperienceSubsection
      title="Software Consultant"
      company="Stealth startup"
      range="January 2026 - March 2026"
    >
      <p>
        I developed a multi-platform market feed ingest system in
        Rust. Using microservices on EKS, it achieved high
        availability through layered redundancy and sharded ticker
        distribution.
      </p>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Staff Software Engineer"
      company="Rippling - IT - Devices"
      range="October 2023 - Jan 2026"
    >
      <p>
        I guided technical direction for an org of thirty something and a 100k+ device fleet.
        Our patchwork Device Management product was temperamental, written by engineers six years prior for
        an order of magnitude fewer devices. I kept the platform afloat while tech leading the client
        software team.
      </p>
      <ul>
        <li>
          Tech led the client software team, managing 10 programs across MacOS and Windows, principally a Rust agent
          {/* CLI Installer Windows, CLI Installer MacOS, Rust agent (pangolin/tg/supervisor), Rescuer Mac, Rescuer Win, electron installer, desktop app (user-facing), tray icon, PSSO extension, pGina fork  */}
        </li>
        <li>
          Solved multi-month incident pattern others gave up on: blocking API calls at 2k req/s. Saved $10k+/mo in EC2
        </li>
        <li>
          Drove reorg from vertical product teams to horizontal platform ones, reducing ticket ping-pong and enabling ownership
        </li>
        <li>
          Eliminated service shutdown race by abusing <a href="https://doc.rust-lang.org/std/thread/struct.LocalKey.html#platform-specific-behavior">Windows TLS destructors</a> and Rust borrow mechanics across threads
        </li>
        <li>
          Brought fleetwide agent uptime from 90% to 99% on MacOS and under 50% to 96% on Windows
        </li>
        <li>
          Shipped new orchestrator for our agent to replace fundamentally broken sqlite-based system
        </li>
        <li>
          Cut weekly client incidents to bimonthly through systematic process: phased rollouts, CI smoke tests, metrics gates
        </li>
      </ul>
    </ExperienceSubsection>

    <ExperienceSubsection
      title="Senior Software Engineer - Tech Lead"
      company="ngrok"
      range={
        <>
          May 2023 - August 2023
          <br />
          October 2019 - April 2022
        </>
      }
    >
      <p>
        Employee #9 at a company with no EMs, no PMs, no sales team,
        just 8 engineers who happened to work at the same company
        coasting on accidental PMF. I interviewed our first
        wave of leadership: CTO, director of
        engineering, and all engineering managers.
        Led <a
              href="https://ngrok.com/our-product/cloud-edge"
            > the Cloud Edge platform</a> that enabled
        our <a
              href="https://ngrok.com/next-generation"
            > first product launch</a> and <a href="https://ngrok.com/blog/ngrok-raises-50m-for-ingress-as-a-service">
        first major raise</a>. Helped transform some lone wolves into 4
        teams that <em>mostly</em> got along, while building
        foundational platform features.
      </p>
      <ul>
        <li>
          Transformed ngrok tunnels from immutable to dynamically controlled via continuous endpoint config re-resolution
        </li>
        <li>
          Built <a href="https://github.com/brhoades/redis-loadmodbytes">ill-advised Redis module</a> during hackathon to rewrite business critical Lua into Rust; ran in prod for over 3 years
        </li>
        <li>
          Brought ngrok tunnels from only basic auth to federated identity: OAuth (4 providers), later SAML/OIDC
        </li>
        <li>
          Created custom Redis Sentinel K8s integration to make Redis deployable after successfully ignoring the problem for years
        </li>
        <li>
          Hackathon: production K8s per PR in CI requiring e2e test pass, replacing our 'find out in prod' merge strategy
        </li>
        <li>
          Tcpdumped WAL replication to debug wal2json hiding TOASTed values in custom event bus, mentoring new on-calls through it
        </li>
        <li>
          Debugged intermittent query planner failures on billion-row table causing day-long queries; fixed via vacuum and RDS tuning
        </li>
        <li>
          Solo migrated largest customer's (double-digit % revenue) 2 year-old distribution through massive platform changes
        </li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Engineering Manager - Team Network Edge"
      company="ngrok"
      range="April 2022 - May 2023"
    >
      <p>
        Stepped into management after we failed to retain EMs for a
        couple of years. Built foundational processes: SDLC, on-call
        rotations, postmortems, onboarding. I also managed the same
        team I founded, delivering our first product
        launch. Established the EM role so others could succeed in it.
      </p>
      <ul>
        <li>
          Managed on-prem client relationship through contract resign (double-digit % revenue), delivered on technical requirements while holding them accountable
        </li>
        <li>
          Led process creation: SDLC, next generation per-team oncall, postmortems, and engineering onboarding process
        </li>
        <li>
          Managed team shipping years-long <a href="https://ngrok.com/blog/gslb-global-server-load-balancing">GSLB project</a> eliminating regional boundaries; enabled automatic global failover
        </li>
        <li>
          Cut pgreplica deploy times from 5 hours to 1.5 hours. pgreplica is ngrok's critical event bus
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
          Managed a team of 7 exclusively new engineers in fixing defects and enhancing Patient Portal
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
          Prototyped and pitched a Python 2.7 to 3.4, Django 1.7 to 2.0 conversion of 5+ year old Django monolith
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
      company="Missouri S&T – CS5201 / CS328 (C++ for Ninjas)"
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
      company="Missouri S&T – CS1570 / CS53 (Intro to C++)"
      range="August 2015 – December 2015"
    >
      <ul>
        <li>Assisted students with completing programming assignments</li>
      </ul>
    </ExperienceSubsection>
    <ExperienceSubsection
      title="Grader"
      company="Missouri S&T – CS1570 / CS53 (Intro to C++)"
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
      company="Bayer - IT - Global Infrastructure"
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
          Created a dashing-based dashboard to monitor Salesforce and AWS status
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
