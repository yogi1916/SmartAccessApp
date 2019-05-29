
namespace ESignature.Default {
    export interface SalutationRow {
        Id?: number;
        SalutationName?: string;
    }

    export namespace SalutationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SalutationName';
        export const localTextPrefix = 'Default.Salutation';

        export namespace Fields {
            export declare const Id;
            export declare const SalutationName;
        }

        [
            'Id',
            'SalutationName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}