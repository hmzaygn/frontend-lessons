import { Sizing } from 'lib';
export declare type ButtonProportionTypes = {
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    fontSize: string;
};
export declare const buttonProportions: {
    [char: string]: ButtonProportionTypes;
};
export declare const iconSizes: {
    [size: string]: Sizing;
};
export declare type ColorTypes = {
    textColor: string;
    bgColor: string;
    hoverBgColor: string;
    borderColor: string;
    hoverBorderColor: string;
    focusRingColor: string;
};
export declare const colors: {
    [baseColor: string]: {
        [importance: string]: ColorTypes;
    };
};
