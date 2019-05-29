
namespace ESignature.Employee {
    export interface EmployeeMasterRow {
        EmployeeMasterId?: number;
        EmployeeCode?: string;
        SalutationId?: number;
        DepartmentId?: number;
        CompanyLocationId?: number;
        DesignationId?: number;
        GenderId?: number;
        DivisionId?: number;
        SubDepartmentId?: number;
        MaretialStatusId?: number;
        EmployeeTypeId?: number;
        EmploymentTypeId?: number;
        BloodGroupId?: number;
        CompanyMasterId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        MobileNumber?: string;
        City?: string;
        State?: string;
        Country?: string;
        Address?: string;
        DateofBirth?: string;
        DateOfJoining?: string;
        ResignDate?: string;
        EmailAddress?: string;
        Email?: string;
        ManagerId?: number;
        AadharCardNo?: string;
        IsExpiryAllowed?: boolean;
        CardExpiry?: string;
        PhotoPath?: string;
        MarkDeleted?: boolean;
        Extra1?: string;
        Extra2?: string;
        Extra3?: string;
        Extra4?: string;
        Extra5?: string;
        IsEmployeeLogin?: boolean;
        SalutationSalutationName?: string;
        DepartmentDepartmentName?: string;
        DepartmentDepartmentCode?: string;
        DepartmentCompanyLocationId?: number;
        DepartmentDivisionId?: number;
        DepartmentDetails?: string;
        DepartmentCreatedDateTime?: string;
        DepartmentMarkDeleted?: boolean;
        CompanyLocationCompanyMasterId?: number;
        CompanyLocationLocationMasterId?: number;
        CompanyLocationCreatedDateTime?: string;
        CompanyLocationMarkDeleted?: boolean;
        DesignationDesignationName?: string;
        DesignationDesignationCode?: string;
        DesignationCompanyMasterId?: number;
        DesignationDetails?: string;
        DesignationCreatedDateTime?: string;
        DesignationMarkDeleted?: boolean;
        GenderGenderName?: string;
        DivisionDivisionName?: string;
        DivisionDivisionCode?: string;
        DivisionCompanyMasterId?: number;
        DivisionDetails?: string;
        DivisionCreatedDateTime?: string;
        DivisionMarkDeleted?: boolean;
        SubDepartmentSubDepartmentName?: string;
        SubDepartmentSubDepartmentCode?: string;
        SubDepartmentDepartmentId?: number;
        SubDepartmentDetails?: string;
        SubDepartmentCreatedDateTime?: string;
        SubDepartmentMarkDeleted?: boolean;
        MaretialStatusMaretialStatusName?: string;
        EmployeeTypeEmployeeTypeName?: string;
        EmploymentTypeEmploymentTypeName?: string;
        BloodGroup?: string;
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

    export namespace EmployeeMasterRow {
        export const idProperty = 'EmployeeMasterId';
        export const nameProperty = 'EmployeeCode';
        export const localTextPrefix = 'Employee.EmployeeMaster';

