import React from 'react';
export interface AccordionHeaderProps {
    privateProps?: {
        isExpanded: boolean;
        setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    };
    children: React.ReactNode;
}
declare const AccordionHeader: ({ privateProps, children }: AccordionHeaderProps) => JSX.Element;
export default AccordionHeader;
