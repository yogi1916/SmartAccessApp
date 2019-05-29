
namespace ESignature.Master {
    export class GenderForm extends Serenity.PrefixedContext {
        static formKey = 'Master.Gender';
    }

    export interface GenderForm {
        GenderName: Serenity.StringEditor;
    }

    [,
        ['GenderName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(GenderForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}