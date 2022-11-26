import React from 'react';
import { MarginTop, MaxWidth } from '../../../lib/inputTypes';
export interface SelectBoxProps {
    defaultValue?: any;
    handleSelect?: {
        (value: any): void;
    };
    placeholder?: string;
    marginTop?: MarginTop;
    maxWidth?: MaxWidth;
    children: React.ReactElement[] | React.ReactElement;
}
declare const SelectBox: ({ defaultValue, handleSelect, placeholder, marginTop, maxWidth, children, }: SelectBoxProps) => JSX.Element;
export default SelectBox;
