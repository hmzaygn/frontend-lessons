import React from 'react';
import { Color, MarginTop } from '../../../lib';
export interface TitleProps {
    color?: Color;
    truncate?: boolean;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Title: ({ color, truncate, marginTop, children }: TitleProps) => JSX.Element;
export default Title;
