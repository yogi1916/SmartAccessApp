
namespace ESignature.Master {
    export class SalutationForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Salutation';
    }

    export interface SalutationForm {
        SalutationName: Serenity.StringEditor;
    }

    [,
        ['SalutationName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SalutationForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}