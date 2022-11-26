import React from 'react';
import { Color, MarginTop } from '../../../lib';
export interface TabListProps {
    defaultValue?: any;
    color?: Color;
    handleSelect?: {
        (value: any): void;
    };
    marginTop?: MarginTop;
    children: React.ReactElement[] | React.ReactElement;
}
declare const TabList: ({ defaultValue, color, handleSelect, marginTop, children, }: TabListProps) => JSX.Element;
export default TabList;
