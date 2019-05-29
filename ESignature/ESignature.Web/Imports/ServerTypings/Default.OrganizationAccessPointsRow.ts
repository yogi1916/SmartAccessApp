
namespace ESignature.Default {
    export interface OrganizationAccessPointsRow {
        Id?: number;
        OrganizationId?: number;
        AccessPointName?: string;
        AccessPointCode?: string;
        Location?: string;
        LocationCoordinates?: string;
        Range?: string;
        DateTime?: string;
        IsDeleted?: boolean;
        OrganizationOrganizationName?: string;
        OrganizationEmail?: string;
        OrganizationCity?: string;
        OrganizationState?: string;
        OrganizationCountry?: string;
        OrganizationPin?: string;
        OrganizationAddress1?: string;
        OrganizationAddress2?: string;
        OrganizationPhoneNumber?: string;
        OrganizationFax?: string;
        OrganizationDescription?: string;
        OrganizationIsDeleted?: boolean;
    }

    export namespace OrganizationAccessPointsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'AccessPointName';
        export const localTextPrefix = 'Default.OrganizationAccessPoints';

        export namespace Fields {
            export declare const Id;
            export declare const OrganizationId;
            export declare const AccessPointName;
            export declare const AccessPointCode;
            export declare const Location;
            export declare const LocationCoordinates;
            export declare const Range;
            export declare const DateTime;
            export declare const IsDeleted;
            export declare const OrganizationOrganizationName;
            export declare const OrganizationEmail;
            export declare const OrganizationCity;
            export declare const OrganizationState;
            export declare const OrganizationCountry;
            export declare const OrganizationPin;
            export declare const OrganizationAddress1;
            export declare const OrganizationAddress2;
            export declare const OrganizationPhoneNumber;
            export declare const OrganizationFax;
            export declare const OrganizationDescription;
            export declare const OrganizationIsDeleted;
        }

        [
            'Id',
            'OrganizationId',
            'AccessPointName',
            'AccessPointCode',
            'Location',
            'LocationCoordinates',
            'Range',
            'DateTime',
            'IsDeleted',
            'OrganizationOrganizationName',
            'OrganizationEmail',
            'OrganizationCity',
            'OrganizationState',
            'OrganizationCountry',
            'OrganizationPin',
            'OrganizationAddress1',
            'OrganizationAddress2',
            'OrganizationPhoneNumber',
            'OrganizationFax',
            'OrganizationDescription',
            'OrganizationIsDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}