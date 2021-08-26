import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box4';
import Button from './Button4';

ReactDOM.render(
  <div>
    <Button size="big" />
    <Button size="small" />
    <Box size="big" />
    <Box size="small" />
  </div>,
  document.getElementById('root'),
);
