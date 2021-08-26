import React from 'react';
import Style from './Button.module.css';
import cn from 'classnames';

export default  function Button({ size }) {
  if (size === 'big') {
    return <button className={cn(Style.button, Style.big)}>큰 버튼</button>;
  } else {
    return <button className={cn(Style.button, Style.small)}>작은 버튼</button>;
  }
};