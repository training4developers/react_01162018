import * as React from 'react';

export class ColorViewRow extends React.Component {

  // removeColor = () => {
  //   this.props.onRemoveColor(this.props.color.id);
  // }

  render() {
    return <tr>
      <td>{this.props.color.name}</td>
      <td>{this.props.color.hexCode}</td>
      <td><button type="button" onClick={() => this.props.onRemoveColor(this.props.color.id)}>Delete</button></td>
    </tr>;
  }

}