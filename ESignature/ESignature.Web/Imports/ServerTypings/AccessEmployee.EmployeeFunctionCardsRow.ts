
namespace ESignature.AccessEmployee {
    export interface EmployeeFunctionCardsRow {
        EmployeeFunctionCardId?: number;
        CardType?: number;
        EmployeeMasterId?: number;
        CardNo?: string;
        CsnNo?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        FacilityCode?: string;
        TempFuncId?: number;
        CardTypeCardTypeName?: string;
        EmployeeMasterEmployeeCode?: string;
        EmployeeMasterSalutationId?: number;
        EmployeeMasterDepartmentId?: number;
        EmployeeMasterCompanyLocationId?: number;
        EmployeeMasterDesignationId?: number;
        EmployeeMasterGenderId?: number;
        EmployeeMasterDivisionId?: number;
        EmployeeMasterSubDepartmentId?: number;
        EmployeeMasterMaretialStatusId?: number;
        EmployeeMasterEmployeeTypeId?: number;
        EmployeeMasterEmploymentTypeId?: number;
        EmployeeMasterBloodGroupId?: number;
        EmployeeMasterCompanyMasterId?: number;
        EmployeeMasterFirstName?: string;
        EmployeeMasterMiddleName?: string;
        EmployeeMasterLastName?: string;
        EmployeeMasterMobileNumber?: string;
        EmployeeMasterCity?: string;
        EmployeeMasterState?: string;
        EmployeeMasterCountry?: string;
        EmployeeMasterAddress?: string;
        EmployeeMasterDateofBirth?: string;
        EmployeeMasterDateOfJoining?: string;
        EmployeeMasterResignDate?: string;
        EmployeeMasterEmailAddress?: string;
        EmployeeMasterEmail?: string;
        EmployeeMasterManagerId?: number;
        EmployeeMasterAadharCardNo?: string;
        EmployeeMasterIsExpiryAllowed?: boolean;
        EmployeeMasterCardExpiry?: string;
        EmployeeMasterPhotoPath?: string;
        EmployeeMasterMarkDeleted?: boolean;
        EmployeeMasterExtra1?: string;
        EmployeeMasterExtra2?: string;
        EmployeeMasterExtra3?: string;
        EmployeeMasterExtra4?: string;
        EmployeeMasterExtra5?: string;
        EmployeeMasterIsEmployeeLogin?: boolean;
    }

    export namespace EmployeeFunctionCardsRow {
        export const idProperty = 'EmployeeFunctionCardId';
        export const nameProperty = 'CardNo';
        export const localTextPrefix = 'AccessEmployee.EmployeeFunctionCards';

        export namespace Fields {
            export declare const EmployeeFunctionCardId;
            export declare const CardType;
            export declare const EmployeeMasterId;
            export declare const CardNo;
            export declare const CsnNo;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const FacilityCode;
            export declare const TempFuncId;
            export declare const CardTypeCardTypeName;
            export declare const EmployeeMasterEmployeeCode;
            export declare const EmployeeMasterSalutationId;
            export declare const EmployeeMasterDepartmentId;
            export declare const EmployeeMasterCompanyLocationId;
            export declare const EmployeeMasterDesignationId;
            export declare const EmployeeMasterGenderId;
            export declare const EmployeeMasterDivisionId;
            export declare const EmployeeMasterSubDepartmentId;
            export declare const EmployeeMasterMaretialStatusId;
            export declare const EmployeeMasterEmployeeTypeId;
            export declare const EmployeeMasterEmploymentTypeId;
            export declare const EmployeeMasterBloodGroupId;
            export declare const EmployeeMasterCompanyMasterId;
            export declare const EmployeeMasterFirstName;
            export declare const EmployeeMasterMiddleName;
            export declare const EmployeeMasterLastName;
            export declare const EmployeeMasterMobileNumber;
            export declare const EmployeeMasterCity;
            export declare const EmployeeMasterState;
            export declare const EmployeeMasterCountry;
            export declare const EmployeeMasterAddress;
            export declare const EmployeeMasterDateofBirth;
            export declare const EmployeeMasterDateOfJoining;
            export declare const EmployeeMasterResignDate;
            export declare const EmployeeMasterEmailAddress;
            export declare const EmployeeMasterEmail;
            export declare const EmployeeMasterManagerId;
            export declare const EmployeeMasterAadharCardNo;
            export declare const EmployeeMasterIsExpiryAllowed;
            export declare const EmployeeMasterCardExpiry;
            export declare const EmployeeMasterPhotoPath;
            export declare const EmployeeMasterMarkDeleted;
            export declare const EmployeeMasterExtra1;
            export declare const EmployeeMasterExtra2;
            export declare const EmployeeMasterExtra3;
            export declare const EmployeeMasterExtra4;
            export declare const EmployeeMasterExtra5;
            export declare const EmployeeMasterIsEmployeeLogin;
        }

        [
            'EmployeeFunctionCardId',
            'CardType',
            'EmployeeMasterId',
            'CardNo',
            'CsnNo',
            'CreatedDateTime',
            'MarkDeleted',
            'FacilityCode',
            'TempFuncId',
            'CardTypeCardTypeName',
            'EmployeeMasterEmployeeCode',
            'EmployeeMasterSalutationId',
            'EmployeeMasterDepartmentId',
            'EmployeeMasterCompanyLocationId',
            'EmployeeMasterDesignationId',
            'EmployeeMasterGenderId',
            'EmployeeMasterDivisionId',
            'EmployeeMasterSubDepartmentId',
            'EmployeeMasterMaretialStatusId',
            'EmployeeMasterEmployeeTypeId',
            'EmployeeMasterEmploymentTypeId',
            'EmployeeMasterBloodGroupId',
            'EmployeeMasterCompanyMasterId',
            'EmployeeMasterFirstName',
            'EmployeeMasterMiddleName',
            'EmployeeMasterLastName',
            'EmployeeMasterMobileNumber',
            'EmployeeMasterCity',
            'EmployeeMasterState',
            'EmployeeMasterCountry',
            'EmployeeMasterAddress',
            'EmployeeMasterDateofBirth',
            'EmployeeMasterDateOfJoining',
            'EmployeeMasterResignDate',
            'EmployeeMasterEmailAddress',
            'EmployeeMasterEmail',
            'EmployeeMasterManagerId',
            'EmployeeMasterAadharCardNo',
            'EmployeeMasterIsExpiryAllowed',
            'EmployeeMasterCardExpiry',
            'EmployeeMasterPhotoPath',
            'EmployeeMasterMarkDeleted',
            'EmployeeMasterExtra1',
            'EmployeeMasterExtra2',
            'EmployeeMasterExtra3',
            'EmployeeMasterExtra4',
            'EmployeeMasterExtra5',
            'EmployeeMasterIsEmployeeLogin'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}