
namespace ESignature.CardManagement {
    export class MasterCardStatusForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.MasterCardStatus';
    }

    export interface MasterCardStatusForm {
        CardStatus: Serenity.StringEditor;
    }

    [,
        ['CardStatus', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MasterCardStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}