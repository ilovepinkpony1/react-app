import React from 'react';
import './result.css';

export default function Results(props) {
  const { value } = props;
  return (
    <p>Results: {value}</p>
  )
}
