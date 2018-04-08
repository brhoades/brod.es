import * as React from 'react';

import Block from './components/Block';
import Layout from './components/Layout';

import Experience from './components/sections/Experience.tsx';
import Projects from './components/sections/Projects.tsx';
import AboutMe from './components/sections/AboutMe.tsx';

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
  </Layout>
);

export default App;
