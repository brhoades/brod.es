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
      <h4>{props.title}</h4>
      <div className="details">
        <div>{props.company}</div>
        <div>{props.range}</div>
      </div>
    </div>
    <div>{props.children}</div>
  </div>
);
