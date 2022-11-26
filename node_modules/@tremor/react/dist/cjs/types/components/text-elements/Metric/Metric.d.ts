import React from 'react';
import { Color, MarginTop } from '../../../lib';
export interface MetricProps {
    color?: Color;
    truncate?: boolean;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Metric: ({ color, truncate, marginTop, children, }: MetricProps) => JSX.Element;
export default Metric;
