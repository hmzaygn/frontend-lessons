import React from 'react';
import { Color, MarginTop } from '../../../lib';
export interface SubtitleProps {
    color?: Color;
    truncate?: boolean;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Subtitle: ({ color, truncate, marginTop, children }: SubtitleProps) => JSX.Element;
export default Subtitle;
