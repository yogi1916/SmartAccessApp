
namespace ESignature.Default {
    export interface DepartmentsRow {
        DepartmentId?: number;
        DepartmentName?: string;
        DepartmentCode?: string;
        CompanyLocationId?: number;
        DivisionId?: number;
        Details?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        CompanyLocationCompanyMasterId?: number;
        CompanyLocationLocationMasterId?: number;
        CompanyLocationCreatedDateTime?: string;
        CompanyLocationMarkDeleted?: boolean;
        DivisionDivisionName?: string;
        DivisionDivisionCode?: string;
        DivisionCompanyMasterId?: number;
        DivisionDetails?: string;
        DivisionCreatedDateTime?: string;
        DivisionMarkDeleted?: boolean;
    }

    export namespace DepartmentsRow {
        export const idProperty = 'DepartmentId';
        export const nameProperty = 'DepartmentName';
        export const localTextPrefix = 'Default.Departments';

        export namespace Fields {
            export declare const DepartmentId;
            export declare const DepartmentName;
            export declare const DepartmentCode;
            export declare const CompanyLocationId;
            export declare const DivisionId;
            export declare const Details;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const CompanyLocationCompanyMasterId;
            export declare const CompanyLocationLocationMasterId;
            export declare const CompanyLocationCreatedDateTime;
            export declare const CompanyLocationMarkDeleted;
            export declare const DivisionDivisionName;
            export declare const DivisionDivisionCode;
            export declare const DivisionCompanyMasterId;
            export declare const DivisionDetails;
            export declare const DivisionCreatedDateTime;
            export declare const DivisionMarkDeleted;
        }

        [
            'DepartmentId',
            'DepartmentName',
            'DepartmentCode',
            'CompanyLocationId',
            'DivisionId',
            'Details',
            'CreatedDateTime',
            'MarkDeleted',
            'CompanyLocationCompanyMasterId',
            'CompanyLocationLocationMasterId',
            'CompanyLocationCreatedDateTime',
            'CompanyLocationMarkDeleted',
            'DivisionDivisionName',
            'DivisionDivisionCode',
            'DivisionCompanyMasterId',
            'DivisionDetails',
            'DivisionCreatedDateTime',
            'DivisionMarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}