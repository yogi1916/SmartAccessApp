
namespace ESignature.CardManagement {
    export interface MasterCardTechnologyRow {
        CardTechId?: number;
        CardTechName?: string;
    }

    export namespace MasterCardTechnologyRow {
        export const idProperty = 'CardTechId';
        export const nameProperty = 'CardTechName';
        export const localTextPrefix = 'CardManagement.MasterCardTechnology';

        export namespace Fields {
            export declare const CardTechId;
            export declare const CardTechName;
        }

        [
            'CardTechId',
            'CardTechName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}