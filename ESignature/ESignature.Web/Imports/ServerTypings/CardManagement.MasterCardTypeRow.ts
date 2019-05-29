
namespace ESignature.CardManagement {
    export interface MasterCardTypeRow {
        CardTypeId?: number;
        CardTypeName?: string;
    }

    export namespace MasterCardTypeRow {
        export const idProperty = 'CardTypeId';
        export const nameProperty = 'CardTypeName';
        export const localTextPrefix = 'CardManagement.MasterCardType';

        export namespace Fields {
            export declare const CardTypeId;
            export declare const CardTypeName;
        }

        [
            'CardTypeId',
            'CardTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}