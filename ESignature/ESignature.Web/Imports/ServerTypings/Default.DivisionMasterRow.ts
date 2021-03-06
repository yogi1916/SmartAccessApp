﻿
namespace ESignature.Default {
    export interface DivisionMasterRow {
        DivisionId?: number;
        DivisionName?: string;
        DivisionCode?: string;
        CompanyMasterId?: number;
        Details?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        CompanyMasterCompanyName?: string;
        CompanyMasterCompanyGroupId?: number;
        CompanyMasterCompanyDetails?: string;
        CompanyMasterLocations?: string;
        CompanyMasterEmailId?: string;
        CompanyMasterOffNo?: string;
        CompanyMasterFinancialYearMasterId?: number;
        CompanyMasterCreatedDateTime?: string;
        CompanyMasterMarkDeleted?: boolean;
        CompanyMasterSmtpServerName?: string;
        CompanyMasterSmtpPortNo?: string;
        CompanyMasterSmtpUserName?: string;
        CompanyMasterSmtpPassword?: string;
        CompanyMasterIsAuditTrail?: boolean;
        CompanyMasterIsenablessl?: boolean;
    }

    export namespace DivisionMasterRow {
        export const idProperty = 'DivisionId';
        export const nameProperty = 'DivisionName';
        export const localTextPrefix = 'Default.DivisionMaster';

        export namespace Fields {
            export declare const DivisionId;
            export declare const DivisionName;
            export declare const DivisionCode;
            export declare const CompanyMasterId;
            export declare const Details;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const CompanyMasterCompanyName;
            export declare const CompanyMasterCompanyGroupId;
            export declare const CompanyMasterCompanyDetails;
            export declare const CompanyMasterLocations;
            export declare const CompanyMasterEmailId;
            export declare const CompanyMasterOffNo;
            export declare const CompanyMasterFinancialYearMasterId;
            export declare const CompanyMasterCreatedDateTime;
            export declare const CompanyMasterMarkDeleted;
            export declare const CompanyMasterSmtpServerName;
            export declare const CompanyMasterSmtpPortNo;
            export declare const CompanyMasterSmtpUserName;
            export declare const CompanyMasterSmtpPassword;
            export declare const CompanyMasterIsAuditTrail;
            export declare const CompanyMasterIsenablessl;
        }

        [
            'DivisionId',
            'DivisionName',
            'DivisionCode',
            'CompanyMasterId',
            'Details',
            'CreatedDateTime',
            'MarkDeleted',
            'CompanyMasterCompanyName',
            'CompanyMasterCompanyGroupId',
            'CompanyMasterCompanyDetails',
            'CompanyMasterLocations',
            'CompanyMasterEmailId',
            'CompanyMasterOffNo',
            'CompanyMasterFinancialYearMasterId',
            'CompanyMasterCreatedDateTime',
            'CompanyMasterMarkDeleted',
            'CompanyMasterSmtpServerName',
            'CompanyMasterSmtpPortNo',
            'CompanyMasterSmtpUserName',
            'CompanyMasterSmtpPassword',
            'CompanyMasterIsAuditTrail',
            'CompanyMasterIsenablessl'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}