        export namespace Fields {
            export declare const EmployeeMasterId;
            export declare const EmployeeCode;
            export declare const SalutationId;
            export declare const DepartmentId;
            export declare const CompanyLocationId;
            export declare const DesignationId;
            export declare const GenderId;
            export declare const DivisionId;
            export declare const SubDepartmentId;
            export declare const MaretialStatusId;
            export declare const EmployeeTypeId;
            export declare const EmploymentTypeId;
            export declare const BloodGroupId;
            export declare const CompanyMasterId;
            export declare const FirstName;
            export declare const MiddleName;
            export declare const LastName;
            export declare const MobileNumber;
            export declare const City;
            export declare const State;
            export declare const Country;
            export declare const Address;
            export declare const DateofBirth;
            export declare const DateOfJoining;
            export declare const ResignDate;
            export declare const EmailAddress;
            export declare const Email;
            export declare const ManagerId;
            export declare const AadharCardNo;
            export declare const IsExpiryAllowed;
            export declare const CardExpiry;
            export declare const PhotoPath;
            export declare const MarkDeleted;
            export declare const Extra1;
            export declare const Extra2;
            export declare const Extra3;
            export declare const Extra4;
            export declare const Extra5;
            export declare const IsEmployeeLogin;
            export declare const SalutationSalutationName;
            export declare const DepartmentDepartmentName;
            export declare const DepartmentDepartmentCode;
            export declare const DepartmentCompanyLocationId;
            export declare const DepartmentDivisionId;
            export declare const DepartmentDetails;
            export declare const DepartmentCreatedDateTime;
            export declare const DepartmentMarkDeleted;
            export declare const CompanyLocationCompanyMasterId;
            export declare const CompanyLocationLocationMasterId;
            export declare const CompanyLocationCreatedDateTime;
            export declare const CompanyLocationMarkDeleted;
            export declare const DesignationDesignationName;
            export declare const DesignationDesignationCode;
            export declare const DesignationCompanyMasterId;
            export declare const DesignationDetails;
            export declare const DesignationCreatedDateTime;
            export declare const DesignationMarkDeleted;
            export declare const GenderGenderName;
            export declare const DivisionDivisionName;
            export declare const DivisionDivisionCode;
            export declare const DivisionCompanyMasterId;
            export declare const DivisionDetails;
            export declare const DivisionCreatedDateTime;
            export declare const DivisionMarkDeleted;
            export declare const SubDepartmentSubDepartmentName;
            export declare const SubDepartmentSubDepartmentCode;
            export declare const SubDepartmentDepartmentId;
            export declare const SubDepartmentDetails;
            export declare const SubDepartmentCreatedDateTime;
            export declare const SubDepartmentMarkDeleted;
            export declare const MaretialStatusMaretialStatusName;
            export declare const EmployeeTypeEmployeeTypeName;
            export declare const EmploymentTypeEmploymentTypeName;
            export declare const BloodGroup;
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
            'EmployeeMasterId',
            'EmployeeCode',
            'SalutationId',
            'DepartmentId',
            'CompanyLocationId',
            'DesignationId',
            'GenderId',
            'DivisionId',
            'SubDepartmentId',
            'MaretialStatusId',
            'EmployeeTypeId',
            'EmploymentTypeId',
            'BloodGroupId',
            'CompanyMasterId',
            'FirstName',
            'MiddleName',
            'LastName',
            'MobileNumber',
            'City',
            'State',
            'Country',
            'Address',
            'DateofBirth',
            'DateOfJoining',
            'ResignDate',
            'EmailAddress',
            'Email',
            'ManagerId',
            'AadharCardNo',
            'IsExpiryAllowed',
            'CardExpiry',
            'PhotoPath',
            'MarkDeleted',
            'Extra1',
            'Extra2',
            'Extra3',
            'Extra4',
            'Extra5',
            'IsEmployeeLogin',
            'SalutationSalutationName',
            'DepartmentDepartmentName',
            'DepartmentDepartmentCode',
            'DepartmentCompanyLocationId',
            'DepartmentDivisionId',
            'DepartmentDetails',
            'DepartmentCreatedDateTime',
            'DepartmentMarkDeleted',
            'CompanyLocationCompanyMasterId',
            'CompanyLocationLocationMasterId',
            'CompanyLocationCreatedDateTime',
            'CompanyLocationMarkDeleted',
            'DesignationDesignationName',
            'DesignationDesignationCode',
            'DesignationCompanyMasterId',
            'DesignationDetails',
            'DesignationCreatedDateTime',
            'DesignationMarkDeleted',
            'GenderGenderName',
            'DivisionDivisionName',
            'DivisionDivisionCode',
            'DivisionCompanyMasterId',
            'DivisionDetails',
            'DivisionCreatedDateTime',
            'DivisionMarkDeleted',
            'SubDepartmentSubDepartmentName',
            'SubDepartmentSubDepartmentCode',
            'SubDepartmentDepartmentId',
            'SubDepartmentDetails',
            'SubDepartmentCreatedDateTime',
            'SubDepartmentMarkDeleted',
            'MaretialStatusMaretialStatusName',
            'EmployeeTypeEmployeeTypeName',
            'EmploymentTypeEmploymentTypeName',
            'BloodGroup',
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