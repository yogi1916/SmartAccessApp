/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace ESignature.Access {
    class EmployeeFunctionCardsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeFunctionCardsForm {
        CardType: Serenity.IntegerEditor;
        CardNo: Serenity.StringEditor;
        CsnNo: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        FacilityCode: Serenity.StringEditor;
        TempFuncId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.Access {
    interface EmployeeFunctionCardsRow {
        EmployeeFunctionCardId?: number;
        CardType?: number;
        CardNo?: string;
        CsnNo?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        FacilityCode?: string;
        TempFuncId?: number;
        CardTypeCardTypeName?: string;
    }
    namespace EmployeeFunctionCardsRow {
        const idProperty = "EmployeeFunctionCardId";
        const nameProperty = "CardNo";
        const localTextPrefix = "Access.EmployeeFunctionCards";
        namespace Fields {
            const EmployeeFunctionCardId: any;
            const CardType: any;
            const CardNo: any;
            const CsnNo: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const FacilityCode: any;
            const TempFuncId: any;
            const CardTypeCardTypeName: any;
        }
    }
}
declare namespace ESignature.Access {
    namespace EmployeeFunctionCardsService {
        const baseUrl = "Access/EmployeeFunctionCards";
        function Create(request: Serenity.SaveRequest<EmployeeFunctionCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeFunctionCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeFunctionCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeFunctionCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.AccessEmployee {
    class EmployeeFunctionCardsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeFunctionCardsForm {
        CardType: Serenity.IntegerEditor;
        EmployeeMasterId: Serenity.IntegerEditor;
        CardNo: Serenity.StringEditor;
        CsnNo: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        FacilityCode: Serenity.StringEditor;
        TempFuncId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.AccessEmployee {
    interface EmployeeFunctionCardsRow {
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
    namespace EmployeeFunctionCardsRow {
        const idProperty = "EmployeeFunctionCardId";
        const nameProperty = "CardNo";
        const localTextPrefix = "AccessEmployee.EmployeeFunctionCards";
        namespace Fields {
            const EmployeeFunctionCardId: any;
            const CardType: any;
            const EmployeeMasterId: any;
            const CardNo: any;
            const CsnNo: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const FacilityCode: any;
            const TempFuncId: any;
            const CardTypeCardTypeName: any;
            const EmployeeMasterEmployeeCode: any;
            const EmployeeMasterSalutationId: any;
            const EmployeeMasterDepartmentId: any;
            const EmployeeMasterCompanyLocationId: any;
            const EmployeeMasterDesignationId: any;
            const EmployeeMasterGenderId: any;
            const EmployeeMasterDivisionId: any;
            const EmployeeMasterSubDepartmentId: any;
            const EmployeeMasterMaretialStatusId: any;
            const EmployeeMasterEmployeeTypeId: any;
            const EmployeeMasterEmploymentTypeId: any;
            const EmployeeMasterBloodGroupId: any;
            const EmployeeMasterCompanyMasterId: any;
            const EmployeeMasterFirstName: any;
            const EmployeeMasterMiddleName: any;
            const EmployeeMasterLastName: any;
            const EmployeeMasterMobileNumber: any;
            const EmployeeMasterCity: any;
            const EmployeeMasterState: any;
            const EmployeeMasterCountry: any;
            const EmployeeMasterAddress: any;
            const EmployeeMasterDateofBirth: any;
            const EmployeeMasterDateOfJoining: any;
            const EmployeeMasterResignDate: any;
            const EmployeeMasterEmailAddress: any;
            const EmployeeMasterEmail: any;
            const EmployeeMasterManagerId: any;
            const EmployeeMasterAadharCardNo: any;
            const EmployeeMasterIsExpiryAllowed: any;
            const EmployeeMasterCardExpiry: any;
            const EmployeeMasterPhotoPath: any;
            const EmployeeMasterMarkDeleted: any;
            const EmployeeMasterExtra1: any;
            const EmployeeMasterExtra2: any;
            const EmployeeMasterExtra3: any;
            const EmployeeMasterExtra4: any;
            const EmployeeMasterExtra5: any;
            const EmployeeMasterIsEmployeeLogin: any;
        }
    }
}
declare namespace ESignature.AccessEmployee {
    namespace EmployeeFunctionCardsService {
        const baseUrl = "AccessEmployee/EmployeeFunctionCards";
        function Create(request: Serenity.SaveRequest<EmployeeFunctionCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeFunctionCardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeFunctionCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeFunctionCardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Admin {
    class CompanyGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyGroupForm {
        GroupName: Serenity.StringEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Admin {
    interface CompanyGroupRow {
        CompanyGroupId?: number;
        GroupName?: string;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
    }
    namespace CompanyGroupRow {
        const idProperty = "CompanyGroupId";
        const nameProperty = "GroupName";
        const localTextPrefix = "Admin.CompanyGroup";
        namespace Fields {
            const CompanyGroupId: any;
            const GroupName: any;
            const CreatedDeteTime: any;
            const MarkDeleted: any;
        }
    }
}
declare namespace ESignature.Admin {
    namespace CompanyGroupService {
        const baseUrl = "Admin/CompanyGroup";
        function Create(request: Serenity.SaveRequest<CompanyGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Admin {
    class CompanyMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyMasterForm {
        CompanyName: Serenity.StringEditor;
        CompanyGroupId: Serenity.IntegerEditor;
        CompanyDetails: Serenity.StringEditor;
        EmailId: Serenity.StringEditor;
        OffNo: Serenity.StringEditor;
        FinancialYearMasterId: Serenity.IntegerEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        SmtpServerName: Serenity.StringEditor;
        SmtpPortNo: Serenity.StringEditor;
        SmtpUserName: Serenity.StringEditor;
        SmtpPassword: Serenity.StringEditor;
        IsAuditTrail: Serenity.BooleanEditor;
        Isenablessl: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Admin {
    interface CompanyMasterRow {
        CompanyMasterId?: number;
        CompanyName?: string;
        CompanyGroupId?: number;
        CompanyDetails?: string;
        EmailId?: string;
        OffNo?: string;
        FinancialYearMasterId?: number;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        SmtpServerName?: string;
        SmtpPortNo?: string;
        SmtpUserName?: string;
        SmtpPassword?: string;
        IsAuditTrail?: boolean;
        Isenablessl?: boolean;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
        FinancialYearMasterStartDate?: string;
        FinancialYearMasterEndDate?: number;
        FinancialYearMasterCreatedDeteTime?: string;
        FinancialYearMasterMarkDeleted?: boolean;
        FinancialYearMasterCompanyGroupId?: number;
    }
    namespace CompanyMasterRow {
        const idProperty = "CompanyMasterId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Admin.CompanyMaster";
        namespace Fields {
            const CompanyMasterId: any;
            const CompanyName: any;
            const CompanyGroupId: any;
            const CompanyDetails: any;
            const EmailId: any;
            const OffNo: any;
            const FinancialYearMasterId: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const SmtpServerName: any;
            const SmtpPortNo: any;
            const SmtpUserName: any;
            const SmtpPassword: any;
            const IsAuditTrail: any;
            const Isenablessl: any;
            const CompanyGroupGroupName: any;
            const CompanyGroupCreatedDeteTime: any;
            const CompanyGroupMarkDeleted: any;
            const FinancialYearMasterStartDate: any;
            const FinancialYearMasterEndDate: any;
            const FinancialYearMasterCreatedDeteTime: any;
            const FinancialYearMasterMarkDeleted: any;
            const FinancialYearMasterCompanyGroupId: any;
        }
    }
}
declare namespace ESignature.Admin {
    namespace CompanyMasterService {
        const baseUrl = "Admin/CompanyMaster";
        function Create(request: Serenity.SaveRequest<CompanyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Admin {
    class FinancialYearMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FinancialYearMasterForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.IntegerEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        CompanyGroupId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.Admin {
    interface FinancialYearMasterRow {
        FinancialYearMasterId?: number;
        StartDate?: string;
        EndDate?: number;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
        CompanyGroupId?: number;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
    }
    namespace FinancialYearMasterRow {
        const idProperty = "FinancialYearMasterId";
        const localTextPrefix = "Admin.FinancialYearMaster";
        namespace Fields {
            const FinancialYearMasterId: any;
            const StartDate: any;
            const EndDate: any;
            const CreatedDeteTime: any;
            const MarkDeleted: any;
            const CompanyGroupId: any;
            const CompanyGroupGroupName: any;
            const CompanyGroupCreatedDeteTime: any;
            const CompanyGroupMarkDeleted: any;
        }
    }
}
declare namespace ESignature.Admin {
    namespace FinancialYearMasterService {
        const baseUrl = "Admin/FinancialYearMaster";
        function Create(request: Serenity.SaveRequest<FinancialYearMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinancialYearMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinancialYearMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinancialYearMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Administration {
}
declare namespace ESignature.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ESignature.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ESignature.Administration {
}
declare namespace ESignature.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ESignature.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ESignature.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ESignature.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ESignature.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ESignature.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace ESignature.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ESignature.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ESignature.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ESignature.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ESignature.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ESignature.Administration {
}
declare namespace ESignature.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ESignature.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ESignature.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ESignature.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ESignature.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ESignature.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ESignature.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ESignature.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ESignature.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ESignature.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ESignature.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ESignature.CardManagement {
    class CardPoolForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CardPoolForm {
        CardNo: Serenity.StringEditor;
        CardTechId: Serenity.IntegerEditor;
        CardCsnNo: Serenity.StringEditor;
        CardUseType: Serenity.IntegerEditor;
        CardType: Serenity.IntegerEditor;
        CardStatus: Serenity.IntegerEditor;
        CardUsageStatus: Serenity.IntegerEditor;
        CurrentlyAssignedTo: Serenity.StringEditor;
        CardExpiryDate: Serenity.DateEditor;
        CardAuthType: Serenity.StringEditor;
        NoOfDaysAllowedFromToday: Serenity.IntegerEditor;
        Remark: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        LastModified: Serenity.DateEditor;
        CreatedDateTime: Serenity.DateEditor;
        AddedBy: Serenity.IntegerEditor;
        CompanyLocationId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface CardPoolRow {
        CardPoolId?: number;
        CardNo?: string;
        CardTechId?: number;
        CardCsnNo?: string;
        CardUseType?: number;
        CardType?: number;
        CardStatus?: number;
        CardUsageStatus?: number;
        CurrentlyAssignedTo?: string;
        CardExpiryDate?: string;
        CardAuthType?: string;
        NoOfDaysAllowedFromToday?: number;
        Remark?: string;
        Description?: string;
        LastModified?: string;
        CreatedDateTime?: string;
        AddedBy?: number;
        CompanyLocationId?: number;
        CardTechCardTechName?: string;
        CardUseTypeCardUseTypeName?: string;
        CardTypeCardTypeName?: string;
        CardStatus1?: string;
        CardUsageStatusActivity?: string;
        CompanyLocationCompanyMasterId?: number;
        CompanyLocationLocationMasterId?: number;
        CompanyLocationCreatedDateTime?: string;
        CompanyLocationMarkDeleted?: boolean;
    }
    namespace CardPoolRow {
        const idProperty = "CardPoolId";
        const nameProperty = "CardNo";
        const localTextPrefix = "CardManagement.CardPool";
        namespace Fields {
            const CardPoolId: any;
            const CardNo: any;
            const CardTechId: any;
            const CardCsnNo: any;
            const CardUseType: any;
            const CardType: any;
            const CardStatus: any;
            const CardUsageStatus: any;
            const CurrentlyAssignedTo: any;
            const CardExpiryDate: any;
            const CardAuthType: any;
            const NoOfDaysAllowedFromToday: any;
            const Remark: any;
            const Description: any;
            const LastModified: any;
            const CreatedDateTime: any;
            const AddedBy: any;
            const CompanyLocationId: any;
            const CardTechCardTechName: any;
            const CardUseTypeCardUseTypeName: any;
            const CardTypeCardTypeName: any;
            const CardStatus1: any;
            const CardUsageStatusActivity: any;
            const CompanyLocationCompanyMasterId: any;
            const CompanyLocationLocationMasterId: any;
            const CompanyLocationCreatedDateTime: any;
            const CompanyLocationMarkDeleted: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace CardPoolService {
        const baseUrl = "CardManagement/CardPool";
        function Create(request: Serenity.SaveRequest<CardPoolRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CardPoolRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CardPoolRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CardPoolRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardActivityForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MasterCardActivityForm {
        Activity: Serenity.StringEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface MasterCardActivityRow {
        CardActivityiD?: number;
        Activity?: string;
    }
    namespace MasterCardActivityRow {
        const idProperty = "CardActivityiD";
        const nameProperty = "Activity";
        const localTextPrefix = "CardManagement.MasterCardActivity";
        namespace Fields {
            const CardActivityiD: any;
            const Activity: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace MasterCardActivityService {
        const baseUrl = "CardManagement/MasterCardActivity";
        function Create(request: Serenity.SaveRequest<MasterCardActivityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterCardActivityRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterCardActivityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterCardActivityRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MasterCardStatusForm {
        CardStatus: Serenity.StringEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface MasterCardStatusRow {
        CardStatusId?: number;
        CardStatus?: string;
    }
    namespace MasterCardStatusRow {
        const idProperty = "CardStatusId";
        const nameProperty = "CardStatus";
        const localTextPrefix = "CardManagement.MasterCardStatus";
        namespace Fields {
            const CardStatusId: any;
            const CardStatus: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace MasterCardStatusService {
        const baseUrl = "CardManagement/MasterCardStatus";
        function Create(request: Serenity.SaveRequest<MasterCardStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterCardStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterCardStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterCardStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTechnologyForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MasterCardTechnologyForm {
        CardTechName: Serenity.StringEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface MasterCardTechnologyRow {
        CardTechId?: number;
        CardTechName?: string;
    }
    namespace MasterCardTechnologyRow {
        const idProperty = "CardTechId";
        const nameProperty = "CardTechName";
        const localTextPrefix = "CardManagement.MasterCardTechnology";
        namespace Fields {
            const CardTechId: any;
            const CardTechName: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace MasterCardTechnologyService {
        const baseUrl = "CardManagement/MasterCardTechnology";
        function Create(request: Serenity.SaveRequest<MasterCardTechnologyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterCardTechnologyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterCardTechnologyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterCardTechnologyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MasterCardTypeForm {
        CardTypeName: Serenity.StringEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface MasterCardTypeRow {
        CardTypeId?: number;
        CardTypeName?: string;
    }
    namespace MasterCardTypeRow {
        const idProperty = "CardTypeId";
        const nameProperty = "CardTypeName";
        const localTextPrefix = "CardManagement.MasterCardType";
        namespace Fields {
            const CardTypeId: any;
            const CardTypeName: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace MasterCardTypeService {
        const baseUrl = "CardManagement/MasterCardType";
        function Create(request: Serenity.SaveRequest<MasterCardTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterCardTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterCardTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterCardTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardUseTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MasterCardUseTypeForm {
        CardUseTypeName: Serenity.StringEditor;
    }
}
declare namespace ESignature.CardManagement {
    interface MasterCardUseTypeRow {
        CardUseTypeId?: number;
        CardUseTypeName?: string;
    }
    namespace MasterCardUseTypeRow {
        const idProperty = "CardUseTypeId";
        const nameProperty = "CardUseTypeName";
        const localTextPrefix = "CardManagement.MasterCardUseType";
        namespace Fields {
            const CardUseTypeId: any;
            const CardUseTypeName: any;
        }
    }
}
declare namespace ESignature.CardManagement {
    namespace MasterCardUseTypeService {
        const baseUrl = "CardManagement/MasterCardUseType";
        function Create(request: Serenity.SaveRequest<MasterCardUseTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MasterCardUseTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterCardUseTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterCardUseTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace ESignature.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace ESignature.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace ESignature.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace ESignature.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace ESignature.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace ESignature.Controller {
    class ControllerAuthenticationTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ControllerAuthenticationTypeForm {
        ControllerAuthenticationTypeName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Controller {
    interface ControllerAuthenticationTypeRow {
        ControllerAuthenticationTypeId?: number;
        ControllerAuthenticationTypeName?: string;
    }
    namespace ControllerAuthenticationTypeRow {
        const idProperty = "ControllerAuthenticationTypeId";
        const nameProperty = "ControllerAuthenticationTypeName";
        const localTextPrefix = "Controller.ControllerAuthenticationType";
        namespace Fields {
            const ControllerAuthenticationTypeId: any;
            const ControllerAuthenticationTypeName: any;
        }
    }
}
declare namespace ESignature.Controller {
    namespace ControllerAuthenticationTypeService {
        const baseUrl = "Controller/ControllerAuthenticationType";
        function Create(request: Serenity.SaveRequest<ControllerAuthenticationTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ControllerAuthenticationTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ControllerAuthenticationTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ControllerAuthenticationTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class ActivityLogForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface ActivityLogForm {
        EmployeeCode: Serenity.StringEditor;
        JsonDateTime: Serenity.StringEditor;
        GmtDateTime: Serenity.DateEditor;
        UtcDateTime: Serenity.DateEditor;
        ImeiNo: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        OrgId: Serenity.StringEditor;
        RawString: Serenity.StringEditor;
        CardNo: Serenity.StringEditor;
        AccessPointString: Serenity.StringEditor;
        Info: Serenity.StringEditor;
        Info2: Serenity.StringEditor;
    }
}
declare namespace ESignature.Default {
    interface ActivityLogRow {
        Id?: number;
        EmployeeCode?: string;
        JsonDateTime?: string;
        GmtDateTime?: string;
        UtcDateTime?: string;
        ImeiNo?: string;
        MobileNo?: string;
        OrgId?: string;
        RawString?: string;
        CardNo?: string;
        AccessPointString?: string;
        Info?: string;
        Info2?: string;
    }
    namespace ActivityLogRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeCode";
        const localTextPrefix = "Default.ActivityLog";
        namespace Fields {
            const Id: any;
            const EmployeeCode: any;
            const JsonDateTime: any;
            const GmtDateTime: any;
            const UtcDateTime: any;
            const ImeiNo: any;
            const MobileNo: any;
            const OrgId: any;
            const RawString: any;
            const CardNo: any;
            const AccessPointString: any;
            const Info: any;
            const Info2: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace ActivityLogService {
        const baseUrl = "Default/ActivityLog";
        function Create(request: Serenity.SaveRequest<ActivityLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ActivityLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ActivityLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ActivityLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class AuditForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface AuditForm {
        Module: Serenity.StringEditor;
        EmployeeCode: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DateTime: Serenity.DateEditor;
        IpAddress: Serenity.StringEditor;
        ChangedBy: Serenity.IntegerEditor;
        Extra1: Serenity.StringEditor;
        Extra2: Serenity.StringEditor;
        Extra3: Serenity.StringEditor;
        Extra4: Serenity.StringEditor;
    }
}
declare namespace ESignature.Default {
    interface AuditRow {
        Id?: number;
        Module?: string;
        EmployeeCode?: string;
        Description?: string;
        DateTime?: string;
        IpAddress?: string;
        ChangedBy?: number;
        Extra1?: string;
        Extra2?: string;
        Extra3?: string;
        Extra4?: string;
    }
    namespace AuditRow {
        const idProperty = "Id";
        const nameProperty = "Module";
        const localTextPrefix = "Default.Audit";
        namespace Fields {
            const Id: any;
            const Module: any;
            const EmployeeCode: any;
            const Description: any;
            const DateTime: any;
            const IpAddress: any;
            const ChangedBy: any;
            const Extra1: any;
            const Extra2: any;
            const Extra3: any;
            const Extra4: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace AuditService {
        const baseUrl = "Default/Audit";
        function Create(request: Serenity.SaveRequest<AuditRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class CompanyGroupForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyGroupForm {
        GroupName: Serenity.StringEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface CompanyGroupRow {
        CompanyGroupId?: number;
        GroupName?: string;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
    }
    namespace CompanyGroupRow {
        const idProperty = "CompanyGroupId";
        const nameProperty = "GroupName";
        const localTextPrefix = "Default.CompanyGroup";
        namespace Fields {
            const CompanyGroupId: any;
            const GroupName: any;
            const CreatedDeteTime: any;
            const MarkDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace CompanyGroupService {
        const baseUrl = "Default/CompanyGroup";
        function Create(request: Serenity.SaveRequest<CompanyGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyGroupRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyGroupRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class CompanyLocationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyLocationsForm {
        CompanyMasterId: Serenity.IntegerEditor;
        LocationMasterId: Serenity.IntegerEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface CompanyLocationsRow {
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
    namespace CompanyLocationsRow {
        const idProperty = "CompanyLocationId";
        const localTextPrefix = "Default.CompanyLocations";
        namespace Fields {
            const CompanyLocationId: any;
            const CompanyMasterId: any;
            const LocationMasterId: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const CompanyMasterCompanyName: any;
            const CompanyMasterCompanyGroupId: any;
            const CompanyMasterCompanyDetails: any;
            const CompanyMasterLocations: any;
            const CompanyMasterEmailId: any;
            const CompanyMasterOffNo: any;
            const CompanyMasterFinancialYearMasterId: any;
            const CompanyMasterCreatedDateTime: any;
            const CompanyMasterMarkDeleted: any;
            const CompanyMasterSmtpServerName: any;
            const CompanyMasterSmtpPortNo: any;
            const CompanyMasterSmtpUserName: any;
            const CompanyMasterSmtpPassword: any;
            const CompanyMasterIsAuditTrail: any;
            const CompanyMasterIsenablessl: any;
            const LocationMasterLocationName: any;
            const LocationMasterLocationCode: any;
            const LocationMasterCreatedDateTime: any;
            const LocationMasterMarkDeleted: any;
            const LocationMasterCompanyGroupId: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace CompanyLocationsService {
        const baseUrl = "Default/CompanyLocations";
        function Create(request: Serenity.SaveRequest<CompanyLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyLocationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyLocationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class CompanyMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface CompanyMasterForm {
        CompanyName: Serenity.StringEditor;
        CompanyGroupId: Serenity.IntegerEditor;
        CompanyDetails: Serenity.StringEditor;
        EmailId: Serenity.StringEditor;
        OffNo: Serenity.StringEditor;
        FinancialYearMasterId: Serenity.IntegerEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        SmtpServerName: Serenity.StringEditor;
        SmtpPortNo: Serenity.StringEditor;
        SmtpUserName: Serenity.StringEditor;
        SmtpPassword: Serenity.StringEditor;
        IsAuditTrail: Serenity.BooleanEditor;
        Isenablessl: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface CompanyMasterRow {
        CompanyMasterId?: number;
        CompanyName?: string;
        CompanyGroupId?: number;
        CompanyDetails?: string;
        EmailId?: string;
        OffNo?: string;
        FinancialYearMasterId?: number;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        SmtpServerName?: string;
        SmtpPortNo?: string;
        SmtpUserName?: string;
        SmtpPassword?: string;
        IsAuditTrail?: boolean;
        Isenablessl?: boolean;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
        FinancialYearMasterStartDate?: string;
        FinancialYearMasterEndDate?: number;
        FinancialYearMasterCreatedDeteTime?: string;
        FinancialYearMasterMarkDeleted?: boolean;
        FinancialYearMasterCompanyGroupId?: number;
    }
    namespace CompanyMasterRow {
        const idProperty = "CompanyMasterId";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Default.CompanyMaster";
        namespace Fields {
            const CompanyMasterId: any;
            const CompanyName: any;
            const CompanyGroupId: any;
            const CompanyDetails: any;
            const EmailId: any;
            const OffNo: any;
            const FinancialYearMasterId: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const SmtpServerName: any;
            const SmtpPortNo: any;
            const SmtpUserName: any;
            const SmtpPassword: any;
            const IsAuditTrail: any;
            const Isenablessl: any;
            const CompanyGroupGroupName: any;
            const CompanyGroupCreatedDeteTime: any;
            const CompanyGroupMarkDeleted: any;
            const FinancialYearMasterStartDate: any;
            const FinancialYearMasterEndDate: any;
            const FinancialYearMasterCreatedDeteTime: any;
            const FinancialYearMasterMarkDeleted: any;
            const FinancialYearMasterCompanyGroupId: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace CompanyMasterService {
        const baseUrl = "Default/CompanyMaster";
        function Create(request: Serenity.SaveRequest<CompanyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CompanyMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CompanyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CompanyMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DepartmentsForm {
        DepartmentName: Serenity.StringEditor;
        DepartmentCode: Serenity.StringEditor;
        CompanyLocationId: Serenity.IntegerEditor;
        DivisionId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface DepartmentsRow {
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
    namespace DepartmentsRow {
        const idProperty = "DepartmentId";
        const nameProperty = "DepartmentName";
        const localTextPrefix = "Default.Departments";
        namespace Fields {
            const DepartmentId: any;
            const DepartmentName: any;
            const DepartmentCode: any;
            const CompanyLocationId: any;
            const DivisionId: any;
            const Details: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const CompanyLocationCompanyMasterId: any;
            const CompanyLocationLocationMasterId: any;
            const CompanyLocationCreatedDateTime: any;
            const CompanyLocationMarkDeleted: any;
            const DivisionDivisionName: any;
            const DivisionDivisionCode: any;
            const DivisionCompanyMasterId: any;
            const DivisionDetails: any;
            const DivisionCreatedDateTime: any;
            const DivisionMarkDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace DepartmentsService {
        const baseUrl = "Default/Departments";
        function Create(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class DesignationsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DesignationsForm {
        DesignationName: Serenity.StringEditor;
        DesignationCode: Serenity.StringEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface DesignationsRow {
        DesignationId?: number;
        DesignationName?: string;
        DesignationCode?: string;
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
    namespace DesignationsRow {
        const idProperty = "DesignationId";
        const nameProperty = "DesignationName";
        const localTextPrefix = "Default.Designations";
        namespace Fields {
            const DesignationId: any;
            const DesignationName: any;
            const DesignationCode: any;
            const CompanyMasterId: any;
            const Details: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const CompanyMasterCompanyName: any;
            const CompanyMasterCompanyGroupId: any;
            const CompanyMasterCompanyDetails: any;
            const CompanyMasterLocations: any;
            const CompanyMasterEmailId: any;
            const CompanyMasterOffNo: any;
            const CompanyMasterFinancialYearMasterId: any;
            const CompanyMasterCreatedDateTime: any;
            const CompanyMasterMarkDeleted: any;
            const CompanyMasterSmtpServerName: any;
            const CompanyMasterSmtpPortNo: any;
            const CompanyMasterSmtpUserName: any;
            const CompanyMasterSmtpPassword: any;
            const CompanyMasterIsAuditTrail: any;
            const CompanyMasterIsenablessl: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace DesignationsService {
        const baseUrl = "Default/Designations";
        function Create(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DesignationsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class DivisionMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface DivisionMasterForm {
        DivisionName: Serenity.StringEditor;
        DivisionCode: Serenity.StringEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface DivisionMasterRow {
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
    namespace DivisionMasterRow {
        const idProperty = "DivisionId";
        const nameProperty = "DivisionName";
        const localTextPrefix = "Default.DivisionMaster";
        namespace Fields {
            const DivisionId: any;
            const DivisionName: any;
            const DivisionCode: any;
            const CompanyMasterId: any;
            const Details: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const CompanyMasterCompanyName: any;
            const CompanyMasterCompanyGroupId: any;
            const CompanyMasterCompanyDetails: any;
            const CompanyMasterLocations: any;
            const CompanyMasterEmailId: any;
            const CompanyMasterOffNo: any;
            const CompanyMasterFinancialYearMasterId: any;
            const CompanyMasterCreatedDateTime: any;
            const CompanyMasterMarkDeleted: any;
            const CompanyMasterSmtpServerName: any;
            const CompanyMasterSmtpPortNo: any;
            const CompanyMasterSmtpUserName: any;
            const CompanyMasterSmtpPassword: any;
            const CompanyMasterIsAuditTrail: any;
            const CompanyMasterIsenablessl: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace DivisionMasterService {
        const baseUrl = "Default/DivisionMaster";
        function Create(request: Serenity.SaveRequest<DivisionMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DivisionMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DivisionMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DivisionMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class FinancialYearMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface FinancialYearMasterForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.IntegerEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        CompanyGroupId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.Default {
    interface FinancialYearMasterRow {
        FinancialYearMasterId?: number;
        StartDate?: string;
        EndDate?: number;
        CreatedDeteTime?: string;
        MarkDeleted?: boolean;
        CompanyGroupId?: number;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
    }
    namespace FinancialYearMasterRow {
        const idProperty = "FinancialYearMasterId";
        const localTextPrefix = "Default.FinancialYearMaster";
        namespace Fields {
            const FinancialYearMasterId: any;
            const StartDate: any;
            const EndDate: any;
            const CreatedDeteTime: any;
            const MarkDeleted: any;
            const CompanyGroupId: any;
            const CompanyGroupGroupName: any;
            const CompanyGroupCreatedDeteTime: any;
            const CompanyGroupMarkDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace FinancialYearMasterService {
        const baseUrl = "Default/FinancialYearMaster";
        function Create(request: Serenity.SaveRequest<FinancialYearMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<FinancialYearMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FinancialYearMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FinancialYearMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class GenderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GenderForm {
        Gender: Serenity.StringEditor;
    }
}
declare namespace ESignature.Default {
    interface GenderRow {
        Id?: number;
        Gender?: string;
    }
    namespace GenderRow {
        const idProperty = "Id";
        const nameProperty = "Gender";
        const localTextPrefix = "Default.Gender";
        namespace Fields {
            const Id: any;
            const Gender: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace GenderService {
        const baseUrl = "Default/Gender";
        function Create(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class LocationMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface LocationMasterForm {
        LocationName: Serenity.StringEditor;
        LocationCode: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        CompanyGroupId: Serenity.IntegerEditor;
    }
}
declare namespace ESignature.Default {
    interface LocationMasterRow {
        LocationMasterId?: number;
        LocationName?: string;
        LocationCode?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        CompanyGroupId?: number;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
    }
    namespace LocationMasterRow {
        const idProperty = "LocationMasterId";
        const nameProperty = "LocationName";
        const localTextPrefix = "Default.LocationMaster";
        namespace Fields {
            const LocationMasterId: any;
            const LocationName: any;
            const LocationCode: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const CompanyGroupId: any;
            const CompanyGroupGroupName: any;
            const CompanyGroupCreatedDeteTime: any;
            const CompanyGroupMarkDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace LocationMasterService {
        const baseUrl = "Default/LocationMaster";
        function Create(request: Serenity.SaveRequest<LocationMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LocationMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LocationMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LocationMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class MaretialStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MaretialStatusForm {
        MaretialStatus: Serenity.StringEditor;
    }
}
declare namespace ESignature.Default {
    interface MaretialStatusRow {
        Id?: number;
        MaretialStatus?: string;
    }
    namespace MaretialStatusRow {
        const idProperty = "Id";
        const nameProperty = "MaretialStatus";
        const localTextPrefix = "Default.MaretialStatus";
        namespace Fields {
            const Id: any;
            const MaretialStatus: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace MaretialStatusService {
        const baseUrl = "Default/MaretialStatus";
        function Create(request: Serenity.SaveRequest<MaretialStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaretialStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaretialStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaretialStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class OrganizationAccessPointsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrganizationAccessPointsForm {
        OrganizationId: Serenity.IntegerEditor;
        AccessPointName: Serenity.StringEditor;
        AccessPointCode: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        LocationCoordinates: Serenity.StringEditor;
        Range: Serenity.StringEditor;
        DateTime: Serenity.DateEditor;
        IsDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface OrganizationAccessPointsRow {
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
    namespace OrganizationAccessPointsRow {
        const idProperty = "Id";
        const nameProperty = "AccessPointName";
        const localTextPrefix = "Default.OrganizationAccessPoints";
        namespace Fields {
            const Id: any;
            const OrganizationId: any;
            const AccessPointName: any;
            const AccessPointCode: any;
            const Location: any;
            const LocationCoordinates: any;
            const Range: any;
            const DateTime: any;
            const IsDeleted: any;
            const OrganizationOrganizationName: any;
            const OrganizationEmail: any;
            const OrganizationCity: any;
            const OrganizationState: any;
            const OrganizationCountry: any;
            const OrganizationPin: any;
            const OrganizationAddress1: any;
            const OrganizationAddress2: any;
            const OrganizationPhoneNumber: any;
            const OrganizationFax: any;
            const OrganizationDescription: any;
            const OrganizationIsDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace OrganizationAccessPointsService {
        const baseUrl = "Default/OrganizationAccessPoints";
        function Create(request: Serenity.SaveRequest<OrganizationAccessPointsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrganizationAccessPointsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrganizationAccessPointsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrganizationAccessPointsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class OrganizationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrganizationForm {
        OrganizationName: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Pin: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        IsDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface OrganizationRow {
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
    namespace OrganizationRow {
        const idProperty = "Id";
        const nameProperty = "OrganizationName";
        const localTextPrefix = "Default.Organization";
        namespace Fields {
            const Id: any;
            const OrganizationName: any;
            const Email: any;
            const City: any;
            const State: any;
            const Country: any;
            const Pin: any;
            const Address1: any;
            const Address2: any;
            const PhoneNumber: any;
            const Fax: any;
            const Description: any;
            const IsDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace OrganizationService {
        const baseUrl = "Default/Organization";
        function Create(request: Serenity.SaveRequest<OrganizationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrganizationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrganizationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrganizationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class OrginizationEmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface OrginizationEmployeeForm {
        OrganizationId: Serenity.IntegerEditor;
        Salutation: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Gender: Serenity.StringEditor;
        DateOfBirth: Serenity.StringEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        CardNo: Serenity.StringEditor;
        AccessPointString: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        ImeiNumber: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Pin: Serenity.StringEditor;
        Address1: Serenity.StringEditor;
        Address2: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        IsDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface OrginizationEmployeeRow {
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
    namespace OrginizationEmployeeRow {
        const idProperty = "Id";
        const nameProperty = "Salutation";
        const localTextPrefix = "Default.OrginizationEmployee";
        namespace Fields {
            const Id: any;
            const OrganizationId: any;
            const Salutation: any;
            const FirstName: any;
            const LastName: any;
            const Gender: any;
            const DateOfBirth: any;
            const StartDate: any;
            const EndDate: any;
            const CardNo: any;
            const AccessPointString: any;
            const MobileNumber: any;
            const ImeiNumber: any;
            const City: any;
            const State: any;
            const Fax: any;
            const Country: any;
            const Pin: any;
            const Address1: any;
            const Address2: any;
            const Description: any;
            const IsDeleted: any;
            const OrganizationOrganizationName: any;
            const OrganizationEmail: any;
            const OrganizationCity: any;
            const OrganizationState: any;
            const OrganizationCountry: any;
            const OrganizationPin: any;
            const OrganizationAddress1: any;
            const OrganizationAddress2: any;
            const OrganizationPhoneNumber: any;
            const OrganizationFax: any;
            const OrganizationDescription: any;
            const OrganizationIsDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace OrginizationEmployeeService {
        const baseUrl = "Default/OrginizationEmployee";
        function Create(request: Serenity.SaveRequest<OrginizationEmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrginizationEmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrginizationEmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrginizationEmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class SalutationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalutationForm {
        SalutationName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Default {
    interface SalutationRow {
        Id?: number;
        SalutationName?: string;
    }
    namespace SalutationRow {
        const idProperty = "Id";
        const nameProperty = "SalutationName";
        const localTextPrefix = "Default.Salutation";
        namespace Fields {
            const Id: any;
            const SalutationName: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace SalutationService {
        const baseUrl = "Default/Salutation";
        function Create(request: Serenity.SaveRequest<SalutationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalutationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalutationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalutationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Default {
    class SubDepartmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SubDepartmentsForm {
        SubDepartmentName: Serenity.StringEditor;
        SubDepartmentCode: Serenity.StringEditor;
        DepartmentId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Default {
    interface SubDepartmentsRow {
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
    namespace SubDepartmentsRow {
        const idProperty = "SubDepartmentId";
        const nameProperty = "SubDepartmentName";
        const localTextPrefix = "Default.SubDepartments";
        namespace Fields {
            const SubDepartmentId: any;
            const SubDepartmentName: any;
            const SubDepartmentCode: any;
            const DepartmentId: any;
            const Details: any;
            const CreatedDateTime: any;
            const MarkDeleted: any;
            const DepartmentDepartmentName: any;
            const DepartmentDepartmentCode: any;
            const DepartmentCompanyLocationId: any;
            const DepartmentDivisionId: any;
            const DepartmentDetails: any;
            const DepartmentCreatedDateTime: any;
            const DepartmentMarkDeleted: any;
        }
    }
}
declare namespace ESignature.Default {
    namespace SubDepartmentsService {
        const baseUrl = "Default/SubDepartments";
        function Create(request: Serenity.SaveRequest<SubDepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SubDepartmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SubDepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SubDepartmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Employee {
    class EmployeeMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeMasterForm {
        EmployeeCode: Serenity.StringEditor;
        SalutationId: Serenity.IntegerEditor;
        DepartmentId: Serenity.IntegerEditor;
        CompanyLocationId: Serenity.IntegerEditor;
        DesignationId: Serenity.IntegerEditor;
        GenderId: Serenity.IntegerEditor;
        DivisionId: Serenity.IntegerEditor;
        SubDepartmentId: Serenity.IntegerEditor;
        MaretialStatusId: Serenity.IntegerEditor;
        EmployeeTypeId: Serenity.IntegerEditor;
        EmploymentTypeId: Serenity.IntegerEditor;
        BloodGroupId: Serenity.IntegerEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        DateofBirth: Serenity.DateEditor;
        DateOfJoining: Serenity.DateEditor;
        ResignDate: Serenity.DateEditor;
        EmailAddress: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ManagerId: Serenity.IntegerEditor;
        AadharCardNo: Serenity.StringEditor;
        IsExpiryAllowed: Serenity.BooleanEditor;
        CardExpiry: Serenity.DateEditor;
        PhotoPath: Serenity.StringEditor;
        MarkDeleted: Serenity.BooleanEditor;
        Extra1: Serenity.StringEditor;
        Extra2: Serenity.StringEditor;
        Extra3: Serenity.StringEditor;
        Extra4: Serenity.StringEditor;
        Extra5: Serenity.StringEditor;
        IsEmployeeLogin: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Employee {
    interface EmployeeMasterRow {
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
    namespace EmployeeMasterRow {
        const idProperty = "EmployeeMasterId";
        const nameProperty = "EmployeeCode";
        const localTextPrefix = "Employee.EmployeeMaster";
        namespace Fields {
            const EmployeeMasterId: any;
            const EmployeeCode: any;
            const SalutationId: any;
            const DepartmentId: any;
            const CompanyLocationId: any;
            const DesignationId: any;
            const GenderId: any;
            const DivisionId: any;
            const SubDepartmentId: any;
            const MaretialStatusId: any;
            const EmployeeTypeId: any;
            const EmploymentTypeId: any;
            const BloodGroupId: any;
            const CompanyMasterId: any;
            const FirstName: any;
            const MiddleName: any;
            const LastName: any;
            const MobileNumber: any;
            const City: any;
            const State: any;
            const Country: any;
            const Address: any;
            const DateofBirth: any;
            const DateOfJoining: any;
            const ResignDate: any;
            const EmailAddress: any;
            const Email: any;
            const ManagerId: any;
            const AadharCardNo: any;
            const IsExpiryAllowed: any;
            const CardExpiry: any;
            const PhotoPath: any;
            const MarkDeleted: any;
            const Extra1: any;
            const Extra2: any;
            const Extra3: any;
            const Extra4: any;
            const Extra5: any;
            const IsEmployeeLogin: any;
            const SalutationSalutationName: any;
            const DepartmentDepartmentName: any;
            const DepartmentDepartmentCode: any;
            const DepartmentCompanyLocationId: any;
            const DepartmentDivisionId: any;
            const DepartmentDetails: any;
            const DepartmentCreatedDateTime: any;
            const DepartmentMarkDeleted: any;
            const CompanyLocationCompanyMasterId: any;
            const CompanyLocationLocationMasterId: any;
            const CompanyLocationCreatedDateTime: any;
            const CompanyLocationMarkDeleted: any;
            const DesignationDesignationName: any;
            const DesignationDesignationCode: any;
            const DesignationCompanyMasterId: any;
            const DesignationDetails: any;
            const DesignationCreatedDateTime: any;
            const DesignationMarkDeleted: any;
            const GenderGenderName: any;
            const DivisionDivisionName: any;
            const DivisionDivisionCode: any;
            const DivisionCompanyMasterId: any;
            const DivisionDetails: any;
            const DivisionCreatedDateTime: any;
            const DivisionMarkDeleted: any;
            const SubDepartmentSubDepartmentName: any;
            const SubDepartmentSubDepartmentCode: any;
            const SubDepartmentDepartmentId: any;
            const SubDepartmentDetails: any;
            const SubDepartmentCreatedDateTime: any;
            const SubDepartmentMarkDeleted: any;
            const MaretialStatusMaretialStatusName: any;
            const EmployeeTypeEmployeeTypeName: any;
            const EmploymentTypeEmploymentTypeName: any;
            const BloodGroup: any;
            const CompanyMasterCompanyName: any;
            const CompanyMasterCompanyGroupId: any;
            const CompanyMasterCompanyDetails: any;
            const CompanyMasterLocations: any;
            const CompanyMasterEmailId: any;
            const CompanyMasterOffNo: any;
            const CompanyMasterFinancialYearMasterId: any;
            const CompanyMasterCreatedDateTime: any;
            const CompanyMasterMarkDeleted: any;
            const CompanyMasterSmtpServerName: any;
            const CompanyMasterSmtpPortNo: any;
            const CompanyMasterSmtpUserName: any;
            const CompanyMasterSmtpPassword: any;
            const CompanyMasterIsAuditTrail: any;
            const CompanyMasterIsenablessl: any;
        }
    }
}
declare namespace ESignature.Employee {
    namespace EmployeeMasterService {
        const baseUrl = "Employee/EmployeeMaster";
        function Create(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Employee {
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeesForm {
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Extension: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        ReportsTo: Serenity.IntegerEditor;
        PhotoPath: Serenity.StringEditor;
    }
}
declare namespace ESignature.Employee {
    interface EmployeesRow {
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
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "LastName";
        const localTextPrefix = "Employee.Employees";
        namespace Fields {
            const EmployeeId: any;
            const LastName: any;
            const FirstName: any;
            const Title: any;
            const TitleOfCourtesy: any;
            const BirthDate: any;
            const HireDate: any;
            const Address: any;
            const City: any;
            const Region: any;
            const PostalCode: any;
            const Country: any;
            const HomePhone: any;
            const Extension: any;
            const Photo: any;
            const Notes: any;
            const ReportsTo: any;
            const PhotoPath: any;
            const ReportsToLastName: any;
            const ReportsToFirstName: any;
            const ReportsToTitle: any;
            const ReportsToTitleOfCourtesy: any;
            const ReportsToBirthDate: any;
            const ReportsToHireDate: any;
            const ReportsToAddress: any;
            const ReportsToCity: any;
            const ReportsToRegion: any;
            const ReportsToPostalCode: any;
            const ReportsToCountry: any;
            const ReportsToHomePhone: any;
            const ReportsToExtension: any;
            const ReportsToPhoto: any;
            const ReportsToNotes: any;
            const ReportsTo1: any;
            const ReportsToPhotoPath: any;
        }
    }
}
declare namespace ESignature.Employee {
    namespace EmployeesService {
        const baseUrl = "Employee/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace ESignature {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace ESignature {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace ESignature {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace ESignature.Master {
    class BloodGroupsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BloodGroupsForm {
        BloodGroup: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface BloodGroupsRow {
        BloodGroupId?: number;
        BloodGroup?: string;
    }
    namespace BloodGroupsRow {
        const idProperty = "BloodGroupId";
        const nameProperty = "BloodGroup";
        const localTextPrefix = "Master.BloodGroups";
        namespace Fields {
            const BloodGroupId: any;
            const BloodGroup: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace BloodGroupsService {
        const baseUrl = "Master/BloodGroups";
        function Create(request: Serenity.SaveRequest<BloodGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BloodGroupsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BloodGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BloodGroupsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Master {
    class EmployeeTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeTypeForm {
        EmployeeTypeName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface EmployeeTypeRow {
        EmployeeTypeId?: number;
        EmployeeTypeName?: string;
    }
    namespace EmployeeTypeRow {
        const idProperty = "EmployeeTypeId";
        const nameProperty = "EmployeeTypeName";
        const localTextPrefix = "Master.EmployeeType";
        namespace Fields {
            const EmployeeTypeId: any;
            const EmployeeTypeName: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace EmployeeTypeService {
        const baseUrl = "Master/EmployeeType";
        function Create(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Master {
    class EmploymentTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmploymentTypesForm {
        EmploymentTypeName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface EmploymentTypesRow {
        EmploymentTypeId?: number;
        EmploymentTypeName?: string;
    }
    namespace EmploymentTypesRow {
        const idProperty = "EmploymentTypeId";
        const nameProperty = "EmploymentTypeName";
        const localTextPrefix = "Master.EmploymentTypes";
        namespace Fields {
            const EmploymentTypeId: any;
            const EmploymentTypeName: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace EmploymentTypesService {
        const baseUrl = "Master/EmploymentTypes";
        function Create(request: Serenity.SaveRequest<EmploymentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmploymentTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmploymentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmploymentTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Master {
    class GenderForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface GenderForm {
        GenderName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface GenderRow {
        GenderId?: number;
        GenderName?: string;
    }
    namespace GenderRow {
        const idProperty = "GenderId";
        const nameProperty = "GenderName";
        const localTextPrefix = "Master.Gender";
        namespace Fields {
            const GenderId: any;
            const GenderName: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace GenderService {
        const baseUrl = "Master/Gender";
        function Create(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GenderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GenderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Master {
    class MaretialStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface MaretialStatusForm {
        MaretialStatusName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface MaretialStatusRow {
        MaretialStatusId?: number;
        MaretialStatusName?: string;
    }
    namespace MaretialStatusRow {
        const idProperty = "MaretialStatusId";
        const nameProperty = "MaretialStatusName";
        const localTextPrefix = "Master.MaretialStatus";
        namespace Fields {
            const MaretialStatusId: any;
            const MaretialStatusName: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace MaretialStatusService {
        const baseUrl = "Master/MaretialStatus";
        function Create(request: Serenity.SaveRequest<MaretialStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MaretialStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MaretialStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MaretialStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Master {
    class SalutationForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface SalutationForm {
        SalutationName: Serenity.StringEditor;
    }
}
declare namespace ESignature.Master {
    interface SalutationRow {
        SalutationId?: number;
        SalutationName?: string;
    }
    namespace SalutationRow {
        const idProperty = "SalutationId";
        const nameProperty = "SalutationName";
        const localTextPrefix = "Master.Salutation";
        namespace Fields {
            const SalutationId: any;
            const SalutationName: any;
        }
    }
}
declare namespace ESignature.Master {
    namespace SalutationService {
        const baseUrl = "Master/Salutation";
        function Create(request: Serenity.SaveRequest<SalutationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalutationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalutationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalutationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ESignature.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ESignature.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ESignature.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ESignature.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ESignature.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ESignature {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ESignature.Test {
    class EmployeeMasterForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface EmployeeMasterForm {
        EmployeeCode: Serenity.StringEditor;
        SalutationId: Serenity.IntegerEditor;
        DepartmentId: Serenity.IntegerEditor;
        CompanyLocationId: Serenity.IntegerEditor;
        DesignationId: Serenity.IntegerEditor;
        GenderId: Serenity.IntegerEditor;
        DivisionId: Serenity.IntegerEditor;
        SubDepartmentId: Serenity.IntegerEditor;
        MaretialStatusId: Serenity.IntegerEditor;
        EmployeeTypeId: Serenity.IntegerEditor;
        EmploymentTypeId: Serenity.IntegerEditor;
        BloodGroupId: Serenity.IntegerEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        FirstName: Serenity.StringEditor;
        MiddleName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        MobileNumber: Serenity.StringEditor;
        City: Serenity.StringEditor;
        State: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        DateofBirth: Serenity.DateEditor;
        DateOfJoining: Serenity.DateEditor;
        ResignDate: Serenity.DateEditor;
        EmailAddress: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ManagerId: Serenity.IntegerEditor;
        AadharCardNo: Serenity.StringEditor;
        IsExpiryAllowed: Serenity.BooleanEditor;
        CardExpiry: Serenity.DateEditor;
        PhotoPath: Serenity.StringEditor;
        MarkDeleted: Serenity.BooleanEditor;
        Extra1: Serenity.StringEditor;
        Extra2: Serenity.StringEditor;
        Extra3: Serenity.StringEditor;
        Extra4: Serenity.StringEditor;
        Extra5: Serenity.StringEditor;
        IsEmployeeLogin: Serenity.BooleanEditor;
    }
}
declare namespace ESignature.Test {
    interface EmployeeMasterRow {
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
        EmploymentType?: string;
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
    namespace EmployeeMasterRow {
        const idProperty = "EmployeeMasterId";
        const nameProperty = "EmployeeCode";
        const localTextPrefix = "Test.EmployeeMaster";
        namespace Fields {
            const EmployeeMasterId: any;
            const EmployeeCode: any;
            const SalutationId: any;
            const DepartmentId: any;
            const CompanyLocationId: any;
            const DesignationId: any;
            const GenderId: any;
            const DivisionId: any;
            const SubDepartmentId: any;
            const MaretialStatusId: any;
            const EmployeeTypeId: any;
            const EmploymentTypeId: any;
            const BloodGroupId: any;
            const CompanyMasterId: any;
            const FirstName: any;
            const MiddleName: any;
            const LastName: any;
            const MobileNumber: any;
            const City: any;
            const State: any;
            const Country: any;
            const Address: any;
            const DateofBirth: any;
            const DateOfJoining: any;
            const ResignDate: any;
            const EmailAddress: any;
            const Email: any;
            const ManagerId: any;
            const AadharCardNo: any;
            const IsExpiryAllowed: any;
            const CardExpiry: any;
            const PhotoPath: any;
            const MarkDeleted: any;
            const Extra1: any;
            const Extra2: any;
            const Extra3: any;
            const Extra4: any;
            const Extra5: any;
            const IsEmployeeLogin: any;
            const SalutationSalutationName: any;
            const DepartmentDepartmentName: any;
            const DepartmentDepartmentCode: any;
            const DepartmentCompanyLocationId: any;
            const DepartmentDivisionId: any;
            const DepartmentDetails: any;
            const DepartmentCreatedDateTime: any;
            const DepartmentMarkDeleted: any;
            const CompanyLocationCompanyMasterId: any;
            const CompanyLocationLocationMasterId: any;
            const CompanyLocationCreatedDateTime: any;
            const CompanyLocationMarkDeleted: any;
            const DesignationDesignationName: any;
            const DesignationDesignationCode: any;
            const DesignationCompanyMasterId: any;
            const DesignationDetails: any;
            const DesignationCreatedDateTime: any;
            const DesignationMarkDeleted: any;
            const GenderGenderName: any;
            const DivisionDivisionName: any;
            const DivisionDivisionCode: any;
            const DivisionCompanyMasterId: any;
            const DivisionDetails: any;
            const DivisionCreatedDateTime: any;
            const DivisionMarkDeleted: any;
            const SubDepartmentSubDepartmentName: any;
            const SubDepartmentSubDepartmentCode: any;
            const SubDepartmentDepartmentId: any;
            const SubDepartmentDetails: any;
            const SubDepartmentCreatedDateTime: any;
            const SubDepartmentMarkDeleted: any;
            const MaretialStatusMaretialStatusName: any;
            const EmployeeTypeEmployeeTypeName: any;
            const EmploymentType: any;
            const BloodGroup: any;
            const CompanyMasterCompanyName: any;
            const CompanyMasterCompanyGroupId: any;
            const CompanyMasterCompanyDetails: any;
            const CompanyMasterLocations: any;
            const CompanyMasterEmailId: any;
            const CompanyMasterOffNo: any;
            const CompanyMasterFinancialYearMasterId: any;
            const CompanyMasterCreatedDateTime: any;
            const CompanyMasterMarkDeleted: any;
            const CompanyMasterSmtpServerName: any;
            const CompanyMasterSmtpPortNo: any;
            const CompanyMasterSmtpUserName: any;
            const CompanyMasterSmtpPassword: any;
            const CompanyMasterIsAuditTrail: any;
            const CompanyMasterIsenablessl: any;
        }
    }
}
declare namespace ESignature.Test {
    namespace EmployeeMasterService {
        const baseUrl = "Test/EmployeeMaster";
        function Create(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeMasterRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeMasterRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.VersionInfo {
    class VersionInfoForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface VersionInfoForm {
        AppliedOn: Serenity.DateEditor;
        Description: Serenity.StringEditor;
    }
}
declare namespace ESignature.VersionInfo {
    interface VersionInfoRow {
        Version?: number;
        AppliedOn?: string;
        Description?: string;
    }
    namespace VersionInfoRow {
        const idProperty = "Version";
        const nameProperty = "Description";
        const localTextPrefix = "VersionInfo.VersionInfo";
        namespace Fields {
            const Version: any;
            const AppliedOn: any;
            const Description: any;
        }
    }
}
declare namespace ESignature.VersionInfo {
    namespace VersionInfoService {
        const baseUrl = "VersionInfo/VersionInfo";
        function Create(request: Serenity.SaveRequest<VersionInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VersionInfoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VersionInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VersionInfoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace ESignature.LanguageList {
    function getValue(): string[][];
}
declare namespace ESignature.ScriptInitialization {
}
declare namespace ESignature.AccessEmployee {
    class EmployeeFunctionCardsDialog extends Serenity.EntityDialog<EmployeeFunctionCardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeeFunctionCardsForm;
    }
}
declare namespace ESignature.AccessEmployee {
    class EmployeeFunctionCardsGrid extends Serenity.EntityGrid<EmployeeFunctionCardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeFunctionCardsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Admin {
    class CompanyGroupDialog extends Serenity.EntityDialog<CompanyGroupRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CompanyGroupForm;
    }
}
declare namespace ESignature.Admin {
    class CompanyGroupGrid extends Serenity.EntityGrid<CompanyGroupRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyGroupDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Admin {
    class CompanyMasterDialog extends Serenity.EntityDialog<CompanyMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CompanyMasterForm;
    }
}
declare namespace ESignature.Admin {
    class CompanyMasterGrid extends Serenity.EntityGrid<CompanyMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Admin {
    class FinancialYearMasterDialog extends Serenity.EntityDialog<FinancialYearMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: FinancialYearMasterForm;
    }
}
declare namespace ESignature.Admin {
    class FinancialYearMasterGrid extends Serenity.EntityGrid<FinancialYearMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof FinancialYearMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ESignature.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ESignature.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ESignature.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ESignature.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace ESignature.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ESignature.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ESignature.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ESignature.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ESignature.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ESignature.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ESignature.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace ESignature.CardManagement {
    class CardPoolDialog extends Serenity.EntityDialog<CardPoolRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CardPoolForm;
    }
}
declare namespace ESignature.CardManagement {
    class CardPoolGrid extends Serenity.EntityGrid<CardPoolRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CardPoolDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardActivityDialog extends Serenity.EntityDialog<MasterCardActivityRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MasterCardActivityForm;
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardActivityGrid extends Serenity.EntityGrid<MasterCardActivityRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterCardActivityDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardStatusDialog extends Serenity.EntityDialog<MasterCardStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MasterCardStatusForm;
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardStatusGrid extends Serenity.EntityGrid<MasterCardStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterCardStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTechnologyDialog extends Serenity.EntityDialog<MasterCardTechnologyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MasterCardTechnologyForm;
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTechnologyGrid extends Serenity.EntityGrid<MasterCardTechnologyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterCardTechnologyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTypeDialog extends Serenity.EntityDialog<MasterCardTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MasterCardTypeForm;
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardTypeGrid extends Serenity.EntityGrid<MasterCardTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterCardTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardUseTypeDialog extends Serenity.EntityDialog<MasterCardUseTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MasterCardUseTypeForm;
    }
}
declare namespace ESignature.CardManagement {
    class MasterCardUseTypeGrid extends Serenity.EntityGrid<MasterCardUseTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MasterCardUseTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace ESignature.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace ESignature.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace ESignature.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace ESignature.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace ESignature.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace ESignature.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace ESignature {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace ESignature.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace ESignature.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ESignature.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace ESignature.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace ESignature.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace ESignature.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace ESignature.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace ESignature.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace ESignature.Controller {
    class ControllerAuthenticationTypeDialog extends Serenity.EntityDialog<ControllerAuthenticationTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ControllerAuthenticationTypeForm;
    }
}
declare namespace ESignature.Controller {
    class ControllerAuthenticationTypeGrid extends Serenity.EntityGrid<ControllerAuthenticationTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ControllerAuthenticationTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Default {
    class CompanyLocationsDialog extends Serenity.EntityDialog<CompanyLocationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: CompanyLocationsForm;
    }
}
declare namespace ESignature.Default {
    class CompanyLocationsGrid extends Serenity.EntityGrid<CompanyLocationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CompanyLocationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Default {
    class DepartmentsDialog extends Serenity.EntityDialog<DepartmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DepartmentsForm;
    }
}
declare namespace ESignature.Default {
    class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DepartmentsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Default {
    class DesignationsDialog extends Serenity.EntityDialog<DesignationsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DesignationsForm;
    }
}
declare namespace ESignature.Default {
    class DesignationsGrid extends Serenity.EntityGrid<DesignationsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Default {
    class DivisionMasterDialog extends Serenity.EntityDialog<DivisionMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DivisionMasterForm;
    }
}
declare namespace ESignature.Default {
    class DivisionMasterGrid extends Serenity.EntityGrid<DivisionMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DivisionMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Default {
    class LocationMasterDialog extends Serenity.EntityDialog<LocationMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LocationMasterForm;
    }
}
declare namespace ESignature.Default {
    class LocationMasterGrid extends Serenity.EntityGrid<LocationMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LocationMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Default {
    class SubDepartmentsDialog extends Serenity.EntityDialog<SubDepartmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SubDepartmentsForm;
    }
}
declare namespace ESignature.Default {
    class SubDepartmentsGrid extends Serenity.EntityGrid<SubDepartmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SubDepartmentsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Employee {
    class EmployeeMasterDialog extends Serenity.EntityDialog<EmployeeMasterRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeeMasterForm;
    }
}
declare namespace ESignature.Employee {
    class EmployeeMasterGrid extends Serenity.EntityGrid<EmployeeMasterRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeMasterDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace ESignature.Master {
    class BloodGroupsDialog extends Serenity.EntityDialog<BloodGroupsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BloodGroupsForm;
    }
}
declare namespace ESignature.Master {
    class BloodGroupsGrid extends Serenity.EntityGrid<BloodGroupsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BloodGroupsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Master {
    class EmployeeTypeDialog extends Serenity.EntityDialog<EmployeeTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeeTypeForm;
    }
}
declare namespace ESignature.Master {
    class EmployeeTypeGrid extends Serenity.EntityGrid<EmployeeTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Master {
    class EmploymentTypesDialog extends Serenity.EntityDialog<EmploymentTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmploymentTypesForm;
    }
}
declare namespace ESignature.Master {
    class EmploymentTypesGrid extends Serenity.EntityGrid<EmploymentTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmploymentTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Master {
    class GenderDialog extends Serenity.EntityDialog<GenderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: GenderForm;
    }
}
declare namespace ESignature.Master {
    class GenderGrid extends Serenity.EntityGrid<GenderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof GenderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Master {
    class MaretialStatusDialog extends Serenity.EntityDialog<MaretialStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MaretialStatusForm;
    }
}
declare namespace ESignature.Master {
    class MaretialStatusGrid extends Serenity.EntityGrid<MaretialStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MaretialStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Master {
    class SalutationDialog extends Serenity.EntityDialog<SalutationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SalutationForm;
    }
}
declare namespace ESignature.Master {
    class SalutationGrid extends Serenity.EntityGrid<SalutationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalutationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ESignature.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ESignature.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
