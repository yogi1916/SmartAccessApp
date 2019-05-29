
namespace ESignature.CardManagement {
    export class MasterCardTechnologyForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.MasterCardTechnology';
    }

    export interface MasterCardTechnologyForm {
        CardTechName: Serenity.StringEditor;
    }

    [,
        ['CardTechName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MasterCardTechnologyForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}