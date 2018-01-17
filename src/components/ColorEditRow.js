import * as React from 'react';

export const ColorEditRow = props => {

  let colorNameInput;
  let colorHexCodeInput;

  const saveColor = () => {
    props.onSaveColor({
      id: props.color.id,
      name: colorNameInput.value,
      hexCode: colorHexCodeInput.value,
    });
  };

  return <tr>
    <td><input type="text" 
      defaultValue={props.color.name} ref={input => colorNameInput = input} /></td>
    <td><input type="text"
      defaultValue={props.color.hexCode} ref={input => colorHexCodeInput = input} /></td>
    <td>
      <button type="button" onClick={saveColor}>Save</button>
      <button type="button" onClick={props.onCancelColor}>Cancel</button>
    </td>
  </tr>;

}