
namespace ESignature.Default {
    export interface SubDepartmentsRow {
        SubDepartmentId?: number;
        SubDepartmentName?: string;
        SubDepartmentCode?: string;
        DepartmentId?: number;
        Details?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        DepartmentDepartmentName?: string;
        DepartmentDepartmentCode?: string;
        DepartmentCompanyLocationId?: number;
        DepartmentDivisionId?: number;
        DepartmentDetails?: string;
        DepartmentCreatedDateTime?: string;
        DepartmentMarkDeleted?: boolean;
    }

    export namespace SubDepartmentsRow {
        export const idProperty = 'SubDepartmentId';
        export const nameProperty = 'SubDepartmentName';
        export const localTextPrefix = 'Default.SubDepartments';

        export namespace Fields {
            export declare const SubDepartmentId;
            export declare const SubDepartmentName;
            export declare const SubDepartmentCode;
            export declare const DepartmentId;
            export declare const Details;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const DepartmentDepartmentName;
            export declare const DepartmentDepartmentCode;
            export declare const DepartmentCompanyLocationId;
            export declare const DepartmentDivisionId;
            export declare const DepartmentDetails;
            export declare const DepartmentCreatedDateTime;
            export declare const DepartmentMarkDeleted;
        }

        [
            'SubDepartmentId',
            'SubDepartmentName',
            'SubDepartmentCode',
            'DepartmentId',
            'Details',
            'CreatedDateTime',
            'MarkDeleted',
            'DepartmentDepartmentName',
            'DepartmentDepartmentCode',
            'DepartmentCompanyLocationId',
            'DepartmentDivisionId',
            'DepartmentDetails',
            'DepartmentCreatedDateTime',
            'DepartmentMarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}