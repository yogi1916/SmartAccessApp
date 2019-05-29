
namespace ESignature.Default {
    export interface OrginizationEmployeeRow {
        Id?: number;
        OrganizationId?: number;
        Salutation?: string;
        FirstName?: string;
        LastName?: string;
        Gender?: string;
        DateOfBirth?: string;
        StartDate?: string;
        EndDate?: string;
        CardNo?: string;
        AccessPointString?: string;
        MobileNumber?: string;
        ImeiNumber?: string;
        City?: string;
        State?: string;
        Fax?: string;
        Country?: string;
        Pin?: string;
        Address1?: string;
        Address2?: string;
        Description?: string;
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

    export namespace OrginizationEmployeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Salutation';
        export const localTextPrefix = 'Default.OrginizationEmployee';

        export namespace Fields {
            export declare const Id;
            export declare const OrganizationId;
            export declare const Salutation;
            export declare const FirstName;
            export declare const LastName;
            export declare const Gender;
            export declare const DateOfBirth;
            export declare const StartDate;
            export declare const EndDate;
            export declare const CardNo;
            export declare const AccessPointString;
            export declare const MobileNumber;
            export declare const ImeiNumber;
            export declare const City;
            export declare const State;
            export declare const Fax;
            export declare const Country;
            export declare const Pin;
            export declare const Address1;
            export declare const Address2;
            export declare const Description;
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
            'Salutation',
            'FirstName',
            'LastName',
            'Gender',
            'DateOfBirth',
            'StartDate',
            'EndDate',
            'CardNo',
            'AccessPointString',
            'MobileNumber',
            'ImeiNumber',
            'City',
            'State',
            'Fax',
            'Country',
            'Pin',
            'Address1',
            'Address2',
            'Description',
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