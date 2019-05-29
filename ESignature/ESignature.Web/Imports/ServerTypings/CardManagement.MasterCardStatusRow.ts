
namespace ESignature.CardManagement {
    export interface MasterCardStatusRow {
        CardStatusId?: number;
        CardStatus?: string;
    }

    export namespace MasterCardStatusRow {
        export const idProperty = 'CardStatusId';
        export const nameProperty = 'CardStatus';
        export const localTextPrefix = 'CardManagement.MasterCardStatus';

        export namespace Fields {
            export declare const CardStatusId;
            export declare const CardStatus;
        }

        [
            'CardStatusId',
            'CardStatus'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}