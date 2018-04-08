import * as React from 'react';

const styles = require('../assets/less/layout.less');

export default (props) => (
  <div className="block-parent">
    {props.children}
  </div>
);
