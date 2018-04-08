import * as React from 'react';

const styles = require('../assets/less/block.less');

interface BlockProps {
  children: ((string | JSX.Element)[] | string | JSX.Element);
  header?: JSX.Element|string;
}

const Block = (props: BlockProps) => {
  const header = props.header && (
    <div className="block-header">{props.header}</div>
  );

  return (
    <div className="block">
      <div className="block-wrapper">
        {header}
        {props.children}
      </div>
    </div>
  );
};

export default Block;
