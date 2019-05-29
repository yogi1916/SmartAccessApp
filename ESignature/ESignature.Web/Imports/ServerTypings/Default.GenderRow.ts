
namespace ESignature.Default {
    export interface GenderRow {
        Id?: number;
        Gender?: string;
    }

    export namespace GenderRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Gender';
        export const localTextPrefix = 'Default.Gender';

        export namespace Fields {
            export declare const Id;
            export declare const Gender;
        }

        [
            'Id',
            'Gender'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}