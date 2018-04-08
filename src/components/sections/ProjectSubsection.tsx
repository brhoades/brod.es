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
  <div className="job-subsection">
    <div className="job-subsection-title">
      <h4>{props.title}</h4>
      {props.github && <a href={props.github} title="GitHub Repository"><GithubIcon /></a>}
      {props.website && <a href={props.website} title="Visit Application"><GlobeIcon /></a>}
      {props.status && <div className="status">{props.status}</div>}
      {props.tags && <div className="subsection-tags">{props.tags.map(e => (<div key={e}>{e}</div>))}</div>}
    </div>
    <div className="job-subsection-body">{props.children}</div>
  </div>
);
