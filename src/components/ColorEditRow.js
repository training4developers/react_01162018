import * as React from 'react';

export class ColorEditRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: props.color.name,
      hexCode: props.color.hexCode,
    };
  }

  onChange = e => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  };

  saveColor = () => {
    // this.props.onSaveColor({
    //   id: this.props.color.id,
    //   name: this.state.name,
    //   hexCode: this.state.hexCode,
    // });

    this.props.onSaveColor({
      id: this.props.color.id,
      ...this.state,
    });
  }

  render() {

    return <tr>
      <td><input type="text" name="name" value={this.state.name} onChange={this.onChange} /></td>
      <td><input type="text" name="hexCode" value={this.state.hexCode} onChange={this.onChange} /></td>
      <td>
        <button type="button" onClick={this.saveColor}>Save</button>
        <button type="button" onClick={this.props.onCancelColor}>Cancel</button>
      </td>
    </tr>;


  }


}