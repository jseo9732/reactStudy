import React from 'react';
import Style from './Box.module.css';
import cn from 'classnames';

export default  function Box({ size }) {
  if (size === 'big') {
    return <div className={cn(Style.box, Style.big)}>큰 박스</div>;
  } else {
    return <div className={cn(Style.box, Style.small)}>작은 박스</div>;
  }
};