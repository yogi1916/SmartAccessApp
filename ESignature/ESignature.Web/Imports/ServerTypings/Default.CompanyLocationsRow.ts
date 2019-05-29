
namespace ESignature.Default {
    export interface CompanyLocationsRow {
        CompanyLocationId?: number;
        CompanyMasterId?: number;
        LocationMasterId?: number;
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
        LocationMasterLocationName?: string;
        LocationMasterLocationCode?: string;
        LocationMasterCreatedDateTime?: string;
        LocationMasterMarkDeleted?: boolean;
        LocationMasterCompanyGroupId?: number;
    }

    export namespace CompanyLocationsRow {
        export const idProperty = 'CompanyLocationId';
        export const localTextPrefix = 'Default.CompanyLocations';

        export namespace Fields {
            export declare const CompanyLocationId;
            export declare const CompanyMasterId;
            export declare const LocationMasterId;
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
            export declare const LocationMasterLocationName;
            export declare const LocationMasterLocationCode;
            export declare const LocationMasterCreatedDateTime;
            export declare const LocationMasterMarkDeleted;
            export declare const LocationMasterCompanyGroupId;
        }

        [
            'CompanyLocationId',
            'CompanyMasterId',
            'LocationMasterId',
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
            'CompanyMasterIsenablessl',
            'LocationMasterLocationName',
            'LocationMasterLocationCode',
            'LocationMasterCreatedDateTime',
            'LocationMasterMarkDeleted',
            'LocationMasterCompanyGroupId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}