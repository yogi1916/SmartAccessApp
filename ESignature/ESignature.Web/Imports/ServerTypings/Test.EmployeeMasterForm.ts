
namespace ESignature.Test {
    export class EmployeeMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Test.EmployeeMaster';
    }

    export interface EmployeeMasterForm {
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

    [,
        ['EmployeeCode', () => Serenity.StringEditor],
        ['SalutationId', () => Serenity.IntegerEditor],
        ['DepartmentId', () => Serenity.IntegerEditor],
        ['CompanyLocationId', () => Serenity.IntegerEditor],
        ['DesignationId', () => Serenity.IntegerEditor],
        ['GenderId', () => Serenity.IntegerEditor],
        ['DivisionId', () => Serenity.IntegerEditor],
        ['SubDepartmentId', () => Serenity.IntegerEditor],
        ['MaretialStatusId', () => Serenity.IntegerEditor],
        ['EmployeeTypeId', () => Serenity.IntegerEditor],
        ['EmploymentTypeId', () => Serenity.IntegerEditor],
        ['BloodGroupId', () => Serenity.IntegerEditor],
        ['CompanyMasterId', () => Serenity.IntegerEditor],
        ['FirstName', () => Serenity.StringEditor],
        ['MiddleName', () => Serenity.StringEditor],
        ['LastName', () => Serenity.StringEditor],
        ['MobileNumber', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['Address', () => Serenity.StringEditor],
        ['DateofBirth', () => Serenity.DateEditor],
        ['DateOfJoining', () => Serenity.DateEditor],
        ['ResignDate', () => Serenity.DateEditor],
        ['EmailAddress', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['ManagerId', () => Serenity.IntegerEditor],
        ['AadharCardNo', () => Serenity.StringEditor],
        ['IsExpiryAllowed', () => Serenity.BooleanEditor],
        ['CardExpiry', () => Serenity.DateEditor],
        ['PhotoPath', () => Serenity.StringEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor],
        ['Extra1', () => Serenity.StringEditor],
        ['Extra2', () => Serenity.StringEditor],
        ['Extra3', () => Serenity.StringEditor],
        ['Extra4', () => Serenity.StringEditor],
        ['Extra5', () => Serenity.StringEditor],
        ['IsEmployeeLogin', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(EmployeeMasterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}