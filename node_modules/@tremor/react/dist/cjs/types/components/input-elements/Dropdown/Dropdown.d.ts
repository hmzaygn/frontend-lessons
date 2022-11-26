import React from 'react';
import { MarginTop, MaxWidth } from '../../../lib/inputTypes';
export interface DropdownProps {
    placeholder?: string;
    defaultValue?: any;
    handleSelect?: {
        (value: any): void;
    };
    marginTop?: MarginTop;
    maxWidth?: MaxWidth;
    children: React.ReactElement[] | React.ReactElement;
}
declare const Dropwdown: ({ placeholder, defaultValue, handleSelect, marginTop, maxWidth, children, }: DropdownProps) => JSX.Element;
export default Dropwdown;
