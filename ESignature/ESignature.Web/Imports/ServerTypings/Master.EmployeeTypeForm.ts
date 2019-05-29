
namespace ESignature.Master {
    export class EmployeeTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Master.EmployeeType';
    }

    export interface EmployeeTypeForm {
        EmployeeTypeName: Serenity.StringEditor;
    }

    [,
        ['EmployeeTypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmployeeTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}