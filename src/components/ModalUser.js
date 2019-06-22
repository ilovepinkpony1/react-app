import React from 'react';
import './modal.css';

export default function ModalUser(props) {
  const { 
    name,
    surName, 
    age, 
    isActive, 
    quitModal 
  } = props;
  return (
    <div className='modal-wrapper'>
      <p>Name: {name}</p>
      <p>SurrName: {surName}</p>
      <p>Age: {age}</p>
      <p>Online: {isActive ? 'yes' : 'no'}</p>
      <span onClick={() => quitModal()}>☓</span>
    </div>
  );
}
