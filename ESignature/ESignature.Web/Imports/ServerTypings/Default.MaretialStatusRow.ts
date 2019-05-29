
namespace ESignature.Default {
    export interface MaretialStatusRow {
        Id?: number;
        MaretialStatus?: string;
    }

    export namespace MaretialStatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'MaretialStatus';
        export const localTextPrefix = 'Default.MaretialStatus';

        export namespace Fields {
            export declare const Id;
            export declare const MaretialStatus;
        }

        [
            'Id',
            'MaretialStatus'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}