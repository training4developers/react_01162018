import * as React from 'react';

import { ColorViewRow } from './ColorViewRow'; 

export class ColorTable extends React.Component {

  render() {

    return <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>HexCode</th>
        </tr>
      </thead>
      <tbody>
        {this.props.colors.map(color => <ColorViewRow color={color} />)}
      </tbody>
    </table>;
  }

}