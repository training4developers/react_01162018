import * as React from 'react';

export class ColorTool extends React.Component {


  render() {
    
    const colors = [ 'blue', 'indigo', 'pink' ];

    // const makes = [ 'Ford', 'Chevy' ]
    // const models = [ 'F-150', 'Silverado' ]

    const cars = [
      { make: 'Ford', model: 'F-150', year: 2013, price: 23000 },
      { make: 'Chevy', model: 'Silverago', year: 2015 },
    ];

    return <div>
      <header>
        <h1>Color Tool</h1>
        <ul>
          {colors.map(color => <li>{color}</li>)}
        </ul>
      </header>
    </div>;
  }
}

