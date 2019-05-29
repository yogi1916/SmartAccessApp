
namespace ESignature.CardManagement {
    export class MasterCardUseTypeForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.MasterCardUseType';
    }

    export interface MasterCardUseTypeForm {
        CardUseTypeName: Serenity.StringEditor;
    }

    [,
        ['CardUseTypeName', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MasterCardUseTypeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}