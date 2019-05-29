
namespace ESignature.Default {
    export interface CompanyMasterRow {
        CompanyMasterId?: number;
        CompanyName?: string;
        CompanyGroupId?: number;
        CompanyDetails?: string;
        EmailId?: string;
        OffNo?: string;
        FinancialYearMasterId?: number;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        SmtpServerName?: string;
        SmtpPortNo?: string;
        SmtpUserName?: string;
        SmtpPassword?: string;
        IsAuditTrail?: boolean;
        Isenablessl?: boolean;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
        FinancialYearMasterStartDate?: string;
        FinancialYearMasterEndDate?: number;
        FinancialYearMasterCreatedDeteTime?: string;
        FinancialYearMasterMarkDeleted?: boolean;
        FinancialYearMasterCompanyGroupId?: number;
    }

    export namespace CompanyMasterRow {
        export const idProperty = 'CompanyMasterId';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Default.CompanyMaster';

        export namespace Fields {
            export declare const CompanyMasterId;
            export declare const CompanyName;
            export declare const CompanyGroupId;
            export declare const CompanyDetails;
            export declare const EmailId;
            export declare const OffNo;
            export declare const FinancialYearMasterId;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const SmtpServerName;
            export declare const SmtpPortNo;
            export declare const SmtpUserName;
            export declare const SmtpPassword;
            export declare const IsAuditTrail;
            export declare const Isenablessl;
            export declare const CompanyGroupGroupName;
            export declare const CompanyGroupCreatedDeteTime;
            export declare const CompanyGroupMarkDeleted;
            export declare const FinancialYearMasterStartDate;
            export declare const FinancialYearMasterEndDate;
            export declare const FinancialYearMasterCreatedDeteTime;
            export declare const FinancialYearMasterMarkDeleted;
            export declare const FinancialYearMasterCompanyGroupId;
        }

        [
            'CompanyMasterId',
            'CompanyName',
            'CompanyGroupId',
            'CompanyDetails',
            'EmailId',
            'OffNo',
            'FinancialYearMasterId',
            'CreatedDateTime',
            'MarkDeleted',
            'SmtpServerName',
            'SmtpPortNo',
            'SmtpUserName',
            'SmtpPassword',
            'IsAuditTrail',
            'Isenablessl',
            'CompanyGroupGroupName',
            'CompanyGroupCreatedDeteTime',
            'CompanyGroupMarkDeleted',
            'FinancialYearMasterStartDate',
            'FinancialYearMasterEndDate',
            'FinancialYearMasterCreatedDeteTime',
            'FinancialYearMasterMarkDeleted',
            'FinancialYearMasterCompanyGroupId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}