import * as React from 'react';
import { ColorTool } from './components/ColorTool';

const colorList = [ 'blue', 'indigo', 'pink' ];

export default class App extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Hello World!')React.createElement('span', null, 'test');
    return <div>
      <ColorTool colors={colorList} />
    </div>;
  }
}

