import React from 'react';
import useWindowWidth from './2-2-useWindowWidth'

export default function WidthPrinter() {
    const width = useWindowWidth();
    return <div>{ `width is ${width}` }</div>;
}