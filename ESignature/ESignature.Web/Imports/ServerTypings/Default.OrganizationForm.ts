
namespace ESignature.Default {
    export class OrganizationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Organization';
    }

    export interface OrganizationForm {
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

    [,
        ['OrganizationName', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['State', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['Pin', () => Serenity.StringEditor],
        ['Address1', () => Serenity.StringEditor],
        ['Address2', () => Serenity.StringEditor],
        ['PhoneNumber', () => Serenity.StringEditor],
        ['Fax', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['IsDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(OrganizationForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}