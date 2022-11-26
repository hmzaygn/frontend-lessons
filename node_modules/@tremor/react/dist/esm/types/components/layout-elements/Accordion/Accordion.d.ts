import React from 'react';
import { MarginTop } from '../../../lib';
export interface AccordionProps {
    shadow?: boolean;
    expanded?: boolean;
    marginTop?: MarginTop;
    children: React.ReactElement[] | React.ReactElement;
    privateProps?: {
        shapeClassNames: string;
    };
}
declare const Accordion: ({ shadow, expanded, marginTop, children, privateProps, }: AccordionProps) => JSX.Element;
export default Accordion;
