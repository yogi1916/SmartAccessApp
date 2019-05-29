
namespace ESignature.Master {
    export class EmploymentTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Master.EmploymentTypes';
    }

    export interface EmploymentTypesForm {
        EmploymentTypeName: Serenity.StringEditor;
    }

    [,
        ['EmploymentTypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmploymentTypesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}