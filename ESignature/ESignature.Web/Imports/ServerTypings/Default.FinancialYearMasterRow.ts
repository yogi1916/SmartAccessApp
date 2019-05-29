
namespace ESignature.Default {
    export interface FinancialYearMasterRow {
        FinancialYearMasterId?: number;
        StartDate?: string;
        EndDate?: number;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
        CompanyGroupId?: number;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
    }

    export namespace FinancialYearMasterRow {
        export const idProperty = 'FinancialYearMasterId';
        export const localTextPrefix = 'Default.FinancialYearMaster';

        export namespace Fields {
            export declare const FinancialYearMasterId;
            export declare const StartDate;
            export declare const EndDate;
            export declare const CreatedDeteTime;
            export declare const MarkDeleted;
            export declare const CompanyGroupId;
            export declare const CompanyGroupGroupName;
            export declare const CompanyGroupCreatedDeteTime;
            export declare const CompanyGroupMarkDeleted;
        }

        [
            'FinancialYearMasterId',
            'StartDate',
            'EndDate',
            'CreatedDeteTime',
            'MarkDeleted',
            'CompanyGroupId',
            'CompanyGroupGroupName',
            'CompanyGroupCreatedDeteTime',
            'CompanyGroupMarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}