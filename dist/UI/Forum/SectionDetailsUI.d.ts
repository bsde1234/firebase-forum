/// <reference types="react" />
import { BaseComponent } from "react-vextensions";
import { Section } from "../../Store/firebase/forum/@Section";
export declare type SectionDetailsUI_Props = {
    baseData: Section;
    forNew: boolean;
    enabled?: boolean;
    style?: any;
    onChange?: (newData: Section) => void;
} & Partial<{
    creator: User;
}>;
export declare class SectionDetailsUI extends BaseComponent<SectionDetailsUI_Props, {
    newData: Section;
}> {
    ComponentWillMountOrReceiveProps(props: any, forMount: any): void;
    render(): JSX.Element;
    GetValidationError(): any;
    GetNewData(): Section;
}
