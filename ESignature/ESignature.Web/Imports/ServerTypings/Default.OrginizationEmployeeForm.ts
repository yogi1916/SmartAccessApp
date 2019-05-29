
namespace ESignature.Default {
    export class OrginizationEmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrginizationEmployee';
    }

    export interface OrginizationEmployeeForm {
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

    [,
        ['OrganizationId', () => Serenity.IntegerEditor],
        ['Salutation', () => Serenity.StringEditor],
        ['FirstName', () => Serenity.StringEditor],
        ['LastName', () => Serenity.StringEditor],
        ['Gender', () => Serenity.StringEditor],
        ['DateOfBirth', () => Serenity.StringEditor],
        ['StartDate', () => Serenity.DateEditor],
        ['EndDate', () => Serenity.DateEditor],
        ['CardNo', () => Serenity.StringEditor],
        ['AccessPointString', () => Serenity.StringEditor],
        ['MobileNumber', () => Serenity.StringEditor],
        ['ImeiNumber', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['Fax', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['Pin', () => Serenity.StringEditor],
        ['Address1', () => Serenity.StringEditor],
        ['Address2', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['IsDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(OrginizationEmployeeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}