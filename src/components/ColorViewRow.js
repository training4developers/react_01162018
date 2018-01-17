import * as React from 'react';
import * as PropTypes from 'prop-types';

export const ColorViewRow = props => {

  const editColor = () => props.onEditColor(props.color.id);

  return <tr>
    <td>{props.color.name}</td>
    <td>{props.color.hexCode}</td>
    <td>
      <button type="button" onClick={() => props.onRemoveColor(props.color.id)}>Delete</button>
      <button type="button" onClick={editColor}>Edit</button>
    </td>
  </tr>;
};

ColorViewRow.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexCode: PropTyoes.string.isRequired,
  }).isRequired,
};