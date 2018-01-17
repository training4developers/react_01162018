import * as React from 'react';

import { ColorViewRow } from './ColorViewRow'; 
import { ColorEditRow } from './ColorEditRow'; 

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
        {this.props.colors.map(color => (this.props.editRowId === color.id)
          ? <ColorEditRow color={color}
              onSaveColor={this.props.onSaveColor}
              onCancelColor={this.props.onCancelColor} />
          : <ColorViewRow color={color}
              onEditColor={this.props.onEditColor}
              onRemoveColor={this.props.onRemoveColor} />
        )}
      </tbody>
    </table>;
  }

}