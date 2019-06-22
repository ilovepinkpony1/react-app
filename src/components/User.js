import React from 'react';
import './user.css';

export default function User(props) {
  const { name, surName, age, isActive, showModal } = props;

  return (
    <tr className="user-row"
      onClick={() => showModal({
        name,
        surName,
        age,
        isActive
      })}>
      <td className="user-cell">{name}</td>
      <td className="user-cell">{surName}</td>
      <td className="user-cell">{age}</td>
      <td className="user-cell">{isActive ? 'yes' : 'no'}</td>
    </tr>
  )
}
