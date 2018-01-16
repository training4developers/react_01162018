import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    // console.log(Object.isFrozen(this.props));
    
    // very bad
    // this.props.colors.push('yellow');

    return <div>
      <header>
        <h1>Color Tool</h1>
        <ul>
          {this.props.colors.map(color => <li>{color}</li>)}
        </ul>
      </header>
    </div>;
  }
}

