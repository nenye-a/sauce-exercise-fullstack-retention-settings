import React from 'react';

export default function Checkbox(props) {
  let { name } = props;
  return (
    <input name={name} type="checkbox" checked={false} onChange={() => {}} />
  );
}
