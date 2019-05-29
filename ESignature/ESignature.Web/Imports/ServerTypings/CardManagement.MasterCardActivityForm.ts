
namespace ESignature.CardManagement {
    export class MasterCardActivityForm extends Serenity.PrefixedContext {
        static formKey = 'CardManagement.MasterCardActivity';
    }

    export interface MasterCardActivityForm {
        Activity: Serenity.StringEditor;
    }

    [,
        ['Activity', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MasterCardActivityForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}