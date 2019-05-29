
namespace ESignature.CardManagement {
    export class MasterCardTypeForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.MasterCardType';
    }

    export interface MasterCardTypeForm {
        CardTypeName: Serenity.StringEditor;
    }

    [,
        ['CardTypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MasterCardTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}