import * as React from 'react';

import Header from './Header';
import Body from './Body';

export default (props) => (
  <React.Fragment>
    <Header />
    <Body>
      {props.children}
    </Body>
  </React.Fragment>
);
