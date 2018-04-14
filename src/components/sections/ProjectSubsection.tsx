import * as React from 'react';
import GithubIcon from 'react-icons/lib/go/mark-github';
import GlobeIcon from 'react-icons/lib/go/globe';

const styles = require('../../assets/less/sections.less');

interface ProjectSubsectionPropType {
  children: (string | JSX.Element)[] | JSX.Element;
  github?: string;
  status?: string;
  tags?: string[];
  title: string | JSX.Element;
  website?: string;
}

export default (props: ProjectSubsectionPropType) => (
  <div className="subsection">
    <div className="title">
      <div className="title-group">
        <h2>{props.title}</h2>
        {props.github && <a href={props.github} title="GitHub Repository"><GithubIcon /></a>}
        {props.website && <a href={props.website} title="Visit Application"><GlobeIcon /></a>}
      </div>
    </div>
    {props.tags && <div className="subsection-tags">{props.tags.map(e => (<div key={e}>{e}</div>))}</div>}
    <div>
    {props.children}
    </div>
  </div>
);
