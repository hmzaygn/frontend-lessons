import React from 'react';
import { Color, MarginTop } from '../../../lib';
export interface ToggleProps {
    defaultValue?: any;
    color?: Color;
    handleSelect?: {
        (value: any): void;
    };
    children: React.ReactElement[] | React.ReactElement;
    marginTop?: MarginTop;
}
declare const Toggle: ({ defaultValue, color, handleSelect, marginTop, children, }: ToggleProps) => JSX.Element;
export default Toggle;
