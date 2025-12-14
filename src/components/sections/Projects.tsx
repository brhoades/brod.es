import * as React from 'react';

import ProjectSubsection from './ProjectSubsection';

export default () => (
  <React.Fragment>
    <ProjectSubsection
      title="suspend-time"
      github="https://github.com/Rippling/suspend-time"
      tags={['Rust', 'cross-platform', 'hardware']}
    >
      <p>
        A cross-platform Rust crate that uses a monotonic clock to not
        count time during system suspension (sleep/hibernate).
        Addresses Windows's native behavior where closing a laptop
        causes incorrect timeouts and pollutes instrumentation.
      </p>
      <p>
        See my former intern's blog: <br />
        <a
          href="https://www.rippling.com/blog/rust-suspend-time"
          title="Rippling blog post about monotonic clocks and why we needed one"
        >
          https://www.rippling.com/blog/rust-suspend-time
        </a>
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title="adaptive_backoff"
      github="https://github.com/brhoades/adaptive-backoff"
      tags={['Rust', 'library', 'backoff']}
    >
      <p>
        Adaptive exponential backoff Rust crate. Dampens adjustments
        over time so delays settle instead of oscillating: each
        consecutive failure/success changes delay by smaller
        amounts. <a
          href="https://crates.io/crates/adaptive_backoff"
        >
        300k+ downloads</a>.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title="httpot"
      github="https://github.com/brhoades/httpot"
      tags={['Rust', 'HTTP', 'Honeypot']}
    >
      <p>
        HTTP honeypot to trap non-compliant crawlers hammering my
        servers.  Infinite fake Apache directories and PHP
        vulnerabilities waste resources while I learn their
        behavior. Built as an excuse to learn HTTP/1.1 from scratch.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title="dlux"
      github="https://github.com/brhoades/dlux"
      tags={['Rust', 'Linux', 'hardware', 'DDC/CI']}
    >
      <p>
        Hardware brightness daemon in Rust that controls monitor
        backlight directly via DDC/CI instead of software color
        tinting like f.lux. Adjusts brightness by time of day, saving
        power without performance overhead.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title="Grader"
      github="https://github.com/redkyn/grader"
      tags={['Docker', 'Python', 'automation']}
    >
      <p>
        Automated grading system for CS assignments using Docker
        containers for safe, isolated code execution. Built for and
        adopted by the CS department, still used after my
        graduation. Configurable grading scripts return structured
        results per student.
      </p>
    </ProjectSubsection>
    <ProjectSubsection
      title={"KoRx"}
      github="https://github.com/brhoades/korx"
      tags={['C', 'Quake', 'Game Development']}
    >
      <p>
        A popular <a href="https://tremulous.net">Tremulous</a> mod
        (ioquake3 engine). I led KoRx, managing a team of 3
        across art, releases, and development while doing C
        development for FPS gameplay on dated hardware. Added new alien
        classes, weapons, and mechanics over 600+ commits. Community
        demanded ports 6 years after we stopped, and inspired multiple
        forks.
      </p>
    </ProjectSubsection>
  </React.Fragment>
);
