import * as React from 'react';

const styles = require('../assets/less/layout.less');

export default class Header extends React.Component<{}> {
  private header: HTMLDivElement;
  private originalHeight: number;
  private lastHeight: number;

  public componentDidMount() {
    /*
    this.originalHeight = this.header.clientHeight;
    this.lastHeight = this.originalHeight;

    document.addEventListener('scroll', () => {
      let newHeight = (this.originalHeight - window.pageYOffset * 1.5);
      if (newHeight < 100) {
        newHeight = 100;
      }

      this.header.style.setProperty('height', `${newHeight}px`);
    });
    */
  }

  public render() {
    return (
      <React.Fragment>
        <div className="header-viewport" />
        <div className="header" ref={(ref) => { this.header = ref; }}>
          <h3>Billy Rhoades</h3>
        </div>
      </React.Fragment>
    );
  }
}
