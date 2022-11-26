import { Sizing } from 'lib';
export declare type WrapperProporionTypes = {
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
};
export declare const wrapperProportions: {
    [size: string]: WrapperProporionTypes;
};
export declare const iconSizes: {
    [size: string]: Sizing;
};
export declare type ShapeTypes = {
    rounded: string;
    border: string;
    ring: string;
    shadow: string;
};
export declare const shape: {
    [style: string]: ShapeTypes;
};
export declare type ColorTypes = {
    textColor: string;
    bgColor: string;
    borderColor: string;
    ringColor: string;
};
export declare const colors: {
    [style: string]: {
        [baseColor: string]: ColorTypes;
    };
};
