
namespace ESignature.CardManagement {
    export interface MasterCardUseTypeRow {
        CardUseTypeId?: number;
        CardUseTypeName?: string;
    }

    export namespace MasterCardUseTypeRow {
        export const idProperty = 'CardUseTypeId';
        export const nameProperty = 'CardUseTypeName';
        export const localTextPrefix = 'CardManagement.MasterCardUseType';

        export namespace Fields {
            export declare const CardUseTypeId;
            export declare const CardUseTypeName;
        }

        [
            'CardUseTypeId',
            'CardUseTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}