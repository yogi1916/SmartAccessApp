
namespace ESignature.Master {
    export interface MaretialStatusRow {
        MaretialStatusId?: number;
        MaretialStatusName?: string;
    }

    export namespace MaretialStatusRow {
        export const idProperty = 'MaretialStatusId';
        export const nameProperty = 'MaretialStatusName';
        export const localTextPrefix = 'Master.MaretialStatus';

        export namespace Fields {
            export declare const MaretialStatusId;
            export declare const MaretialStatusName;
        }

        [
            'MaretialStatusId',
            'MaretialStatusName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}