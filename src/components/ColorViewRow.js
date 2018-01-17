import * as React from 'react';

export class ColorViewRow extends React.Component {

  render() {
    return <tr>
      <td>{this.props.color.name}</td>
      <td>{this.props.color.hexCode}</td>
    </tr>;
  }

}