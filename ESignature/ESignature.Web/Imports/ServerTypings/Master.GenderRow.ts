
namespace ESignature.Master {
    export interface GenderRow {
        GenderId?: number;
        GenderName?: string;
    }

    export namespace GenderRow {
        export const idProperty = 'GenderId';
        export const nameProperty = 'GenderName';
        export const localTextPrefix = 'Master.Gender';

        export namespace Fields {
            export declare const GenderId;
            export declare const GenderName;
        }

        [
            'GenderId',
            'GenderName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}