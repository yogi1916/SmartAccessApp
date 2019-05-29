
namespace ESignature.Default {
    export class DesignationsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Designations';
    }

    export interface DesignationsForm {
        DesignationName: Serenity.StringEditor;
        DesignationCode: Serenity.StringEditor;
        CompanyMasterId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['DesignationName', () => Serenity.StringEditor],
        ['DesignationCode', () => Serenity.StringEditor],
        ['CompanyMasterId', () => Serenity.IntegerEditor],
        ['Details', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(DesignationsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}