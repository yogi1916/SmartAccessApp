
namespace ESignature.Master {
    export interface SalutationRow {
        SalutationId?: number;
        SalutationName?: string;
    }

    export namespace SalutationRow {
        export const idProperty = 'SalutationId';
        export const nameProperty = 'SalutationName';
        export const localTextPrefix = 'Master.Salutation';

        export namespace Fields {
            export declare const SalutationId;
            export declare const SalutationName;
        }

        [
            'SalutationId',
            'SalutationName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}