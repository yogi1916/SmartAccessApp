
namespace ESignature.Admin {
    export class CompanyGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Admin.CompanyGroup';
    }

    export interface CompanyGroupForm {
        GroupName: Serenity.StringEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['GroupName', () => Serenity.StringEditor],
        ['CreatedDeteTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CompanyGroupForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}