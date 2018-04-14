import * as React from 'react';

interface ExperienceSubsectionPropType {
  children: (string | JSX.Element)[] | JSX.Element;
  company: string | JSX.Element;
  range: string | JSX.Element;
  title: string | JSX.Element;
}

export default (props: ExperienceSubsectionPropType) => (
  <div className="subsection">
    <div className="title">
      <div className="title-group">
        <h2>{props.title}</h2>
      </div>
    </div>
    <div className="details">
      <div>{props.company}</div>
      <div>{props.range}</div>
    </div>
    <div>{props.children}</div>
  </div>
);
