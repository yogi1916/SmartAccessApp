
namespace ESignature.Default {
    export interface OrganizationRow {
        Id?: number;
        OrganizationName?: string;
        Email?: string;
        City?: string;
        State?: string;
        Country?: string;
        Pin?: string;
        Address1?: string;
        Address2?: string;
        PhoneNumber?: string;
        Fax?: string;
        Description?: string;
        IsDeleted?: boolean;
    }

    export namespace OrganizationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OrganizationName';
        export const localTextPrefix = 'Default.Organization';

        export namespace Fields {
            export declare const Id;
            export declare const OrganizationName;
            export declare const Email;
            export declare const City;
            export declare const State;
            export declare const Country;
            export declare const Pin;
            export declare const Address1;
            export declare const Address2;
            export declare const PhoneNumber;
            export declare const Fax;
            export declare const Description;
            export declare const IsDeleted;
        }

        [
            'Id',
            'OrganizationName',
            'Email',
            'City',
            'State',
            'Country',
            'Pin',
            'Address1',
            'Address2',
            'PhoneNumber',
            'Fax',
            'Description',
            'IsDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}