
namespace ESignature.Employee {
    export interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsTo1?: number;
        ReportsToPhotoPath?: string;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'LastName';
        export const localTextPrefix = 'Employee.Employees';

        export namespace Fields {
            export declare const EmployeeId;
            export declare const LastName;
            export declare const FirstName;
            export declare const Title;
            export declare const TitleOfCourtesy;
            export declare const BirthDate;
            export declare const HireDate;
            export declare const Address;
            export declare const City;
            export declare const Region;
            export declare const PostalCode;
            export declare const Country;
            export declare const HomePhone;
            export declare const Extension;
            export declare const Photo;
            export declare const Notes;
            export declare const ReportsTo;
            export declare const PhotoPath;
            export declare const ReportsToLastName;
            export declare const ReportsToFirstName;
            export declare const ReportsToTitle;
            export declare const ReportsToTitleOfCourtesy;
            export declare const ReportsToBirthDate;
            export declare const ReportsToHireDate;
            export declare const ReportsToAddress;
            export declare const ReportsToCity;
            export declare const ReportsToRegion;
            export declare const ReportsToPostalCode;
            export declare const ReportsToCountry;
            export declare const ReportsToHomePhone;
            export declare const ReportsToExtension;
            export declare const ReportsToPhoto;
            export declare const ReportsToNotes;
            export declare const ReportsTo1;
            export declare const ReportsToPhotoPath;
        }

        [
            'EmployeeId',
            'LastName',
            'FirstName',
            'Title',
            'TitleOfCourtesy',
            'BirthDate',
            'HireDate',
            'Address',
            'City',
            'Region',
            'PostalCode',
            'Country',
            'HomePhone',
            'Extension',
            'Photo',
            'Notes',
            'ReportsTo',
            'PhotoPath',
            'ReportsToLastName',
            'ReportsToFirstName',
            'ReportsToTitle',
            'ReportsToTitleOfCourtesy',
            'ReportsToBirthDate',
            'ReportsToHireDate',
            'ReportsToAddress',
            'ReportsToCity',
            'ReportsToRegion',
            'ReportsToPostalCode',
            'ReportsToCountry',
            'ReportsToHomePhone',
            'ReportsToExtension',
            'ReportsToPhoto',
            'ReportsToNotes',
            'ReportsTo1',
            'ReportsToPhotoPath'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}