/// <reference types="react" />
export interface MultiSelectBoxItemProps {
    value: any;
    text: string;
    privateProps?: {
        handleMultiSelectBoxItemClick: (value: any) => void;
        isActive: boolean;
    };
}
declare const MultiSelectBoxItem: ({ value, text, privateProps, }: MultiSelectBoxItemProps) => JSX.Element;
export default MultiSelectBoxItem;
