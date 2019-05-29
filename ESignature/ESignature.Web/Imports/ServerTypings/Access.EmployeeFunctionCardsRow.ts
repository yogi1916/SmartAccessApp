
namespace ESignature.Access {
    export interface EmployeeFunctionCardsRow {
        EmployeeFunctionCardId?: number;
        CardType?: number;
        CardNo?: string;
        CsnNo?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        FacilityCode?: string;
        TempFuncId?: number;
        CardTypeCardTypeName?: string;
    }

    export namespace EmployeeFunctionCardsRow {
        export const idProperty = 'EmployeeFunctionCardId';
        export const nameProperty = 'CardNo';
        export const localTextPrefix = 'Access.EmployeeFunctionCards';

        export namespace Fields {
            export declare const EmployeeFunctionCardId;
            export declare const CardType;
            export declare const CardNo;
            export declare const CsnNo;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const FacilityCode;
            export declare const TempFuncId;
            export declare const CardTypeCardTypeName;
        }

        [
            'EmployeeFunctionCardId',
            'CardType',
            'CardNo',
            'CsnNo',
            'CreatedDateTime',
            'MarkDeleted',
            'FacilityCode',
            'TempFuncId',
            'CardTypeCardTypeName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}