
namespace ESignature.Default {
    export class GenderForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Gender';
    }

    export interface GenderForm {
        Gender: Serenity.StringEditor;
    }

    [,
        ['Gender', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(GenderForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}