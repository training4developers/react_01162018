import * as React from 'react';

import { ColorViewRow } from './ColorViewRow'; 
import { ColorEditRow } from './ColorEditRow'; 

export const ColorTable = props => <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>HexCode</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {props.colors.map(color => (props.editRowId === color.id)
      ? <ColorEditRow color={color}
          onSaveColor={props.onSaveColor}
          onCancelColor={props.onCancelColor} />
      : <ColorViewRow color={color}
          onEditColor={props.onEditColor}
          onRemoveColor={props.onRemoveColor} />
    )}
  </tbody>
</table>;
