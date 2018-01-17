import * as React from 'react';
import { ColorTool } from './components/ColorTool';

const colorList = [ 
  { id: 1, name: 'blue', hexCode: 'fff' },
  { id: 2, name: 'indigo', hexCode: 'fff' },
  { id: 3, name: 'pink', hexCode: 'fff' }
];

export default class App extends React.Component {
  render() {
    // return React.createElement('h1', null, 'Hello World!')React.createElement('span', null, 'test');
    return <div>
      <ColorTool colors={colorList} />
    </div>;
  }
}

