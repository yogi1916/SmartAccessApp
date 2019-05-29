
namespace ESignature.CardManagement {
    export interface CardPoolRow {
        CardPoolId?: number;
        CardNo?: string;
        CardTechId?: number;
        CardCsnNo?: string;
        CardUseType?: number;
        CardType?: number;
        CardStatus?: number;
        CardUsageStatus?: number;
        CurrentlyAssignedTo?: string;
        CardExpiryDate?: string;
        CardAuthType?: string;
        NoOfDaysAllowedFromToday?: number;
        Remark?: string;
        Description?: string;
        LastModified?: string;
        CreatedDateTime?: string;
        AddedBy?: number;
        CompanyLocationId?: number;
        CardTechCardTechName?: string;
        CardUseTypeCardUseTypeName?: string;
        CardTypeCardTypeName?: string;
        CardStatus1?: string;
        CardUsageStatusActivity?: string;
        CompanyLocationCompanyMasterId?: number;
        CompanyLocationLocationMasterId?: number;
        CompanyLocationCreatedDateTime?: string;
        CompanyLocationMarkDeleted?: boolean;
    }

    export namespace CardPoolRow {
        export const idProperty = 'CardPoolId';
        export const nameProperty = 'CardNo';
        export const localTextPrefix = 'CardManagement.CardPool';

        export namespace Fields {
            export declare const CardPoolId;
            export declare const CardNo;
            export declare const CardTechId;
            export declare const CardCsnNo;
            export declare const CardUseType;
            export declare const CardType;
            export declare const CardStatus;
            export declare const CardUsageStatus;
            export declare const CurrentlyAssignedTo;
            export declare const CardExpiryDate;
            export declare const CardAuthType;
            export declare const NoOfDaysAllowedFromToday;
            export declare const Remark;
            export declare const Description;
            export declare const LastModified;
            export declare const CreatedDateTime;
            export declare const AddedBy;
            export declare const CompanyLocationId;
            export declare const CardTechCardTechName;
            export declare const CardUseTypeCardUseTypeName;
            export declare const CardTypeCardTypeName;
            export declare const CardStatus1;
            export declare const CardUsageStatusActivity;
            export declare const CompanyLocationCompanyMasterId;
            export declare const CompanyLocationLocationMasterId;
            export declare const CompanyLocationCreatedDateTime;
            export declare const CompanyLocationMarkDeleted;
        }

        [
            'CardPoolId',
            'CardNo',
            'CardTechId',
            'CardCsnNo',
            'CardUseType',
            'CardType',
            'CardStatus',
            'CardUsageStatus',
            'CurrentlyAssignedTo',
            'CardExpiryDate',
            'CardAuthType',
            'NoOfDaysAllowedFromToday',
            'Remark',
            'Description',
            'LastModified',
            'CreatedDateTime',
            'AddedBy',
            'CompanyLocationId',
            'CardTechCardTechName',
            'CardUseTypeCardUseTypeName',
            'CardTypeCardTypeName',
            'CardStatus1',
            'CardUsageStatusActivity',
            'CompanyLocationCompanyMasterId',
            'CompanyLocationLocationMasterId',
            'CompanyLocationCreatedDateTime',
            'CompanyLocationMarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}