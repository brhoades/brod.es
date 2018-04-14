import * as React from 'react';

import ProjectSubsection from './ProjectSubsection';

export default () => (
  <React.Fragment>
    <ProjectSubsection
      title="Pasty"
      github="https://github.com/brhoades/pasty-react"
      website="https://p.brod.es/"
      tags={['TypeScript', 'React', 'Cryptography', 'AWS']}
    >
      <p>
        Pasty is an anonymous, small file and code storage system written in TypeScript. All pastes are encrypted in a client-side React app or in a CLI before transmission for storage. Submitter pastes are solely tied to a server-provided identifier and are hosted from a public S3 bucket. The corresponding AES key to each paste never leaves the client, rendering server knowledge of the paste's existence useless. No identifying information about the paste's origin is retained.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title="Grader"
      github="https://github.com/redkyn/grader"
      tags={['Docker', 'Python', 'Automation']}
    >
      <p>
        Grader uses Docker and Python to easily grade many assignments in an encapsulated and safe manner. The overall grading process is configurable; in general, it starts by creating a Docker image for a class or an assignment. The image can be given a payload, a protected grading script, which has a grading hooks. When ran, grader creates an individual Docker container for each student’s assignment and then runs a payload hook in that container. The payload returns a JSON response with stdin, stdout, and additional response information depending on the image ran. 
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title={"Markovirc \"Marko\""}
      github="https://github.com/linuxmercedes/markovirc"
      tags={['Ruby', 'Machine Learning', 'Natural Language Processing', 'Postgres']}
      status="Unmaintained"
    >
      <p>
        Marko is an IRC bot in Ruby that uses Markov Chains to generate text which appears to be human written. It gathers its source text from any channel it sits in, leading to humerous messages or drivel. Markovirc drew deep inspiration from another IRC bot, <a href="https://github.com/allanlw/seeborg">SeeBorg</a>. Core logic from Marko has been separated into a gem <a href="https://github.com/brhoades/markov_speech">here</a>. 
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title={"Selenium Wrapper"}
      github="https://github.com/brhoades/selenium_wrapper"
      tags={['Python', 'Selenium', 'Load Testing', 'Curses']}
      status="Unmaintained"
    >
      <p>
        Selenium Wrapper is a Python wrapper around the <a href="http://www.seleniumhq.org/">Selenium web testing framework</a>. Selenium Wrapper was created as part of my co-op with Monsanto to assist my team in load testing websites where WebLOAD was not properly recording all data. This project wraps many headless PhantomJS instances to run a recorded and converted script to load test a website. The instances of Selenium Wrapper can then be configured to report upstream to Splunk, which then aggregates and reports data. More details <a href="http://brhoades.github.io/selenium_wrapper/">here</a>.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title={"KoRx"}
      github="https://github.com/brhoades/korx"
      tags={['C', 'Quake', 'Game Development']}
      status="Completed"
    >
      <p>
        KoRx was a mod of <a href="http://tremulous.net/">Tremulous</a>, which in turn was a mod of ioquake3. Tremulous was a game in which humans fight against aliens in a FPS-style, but with a RTS twist. With the help of 3 team members, I was the project manager and head programmer for the project. Initially KoRx started as a mod to fix some bugs and things that bothered me, as can be seen <a href="https://code.google.com/p/korx/wiki/Update_1_Differences">here</a> and then it slowly transformed into a recognizable and unique game type. Around 2010, along with the demise of Tremulous, KoRx ceased development.
      </p>
    </ProjectSubsection>
  </React.Fragment>
);
