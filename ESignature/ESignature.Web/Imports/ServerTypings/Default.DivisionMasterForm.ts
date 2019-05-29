
namespace ESignature.Default {
    export class DivisionMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.DivisionMaster';
    }

    export interface DivisionMasterForm {
        DivisionName: Serenity.StringEditor;
        DivisionCode: Serenity.StringEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['DivisionName', () => Serenity.StringEditor],
        ['DivisionCode', () => Serenity.StringEditor],
        ['CompanyMasterId', () => Serenity.IntegerEditor],
        ['Details', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(DivisionMasterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}