import * as React from 'react';

import Block from './components/Block';
import Layout from './components/Layout';

import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import AboutMe from './components/sections/AboutMe';
import Education from './components/sections/Education';

const styles = require('./assets/less/typography.less');

const App = () => (
  <Layout>
    <Block header="About Me">
      <AboutMe />
    </Block>
    <Block header="Projects">
      <Projects />
    </Block>
    <Block header="Experience">
      <Experience />
    </Block>
    <Block header="Education">
      <Education />
    </Block>
  </Layout>
);

export default App;
