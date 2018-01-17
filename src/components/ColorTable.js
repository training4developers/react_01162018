import * as React from 'react';

import { ColorViewRow } from './ColorViewRow'; 

export class ColorTable extends React.Component {

  render() {

    return <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>HexCode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.colors.map(color => <ColorViewRow color={color}
          onRemoveColor={this.props.onRemoveColor} />)}
      </tbody>
    </table>;
  }

}