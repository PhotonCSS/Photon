import { PhotonSelector } from "../../index";
export interface DialogOptions {
    id: string;
}
export declare class Dialog {
    target: JQuery;
    options: DialogOptions;
    constructor(dialog: PhotonSelector | React.DOMElement<any, Element>, options?: DialogOptions);
    close(): this;
    open(): this;
    get isOpen(): boolean;
}
export default function (target: PhotonSelector | React.DOMElement<any, Element>, options?: DialogOptions): Dialog;
